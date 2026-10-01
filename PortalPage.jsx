'use client';

import React, { useState } from 'react';
import Link from 'next/link';

/**
 * Yeni Nesil Portal Ana Sayfası (React / Next.js)
 * 
 * Güncellemeler:
 * 1. Favicon:
 *    - /fav1.png tarayıcı ikonu head içine eklendi
 * 2. El Yazısı Taşkınlık Düzeltmesi:
 *    - Font boyutu text-xl sm:text-2xl md:text-3xl lg:text-4xl seviyesine çekildi
 *    - Sağ taraftaki sütun sınırlarını aşmayacak şekilde max-w ile sınırlandı
 * 3. Alt Bilgi (Footer) / Yasal Bağlantılar:
 *    - Sayfa bitimine ortalanmış, fıstık yeşili zemin üzerinde şık footer eklendi
 *    - Çerez Politikası | İptal ve İade Koşulları | KVKK | Kullanım Koşulları
 */
export default function PortalPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <div className="relative bg-[#d4ff00] min-h-screen w-full flex flex-col justify-between p-0 m-0 overflow-x-hidden select-none selection:bg-[#6b46ff] selection:text-[#d4ff00]">
      {/* Favicon & Google Fonts: Caveat (El Yazısı) */}
      <link rel="icon" type="image/png" href="/fav1.png" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&display=swap" />

      {/* Özel Stil Tanımları: El Yazısı, Daktilo ve Pop-in Animasyonları */}
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

        /* Soldan Sağa Çizilen Zarif Akıcı Çizgi */
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

        /* Kart Pop-in Animasyonu */
        @keyframes popInUp {
          0% {
            opacity: 0;
            transform: translateY(32px) scale(0.92);
          }
          65% {
            opacity: 1;
            transform: translateY(-6px) scale(1.02);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-pop-in {
          animation: popInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
      `}</style>

      {/* ========================================================================= */}
      {/* 1. ÜST MENÜ (HEADER) */}
      {/* ========================================================================= */}
      <header className="w-full bg-[#d4ff00] px-5 sm:px-8 md:px-12 py-4 sm:py-5 flex items-center justify-between z-30 flex-shrink-0">
        {/* Sol Köşe: Üç Çizgili Hamburger Menü İkonu */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className="flex flex-col justify-center items-start gap-1.5 w-10 h-10 p-1 rounded-xl hover:opacity-80 active:scale-95 transition-all focus:outline-none cursor-pointer"
          aria-label="Menüyü Aç"
        >
          <span className="block w-7 sm:w-8 h-1 bg-[#6b46ff] rounded-full"></span>
          <span className="block w-7 sm:w-8 h-1 bg-[#6b46ff] rounded-full"></span>
          <span className="block w-7 sm:w-8 h-1 bg-[#6b46ff] rounded-full"></span>
        </button>

        {/* Tam Orta: Rakun Logosu */}
        <Link href="/" className="flex items-center justify-center -translate-x-1 sm:translate-x-0">
          <img
            src="/b25.png"
            alt="Rakun Logo"
            className="h-8 sm:h-9 md:h-11 w-auto object-contain hover:scale-105 transition-transform"
          />
        </Link>

        {/* Sağ Köşe: Mor Yuvarlak Hatlı 'Giriş Yap' Butonu */}
        <Link
          href="/ogrenci-paneli"
          className="bg-[#6b46ff] hover:bg-[#5835ea] text-white font-extrabold text-xs sm:text-sm md:text-base px-4 sm:px-6 md:px-7 py-2 sm:py-2.5 rounded-full md:rounded-2xl shadow-md hover:shadow-lg transition-all active:scale-95 no-underline flex items-center justify-center"
        >
          Giriş Yap
        </Link>
      </header>

      {/* ========================================================================= */}
      {/* AÇILIR MOBİL / YAN ÇEKMECE MENÜ (DRAWER) */}
      {/* ========================================================================= */}
      <div
        className={`fixed inset-0 z-50 flex transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'pointer-events-auto visible' : 'pointer-events-none invisible'
        }`}
      >
        {/* Karartma Overlay */}
        <div
          onClick={() => setIsMenuOpen(false)}
          className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-500 ease-in-out ${
            isMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Menü İçerik Paneli */}
        <div
          className={`relative w-72 sm:w-80 max-w-full bg-[#d4ff00] h-full shadow-2xl p-6 flex flex-col justify-between z-10 border-r border-black/10 transform transition-transform duration-500 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div>
            {/* Üst Bar: Kapat Butonu & Logo */}
            <div className="flex items-center justify-between pb-6 border-b border-black/10">
              <img src="/b25.png" alt="Rakun Logo" className="h-8 w-auto object-contain" />
              <button
                onClick={() => setIsMenuOpen(false)}
                className="w-9 h-9 rounded-full bg-[#6b46ff] text-white flex items-center justify-center font-bold text-lg hover:bg-[#5835ea] active:scale-95 transition-all cursor-pointer"
                aria-label="Kapat"
              >
                ✕
              </button>
            </div>

            {/* Sayfa Bağlantıları */}
            <nav className="mt-6 flex flex-col gap-3">
              <Link
                href="/ozel-ders"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/70 hover:bg-[#6b46ff] text-slate-900 hover:text-white font-extrabold transition-all no-underline shadow-sm"
              >
                <img src="/roket.png" alt="Özel Ders" className="w-6 h-6 object-contain" />
                <span>Özel Ders</span>
              </Link>
              <Link
                href="/kutuphane"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/70 hover:bg-[#6b46ff] text-slate-900 hover:text-white font-extrabold transition-all no-underline shadow-sm"
              >
                <img src="/defter.png" alt="Kütüphane" className="w-6 h-6 object-contain" />
                <span>Kütüphane</span>
              </Link>
              <Link
                href="/oyun-dukkani"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/70 hover:bg-[#6b46ff] text-slate-900 hover:text-white font-extrabold transition-all no-underline shadow-sm"
              >
                <img src="/konsol.png" alt="Oyunlar" className="w-6 h-6 object-contain" />
                <span>Oyunlar</span>
              </Link>
              <Link
                href="/magaza"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/70 hover:bg-[#6b46ff] text-slate-900 hover:text-white font-extrabold transition-all no-underline shadow-sm"
              >
                <img src="/canta.png" alt="Mağaza" className="w-6 h-6 object-contain" />
                <span>Mağaza</span>
              </Link>
            </nav>
          </div>

          {/* Alt Kısım: Giriş Butonu */}
          <div className="pt-6 border-t border-black/10">
            <Link
              href="/ogrenci-paneli"
              onClick={() => setIsMenuOpen(false)}
              className="w-full block text-center bg-[#6b46ff] hover:bg-[#5835ea] text-white font-extrabold py-3.5 px-4 rounded-2xl shadow-md transition-all active:scale-95 no-underline"
            >
              Giriş Yap
            </Link>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. ANA İÇERİK: SOLDA 4'LÜ KART (2X2), SAĞDA EL YAZISI BAŞLIK & w4.png */}
      {/* ========================================================================= */}
      <main className="flex-1 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-end justify-between px-4 sm:px-8 md:px-12 relative overflow-hidden md:overflow-visible">
        
        {/* SOL BÖLÜM: 4'LÜ KART IZGARASI (2x2 Grid) */}
        <div className="w-full md:w-1/2 flex items-center justify-center md:justify-center py-5 sm:py-6 md:py-0 md:self-center z-20">
          <div className="grid grid-cols-2 gap-3.5 sm:gap-5 md:gap-6 w-full max-w-[340px] sm:max-w-[400px] md:max-w-[430px] lg:max-w-[470px]">
            {portalItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                style={{ animationDelay: `${item.delayMs}ms` }}
                className="animate-pop-in group bg-[#6b46ff] w-full aspect-square rounded-[1.75rem] sm:rounded-[2rem] md:rounded-[2.25rem] lg:rounded-[2.5rem] flex flex-col items-center justify-center p-3 sm:p-5 shadow-xl shadow-purple-950/20 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl hover:shadow-purple-950/40 transition-all duration-300 ease-out cursor-pointer active:scale-95 select-none no-underline"
              >
                {/* PNG İkon */}
                <div className="w-14 h-14 sm:w-18 sm:h-18 md:w-20 md:h-20 lg:w-24 lg:h-24 flex items-center justify-center">
                  <img
                    src={item.icon}
                    alt={item.alt}
                    className={`w-full h-full object-contain filter drop-shadow-md group-hover:scale-115 group-hover:${item.rotateHover} transition-transform duration-300 ease-out`}
                  />
                </div>

                {/* Kart Başlık Metni */}
                <h2 className="font-extrabold text-sm sm:text-base md:text-lg lg:text-xl text-[#d4ff00] mt-1.5 sm:mt-2.5 text-center tracking-tight">
                  {item.title}
                </h2>

                {/* Kavisli Alt Çizgi */}
                <svg
                  className="w-14 sm:w-18 md:w-20 lg:w-24 h-2 sm:h-2.5 text-[#d4ff00] mt-1 transition-transform duration-300 ease-out group-hover:scale-110 group-hover:-translate-y-0.5"
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
        </div>

        {/* SAĞ / ALT BÖLÜM: EL YAZISI BAŞLIK, MOR KUBBE & PROFİL FOTOĞRAFI (w4.png) */}
        <div className="w-full md:w-1/2 flex flex-col justify-end items-center self-end relative z-10 mt-6 md:mt-0 p-0">
          
          {/* El Yazısı Animasyonlu Başlık - Taşkınlığı önlemek için max-w ile sınırlandırılmış ve fontu dengelenmiş */}
          <div className="w-full max-w-[340px] sm:max-w-[400px] md:max-w-[440px] lg:max-w-[480px] flex justify-center mb-2 sm:mb-3 md:mb-4 px-2 z-20">
            <div className="relative inline-block max-w-full -rotate-1 text-center">
              <h1 className="handwriting-anim text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-handwriting text-slate-900 tracking-wide pb-1">
                Ömer Hoca <span className="text-[#6b46ff]">- Matematik Öğretmeni</span>
              </h1>

              {/* Soldan Sağa Çizilen Zarif Akıcı Alt Çizgi (Smooth Swoosh Underline) */}
              <svg
                className="absolute -bottom-1.5 sm:-bottom-2 left-0 w-full h-2.5 sm:h-3.5 text-slate-900 overflow-visible pointer-events-none"
                viewBox="0 0 350 16"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M 4 8 C 110 13, 240 13, 346 7"
                  stroke="currentColor"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                  className="handwriting-underline"
                />
              </svg>
            </div>
          </div>

          {/* Profil Fotoğrafı ve Mor Kubbe Alanı */}
          <div className="relative w-full max-w-[340px] sm:max-w-[420px] md:max-w-[460px] lg:max-w-[540px] xl:max-w-[600px] flex justify-center items-end">
            
            {/* Mor Kubbe (Arka Plan Yarım Daire / Arch) */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[92%] sm:w-[90%] md:w-[95%] h-[60%] sm:h-[62%] md:h-[65%] rounded-t-full bg-[#6b46ff] z-0 pointer-events-none" />

            {/* Profil Görseli (w4.png) - Altı Ekrana Sıfır Yapışık */}
            <img
              src="/w4.png"
              alt="Ömer Hoca"
              className="relative z-10 w-full h-auto max-h-[48vh] sm:max-h-[54vh] md:max-h-[68vh] lg:max-h-[74vh] object-contain object-bottom pointer-events-none select-none drop-shadow-[0_20px_35px_rgba(0,0,0,0.25)] block"
            />
          </div>
        </div>

      </main>

      {/* ========================================================================= */}
      {/* 3. ALT BİLGİ (FOOTER) / YASAL BAĞLANTILAR */}
      {/* ========================================================================= */}
      <footer className="w-full flex flex-wrap justify-center items-center gap-x-3 sm:gap-x-4 gap-y-1.5 text-xs md:text-sm text-slate-700/80 font-medium pt-8 pb-4 px-4 z-20 text-center flex-shrink-0">
        <Link href="/cerez-politikasi" className="hover:text-slate-950 hover:underline transition-colors">
          Çerez Politikası
        </Link>
        <span className="text-slate-400 select-none">|</span>
        <Link href="/iptal-iade-kosullari" className="hover:text-slate-950 hover:underline transition-colors">
          İptal ve İade Koşulları
        </Link>
        <span className="text-slate-400 select-none">|</span>
        <Link href="/kvkk" className="hover:text-slate-950 hover:underline transition-colors">
          KVKK
        </Link>
        <span className="text-slate-400 select-none">|</span>
        <Link href="/kullanim-kosullari" className="hover:text-slate-950 hover:underline transition-colors">
          Kullanım Koşulları
        </Link>
      </footer>
    </div>
  );
}
