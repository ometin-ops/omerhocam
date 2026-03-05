import os
import re

html_path = 'index.html'
with open(html_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Extract sections
header_match = re.search(r'(.*?<main>)', content, re.DOTALL)
header_part = header_match.group(1) if header_match else ""

footer_match = re.search(r'(</main>.*)', content, re.DOTALL)
footer_part = footer_match.group(1) if footer_match else ""

# Individual Sections
hero_match = re.search(r'(<section id="hero".*?</section>)', content, re.DOTALL)
ozel_ders_match = re.search(r'(<section id="ozel-ders".*?</section>)', content, re.DOTALL)
kocluk_match = re.search(r'(<section id="kocluk".*?</section>)', content, re.DOTALL)
yorumlar_match = re.search(r'(<section id="yorumlar".*?</section>)', content, re.DOTALL)
sss_match = re.search(r'(<section id="sss".*?</section>)', content, re.DOTALL)

# Update links in header and footer parts
def update_links(text):
    text = text.replace('href="#"', 'href="index.html"')
    text = text.replace('href="#ozel-ders"', 'href="ozel-ders.html"')
    text = text.replace('href="#kocluk"', 'href="ogrenci-koclugu.html"')
    text = text.replace('href="#yorumlar"', 'href="referanslar.html"')
    text = text.replace('href="#sss"', 'href="sss.html"')
    text = text.replace('href="#iletisim"', 'href="iletisim.html"')
    text = text.replace('href="index.html"', 'index.html') # fix doubling just in case
    # add Ana Sayfa link next to Özel Ders just in case, but keep design. Actually user didn't ask to add a new nav item, just routing.
    return text

new_header = update_links(header_part)
new_footer = update_links(footer_part)

# Pages to generate:
pages = {
    'index.html': update_links(hero_match.group(1)) if hero_match else '',
    'ozel-ders.html': update_links(ozel_ders_match.group(1)) if ozel_ders_match else '',
    'ogrenci-koclugu.html': update_links(kocluk_match.group(1)) if kocluk_match else '',
    'referanslar.html': update_links(yorumlar_match.group(1)) if yorumlar_match else '',
    'sss.html': update_links(sss_match.group(1)) if sss_match else '',
    'iletisim.html': '' # Empty main
}

for filename, main_content in pages.items():
    page_html = new_header + '\n' + main_content + '\n' + new_footer
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(page_html)

print("Pages generated successfully.")
