'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

// 7 Özellik Bloğu Verisi (z1 - z7)
const features = [
  {
    id: 1,
    badge: "01 • ÖĞRENCİYE ÖZEL PDF'LER",
    title: 'Tamamen Sana Özel Hazırlanmış PDF Kaynaklar',
    description:
      'Her öğrencinin seviyesine ve hedefine uygun olarak özenle hazırlanan, MEB müfredatına ve yeni nesil soru tarzlarına tam uyumlu dijital dokümanlarla kesintisiz çalışma imkanı sağlıyoruz.',
    image: '/z1.png',
    alt: "Öğrenciye Özel PDF'ler",
  },
  {
    id: 2,
    badge: '02 • 7/24 SORU SORABİLME',
    title: 'Takıldığın Yerde Asla Yalnız Kalma',
    description:
      'Ders dışında çalışırken çözemediğin soruları dilediğin an bize iletebilirsin. 7/24 aktif soru çözüm desteğimiz sayesinde eksiklerini anında kapatarak ilerlemeni hızlandırıyoruz.',
    image: '/z2.png',
    alt: '7/24 Soru Sorabilme',
  },
  {
    id: 3,
    badge: '03 • AKILLI DENEME ANALİZİ',
    title: 'Deneme Sonuçlarını Akıllı Analizle Değerlendir',
    description:
      'Çözdüğün denemelerdeki doğru ve yanlışlarını detaylı olarak analiz ediyoruz. Hangi konularda eksiğin olduğunu nokta atışı tespit ederek çalışma stratejini buna göre şekillendiriyoruz.',
    image: '/z3.png',
    alt: 'Akıllı Deneme Analizi',
  },
  {
    id: 4,
    badge: '04 • KONU VE GENEL DENEMELERİ',
    title: 'Düzenli Denemelerle Sınav Provası',
    description:
      'Sadece konu çalışmak yetmez! Öğrendiklerini pekiştirmek ve sınav stresini yenmek için periyodik olarak uyguladığımız konu tarama ve genel deneme sınavlarıyla gerçek sınav deneyimini yaşa.',
    image: '/z4.png',
    alt: 'Konu ve Genel Denemeleri',
  },
  {
    id: 5,
    badge: '05 • KAYNAK VE KİTAP DESTEĞİ',
    title: 'İhtiyacın Olan Tüm Kaynaklar Elinin Altında',
    description:
      'Seviyene en uygun kaynakları özenle seçiyor ve süreç boyunca gerekli tüm kitap desteklerini sağlıyoruz. Kaynak arayışıyla vakit kaybetmeden doğrudan başarıya odaklan.',
    image: '/z5.png',
    alt: 'Kaynak ve Kitap Desteği',
  },
  {
    id: 6,
    badge: '06 • ONLİNE KÜTÜPHANEDE DERS ÇALIŞMA',
    title: 'Odaklanmanı Sağlayacak Online Çalışma Ortamı',
    description:
      'Evde çalışırken motivasyonun mu düşüyor? Diğer öğrencilerle birlikte verimli saatler geçirebileceğin, odaklanmayı artıran online kütüphane ortamımızda ders çalışma disiplini kazan.',
    image: '/z6.png',
    alt: 'Online Kütüphanede Ders Çalışma',
  },
  {
    id: 7,
    badge: '07 • ÖĞRENCİ TAKİBİ VE PLANLAMA',
    title: 'Kişiselleştirilmiş Takip ve Haftalık Planlama',
    description:
      'Başarı tesadüf değildir. Hedeflerine ulaşman için haftalık çalışma programlarını birlikte hazırlıyor, düzenli veli bilgilendirmeleri ve sıkı bir takip sistemiyle motivasyonunu hep yüksek tutuyoruz.',
    image: '/z7.png',
    alt: 'Öğrenci Takibi ve Planlama',
  },
];

// Öğrenci ve Veli Yorumları Verisi
const testimonials = [
  {
    name: 'Merve T.',
    tag: '8. Sınıf Velisi',
    text: 'Ömer hocamla tanışmadan önce kızımın matematik netleri yerlerdeydi açıkçası. LGS stresinden sürekli ağlıyodu. Hocamın sabrı ve kızıma özel hazırladığı pdf ler sayesinde şuan çok iyi durumdayız. İyiki yollarımız kesişmiş 🙏',
  },
  {
    name: 'Burak',
    tag: '12. Sınıf (YKS)',
    text: 'ya abartmıyorum mat netlerim resmen ikiye katlandı 🚀 Eskiden denemelerde matematiği görünce direkt atlıyodum şimdi ilk mat çözüyorum djdjdj. 7/24 soru atıyorum gece gündüz demeden cevaplıyor hocam',
  },
  {
    name: 'Elif Su',
    tag: '7. Sınıf Öğrencisi',
    text: 'ömer hocanın dersleri çok eğlenceli geçiyo hiç sıkılmıyorum normalde matematiği hiç sevmezdim ama bu sene okul yazılılarından hep 90 üstü aldıım 🥳',
  },
  {
    name: 'Hakan Bey',
    tag: '11. Sınıf Velisi',
    text: 'Oğlumun ergenlik dönemi malum masaya oturtamıyorduk, sürekli oyun başındaydı. Ömer hocanın koçluk sistemi ve haftalık takibi sayesinde düzene girdi herşey. Kütüphane sisteminde diğer çocukları görünce gaza gelip kendi isteğiyle çalışmaya başladı. Emeğinize sağlık hocam.',
  },
  {
    name: 'Zeynep',
    tag: 'Mezun Öğrenci',
    text: 'Çözemediğim bir soru olduğunda soruyu hocama atıyorum ve anında taktikli çözümü geliyo.. inanılmaz bi sistem gerçekten. eskiden yapamadığım soruda sinirlenip kitabı kapatırdım şimdi çözümünü öğreniyorum ve devam ediyorum 💪 hedef tıp inşallah',
  },
];

export default function OzelDersPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = features.length;
  const touchStartXRef = useRef(0);
  const touchEndXRef = useRef(0);

  // İletişim Drawer State'leri
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    adSoyad: '',
    rol: 'Öğrenci',
    telefon: '',
    aciklama: '',
  });

  const openContactModal = () => setIsDrawerOpen(true);

  const closeDrawer = () => {
    setIsDrawerOpen(false);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        adSoyad: '',
        rol: 'Öğrenci',
        telefon: '',
        aciklama: '',
      });
    }, 300);
  };

  const handleDrawerSubmit = async (e) => {
    if (e) e.preventDefault();
    if (!formData.adSoyad.trim() || !formData.telefon.trim() || !formData.aciklama.trim()) {
      alert('Lütfen tüm alanları doldurunuz.');
      return;
    }

    setIsSubmitting(true);
    try {
      if (typeof window !== 'undefined' && window.emailjs) {
        await window.emailjs.send("service_tk0hzdk", "template_ljoux8s", {
          from_name: formData.adSoyad,
          reply_to: formData.telefon,
          message: formData.aciklama,
          adSoyad: formData.adSoyad,
          rol: formData.rol,
          telefon: formData.telefon,
          aciklama: formData.aciklama
        });
      }
      setIsSubmitted(true);
    } catch (err) {
      console.error(err);
      alert('Gönderim sırasında bir hata oluştu. Lütfen daha sonra tekrar deneyiniz.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : totalSlides - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev < totalSlides - 1 ? prev + 1 : 0));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Klavye yön tuşları dinleyicisi
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Mobil Touch Swipe (Dokunmatik Kaydırma)
  const handleTouchStart = (e) => {
    touchStartXRef.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e) => {
    touchEndXRef.current = e.changedTouches[0].screenX;
    const diffX = touchStartXRef.current - touchEndXRef.current;
    if (Math.abs(diffX) > 45) {
      if (diffX > 0) nextSlide();
      else prevSlide();
    }
  };

  return (
    <div className="bg-[#d4ff00] text-slate-900 min-h-screen flex flex-col antialiased selection:bg-[#6b46ff] selection:text-[#d4ff00] scroll-smooth">
      {/* Google Fonts: Caveat & Handwriting Typing Animasyonu */}
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&display=swap" />
      <style>{`
        .font-handwriting {
          font-family: 'Caveat', cursive;
        }
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
      `}</style>

      {/* 1. SLIDER BÖLÜMÜ (İlk Ekran) */}
      <section className="min-h-[calc(100vh-60px)] md:min-h-screen flex flex-col justify-between relative overflow-hidden bg-[#d4ff00]">
        
        {/* Üst Header */}
        <header className="flex-shrink-0 bg-[#d4ff00]/95 backdrop-blur-md border-b border-black/10 py-3 px-4 md:px-8 z-40">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-slate-950 text-white hover:bg-slate-800 font-bold px-3.5 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm shadow-md active:scale-95 transition-all group"
              title="Ana Sayfaya Dön"
            >
              <svg
                className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span>Ana Sayfa</span>
            </Link>

            <Link href="/" className="flex items-center gap-2 group">
              <img
                src="/b25.png"
                alt="Rakun Logo"
                className="h-8 md:h-9 w-auto object-contain transform group-hover:scale-105 transition-transform"
              />
              <span className="font-black text-slate-950 text-sm md:text-base tracking-tight hidden sm:inline-block">
                Ömer Hoca <span className="text-purple-700">•</span> Özel Ders
              </span>
            </Link>

            {/* Sağ: Bilgi Al (İletişim Çekmecesi) */}
            <button
              type="button"
              onClick={() => setIsDrawerOpen(true)}
              className="inline-flex items-center gap-2 bg-[#6b46ff] hover:bg-purple-700 text-white font-black px-3.5 py-1.5 md:px-5 md:py-2 rounded-full text-xs md:text-sm shadow-md hover:shadow-lg active:scale-95 transition-all cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
              <span>Bilgi Al</span>
            </button>
          </div>
        </header>

        {/* El Yazısı Başlığı (Handwriting Headline) */}
        <div className="w-full flex justify-center pt-8 pb-3 z-10 select-none px-4">
          <div className="relative inline-block -rotate-2">
            <h1 className="handwriting-anim text-2xl sm:text-3xl md:text-5xl font-bold font-handwriting text-slate-900 tracking-wide pb-1">
              Ömer Hoca <span className="text-[#6b46ff]">- Matematik Öğretmeni</span>
            </h1>
            {/* Animasyonlu El Çizimi Alt Çizgi (Hand-drawn squiggly underline) */}
            <svg
              className="absolute -bottom-2 sm:-bottom-3 left-0 w-full h-3 sm:h-4 text-slate-900 overflow-visible pointer-events-none"
              viewBox="0 0 350 18"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M 3 13 C 65 17, 125 7, 185 13 C 245 18, 295 8, 347 11"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="handwriting-underline"
              />
            </svg>
          </div>
        </div>

        {/* Ana Karusel / Slider Alanı */}
        <div
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="relative flex-1 w-full overflow-hidden flex items-center justify-center select-none py-4"
        >
          {/* Sol Ok */}
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-slate-950/80 hover:bg-slate-950 text-[#d4ff00] backdrop-blur-md flex items-center justify-center shadow-xl active:scale-90 transition-all border border-white/10"
            title="Önceki Özellik"
            aria-label="Önceki"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Sağ Ok */}
          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-slate-950/80 hover:bg-slate-950 text-[#d4ff00] backdrop-blur-md flex items-center justify-center shadow-xl active:scale-90 transition-all border border-white/10"
            title="Sonraki Özellik"
            aria-label="Sonraki"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Slayt Şeridi */}
          <div
            className="flex w-full h-full transition-transform duration-500 ease-out will-change-transform items-center"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {features.map((feature, idx) => (
              <div
                key={feature.id}
                className="min-w-full w-full flex items-center justify-center px-4 md:px-16 py-4 flex-shrink-0"
              >
                <div className="max-w-5xl w-full mx-auto flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-14 my-auto">
                  {/* Sol: Telefon Mockup */}
                  <div className="w-full md:w-1/2 flex justify-center items-center">
                    <img
                      src={feature.image}
                      alt={feature.alt}
                      className="max-h-[35vh] sm:max-h-[42vh] md:max-h-[58vh] w-auto object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.32)] hover:scale-105 transition-transform duration-500 select-none"
                    />
                  </div>

                  {/* Sağ: Metin & Buton */}
                  <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left px-2">
                    <span className="inline-block w-fit px-3 py-1 bg-slate-950 text-[#d4ff00] text-xs font-black rounded-lg uppercase tracking-wider mb-2 md:mb-3 shadow-sm mx-auto md:mx-0">
                      {feature.badge}
                    </span>
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-2 md:mb-4 leading-tight">
                      {feature.title}
                    </h2>
                    <p className="text-xs sm:text-sm md:text-lg text-slate-800 leading-relaxed font-medium max-w-lg mx-auto md:mx-0">
                      {feature.description}
                    </p>
                    {idx === totalSlides - 1 && (
                      <div className="mt-4">
                        <a
                          href="#paketler"
                          className="inline-flex items-center gap-2 bg-[#6b46ff] hover:bg-purple-700 text-white font-black px-6 py-2.5 rounded-full text-sm shadow-md hover:scale-105 active:scale-95 transition-all"
                        >
                          <span>Paketleri ve Fiyatları Gör</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                          </svg>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Alt Sayaç, Noktalar ve Smooth Scroll Butonu */}
        <div className="flex-shrink-0 bg-[#d4ff00]/95 backdrop-blur-md border-t border-black/10 py-3.5 px-6 z-40">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            {/* Sol: Sayaç */}
            <div className="text-xs font-black text-slate-900 tracking-wider">
              <span>0{currentIndex + 1}</span> <span className="text-slate-500">/ 0{totalSlides}</span>
            </div>

            {/* Orta: Noktalar */}
            <div className="flex items-center gap-2">
              {features.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  aria-label={`Slayt ${idx + 1}`}
                  className={`transition-all duration-300 ${
                    idx === currentIndex
                      ? 'w-8 h-2.5 bg-slate-950 rounded-full'
                      : 'w-2.5 h-2.5 bg-slate-950/30 hover:bg-slate-950/60 rounded-full cursor-pointer'
                  }`}
                />
              ))}
            </div>

            {/* Sağ: Smooth Scroll ile #paketler Bölümüne İniş */}
            <a
              href="#paketler"
              className="inline-flex items-center gap-1.5 text-xs font-extrabold text-slate-900 hover:text-purple-700 transition-all group cursor-pointer bg-black/5 hover:bg-black/10 px-3.5 py-1.5 rounded-full border border-black/5"
            >
              <span>Tüm Paketleri İncele</span>
              <svg
                className="w-3.5 h-3.5 transform group-hover:translate-y-0.5 transition-transform"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* 2. FİYATLANDIRMA / PAKETLER BÖLÜMÜ */}
      <section id="paketler" className="bg-[#d4ff00] text-slate-900 py-16 md:py-24 border-t border-black/10 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-0 sm:px-6">
          {/* Başlık & Açıklama */}
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 px-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-950 text-[#d4ff00] text-xs md:text-sm font-black tracking-wider uppercase mb-4 shadow-md">
              🎯 Sana Özel Başarı Programları
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
              Hangi sınava hazırlanıyorsun?
            </h2>
            <p className="text-base sm:text-lg text-slate-800 font-medium leading-relaxed max-w-2xl mx-auto">
              Hedefine ve seviyene en uygun birebir özel ders paketini seç, eksiklerini tamamlayarak sınav maratonunda fark yarat.
            </p>
          </div>

          {/* 3'lü Paket Kartları Grid (Mobilde Yatay Kaydırma, Masaüstünde 3'lü Grid) */}
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-4 pb-8 md:grid md:grid-cols-3 md:overflow-visible md:px-0 items-stretch scroll-smooth">
            {/* 1. LGS Özel Ders */}
            <div className="w-[85vw] max-w-md shrink-0 snap-center overflow-hidden md:w-auto bg-white border-t-4 border-slate-900 rounded-3xl shadow-2xl hover:shadow-purple-950/20 hover:-translate-y-2 transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between relative border border-slate-100">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1 bg-[#6b46ff] text-white px-3.5 py-1 rounded-full text-xs font-black shadow-sm">
                    🔥 En Çok Seçilen
                  </span>
                  <span className="text-xs font-bold text-slate-500">8. Sınıf & LGS</span>
                </div>

                <h3 className="text-2xl font-black text-slate-950 mb-2">LGS Özel Ders</h3>
                <p className="text-xs text-slate-500 font-medium mb-4">
                  Hedeflediğin fen ve anadolu liselerine giden yolda sağlam temel.
                </p>

                <div className="mb-5 w-full rounded-2xl overflow-hidden relative border border-slate-100 shadow-inner group">
                  <img
                    src="/lgs1.png"
                    alt="LGS Özel Ders Kapağı"
                    className="w-full h-auto object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/10 flex items-center justify-center pointer-events-none">
                    <span className="px-3 py-1 bg-slate-950/80 text-white text-xs font-bold rounded-full backdrop-blur-sm">
                      LGS Hazırlık
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 mb-6">
                  <div className="bg-slate-50 text-slate-700 border border-slate-200 text-xs font-bold py-2.5 px-2 rounded-xl text-center">
                    📍 Bolu Yüz Yüze
                  </div>
                  <div className="bg-slate-50 text-slate-700 border border-slate-200 text-xs font-bold py-2.5 px-2 rounded-xl text-center">
                    💻 Online Ders
                  </div>
                </div>

                <p className="text-[11px] font-black text-slate-400 tracking-wider uppercase mb-3">PAKET İÇERİĞİ</p>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 font-medium mb-8">
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#6b46ff] font-extrabold mt-0.5">✓</span>
                    <span>Rakun App'e sınırsız erişim</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#6b46ff] font-extrabold mt-0.5">✓</span>
                    <span>Öğrenciye özel PDF'ler</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#6b46ff] font-extrabold mt-0.5">✓</span>
                    <span>Kitap ve doküman desteği</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#6b46ff] font-extrabold mt-0.5">✓</span>
                    <span>Düzenli deneme ve takibi</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#6b46ff] font-extrabold mt-0.5">✓</span>
                    <span>Online kütüphane ile beraber ders çalışma</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#6b46ff] font-extrabold mt-0.5">✓</span>
                    <span>Öğrenciye Özel Eksik Konu Analizi</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#6b46ff] font-extrabold mt-0.5">✓</span>
                    <span>7/24 soru sorabilme</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#6b46ff] font-extrabold mt-0.5">✓</span>
                    <span>Ücretsiz tanışma dersi</span>
                  </li>
                </ul>
              </div>

              <button
                type="button"
                onClick={() => setIsDrawerOpen(true)}
                className="w-full block text-center bg-[#6b46ff] hover:bg-[#5835ea] text-white font-bold py-3.5 px-4 rounded-2xl shadow-md hover:shadow-lg transition-all active:scale-[0.98] text-sm cursor-pointer"
              >
                Ücretsiz Tanışma Dersine Başla
              </button>
            </div>

            {/* 2. YKS Özel Ders */}
            <div className="w-[85vw] max-w-md shrink-0 snap-center overflow-hidden md:w-auto bg-white border-t-4 border-slate-900 rounded-3xl shadow-2xl hover:shadow-purple-950/20 hover:-translate-y-2 transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between relative border border-slate-100">
              <div>
                <div className="flex items-center justify-end mb-4">
                  <span className="text-xs font-bold text-slate-500">TYT - AYT - Matematik</span>
                </div>

                <h3 className="text-2xl font-black text-slate-950 mb-2">YKS Özel Ders</h3>
                <p className="text-xs text-slate-500 font-medium mb-4">
                  Hedeflediğin üniversite ve bölüme ulaştıracak nokta atışı hazırlık.
                </p>

                <div className="mb-5 w-full rounded-2xl overflow-hidden relative border border-slate-100 shadow-inner group">
                  <img
                    src="/yks1.png"
                    alt="YKS Özel Ders Kapağı"
                    className="w-full h-auto object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/10 flex items-center justify-center pointer-events-none">
                    <span className="px-3 py-1 bg-slate-950/80 text-white text-xs font-bold rounded-full backdrop-blur-sm">
                      YKS Hazırlık
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 mb-6">
                  <div className="bg-slate-50 text-slate-700 border border-slate-200 text-xs font-bold py-2.5 px-2 rounded-xl text-center">
                    📍 Bolu Yüz Yüze
                  </div>
                  <div className="bg-slate-50 text-slate-700 border border-slate-200 text-xs font-bold py-2.5 px-2 rounded-xl text-center">
                    💻 Online Ders
                  </div>
                </div>

                <p className="text-[11px] font-black text-slate-400 tracking-wider uppercase mb-3">PAKET İÇERİĞİ</p>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 font-medium mb-8">
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#6b46ff] font-extrabold mt-0.5">✓</span>
                    <span>Rakun App'e sınırsız erişim</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#6b46ff] font-extrabold mt-0.5">✓</span>
                    <span>Öğrenciye özel PDF'ler</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#6b46ff] font-extrabold mt-0.5">✓</span>
                    <span>Kitap ve doküman desteği</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#6b46ff] font-extrabold mt-0.5">✓</span>
                    <span>Düzenli deneme ve takibi</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#6b46ff] font-extrabold mt-0.5">✓</span>
                    <span>Online kütüphane ile beraber ders çalışma</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#6b46ff] font-extrabold mt-0.5">✓</span>
                    <span>Öğrenciye Özel Eksik Konu Analizi</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#6b46ff] font-extrabold mt-0.5">✓</span>
                    <span>7/24 soru sorabilme</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#6b46ff] font-extrabold mt-0.5">✓</span>
                    <span>Ücretsiz tanışma dersi</span>
                  </li>
                </ul>
              </div>

              <button
                type="button"
                onClick={() => setIsDrawerOpen(true)}
                className="w-full block text-center bg-[#6b46ff] hover:bg-[#5835ea] text-white font-bold py-3.5 px-4 rounded-2xl shadow-md hover:shadow-lg transition-all active:scale-[0.98] text-sm cursor-pointer"
              >
                Ücretsiz Tanışma Dersine Başla
              </button>
            </div>

            {/* 3. Ara Sınıf Özel Ders */}
            <div className="w-[85vw] max-w-md shrink-0 snap-center overflow-hidden md:w-auto bg-white border-t-4 border-slate-900 rounded-3xl shadow-2xl hover:shadow-purple-950/20 hover:-translate-y-2 transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between relative border border-slate-100">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1 bg-[#6b46ff]/10 text-[#6b46ff] px-3 py-1 rounded-full text-xs font-bold border border-[#6b46ff]/20">
                    ⭐ Temelden Zirveye
                  </span>
                  <span className="text-xs font-bold text-slate-500">5, 6, 7, 9, 10, 11. Sınıf</span>
                </div>

                <h3 className="text-2xl font-black text-slate-950 mb-2">Ara Sınıf Özel Ders</h3>
                <p className="text-xs text-slate-500 font-medium mb-4">
                  Okul derslerinde başarı ve sınavlara erkenden güçlü hazırlık.
                </p>

                <div className="mb-5 w-full rounded-2xl overflow-hidden relative border border-slate-100 shadow-inner group">
                  <img
                    src="/arasınıf1.png"
                    alt="Ara Sınıf Özel Ders Kapağı"
                    className="w-full h-auto object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/10 flex items-center justify-center pointer-events-none">
                    <span className="px-3 py-1 bg-slate-950/80 text-white text-xs font-bold rounded-full backdrop-blur-sm">
                      Okul & Temel
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 mb-6">
                  <div className="bg-slate-50 text-slate-700 border border-slate-200 text-xs font-bold py-2.5 px-2 rounded-xl text-center">
                    📍 Bolu Yüz Yüze
                  </div>
                  <div className="bg-slate-50 text-slate-700 border border-slate-200 text-xs font-bold py-2.5 px-2 rounded-xl text-center">
                    💻 Online Ders
                  </div>
                </div>

                <p className="text-[11px] font-black text-slate-400 tracking-wider uppercase mb-3">PAKET İÇERİĞİ</p>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 font-medium mb-8">
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#6b46ff] font-extrabold mt-0.5">✓</span>
                    <span>Rakun App'e sınırsız erişim</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#6b46ff] font-extrabold mt-0.5">✓</span>
                    <span>Maarif modele uygun PDF'ler</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#6b46ff] font-extrabold mt-0.5">✓</span>
                    <span>Yazılılara özel kamplar</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#6b46ff] font-extrabold mt-0.5">✓</span>
                    <span>Kitap ve doküman desteği</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#6b46ff] font-extrabold mt-0.5">✓</span>
                    <span>Düzenli deneme ve takibi</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#6b46ff] font-extrabold mt-0.5">✓</span>
                    <span>Online kütüphane ile beraber ders çalışma</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#6b46ff] font-extrabold mt-0.5">✓</span>
                    <span>Öğrenciye Özel Eksik Konu Analizi</span>
                  </li>
                </ul>
              </div>

              <button
                type="button"
                onClick={() => setIsDrawerOpen(true)}
                className="w-full block text-center bg-[#6b46ff] hover:bg-[#5835ea] text-white font-bold py-3.5 px-4 rounded-2xl shadow-md hover:shadow-lg transition-all active:scale-[0.98] text-sm cursor-pointer"
              >
                Ücretsiz Tanışma Dersine Başla
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ÖĞRENCİ VE VELİ YORUMLARI (TESTIMONIALS) */}
      <section className="bg-[#d4ff00] text-slate-900 py-16 md:py-24 border-t border-black/10 relative overflow-hidden">
        <div className="w-full">
          {/* Bölüm Başlığı */}
          <div className="text-center max-w-3xl mx-auto mb-8 px-4">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#6b46ff]/10 text-[#6b46ff] text-xs md:text-sm font-semibold mb-3 border border-[#6b46ff]/20">
              ✨ Memnuniyet Oranımız %100
            </div>
            <h2 className="text-slate-900 text-3xl md:text-4xl font-bold text-center">
              Öğrenci ve Velilerimiz Neler Söylüyor?
            </h2>
          </div>

          {/* Yorum Kartları (Hem Mobilde Hem Masaüstünde Yatay Kaydırma / Carousel) */}
          <div className="flex flex-nowrap overflow-x-auto snap-x snap-mandatory gap-6 px-4 md:px-8 pb-8 w-full max-w-full scroll-smooth cursor-grab active:cursor-grabbing [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-black/5 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#6b46ff]/60 hover:[&::-webkit-scrollbar-thumb]:bg-[#6b46ff] [&::-webkit-scrollbar-thumb]:rounded-full">
            {testimonials.map((item, idx) => (
              <div
                key={idx}
                className="shrink-0 snap-center w-[85vw] md:w-[400px] bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-6 md:p-8 flex flex-col justify-between border border-slate-100 whitespace-normal break-words"
              >
                <div className="whitespace-normal break-words">
                  {/* Tırnak İkonu */}
                  <svg className="w-8 h-8 text-[#6b46ff] opacity-50 mb-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  {/* Yorum Metni */}
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-normal whitespace-normal break-words">
                    "{item.text}"
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-end justify-between gap-2">
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">{item.name}</h3>
                    <span className="inline-block bg-[#6b46ff] text-white text-xs px-2.5 py-0.5 rounded-full font-bold mt-1 shadow-sm">
                      {item.tag}
                    </span>
                  </div>
                  {/* 5 Yıldız */}
                  <div className="flex items-center gap-0.5 text-amber-400 shrink-0" aria-label="5 yıldız">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current text-amber-400" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FOOTER */}
      <footer className="bg-[#d4ff00] border-t border-black/10 py-8 px-6 text-center text-xs md:text-sm font-semibold text-slate-800">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img src="/b25.png" alt="Rakun Logo" className="h-6 w-auto object-contain" />
            <span>© 2026 Ömer Hoca Özel Ders & Kampüs. Tüm hakları saklıdır.</span>
          </div>
          <div className="flex items-center gap-4 text-slate-900 font-bold">
            <Link href="/" className="hover:underline">
              Ana Sayfa
            </Link>
            <span>•</span>
            <Link href="/kutuphane" className="hover:underline">
              Kütüphane
            </Link>
            <span>•</span>
            <Link href="/oyun-dukkani" className="hover:underline">
              Oyunlar
            </Link>
          </div>
        </div>
      </footer>

      {/* ══════════════════════════════════════════
           İLETİŞİM DRAWER (Sağdan Açılan Panel)
      ══════════════════════════════════════════ */}

      {/* Overlay (Arka Plan Örtüsü) */}
      <div
        className={`fixed inset-0 z-[9998] bg-black/50 transition-opacity duration-300 ${
          isDrawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeDrawer}
      />

      {/* Drawer Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-full md:w-96 z-[9999] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col ${
          isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer Başlık */}
        <div className="flex items-center justify-between px-6 py-5 bg-[#6b46ff] text-white flex-shrink-0">
          <div>
            <h2 className="text-xl font-black tracking-tight">İletişim Formu</h2>
            <p className="text-purple-100 text-sm mt-0.5">Size en kısa sürede dönüş yapacağız.</p>
          </div>
          <button
            type="button"
            onClick={closeDrawer}
            className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-white/20 transition-colors focus:outline-none cursor-pointer"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Başarı Mesajı (Gizli/Görünür) */}
        {isSubmitted ? (
          <div className="flex-1 px-6 py-12 flex flex-col items-center justify-center text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-black text-gray-900 mb-3">Talebiniz Alındı!</h3>
            <p className="text-green-600 font-bold text-lg">24 saat içinde size geri dönüş yapacağız.</p>
          </div>
        ) : (
          <>
            {/* Form Alanı (Kaydırılabilir) */}
            <div className="flex-1 overflow-y-auto px-6 py-6">
              <form id="drawer-form" className="space-y-5" onSubmit={handleDrawerSubmit}>
                {/* Ad Soyad */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1.5">Ad ve Soyad</label>
                  <input
                    type="text"
                    required
                    value={formData.adSoyad}
                    onChange={(e) => setFormData({ ...formData, adSoyad: e.target.value })}
                    placeholder="Örn: Ahmet Yılmaz"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:border-[#6b46ff] focus:ring-2 focus:ring-[#6b46ff]/20 transition-all font-medium text-gray-900"
                  />
                </div>

                {/* Öğrenci / Veli */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Öğrenci misiniz, Veli misiniz?</label>
                  <div className="flex gap-6">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="rol"
                        value="Öğrenci"
                        checked={formData.rol === 'Öğrenci'}
                        onChange={(e) => setFormData({ ...formData, rol: e.target.value })}
                        className="w-4 h-4 accent-[#6b46ff]"
                      />
                      <span className="text-sm font-medium text-gray-700">Öğrenci</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="rol"
                        value="Veli"
                        checked={formData.rol === 'Veli'}
                        onChange={(e) => setFormData({ ...formData, rol: e.target.value })}
                        className="w-4 h-4 accent-[#6b46ff]"
                      />
                      <span className="text-sm font-medium text-gray-700">Veli</span>
                    </label>
                  </div>
                </div>

                {/* Telefon */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1.5">Telefon Numarası</label>
                  <input
                    type="tel"
                    required
                    value={formData.telefon}
                    onChange={(e) => setFormData({ ...formData, telefon: e.target.value })}
                    placeholder="0 (5__) ___ __ __"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:border-[#6b46ff] focus:ring-2 focus:ring-[#6b46ff]/20 transition-all font-medium text-gray-900"
                  />
                </div>

                {/* Açıklama */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1.5">Açıklama</label>
                  <textarea
                    rows={5}
                    required
                    value={formData.aciklama}
                    onChange={(e) => setFormData({ ...formData, aciklama: e.target.value })}
                    placeholder="Mesajınızı buraya yazabilirsiniz..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:border-[#6b46ff] focus:ring-2 focus:ring-[#6b46ff]/20 transition-all font-medium text-gray-900 resize-none"
                  />
                </div>
              </form>
            </div>

            {/* Gönder Butonu (Sabit Alt) */}
            <div className="px-6 py-5 border-t border-gray-100 flex-shrink-0">
              <button
                type="button"
                onClick={handleDrawerSubmit}
                disabled={isSubmitting}
                className="w-full bg-slate-950 text-[#d4ff00] hover:bg-slate-800 py-4 rounded-xl font-black text-lg active:scale-[0.98] transition-all shadow-lg shadow-black/20 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Gönderiliyor...' : 'Gönder'}
              </button>
            </div>
          </>
        )}
      </div>

      {/* ========================================================================= */}
      {/* 5. DALGALANAN SABİT İLETİŞİM / BİLGİ AL BUTONU */}
      {/* ========================================================================= */}
      <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 select-none">
        <button
          type="button"
          onClick={openContactModal}
          className="relative group flex items-center justify-center cursor-pointer focus:outline-none"
          aria-label="İletişim ve Bilgi Al Formunu Aç"
        >
          {/* Yavaş ve Zarif Dışa Yayılan Dalga (3s Ping & Pulse Efektleri) */}
          <span
            className="absolute -inset-2 rounded-full bg-[#6b46ff] opacity-40 animate-ping pointer-events-none"
            style={{ animationDuration: '3s', animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)' }}
          />
          <span
            className="absolute -inset-3.5 rounded-full bg-[#6b46ff]/20 animate-pulse pointer-events-none"
            style={{ animationDuration: '3s' }}
          />

          {/* Dairesel Mor Buton */}
          <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#6b46ff] hover:bg-[#5835ea] active:scale-95 text-[#d4ff00] shadow-2xl shadow-purple-950/50 border-2 border-white flex items-center justify-center transition-all duration-300 group-hover:scale-110">
            <svg
              className="w-7 h-7 md:w-8 md:h-8 fill-none stroke-current stroke-[2.2] transform group-hover:rotate-12 transition-transform duration-300"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a.75.75 0 01-.874-.95 4.47 4.47 0 00.32-1.341C3.67 17.135 3 14.707 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
              />
            </svg>
          </div>

          {/* Hover Tooltip (Bilgi Al) */}
          <span className="absolute right-full mr-3.5 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-xl bg-slate-950 text-[#d4ff00] font-black text-xs shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap hidden sm:block">
            Bilgi Al 🚀
          </span>
        </button>
      </div>

    </div>
  );
}
