document.addEventListener('DOMContentLoaded', () => {
  const headerHTML = `
    <header class="sticky top-0 z-50 backdrop-blur-xl bg-[#09090b]/90 border-b border-zinc-800/80">
      <div class="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="https://herbharden.com" class="flex items-center gap-3">

          <!-- HH Logo Icon (Sized up to h-11 w-11 with dynamic drop-shadow glow) -->
          <div class="h-11 w-11 flex items-center justify-center bg-transparent shrink-0">
            <svg class="w-full h-full filter drop-shadow-[0_0_8px_rgba(6,182,212,0.4)]" viewBox="0 0 100 85" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <!-- High-Impact Sweeping Gradient -->
                <linearGradient id="hh-shimmer" x1="0%" y1="0%" x2="100%" y2="100%">
                  <animate attributeName="x1" values="0%;100%;0%" dur="2.5s" repeatCount="indefinite" />
                  <animate attributeName="y1" values="0%;100%;0%" dur="2.5s" repeatCount="indefinite" />
                  <animate attributeName="x2" values="100%;0%;100%" dur="2.5s" repeatCount="indefinite" />
                  <animate attributeName="y2" values="100%;0%;100%" dur="2.5s" repeatCount="indefinite" />

                  <stop offset="0%" stop-color="#a855f7">
                    <animate attributeName="stop-color" values="#a855f7; #06b6d4; #ec4899; #a855f7" dur="2.5s" repeatCount="indefinite" />
                  </stop>
                  <stop offset="50%" stop-color="#06b6d4">
                    <animate attributeName="stop-color" values="#06b6d4; #ec4899; #a855f7; #06b6d4" dur="2.5s" repeatCount="indefinite" />
                  </stop>
                  <stop offset="100%" stop-color="#3b82f6">
                    <animate attributeName="stop-color" values="#3b82f6; #a855f7; #06b6d4; #3b82f6" dur="2.5s" repeatCount="indefinite" />
                  </stop>
                </linearGradient>
              </defs>

              <!-- Left 'H' Outer Stem -->
              <polygon points="12,5 20,5 20,55 12,50" fill="url(#hh-shimmer)" />
              <!-- Left 'H' Crossbar -->
              <polygon points="20,28 42,38 42,47 20,37" fill="url(#hh-shimmer)" />
              <!-- Left 'H' Inner Stem -->
              <polygon points="34,15 42,15 42,65 34,60" fill="url(#hh-shimmer)" />
              
              <!-- Center V-Notch Connector -->
              <polygon points="42,38 50,43 58,38 58,47 50,52 42,47" fill="url(#hh-shimmer)" opacity="0.95" />
              
              <!-- Right 'H' Inner Stem -->
              <polygon points="58,15 66,15 66,60 58,65" fill="url(#hh-shimmer)" />
              <!-- Right 'H' Crossbar -->
              <polygon points="80,28 58,38 58,47 80,37" fill="url(#hh-shimmer)" />
              <!-- Right 'H' Outer Stem -->
              <polygon points="80,5 88,5 88,50 80,55" fill="url(#hh-shimmer)" />
            </svg>
          </div>

          <div>
            <span class="font-bold tracking-tight text-white block text-sm">Herb Harden</span>
            <span class="text-xs text-zinc-400 block -mt-0.5">AI-Native Product Design Leader</span>
          </div>
        </a>
        
        <nav class="hidden md:flex items-center gap-1 bg-zinc-900/90 p-1 rounded-full border border-zinc-800">
          <a href="https://herbharden.com/#case-studies" class="px-3.5 py-1.5 text-xs font-medium text-zinc-400 hover:text-white transition flex items-center gap-1.5">
            <!-- Star Icon (Bright Cyan) -->
            <svg class="w-3.5 h-3.5 text-cyan-400 shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            Featured Case Studies
          </a>

          <a href="https://herbharden.com/certifications.html" class="px-3.5 py-1.5 text-xs font-medium text-zinc-400 hover:text-white transition flex items-center gap-1.5">
            <!-- Diploma & Seal Icon (Bright Cyan) -->
            <svg class="w-3.5 h-3.5 text-cyan-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
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
