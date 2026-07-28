import re

with open('/Users/omerfarukmetin/Downloads/omerhocam/index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Add CDNs
content = content.replace(
    '  <!-- Tailwind CSS CDN -->\n  <script src="https://cdn.tailwindcss.com"></script>',
    '''  <!-- React & ReactDOM (for in-browser JSX) -->
  <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>'''
)

# Replace the ozel-ders section with the React root
section_pattern = re.compile(r'<section id="ozel-ders".*?</section>', re.DOTALL)
content = section_pattern.sub('<div id="react-ozel-ders-root"></div>', content)

# Remove the Vanilla JS tab logic
js_pattern = re.compile(r'// --- Tabs Logic for Özel Ders Section ---.*?}\n', re.DOTALL)
content = js_pattern.sub('', content)

# Append the React code before closing body
react_script = '''
  <script type="text/babel">
    const { useState } = React;

    function OzelDersBolumu() {
      const [activeTab, setActiveTab] = useState('LGS');

      const tabData = {
        'LGS': {
          title: 'LGS Özel Ders',
          badge: '👍 En Popüler',
          items: [
            "Öğrenciye özel PDF'ler",
            'Kitap ve doküman desteği',
            'Düzenli deneme ve takibi',
            'Online kütüphane ile beraber ders çalışma',
            '7/24 soru sorabilme',
            'Ücretsiz tanışma dersi'
          ]
        },
        'YKS': {
          title: 'YKS Özel Ders',
          badge: '🔥 En Çok Seçilen',
          items: [
            "Öğrenciye özel PDF'ler",
            'Kitap ve doküman desteği',
            'Düzenli deneme ve takibi',
            'Online kütüphane ile beraber ders çalışma',
            '7/24 soru sorabilme',
            'Ücretsiz tanışma dersi'
          ]
        },
        'Ara Sınıf': {
          title: 'Ara Sınıf Özel Ders',
          badge: '⏳ Sınırlı Kontenjan',
          items: [
            "Maarif modele uygun PDF'ler",
            'Yazılılara özel kamplar',
            'Kitap ve doküman desteği',
            'Düzenli deneme ve takibi',
            '7/24 soru sorabilme',
            'Ücretsiz tanışma dersi'
          ]
        }
      };

      const currentData = tabData[activeTab];

      return (
        <section id="ozel-ders" className="py-24 bg-gray-50 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-8">
            
            <div className="text-center mb-10 animate-fade-up">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 tracking-tight">Hangi sınava hazırlanıyorsun?</h2>
              <p className="text-gray-600 text-base md:text-lg">Seçimini yaparak sana uygun programın detaylarını inceleyebilirsin.</p>
            </div>

            <div className="flex justify-center mb-8">
              <div className="bg-white rounded-full shadow-sm p-1.5 flex items-center gap-1 border border-gray-100">
                <button 
                  onClick={() => setActiveTab('LGS')} 
                  className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-200 ${
                    activeTab === 'LGS' ? 'bg-[#150338] text-white shadow-md' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  LGS
                </button>
                <button 
                  onClick={() => setActiveTab('YKS')} 
                  className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-200 ${
                    activeTab === 'YKS' ? 'bg-[#150338] text-white shadow-md' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  YKS
                </button>
                <button 
                  onClick={() => setActiveTab('Ara Sınıf')} 
                  className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-200 ${
                    activeTab === 'Ara Sınıf' ? 'bg-[#150338] text-white shadow-md' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  Ara Sınıf
                </button>
              </div>
            </div>

            <div className="bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-6 md:p-10 relative animate-fade-up max-w-2xl mx-auto border-2 border-[#150338]">
              
              <div className="absolute top-0 right-0 -mt-[2px] -mr-[2px] bg-[#150338] text-white px-5 py-2.5 rounded-tr-[2rem] rounded-bl-[1.5rem] text-sm font-bold flex items-center gap-1.5 shadow-md">
                <span className="flex items-center gap-1.5">{currentData.badge}</span>
              </div>

              <div className="mb-8 pl-12 pt-4 md:pl-0 md:pt-0">
                <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">{currentData.title}</h3>
                <div className="flex items-end gap-2">
                  <span className="text-4xl font-black text-[#150338]">₺3.550</span>
                  <span className="text-gray-500 font-medium pb-1">/ 4 Hafta</span>
                </div>
                <p className="text-gray-500 text-sm mt-3 font-medium">Hedeflerine ulaşmanda tam da ihtiyacın olan destek.</p>
              </div>

              <ul className="block space-y-4 mb-10">
                {currentData.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#150338] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full bg-[#150338] text-white py-4 rounded-[1rem] font-bold text-lg hover:bg-indigo-900 transition-colors shadow-lg shadow-[#150338]/20 active:scale-[0.98]">
                Ücretsiz Derse Başla
              </button>
              
            </div>
          </div>
        </section>
      );
    }

    const rootElement = document.getElementById('react-ozel-ders-root');
    if (rootElement) {
      const root = ReactDOM.createRoot(rootElement);
      root.render(<OzelDersBolumu />);
    }
  </script>
'''

content = content.replace('</body>', react_script + '\n</body>')

with open('/Users/omerfarukmetin/Downloads/omerhocam/index.html', 'w', encoding='utf-8') as f:
    f.write(content)
