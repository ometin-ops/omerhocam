import React from 'react';
import Link from 'next/link'; // React Router kullanıyorsanız: import { Link } from 'react-router-dom';

/**
 * 4 Seçenekli Giriş Portalı Bileşeni (React / Next.js)
 * 
 * Özellikler:
 * - Sol üstte marka logosu (b25.png)
 * - Merkezde profil görseli (w.png) ve daktilo efektli el yazısı başlığı ('Ömer Hoca - Matematik Öğretmeni')
 * - Soldan sağa çizilen SVG alt çizgi animasyonu
 * - 4 Mor Kart (Özel Ders, Kütüphane, Oyunlar, Mağaza) pop-in animasyonu ile
 * - Dikeyde scroll edilebilir (min-h-screen) ve sabit dalgalı (scalloped) beyaz kenarlıklar
 */
export default function PortalPage() {
  const portalItems = [
    {
      title: 'Özel Ders',
      href: '/ozel-ders',
      icon: '/roket.png',
      alt: 'Özel Ders İkonu',
      rotateHover: '-rotate-6',
      delayMs: 50,
    },
    {
      title: 'Kütüphane',
      href: '/kutuphane',
      icon: '/defter.png',
      alt: 'Kütüphane İkonu',
      rotateHover: 'rotate-6',
      delayMs: 150,
    },
    {
      title: 'Oyunlar',
      href: '/oyun-dukkani',
      icon: '/konsol.png',
      alt: 'Oyunlar İkonu',
      rotateHover: '-rotate-6',
      delayMs: 250,
    },
    {
      title: 'Mağaza',
      href: '/magaza',
      icon: '/canta.png',
      alt: 'Mağaza İkonu',
      rotateHover: 'rotate-6',
      delayMs: 350,
    },
  ];

  return (
    <div className="relative bg-[#d4ff00] min-h-screen w-full flex flex-col items-center justify-start p-0 m-0 overflow-x-hidden select-none selection:bg-[#6b46ff] selection:text-[#d4ff00]">
      {/* Google Fonts: Caveat & Handwriting Typing / Underline Animasyonu */}
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&display=swap" />

      {/* Özel Stil Tanımları: El Yazısı ve Pop-in Animasyonları */}
      <style jsx global>{`
        /* El Yazısı Fontu */
        .font-handwriting {
          font-family: 'Caveat', cursive;
        }

        /* Daktilo / Kalemle Yazılma Efekti */
        @keyframes typing {
          from { width: 0; }
          to { width: 100%; }
        }
        @keyframes blink-caret {
          from, to { border-color: transparent; }
          50% { border-color: #6b46ff; }
        }
        @keyframes hide-caret {
          to { border-right-color: transparent; }
        }
        .handwriting-anim {
          display: inline-block;
          overflow: hidden;
          white-space: nowrap;
          width: 0;
          border-right: 3px solid #6b46ff;
          animation: typing 2.2s cubic-bezier(0.4, 0, 0.2, 1) 0.2s forwards,
                     blink-caret 0.7s step-end infinite,
                     hide-caret 0.1s 2.9s forwards;
        }

        /* Soldan Sağa Çizilen Dalgalı Çizgi */
        @keyframes draw-line {
          to {
            stroke-dashoffset: 0;
          }
        }
        .handwriting-underline {
          stroke-dasharray: 400;
          stroke-dashoffset: 400;
          animation: draw-line 1.1s cubic-bezier(0.4, 0, 0.2, 1) 2.1s forwards;
        }

        /* Kart Pop-in Efekti */
        @keyframes popInUp {
          0% {
            opacity: 0;
            transform: translateY(48px) scale(0.9);
          }
          65% {
            opacity: 1;
            transform: translateY(-8px) scale(1.03);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .animate-pop-in {
          animation: popInUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
      `}</style>

      {/* 2. Tam Genişlikte Responsive Karşılama Afişi (Masaüstü: w2.png, Mobil: w3.png) */}
      <div className="w-full p-0 m-0 relative z-0 flex items-center justify-center overflow-hidden">
        {/* Mobil Görsel (w3.png - Dikey Tasarım) */}
        <img
          src="/w3.png"
          alt="Ömer Hoca & Raku - Hoş Geldin"
          className="block md:hidden w-full h-auto object-cover"
        />
        {/* Masaüstü Görsel (w2.png - Yatay Banner) */}
        <img
          src="/w2.png"
          alt="Ömer Hoca & Raku - Hoş Geldin"
          className="hidden md:block w-full h-auto object-cover"
        />
      </div>

      {/* 3. Ana İçerik: El Yazısı Başlık & 4 Mor Kart (Dikey Merkezli) */}
      <main className="relative z-20 w-full max-w-6xl mx-auto flex flex-col items-center justify-center px-4 sm:px-6 pt-6 pb-14 md:pb-20 my-auto">
        
        {/* El Yazısı Animasyonlu Başlık ('Ömer Hoca - Matematik Öğretmeni') */}
        <div className="relative inline-block -rotate-1 px-4 mb-8 md:mb-12 text-center">
          <h1 className="handwriting-anim text-3xl sm:text-4xl md:text-5xl font-bold font-handwriting text-slate-900 tracking-wide pb-1">
            Ömer Hoca <span className="text-[#6b46ff]">- Matematik Öğretmeni</span>
          </h1>

          {/* Soldan Sağa Çizilen Zarif Akıcı Alt Çizgi (Smooth Swoosh Underline) */}
          <svg
            className="absolute -bottom-2 sm:-bottom-3 left-0 w-full h-3 sm:h-4 text-slate-900 overflow-visible pointer-events-none"
            viewBox="0 0 350 16"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M 4 8 C 110 13, 240 13, 346 7"
              stroke="currentColor"
              strokeWidth="2.8"
              strokeLinecap="round"
              className="handwriting-underline"
            />
          </svg>
        </div>

        {/* 4 Mor Kart: Mobilde 2'li (2 Satır), Masaüstünde 4'lü (Tek Satır) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full max-w-6xl mx-auto px-4">
          {portalItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              style={{ animationDelay: `${item.delayMs}ms` }}
              className="animate-pop-in group bg-[#6b46ff] w-full aspect-square rounded-[1.75rem] md:rounded-[2.25rem] flex flex-col items-center justify-center p-4 sm:p-5 md:p-6 shadow-xl shadow-purple-950/20 hover:-translate-y-4 hover:scale-105 hover:shadow-2xl hover:shadow-purple-950/40 transition-all duration-300 ease-out cursor-pointer active:scale-95 select-none no-underline"
            >
              {/* PNG İkon */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center">
                <img
                  src={item.icon}
                  alt={item.alt}
                  className={`w-full h-full object-contain filter drop-shadow-md group-hover:scale-115 group-hover:${item.rotateHover} transition-transform duration-300 ease-out`}
                />
              </div>

              {/* Kart Başlık Metni */}
              <h2 className="font-extrabold text-base sm:text-lg md:text-xl lg:text-2xl text-[#d4ff00] mt-2 sm:mt-3 md:mt-4 text-center tracking-tight">
                {item.title}
              </h2>

              {/* Kavisli Alt Çizgi */}
              <svg
                className="w-16 sm:w-20 md:w-24 h-2 sm:h-2.5 text-[#d4ff00] mt-1 transition-transform duration-300 ease-out group-hover:scale-110 group-hover:-translate-y-0.5"
                viewBox="0 0 100 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 8.5C28 11.5 72 10.5 97 3.5"
                  stroke="currentColor"
                  strokeWidth="4.5"
                  strokeLinecap="round"
                />
              </svg>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
