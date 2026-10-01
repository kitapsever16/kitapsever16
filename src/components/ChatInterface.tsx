"use client";

import { useChat } from 'ai/react';
import { Send, User, Bot, Loader2 } from 'lucide-react';
import { useEffect, useRef } from 'react';

export default function ChatInterface({ bookId }: { bookId: string }) {
  const { messages, input, handleInputChange, handleSubmit, isLoading, error } = useChat({
    api: '/api/chat',
    body: {
      bookId
    }
  });

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="flex flex-col h-full bg-white relative">
      {/* Mesaj Alanı */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        {messages.length === 0 && (
          <div className="h-full flex flex-col items-center justify-center text-neutral-400 p-8 text-center">
            <Bot className="w-12 h-12 mb-4 opacity-50" />
            <p>Merhaba! Ben bu kitabın asistanıyım. Kitaptaki olaylar, karakterler veya ana fikirler hakkında bana her şeyi sorabilirsiniz.</p>
          </div>
        )}
        
        {messages.map(m => (
          <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`flex max-w-[80%] gap-3 ${m.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${m.role === 'user' ? 'bg-blue-100 text-blue-600' : 'bg-green-100 text-green-600'}`}>
                {m.role === 'user' ? <User size={16} /> : <Bot size={16} />}
              </div>
              <div className={`px-4 py-3 rounded-2xl text-sm leading-relaxed ${m.role === 'user' ? 'bg-blue-600 text-white rounded-tr-none' : 'bg-neutral-100 text-neutral-800 rounded-tl-none'}`}>
                {m.content}
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="flex max-w-[80%] gap-3 flex-row">
              <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-green-100 text-green-600">
                <Bot size={16} />
              </div>
              <div className="px-4 py-3 rounded-2xl text-sm bg-neutral-100 text-neutral-800 rounded-tl-none flex items-center">
                <Loader2 className="w-4 h-4 animate-spin text-neutral-500" />
              </div>
            </div>
          </div>
        )}
        
        {/* Hata Mesajı Gösterimi */}
        {error && (
          <div className="bg-red-50 text-red-600 p-4 rounded-xl text-sm border border-red-200">
            <strong>Bağlantı Hatası:</strong> Yapay zekaya bağlanılamadı. Lütfen Google API anahtarınızın doğru ve yetkili olduğundan emin olun.
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Alanı */}
      <div className="p-4 bg-white border-t border-neutral-100 sticky bottom-0">
        <form 
          onSubmit={(e) => {
            e.preventDefault();
            if (!isLoading && input.trim()) {
              handleSubmit(e);
            }
          }} 
          className="flex gap-2"
        >
          <input
            className="flex-1 bg-neutral-100 border-transparent rounded-full px-5 py-3 text-sm focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
            value={input}
            placeholder="Kitap hakkında bir soru sorun..."
            onChange={handleInputChange}
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-3 w-12 h-12 flex items-center justify-center transition-colors disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
          >
            <Send size={18} />
          </button>
        </form>
      </div>
    </div>
  );
}
