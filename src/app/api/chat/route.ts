import { google } from "@ai-sdk/google";
import { streamText } from "ai";
import { books } from "@/lib/books";

export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const { messages, bookId } = await req.json();

    const book = books.find((b) => b.id === bookId);

    if (!book) {
      return new Response("Book not found", { status: 404 });
    }

    const systemPrompt = `Sen bilgili ve yardımsever bir kütüphane asistanısın. Görevin, kullanıcının "${book.title}" (Yazar: ${book.author}) adlı kitap hakkındaki sorularını yanıtlamaktır.
Aşağıda kitabın özetini ve içeriğine dair geniş bağlamı bulacaksın. Bu bilgileri sanki kitabın tamamını okumuş gibi, kitabın evreninden, karakterlerinden ve olay örgüsünden bahsederek yanıtla.
Eğer kullanıcının sorusu bu kitapla ilgili değilse, nazikçe sadece "${book.title}" hakkında konuşabileceğini belirt.

Kitap Bağlamı:
${book.fullTextContext}
`;

    try {
      // Önce en üst ücretsiz versiyonu (gemini-1.5-pro) deniyoruz.
      const result = await streamText({
        model: google('gemini-1.5-pro'),
        system: systemPrompt,
        messages,
      });
      return result.toDataStreamResponse();
    } catch (e: any) {
      // Eğer limit dolmuşsa (429) veya bölgesel destek yoksa (404), anında bir alt modele (gemini-1.5-flash) geçiş yap.
      console.warn("Pro modeli hata verdi veya limit doldu, Flash modeline geçiliyor...", e);
      
      const fallbackResult = await streamText({
        model: google('gemini-pro'),
        system: systemPrompt,
        messages,
      });
      
      return fallbackResult.toDataStreamResponse();
    }
  } catch (error) {
    console.error("Chat API error:", error);
    return new Response("An error occurred", { status: 500 });
  }
}
