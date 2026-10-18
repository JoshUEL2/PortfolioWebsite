/**
 * Bespoke atmospheric and container styling definitions per game/project.
 */
export function getProjectTheme(projectId) {
  switch (projectId) {
    case 'rastacats':
      return {
        containerClass:
          'bg-gradient-to-br from-[#06152b]/95 via-[#081d38]/95 to-[#051120]/98 border-cyan-400/50 hover:border-cyan-300 shadow-[0_0_55px_rgba(6,182,212,0.2)] hover:shadow-[0_0_70px_rgba(6,182,212,0.3)]',
        modalClass:
          'bg-gradient-to-br from-[#041122]/98 via-[#061933]/98 to-[#030c18]/98 border-cyan-400/60 shadow-[0_0_90px_rgba(6,182,212,0.35)]',
        compactContainerClass:
          'bg-gradient-to-br from-[#06152b]/95 via-[#081d38]/95 to-[#051120]/98 border-cyan-400/50 hover:border-cyan-300 shadow-[0_0_35px_rgba(6,182,212,0.18)] hover:shadow-[0_0_50px_rgba(6,182,212,0.28)]',
        mediaHolderClass:
          'border-cyan-400/60 shadow-[0_0_30px_rgba(6,182,212,0.25)] ring-1 ring-cyan-400/40',
        overviewHolderClass:
          'bg-cyan-950/30 border-cyan-400/40 shadow-inner',
        accentBadge: 'bg-cyan-950/80 border-cyan-400/40 text-cyan-200',
        buttonClass:
          'bg-cyan-600/30 hover:bg-cyan-500/50 border-cyan-400/50 text-cyan-100 shadow-[0_0_20px_rgba(6,182,212,0.3)]',
        hasAtmosphere: true
      };

    case 'rem':
      return {
        containerClass:
          'bg-[#020306]/98 border-cyan-500/45 hover:border-cyan-300 shadow-[0_0_65px_rgba(6,182,212,0.18)] hover:shadow-[0_0_80px_rgba(6,182,212,0.28)]',
        modalClass:
          'bg-[#020409]/98 border-cyan-500/55 shadow-[0_0_95px_rgba(6,182,212,0.3)]',
        compactContainerClass:
          'bg-[#03060e]/95 border-cyan-500/45 hover:border-cyan-300 shadow-[0_0_35px_rgba(6,182,212,0.15)] hover:shadow-[0_0_50px_rgba(6,182,212,0.25)]',
        mediaHolderClass:
          'border-cyan-400/60 shadow-[0_0_35px_rgba(6,182,212,0.25)] ring-1 ring-cyan-400/40',
        overviewHolderClass:
          'bg-gradient-to-r from-cyan-950/30 via-[#071324] to-cyan-950/30 border-cyan-400/40 shadow-inner',
        accentBadge: 'bg-cyan-950/90 border-cyan-400/50 text-cyan-200',
        buttonClass:
          'bg-cyan-600/30 hover:bg-cyan-500/50 border-cyan-400/50 text-cyan-100 shadow-[0_0_20px_rgba(6,182,212,0.3)]',
        hasAtmosphere: true
      };

    case 'planet-protectors':
      return {
        containerClass:
          'bg-gradient-to-br from-[#04150b]/95 via-[#072213]/95 to-[#031008]/98 border-emerald-500/50 hover:border-emerald-300 shadow-[0_0_55px_rgba(16,185,129,0.22)] hover:shadow-[0_0_75px_rgba(16,185,129,0.32)]',
        modalClass:
          'bg-gradient-to-br from-[#031309]/98 via-[#062011]/98 to-[#020e06]/98 border-emerald-500/60 shadow-[0_0_90px_rgba(16,185,129,0.35)]',
        compactContainerClass:
          'bg-gradient-to-br from-[#04150b]/95 via-[#072213]/95 to-[#031008]/98 border-emerald-500/50 hover:border-emerald-300 shadow-[0_0_35px_rgba(16,185,129,0.18)] hover:shadow-[0_0_50px_rgba(16,185,129,0.28)]',
        mediaHolderClass:
          'border-emerald-400/60 shadow-[0_0_30px_rgba(16,185,129,0.25)] ring-1 ring-emerald-400/40',
        overviewHolderClass:
          'bg-emerald-950/30 border-emerald-500/40 shadow-inner',
        accentBadge: 'bg-emerald-950/80 border-emerald-400/40 text-emerald-200',
        buttonClass:
          'bg-emerald-600/30 hover:bg-emerald-500/50 border-emerald-400/50 text-emerald-100 shadow-[0_0_20px_rgba(16,185,129,0.3)]',
        hasAtmosphere: true
      };

    case 'delirium':
      return {
        containerClass:
          'bg-gradient-to-br from-[#140608]/95 via-[#1e080b]/95 to-[#0d0305]/98 border-rose-600/50 hover:border-rose-400 shadow-[0_0_55px_rgba(225,29,72,0.24)] hover:shadow-[0_0_75px_rgba(225,29,72,0.35)]',
        modalClass:
          'bg-gradient-to-br from-[#190609]/98 via-[#25080c]/98 to-[#100305]/98 border-rose-600/60 shadow-[0_0_90px_rgba(225,29,72,0.35)]',
        compactContainerClass:
          'bg-gradient-to-br from-[#140608]/95 via-[#1e080b]/95 to-[#0d0305]/98 border-rose-600/50 hover:border-rose-400 shadow-[0_0_35px_rgba(225,29,72,0.18)] hover:shadow-[0_0_50px_rgba(225,29,72,0.28)]',
        mediaHolderClass:
          'border-rose-500/60 shadow-[0_0_30px_rgba(225,29,72,0.25)] ring-1 ring-rose-500/40',
        overviewHolderClass:
          'bg-rose-950/30 border-rose-500/40 shadow-inner',
        accentBadge: 'bg-rose-950/80 border-rose-500/40 text-rose-200',
        buttonClass:
          'bg-rose-600/30 hover:bg-rose-500/50 border-rose-400/50 text-rose-100 shadow-[0_0_20px_rgba(225,29,72,0.3)]',
        hasAtmosphere: true
      };

    case 'daydream':
      return {
        containerClass:
          'bg-gradient-to-br from-[#10071f]/95 via-[#180a30]/95 to-[#0a0414]/98 border-purple-500/50 hover:border-purple-300 shadow-[0_0_55px_rgba(168,85,247,0.22)] hover:shadow-[0_0_75px_rgba(168,85,247,0.32)]',
        modalClass:
          'bg-gradient-to-br from-[#130726]/98 via-[#1c0938]/98 to-[#0b0317]/98 border-purple-500/60 shadow-[0_0_90px_rgba(168,85,247,0.35)]',
        compactContainerClass:
          'bg-gradient-to-br from-[#10071f]/95 via-[#180a30]/95 to-[#0a0414]/98 border-purple-500/50 hover:border-purple-300 shadow-[0_0_35px_rgba(168,85,247,0.18)] hover:shadow-[0_0_50px_rgba(168,85,247,0.28)]',
        mediaHolderClass:
          'border-purple-400/60 shadow-[0_0_30px_rgba(168,85,247,0.25)] ring-1 ring-purple-400/40',
        overviewHolderClass:
          'bg-purple-950/30 border-purple-500/40 shadow-inner',
        accentBadge: 'bg-purple-950/80 border-purple-400/40 text-purple-200',
        buttonClass:
          'bg-purple-600/30 hover:bg-purple-500/50 border-purple-400/50 text-purple-100 shadow-[0_0_20px_rgba(168,85,247,0.3)]',
        hasAtmosphere: true
      };

    case 'project-isla':
      return {
        containerClass:
          'bg-gradient-to-br from-[#041419]/95 via-[#062027]/95 to-[#030e12]/98 border-teal-500/50 hover:border-teal-300 shadow-[0_0_55px_rgba(20,184,166,0.2)] hover:shadow-[0_0_75px_rgba(20,184,166,0.3)]',
        modalClass:
          'bg-gradient-to-br from-[#03171d]/98 via-[#06242c]/98 to-[#020f13]/98 border-teal-500/60 shadow-[0_0_90px_rgba(20,184,166,0.35)]',
        compactContainerClass:
          'bg-gradient-to-br from-[#041419]/95 via-[#062027]/95 to-[#030e12]/98 border-teal-500/50 hover:border-teal-300 shadow-[0_0_35px_rgba(20,184,166,0.18)] hover:shadow-[0_0_50px_rgba(20,184,166,0.28)]',
        mediaHolderClass:
          'border-teal-400/60 shadow-[0_0_30px_rgba(20,184,166,0.25)] ring-1 ring-teal-400/40',
        overviewHolderClass:
          'bg-teal-950/30 border-teal-500/40 shadow-inner',
        accentBadge: 'bg-teal-950/80 border-teal-400/40 text-teal-200',
        buttonClass:
          'bg-teal-600/30 hover:bg-teal-500/50 border-teal-400/50 text-teal-100 shadow-[0_0_20px_rgba(20,184,166,0.3)]',
        hasAtmosphere: true
      };

    case 'labraz':
    case 'labrats':
      return {
        containerClass:
          'bg-gradient-to-br from-[#06170d]/95 via-[#0b2817]/95 to-[#041009]/98 border-emerald-400/50 hover:border-emerald-300 shadow-[0_0_55px_rgba(52,211,153,0.24)] hover:shadow-[0_0_75px_rgba(52,211,153,0.35)]',
        modalClass:
          'bg-gradient-to-br from-[#061b0e]/98 via-[#0c2e1b]/98 to-[#031109]/98 border-emerald-400/60 shadow-[0_0_90px_rgba(52,211,153,0.35)]',
        compactContainerClass:
          'bg-gradient-to-br from-[#06170d]/95 via-[#0b2817]/95 to-[#041009]/98 border-emerald-400/50 hover:border-emerald-300 shadow-[0_0_35px_rgba(52,211,153,0.18)] hover:shadow-[0_0_50px_rgba(52,211,153,0.28)]',
        mediaHolderClass:
          'border-emerald-400/60 shadow-[0_0_30px_rgba(52,211,153,0.25)] ring-1 ring-emerald-400/40',
        overviewHolderClass:
          'bg-emerald-950/30 border-emerald-400/40 shadow-inner',
        accentBadge: 'bg-emerald-950/90 border-emerald-400/50 text-emerald-200',
        buttonClass:
          'bg-emerald-600/30 hover:bg-emerald-500/50 border-emerald-400/50 text-emerald-100 shadow-[0_0_20px_rgba(52,211,153,0.3)]',
        hasAtmosphere: true
      };

    case 'chanceway':
      return {
        containerClass:
          'bg-gradient-to-br from-[#140e06]/95 via-[#20160a]/95 to-[#0d0904]/98 border-amber-500/50 hover:border-amber-300 shadow-[0_0_55px_rgba(245,158,11,0.22)] hover:shadow-[0_0_75px_rgba(245,158,11,0.32)]',
        modalClass:
          'bg-gradient-to-br from-[#1a1106]/98 via-[#271a0b]/98 to-[#0f0a04]/98 border-amber-500/60 shadow-[0_0_90px_rgba(245,158,11,0.35)]',
        compactContainerClass:
          'bg-gradient-to-br from-[#140e06]/95 via-[#20160a]/95 to-[#0d0904]/98 border-amber-500/50 hover:border-amber-300 shadow-[0_0_35px_rgba(245,158,11,0.18)] hover:shadow-[0_0_50px_rgba(245,158,11,0.28)]',
        mediaHolderClass:
          'border-amber-400/60 shadow-[0_0_30px_rgba(245,158,11,0.25)] ring-1 ring-amber-400/40',
        overviewHolderClass:
          'bg-amber-950/30 border-amber-500/40 shadow-inner',
        accentBadge: 'bg-amber-950/80 border-amber-400/40 text-amber-200',
        buttonClass:
          'bg-amber-600/30 hover:bg-amber-500/50 border-amber-400/50 text-amber-100 shadow-[0_0_20px_rgba(245,158,11,0.3)]',
        hasAtmosphere: true
      };

    case 'baldis-basics-2':
      return {
        containerClass:
          'bg-gradient-to-br from-[#141205]/95 via-[#201c08]/95 to-[#0d0c03]/98 border-yellow-500/50 hover:border-yellow-300 shadow-[0_0_55px_rgba(234,179,8,0.22)] hover:shadow-[0_0_75px_rgba(234,179,8,0.32)]',
        modalClass:
          'bg-gradient-to-br from-[#1b1706]/98 via-[#282209]/98 to-[#100e03]/98 border-yellow-500/60 shadow-[0_0_90px_rgba(234,179,8,0.35)]',
        compactContainerClass:
          'bg-gradient-to-br from-[#141205]/95 via-[#201c08]/95 to-[#0d0c03]/98 border-yellow-500/50 hover:border-yellow-300 shadow-[0_0_35px_rgba(234,179,8,0.18)] hover:shadow-[0_0_50px_rgba(234,179,8,0.28)]',
        mediaHolderClass:
          'border-yellow-400/60 shadow-[0_0_30px_rgba(234,179,8,0.25)] ring-1 ring-yellow-400/40',
        overviewHolderClass:
          'bg-yellow-950/30 border-yellow-500/40 shadow-inner',
        accentBadge: 'bg-yellow-950/80 border-yellow-400/40 text-yellow-200',
        buttonClass:
          'bg-yellow-600/30 hover:bg-yellow-500/50 border-yellow-400/50 text-yellow-100 shadow-[0_0_20px_rgba(234,179,8,0.3)]',
        hasAtmosphere: true
      };

    case 'waiwwai':
      return {
        containerClass:
          'bg-gradient-to-br from-[#150718]/95 via-[#220a26]/95 to-[#0d040f]/98 border-fuchsia-500/50 hover:border-fuchsia-300 shadow-[0_0_55px_rgba(217,70,239,0.22)] hover:shadow-[0_0_75px_rgba(217,70,239,0.32)]',
        modalClass:
          'bg-gradient-to-br from-[#1a071d]/98 via-[#280c2e]/98 to-[#110313]/98 border-fuchsia-500/60 shadow-[0_0_90px_rgba(217,70,239,0.35)]',
        compactContainerClass:
          'bg-gradient-to-br from-[#150718]/95 via-[#220a26]/95 to-[#0d040f]/98 border-fuchsia-500/50 hover:border-fuchsia-300 shadow-[0_0_35px_rgba(217,70,239,0.18)] hover:shadow-[0_0_50px_rgba(217,70,239,0.28)]',
        mediaHolderClass:
          'border-fuchsia-400/60 shadow-[0_0_30px_rgba(217,70,239,0.25)] ring-1 ring-fuchsia-400/40',
        overviewHolderClass:
          'bg-fuchsia-950/30 border-fuchsia-500/40 shadow-inner',
        accentBadge: 'bg-fuchsia-950/80 border-fuchsia-400/40 text-fuchsia-200',
        buttonClass:
          'bg-fuchsia-600/30 hover:bg-fuchsia-500/50 border-fuchsia-400/50 text-fuchsia-100 shadow-[0_0_20px_rgba(217,70,239,0.3)]',
        hasAtmosphere: true
      };

    default:
      return {
        containerClass:
          'bg-[#0a0c18]/90 border-white/10 hover:border-indigo-500/40 shadow-xl hover:shadow-[0_12px_45px_rgba(99,102,241,0.18)]',
        modalClass:
          'bg-[#0d0f1e] border-indigo-500/35 shadow-[0_0_80px_rgba(99,102,241,0.25)]',
        compactContainerClass:
          'bg-[#090b16]/95 border-white/10 hover:border-indigo-400/60 shadow-xl hover:shadow-[0_10px_40px_rgba(99,102,241,0.2)]',
        mediaHolderClass:
          'border-white/15 shadow-xl',
        overviewHolderClass:
          'bg-white/[0.02] border-white/10',
        accentBadge: 'bg-indigo-950/70 border-indigo-500/35 text-indigo-200',
        buttonClass:
          'bg-indigo-600/30 hover:bg-indigo-600/50 border-indigo-400/40 text-white',
        hasAtmosphere: false
      };
  }
}
