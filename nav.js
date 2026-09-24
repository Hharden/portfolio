document.addEventListener('DOMContentLoaded', () => {
  const headerHTML = `
    <header class="sticky top-0 z-50 backdrop-blur-xl bg-[#09090b]/90 border-b border-zinc-800/80">
      <div class="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="https://herbharden.com" class="flex items-center gap-3">


        <div class="h-9 w-9 flex items-center justify-center bg-transparent">
  <svg class="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <!-- Purple to Cyan Gradient -->
      <linearGradient id="hh-grad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#8b5cf6" />
        <stop offset="100%" stop-color="#06b6d4" />
      </linearGradient>
    </defs>

    <!-- Left 'H' Outer Stem -->
    <polygon points="12,10 20,10 20,70 12,65" fill="url(#hh-grad)" />
    <!-- Left 'H' Crossbar & Center Join -->
    <polygon points="20,38 42,48 42,57 20,47" fill="url(#hh-grad)" />
    <!-- Left 'H' Inner Stem / Center Fold -->
    <polygon points="34,20 42,20 42,80 34,75" fill="url(#hh-grad)" />
    <!-- Center V-Notch Connector -->
    <polygon points="42,48 50,53 58,48 58,57 50,62 42,57" fill="url(#hh-grad)" opacity="0.9" />
    <!-- Right 'H' Inner Stem / Center Fold -->
    <polygon points="58,20 66,20 66,75 58,80" fill="url(#hh-grad)" />
    <!-- Right 'H' Crossbar & Center Join -->
    <polygon points="80,38 58,48 58,57 80,47" fill="url(#hh-grad)" />
    <!-- Right 'H' Outer Stem -->
    <polygon points="80,10 88,10 88,65 80,70" fill="url(#hh-grad)" />
  </svg>
</div>

           
          <div>
            <span class="font-bold tracking-tight text-white block text-sm">Herb Harden</span>
            <span class="text-xs text-zinc-400 block -mt-0.5">AI-Native Product Design Leader</span>
          </div>
        </a>
        
        <nav class="hidden md:flex items-center gap-1 bg-zinc-900/90 p-1 rounded-full border border-zinc-800">
          <a href="https://herbharden.com/#case-studies" class="px-3.5 py-1.5 text-xs font-medium text-zinc-400 hover:text-white transition flex items-center gap-1.5">
            <!-- Star Icon -->
            <svg class="w-3.5 h-3.5 text-purple-400 shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            Featured Case Studies
          </a>

          <a href="https://herbharden.com/certifications.html" class="px-3.5 py-1.5 text-xs font-medium text-zinc-400 hover:text-white transition flex items-center gap-1.5">
            <!-- Diploma & Seal Icon -->
            <svg class="w-3.5 h-3.5 text-purple-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
              <!-- Diploma Frame -->
              <rect x="2" y="4" width="20" height="13" rx="1.5" />
              <path d="M6 8h7" />
              <path d="M6 11h4" />
              <!-- Scalloped Seal Badge -->
              <circle cx="17" cy="15" r="3.5" />
              <!-- Ribbon Tail -->
              <path d="M15.5 18l-1.5 3 2.5-1 2.5 1-1.5-3" />
            </svg>
            Certifications
          </a>

          <a href="https://github.com/Hharden" target="_blank" class="px-3.5 py-1.5 text-xs font-medium text-zinc-400 hover:text-white transition">GitHub ↗</a>

          <a href="https://linkedin.com/in/herbharden" target="_blank" class="px-3.5 py-1.5 text-xs font-medium text-zinc-400 hover:text-white transition">LinkedIn ↗</a>
        </nav>

        <div class="flex items-center gap-3 text-xs font-medium">
          <a href="mailto:harden.herb@gmail.com" class="px-3.5 py-2 rounded-lg bg-white text-zinc-950 font-semibold hover:bg-zinc-200 transition shadow-sm">Contact Me</a>
        </div>
      </div>
    </header>
  `;

  const navPlaceholder = document.getElementById('global-header');
  if (navPlaceholder) {
    navPlaceholder.innerHTML = headerHTML;
  }
});
