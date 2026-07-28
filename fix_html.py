import re

with open('/Users/omerfarukmetin/Downloads/omerhocam/index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Remove React CDNs
content = content.replace(
    '''  <!-- React & ReactDOM (for in-browser JSX) -->
  <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>''',
    '''  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>'''
)

# 2. Remove React script tag
react_script_pattern = re.compile(r'<script type="text/babel">.*?</script>', re.DOTALL)
content = react_script_pattern.sub('', content)

# 3. Replace <div id="react-ozel-ders-root"></div> with HTML
html_block = '''  <section id="ozel-ders" class="py-24 bg-gray-50 relative">
    <div class="max-w-4xl mx-auto px-4 sm:px-8">
      
      <!-- Başlık -->
      <div class="text-center mb-10 animate-fade-up">
        <h2 class="text-3xl md:text-4xl font-black text-gray-900 mb-4 tracking-tight">Hangi sınava hazırlanıyorsun?</h2>
        <p class="text-gray-600 text-base md:text-lg">Seçimini yaparak sana uygun programın detaylarını inceleyebilirsin.</p>
      </div>

      <!-- Sekmeler (Tabs) -->
      <div class="flex justify-center mb-8">
        <div class="bg-white rounded-full shadow-sm p-1.5 flex items-center gap-1 border border-gray-100">
          <button onclick="showTab('lgs')" id="tab-btn-lgs" class="tab-btn px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-200 bg-[#150338] text-white shadow-md">LGS</button>
          <button onclick="showTab('yks')" id="tab-btn-yks" class="tab-btn px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-200 text-gray-700 hover:bg-gray-50">YKS</button>
          <button onclick="showTab('arasinif')" id="tab-btn-arasinif" class="tab-btn px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-200 text-gray-700 hover:bg-gray-50">Ara Sınıf</button>
        </div>
      </div>

      <!-- Paket Kartı -->
      <div class="bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-6 md:p-10 relative animate-fade-up max-w-2xl mx-auto border-2 border-[#150338]">
        
        <!-- Sol Üst Dekoratif Süs -->
        <img src="a33.png" alt="" aria-hidden="true" class="absolute -top-12 -left-4 md:-top-12 md:-left-10 w-20 md:w-28 max-w-full z-20 pointer-events-none" />

        <!-- Rozet -->
        <div class="absolute top-0 right-0 -mt-[2px] -mr-[2px] bg-[#150338] text-white px-5 py-2.5 rounded-tr-[2rem] rounded-bl-[1.5rem] text-sm font-bold flex items-center gap-1.5 shadow-md">
          <span id="paket-rozet" class="flex items-center gap-1.5">👍 En Popüler</span>
        </div>

        <!-- Kart Başlık & Fiyat -->
        <div class="mb-8 pl-12 pt-4 md:pl-0 md:pt-0">
          <h3 id="paket-baslik" class="text-2xl md:text-3xl font-black text-gray-900 mb-2">LGS Özel Ders</h3>
          <div class="flex items-end gap-2">
            <span class="text-4xl font-black text-[#150338]">₺3.550</span>
            <span class="text-gray-500 font-medium pb-1">/ 4 Hafta</span>
          </div>
          <p class="text-gray-500 text-sm mt-3 font-medium">Hedeflerine ulaşmanda tam da ihtiyacın olan destek.</p>
        </div>

        <!-- LGS İçerik (Varsayılan Görünür) -->
        <ul id="content-lgs" class="space-y-4 mb-10 block">
          <li class="flex items-center gap-2">
            <svg class="w-5 h-5 text-[#150338] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
            <span class="text-gray-700 font-medium">Öğrenciye özel PDF'ler</span>
          </li>
          <li class="flex items-center gap-2">
            <svg class="w-5 h-5 text-[#150338] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
            <span class="text-gray-700 font-medium">Kitap ve doküman desteği</span>
          </li>
          <li class="flex items-center gap-2">
            <svg class="w-5 h-5 text-[#150338] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
            <span class="text-gray-700 font-medium">Düzenli deneme ve takibi</span>
          </li>
          <li class="flex items-center gap-2">
            <svg class="w-5 h-5 text-[#150338] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
            <span class="text-gray-700 font-medium">Online kütüphane ile beraber ders çalışma</span>
          </li>
          <li class="flex items-center gap-2">
            <svg class="w-5 h-5 text-[#150338] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
            <span class="text-gray-700 font-medium">7/24 soru sorabilme</span>
          </li>
          <li class="flex items-center gap-2">
            <svg class="w-5 h-5 text-[#150338] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
            <span class="text-gray-700 font-medium">Ücretsiz tanışma dersi</span>
          </li>
        </ul>

        <!-- YKS İçerik (Gizli) -->
        <ul id="content-yks" class="space-y-4 mb-10 hidden">
          <li class="flex items-center gap-2">
            <svg class="w-5 h-5 text-[#150338] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
            <span class="text-gray-700 font-medium">Öğrenciye özel PDF'ler</span>
          </li>
          <li class="flex items-center gap-2">
            <svg class="w-5 h-5 text-[#150338] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
            <span class="text-gray-700 font-medium">Kitap ve doküman desteği</span>
          </li>
          <li class="flex items-center gap-2">
            <svg class="w-5 h-5 text-[#150338] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
            <span class="text-gray-700 font-medium">Düzenli deneme ve takibi</span>
          </li>
          <li class="flex items-center gap-2">
            <svg class="w-5 h-5 text-[#150338] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
            <span class="text-gray-700 font-medium">Online kütüphane ile beraber ders çalışma</span>
          </li>
          <li class="flex items-center gap-2">
            <svg class="w-5 h-5 text-[#150338] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
            <span class="text-gray-700 font-medium">7/24 soru sorabilme</span>
          </li>
          <li class="flex items-center gap-2">
            <svg class="w-5 h-5 text-[#150338] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
            <span class="text-gray-700 font-medium">Ücretsiz tanışma dersi</span>
          </li>
        </ul>

        <!-- Ara Sınıf İçerik (Gizli) -->
        <ul id="content-arasinif" class="space-y-4 mb-10 hidden">
          <li class="flex items-center gap-2">
            <svg class="w-5 h-5 text-[#150338] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
            <span class="text-gray-700 font-medium">Maarif modele uygun PDF'ler</span>
          </li>
          <li class="flex items-center gap-2">
            <svg class="w-5 h-5 text-[#150338] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
            <span class="text-gray-700 font-medium">Yazılılara özel kamplar</span>
          </li>
          <li class="flex items-center gap-2">
            <svg class="w-5 h-5 text-[#150338] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
            <span class="text-gray-700 font-medium">Kitap ve doküman desteği</span>
          </li>
          <li class="flex items-center gap-2">
            <svg class="w-5 h-5 text-[#150338] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
            <span class="text-gray-700 font-medium">Düzenli deneme ve takibi</span>
          </li>
          <li class="flex items-center gap-2">
            <svg class="w-5 h-5 text-[#150338] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
            <span class="text-gray-700 font-medium">7/24 soru sorabilme</span>
          </li>
          <li class="flex items-center gap-2">
            <svg class="w-5 h-5 text-[#150338] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
            <span class="text-gray-700 font-medium">Ücretsiz tanışma dersi</span>
          </li>
        </ul>

        <!-- Buton -->
        <button class="w-full bg-[#150338] text-white py-4 rounded-[1rem] font-bold text-lg hover:bg-indigo-900 transition-colors shadow-lg shadow-[#150338]/20 active:scale-[0.98]">
          Ücretsiz Derse Başla
        </button>

      </div>
    </div>
  </section>'''
content = content.replace('<div id="react-ozel-ders-root"></div>', html_block)

# 4. Add the showTab script
js_block = '''
  <!-- Custom Tab Logic -->
  <script>
    function showTab(tabName) {
      // İçerikleri gizle
      document.getElementById('content-lgs').classList.add('hidden');
      document.getElementById('content-yks').classList.add('hidden');
      document.getElementById('content-arasinif').classList.add('hidden');
      
      document.getElementById('content-lgs').classList.remove('block');
      document.getElementById('content-yks').classList.remove('block');
      document.getElementById('content-arasinif').classList.remove('block');
      
      // Buton renklerini sıfırla
      const btns = document.querySelectorAll('.tab-btn');
      btns.forEach(btn => {
        btn.classList.remove('bg-[#150338]', 'text-white', 'shadow-md');
        btn.classList.add('text-gray-700', 'hover:bg-gray-50');
      });

      // Seçileni göster
      document.getElementById('content-' + tabName).classList.remove('hidden');
      document.getElementById('content-' + tabName).classList.add('block');
      
      // Başlıkları ve Rozetleri güncelle
      const baslik = document.getElementById('paket-baslik');
      const rozet = document.getElementById('paket-rozet');
      
      if (tabName === 'lgs') {
        baslik.textContent = 'LGS Özel Ders';
        rozet.innerHTML = '👍 En Popüler';
      } else if (tabName === 'yks') {
        baslik.textContent = 'YKS Özel Ders';
        rozet.innerHTML = '🔥 En Çok Seçilen';
      } else if (tabName === 'arasinif') {
        baslik.textContent = 'Ara Sınıf Özel Ders';
        rozet.innerHTML = '⏳ Sınırlı Kontenjan';
      }

      // Butonu aktif yap
      const activeBtn = document.getElementById('tab-btn-' + tabName);
      activeBtn.classList.remove('text-gray-700', 'hover:bg-gray-50');
      activeBtn.classList.add('bg-[#150338]', 'text-white', 'shadow-md');
    }
  </script>
</body>'''
content = content.replace('</body>', js_block)

with open('/Users/omerfarukmetin/Downloads/omerhocam/index.html', 'w', encoding='utf-8') as f:
    f.write(content)
