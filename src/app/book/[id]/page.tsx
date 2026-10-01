import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { books } from "@/lib/books";
import ChatInterface from "@/components/ChatInterface";

export default async function BookPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const book = books.find((b) => b.id === id);

  if (!book) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-neutral-50 flex flex-col h-screen">
      <header className="bg-white border-b border-neutral-200 px-6 py-4 flex items-center shrink-0">
        <Link href="/" className="flex items-center text-neutral-600 hover:text-neutral-900 transition-colors">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Kütüphaneye Dön
        </Link>
      </header>

      <div className="flex-1 max-w-7xl w-full mx-auto p-6 flex flex-col md:flex-row gap-8 overflow-hidden h-full">
        {/* Sol Taraf: Kitap Detayları */}
        <div className="w-full md:w-1/3 flex flex-col overflow-y-auto pr-4 pb-8">
          <div className="aspect-[2/3] w-full max-w-sm mx-auto relative rounded-xl overflow-hidden shadow-lg mb-6 bg-neutral-200 shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={book.coverUrl} 
              alt={book.title} 
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-3xl font-bold text-neutral-900 mb-2">{book.title}</h1>
          <p className="text-xl text-neutral-600 mb-6">{book.author}</p>
          <div className="prose prose-neutral">
            <h3 className="text-lg font-semibold mb-2">Hakkında</h3>
            <p className="text-neutral-700 leading-relaxed">{book.description}</p>
          </div>
        </div>

        {/* Sağ Taraf: Yapay Zeka Asistanı */}
        <div className="w-full md:w-2/3 h-full flex flex-col bg-white rounded-2xl shadow-sm border border-neutral-200 overflow-hidden mb-8 md:mb-0">
          <div className="bg-neutral-100/50 p-4 border-b border-neutral-200 shrink-0">
            <h2 className="font-semibold text-neutral-800 flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              {book.title} Asistanı
            </h2>
            <p className="text-xs text-neutral-500 mt-1">Bu kitabın içeriğine hakim olan yapay zekaya sorular sorun.</p>
          </div>
          
          <div className="flex-1 overflow-hidden">
            <ChatInterface bookId={book.id} />
          </div>
        </div>
      </div>
    </main>
  );
}
