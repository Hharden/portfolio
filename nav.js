document.addEventListener('DOMContentLoaded', () => {
  const headerHTML = `
    <header class="sticky top-0 z-50 backdrop-blur-xl bg-[#09090b]/90 border-b border-zinc-800/80">
      <div class="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="https://herbharden.com" class="flex items-center gap-3">
          <div class="h-9 w-9 rounded-lg bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center font-bold text-white text-sm shadow-md shadow-purple-900/20">
            HH
          </div>
          <div>
            <span class="font-bold tracking-tight text-white block text-sm">Herb Harden</span>
            <span class="text-xs text-zinc-400 block -mt-0.5">Senior AI Product Designer | UX Engineer | Prototyper</span>
          </div>
        </a>
        
        <nav class="hidden md:flex items-center gap-1 bg-zinc-900/90 p-1 rounded-full border border-zinc-800">
          <a href="https://herbharden.com/herbert_harden_resume.docx" target="_blank" class="px-4 py-1.5 text-xs font-medium text-zinc-400 hover:text-white transition">Resume</a>
          <a href="https://linkedin.com/in/herbharden" target="_blank" class="px-4 py-1.5 text-xs font-medium text-zinc-400 hover:text-white transition">LinkedIn ↗</a>
        </nav>

        <div class="flex items-center gap-4 text-xs font-medium">
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
