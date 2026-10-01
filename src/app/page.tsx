import Link from "next/link";
import { books } from "@/lib/books";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-50 p-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12 text-center pt-8">
          <h1 className="text-4xl font-bold text-neutral-900 mb-4">Akıllı Kütüphanem</h1>
          <p className="text-lg text-neutral-600">
            Kitapları inceleyin ve yapay zeka asistanıyla kitaplar hakkında sohbet edin.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {books.map((book) => (
            <Link href={`/book/${book.id}`} key={book.id} className="group flex flex-col bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-neutral-100">
              <div className="relative aspect-[2/3] w-full overflow-hidden bg-neutral-200">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={book.coverUrl} 
                  alt={book.title} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
                />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <h2 className="text-xl font-semibold text-neutral-800 mb-1">{book.title}</h2>
                <p className="text-sm text-neutral-500 mb-3">{book.author}</p>
                <p className="text-sm text-neutral-600 line-clamp-3">{book.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
