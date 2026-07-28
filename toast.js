// toast.js - Modern Global Toast Notification System

window.showToast = function(message, type = 'error') {
  const toast = document.createElement('div');
  // Dynamic color depending on type
  let bgClass = 'bg-slate-900 border-slate-700';
  let icon = `<svg class="w-5 h-5 text-amber-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>`;

  if (type === 'success') {
    bgClass = 'bg-emerald-600 border-emerald-500';
    icon = `<svg class="w-5 h-5 text-white shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>`;
  } else if (type === 'info') {
    bgClass = 'bg-blue-600 border-blue-500';
    icon = `<svg class="w-5 h-5 text-white shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`;
  }

  // Toast container styling with animation properties
  toast.className = `fixed top-5 left-1/2 -translate-x-1/2 z-[99999] ${bgClass} text-white px-6 py-3.5 rounded-2xl shadow-2xl font-medium text-sm flex items-center justify-center gap-3 border w-[90%] sm:w-auto max-w-sm text-center transition-all duration-300 transform opacity-0 -translate-y-4`;
  toast.innerHTML = `
    ${icon}
    <span>${message}</span>
  `;
  
  document.body.appendChild(toast);
  
  // Force a reflow to trigger CSS transition
  toast.offsetHeight;
  
  // Animate in
  toast.classList.remove('opacity-0', '-translate-y-4');
  
  // Animate out and remove
  setTimeout(() => {
    toast.classList.add('opacity-0', '-translate-y-4');
    setTimeout(() => toast.remove(), 400);
  }, 4000);
};

window.toast = {
  success: (msg) => window.showToast(msg, 'success'),
  error: (msg) => window.showToast(msg, 'error'),
  info: (msg) => window.showToast(msg, 'info')
};

// Override native window.alert to capture any leftover alerts
const originalAlert = window.alert;
window.alert = function(message) {
  window.toast.info(message);
};
