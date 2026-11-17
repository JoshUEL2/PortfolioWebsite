/**
 * Per-project accent identities anchored onto one consistent Obsidian Graphite shell.
 * Keeps game individuality crisp along borders and controls without dark purple washes.
 */
export function getProjectTheme(projectId) {
  switch (projectId) {
    case 'rastacats':
      return {
        containerClass:
          'bg-[#0a1019] border-cyan-500/40 hover:border-cyan-400/75 shadow-[0_18px_50px_rgba(0,0,0,0.65)]',
        modalClass:
          'bg-[#090e16] border-cyan-500/45 shadow-[0_24px_80px_rgba(0,0,0,0.9)]',
        compactContainerClass:
          'bg-[#0a1019] border-cyan-500/40 hover:border-cyan-400/75 shadow-lg',
        mediaHolderClass:
          'border-cyan-400/45 ring-1 ring-cyan-400/20',
        overviewHolderClass:
          'bg-cyan-950/20 border-cyan-500/30',
        accentBadge: 'bg-cyan-950/80 border-cyan-400/40 text-cyan-200',
        buttonClass:
          'bg-cyan-600/25 hover:bg-cyan-500/40 border-cyan-400/50 text-cyan-100',
        accentHex: '#22d3ee',
        hasAtmosphere: true
      };

    case 'rem':
      return {
        containerClass:
          'bg-[#07090d] border-cyan-500/40 hover:border-cyan-400/75 shadow-[0_18px_50px_rgba(0,0,0,0.7)]',
        modalClass:
          'bg-[#06080c] border-cyan-500/45 shadow-[0_24px_80px_rgba(0,0,0,0.92)]',
        compactContainerClass:
          'bg-[#07090d] border-cyan-500/40 hover:border-cyan-400/75 shadow-lg',
        mediaHolderClass:
          'border-cyan-400/45 ring-1 ring-cyan-400/20',
        overviewHolderClass:
          'bg-cyan-950/20 border-cyan-500/30',
        accentBadge: 'bg-cyan-950/80 border-cyan-400/45 text-cyan-200',
        buttonClass:
          'bg-cyan-600/25 hover:bg-cyan-500/40 border-cyan-400/50 text-cyan-100',
        accentHex: '#06b6d4',
        hasAtmosphere: true
      };

    case 'planet-protectors':
      return {
        containerClass:
          'bg-[#08100c] border-emerald-500/40 hover:border-emerald-400/75 shadow-[0_18px_50px_rgba(0,0,0,0.65)]',
        modalClass:
          'bg-[#070e0b] border-emerald-500/45 shadow-[0_24px_80px_rgba(0,0,0,0.9)]',
        compactContainerClass:
          'bg-[#08100c] border-emerald-500/40 hover:border-emerald-400/75 shadow-lg',
        mediaHolderClass:
          'border-emerald-400/45 ring-1 ring-emerald-400/20',
        overviewHolderClass:
          'bg-emerald-950/20 border-emerald-500/30',
        accentBadge: 'bg-emerald-950/80 border-emerald-400/40 text-emerald-200',
        buttonClass:
          'bg-emerald-600/25 hover:bg-emerald-500/40 border-emerald-400/50 text-emerald-100',
        accentHex: '#10b981',
        hasAtmosphere: true
      };

    case 'delirium':
      return {
        containerClass:
          'bg-[#11080a] border-rose-500/40 hover:border-rose-400/75 shadow-[0_18px_50px_rgba(0,0,0,0.7)]',
        modalClass:
          'bg-[#0f0709] border-rose-500/45 shadow-[0_24px_80px_rgba(0,0,0,0.92)]',
        compactContainerClass:
          'bg-[#11080a] border-rose-500/40 hover:border-rose-400/75 shadow-lg',
        mediaHolderClass:
          'border-rose-500/45 ring-1 ring-rose-500/20',
        overviewHolderClass:
          'bg-rose-950/20 border-rose-500/30',
        accentBadge: 'bg-rose-950/80 border-rose-500/40 text-rose-200',
        buttonClass:
          'bg-rose-600/25 hover:bg-rose-500/40 border-rose-400/50 text-rose-100',
        accentHex: '#f43f5e',
        hasAtmosphere: true
      };

    case 'daydream':
      return {
        containerClass:
          'bg-[#0b1018] border-sky-500/40 hover:border-sky-400/75 shadow-[0_18px_50px_rgba(0,0,0,0.65)]',
        modalClass:
          'bg-[#090e16] border-sky-500/45 shadow-[0_24px_80px_rgba(0,0,0,0.9)]',
        compactContainerClass:
          'bg-[#0b1018] border-sky-500/40 hover:border-sky-400/75 shadow-lg',
        mediaHolderClass:
          'border-sky-400/45 ring-1 ring-sky-400/20',
        overviewHolderClass:
          'bg-sky-950/20 border-sky-500/30',
        accentBadge: 'bg-sky-950/80 border-sky-400/40 text-sky-200',
        buttonClass:
          'bg-sky-600/25 hover:bg-sky-500/40 border-sky-400/50 text-sky-100',
        accentHex: '#38bdf8',
        hasAtmosphere: true
      };

    case 'project-isla':
      return {
        containerClass:
          'bg-[#081112] border-teal-500/40 hover:border-teal-400/75 shadow-[0_18px_50px_rgba(0,0,0,0.65)]',
        modalClass:
          'bg-[#070f10] border-teal-500/45 shadow-[0_24px_80px_rgba(0,0,0,0.9)]',
        compactContainerClass:
          'bg-[#081112] border-teal-500/40 hover:border-teal-400/75 shadow-lg',
        mediaHolderClass:
          'border-teal-400/45 ring-1 ring-teal-400/20',
        overviewHolderClass:
          'bg-teal-950/20 border-teal-500/30',
        accentBadge: 'bg-teal-950/80 border-teal-400/40 text-teal-200',
        buttonClass:
          'bg-teal-600/25 hover:bg-teal-500/40 border-teal-400/50 text-teal-100',
        accentHex: '#14b8a6',
        hasAtmosphere: true
      };

    case 'labraz':
    case 'labrats':
      return {
        containerClass:
          'bg-[#08110c] border-emerald-400/40 hover:border-emerald-300/75 shadow-[0_18px_50px_rgba(0,0,0,0.65)]',
        modalClass:
          'bg-[#070f0a] border-emerald-400/45 shadow-[0_24px_80px_rgba(0,0,0,0.9)]',
        compactContainerClass:
          'bg-[#08110c] border-emerald-400/40 hover:border-emerald-300/75 shadow-lg',
        mediaHolderClass:
          'border-emerald-400/45 ring-1 ring-emerald-400/20',
        overviewHolderClass:
          'bg-emerald-950/20 border-emerald-400/30',
        accentBadge: 'bg-emerald-950/80 border-emerald-400/45 text-emerald-200',
        buttonClass:
          'bg-emerald-600/25 hover:bg-emerald-500/40 border-emerald-400/50 text-emerald-100',
        accentHex: '#34d399',
        hasAtmosphere: true
      };

    case 'chanceway':
    case 'baldis-basics-2':
      return {
        containerClass:
          'bg-[#100d08] border-amber-500/40 hover:border-amber-400/75 shadow-[0_18px_50px_rgba(0,0,0,0.65)]',
        modalClass:
          'bg-[#0e0b07] border-amber-500/45 shadow-[0_24px_80px_rgba(0,0,0,0.9)]',
        compactContainerClass:
          'bg-[#100d08] border-amber-500/40 hover:border-amber-400/75 shadow-lg',
        mediaHolderClass:
          'border-amber-400/45 ring-1 ring-amber-400/20',
        overviewHolderClass:
          'bg-amber-950/20 border-amber-500/30',
        accentBadge: 'bg-amber-950/80 border-amber-400/40 text-amber-200',
        buttonClass:
          'bg-amber-600/25 hover:bg-amber-500/40 border-amber-400/50 text-amber-100',
        accentHex: '#f59e0b',
        hasAtmosphere: true
      };

    case 'waiwwai':
      return {
        containerClass:
          'bg-[#100d0b] border-[#d4c5a3]/40 hover:border-[#e8e4c9]/75 shadow-[0_18px_50px_rgba(0,0,0,0.65)]',
        modalClass:
          'bg-[#0d0b09] border-[#d4c5a3]/45 shadow-[0_24px_80px_rgba(0,0,0,0.9)]',
        compactContainerClass:
          'bg-[#100d0b] border-[#d4c5a3]/40 hover:border-[#e8e4c9]/75 shadow-lg',
        mediaHolderClass:
          'border-[#d4c5a3]/45 ring-1 ring-[#d4c5a3]/20',
        overviewHolderClass:
          'bg-stone-900/40 border-[#d4c5a3]/30',
        accentBadge: 'bg-stone-900/90 border-[#d4c5a3]/45 text-[#e8e4c9]',
        buttonClass:
          'bg-stone-700/35 hover:bg-stone-600/50 border-[#d4c5a3]/45 text-[#f5f2eb]',
        accentHex: '#d4c5a3',
        hasAtmosphere: true
      };

    default:
      return {
        containerClass:
          'bg-[#0b1019] border-slate-700/70 hover:border-sky-400/60 shadow-[0_18px_50px_rgba(0,0,0,0.6)]',
        modalClass:
          'bg-[#0a0f18] border-slate-700/80 shadow-[0_24px_80px_rgba(0,0,0,0.9)]',
        compactContainerClass:
          'bg-[#0b1019] border-slate-700/70 hover:border-sky-400/60 shadow-lg',
        mediaHolderClass:
          'border-slate-700/80',
        overviewHolderClass:
          'bg-white/[0.02] border-white/10',
        accentBadge: 'bg-slate-900 border-sky-500/35 text-sky-200',
        buttonClass:
          'bg-sky-600/25 hover:bg-sky-500/40 border-sky-400/45 text-white',
        accentHex: '#38bdf8',
        hasAtmosphere: false
      };
  }
}
