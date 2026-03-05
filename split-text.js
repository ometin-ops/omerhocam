document.addEventListener('DOMContentLoaded', () => {
    const titles = document.querySelectorAll('.section-title');

    function splitText(node) {
        if (node.nodeType === Node.TEXT_NODE) {
            const text = node.textContent;
            if (!text.trim()) return node;
            
            const fragment = document.createDocumentFragment();
            // Split by spaces but keep them to preserve original layout
            const words = text.split(/(\s+)/);
            
            words.forEach(word => {
                if (word.trim() === '') {
                    fragment.appendChild(document.createTextNode(word));
                } else {
                    const wordSpan = document.createElement('span');
                    // Prevent word break internally
                    wordSpan.style.display = 'inline-block';
                    wordSpan.style.whiteSpace = 'nowrap';
                    
                    const chars = word.split('');
                    chars.forEach(char => {
                        const charSpan = document.createElement('span');
                        charSpan.textContent = char;
                        charSpan.className = 'split-char';
                        wordSpan.appendChild(charSpan);
                    });
                    fragment.appendChild(wordSpan);
                }
            });
            return fragment;
        } else if (node.nodeType === Node.ELEMENT_NODE) {
            Array.from(node.childNodes).forEach(child => {
                const replacement = splitText(child);
                if (replacement !== child) {
                    node.replaceChild(replacement, child);
                }
            });
            return node;
        }
        return node;
    }

    titles.forEach(title => {
        // Keep the original wrapper, but replace contents
        Array.from(title.childNodes).forEach(child => {
            const replacement = splitText(child);
            if (replacement !== child) {
                title.replaceChild(replacement, child);
            }
        });

        // Loop through all resulting split-char elements and assign stagger delays
        title.querySelectorAll('.split-char').forEach((charSpan, index) => {
            charSpan.style.transitionDelay = `${index * 0.04}s`;
        });
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    titles.forEach(title => {
        observer.observe(title);
    });
});
