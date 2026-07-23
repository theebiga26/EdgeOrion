export default function CyberBackground() {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0 opacity-70">
      <svg viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Tech Dot Patterns */}
          <pattern id="tech-dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="rgba(255,255,255,0.03)"/>
          </pattern>
          <pattern id="fine-dots" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1.5" fill="rgba(212,20,255,0.15)"/>
          </pattern>
          <pattern id="fine-dots-blue" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1.5" fill="rgba(0,255,255,0.15)"/>
          </pattern>
          
          {/* Neon Glow Filters */}
          <filter id="neon-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <filter id="neon-glow-intense" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="15" result="blur" />
            <feMerge>
              <feMergeNode in="blur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Overall subtle dot background */}
        <rect width="100%" height="100%" fill="url(#tech-dots)" />

        {/* Dense data grids (like the vertical bars of dots in the image) */}
        <rect x="250" y="150" width="60" height="300" fill="url(#fine-dots)" rx="4" />
        <rect x="1600" y="550" width="80" height="360" fill="url(#fine-dots-blue)" rx="4" />
        <rect x="750" y="850" width="140" height="60" fill="url(#fine-dots)" rx="4" />
        <rect x="1200" y="100" width="70" height="150" fill="url(#fine-dots-blue)" rx="4" />

        {/* Faint tech squares */}
        <g stroke="rgba(255,255,255,0.04)" strokeWidth="1" fill="none">
          <rect x="150" y="150" width="80" height="80" />
          <rect x="160" y="160" width="60" height="60" />
          <rect x="1600" y="200" width="100" height="100" />
          <rect x="850" y="100" width="40" height="40" />
          <rect x="350" y="850" width="50" height="50" />
          <rect x="1300" y="800" width="70" height="70" />
          <rect x="1000" y="500" width="120" height="120" />
          <rect x="1010" y="510" width="100" height="100" />
        </g>

        {/* Main 45-Degree Circuit Traces */}
        {/* Line 1 - Primary Fuchsia (Bottom left to Top Right) */}
        <path d="M -100,1000 L 400,1000 L 800,600 L 2000,600" fill="none" stroke="rgba(212,20,255,0.3)" strokeWidth="2" />
        <path d="M -100,1020 L 390,1020 L 790,620 L 2000,620" fill="none" stroke="rgba(212,20,255,0.1)" strokeWidth="1" />
        
        {/* Line 2 - Deep Purple (Top Right to Bottom Left) */}
        <path d="M 2000,200 L 1400,200 L 900,700 L -100,700" fill="none" stroke="rgba(74,0,224,0.4)" strokeWidth="3" />
        
        {/* Line 3 - Cyan Accents (Top Left to Bottom Right) */}
        <path d="M 200,-100 L 200,400 L 600,800 L 600,1200" fill="none" stroke="rgba(0,255,255,0.3)" strokeWidth="1.5" />
        <path d="M 1200,-100 L 1200,300 L 1500,600 L 1500,1200" fill="none" stroke="rgba(0,255,255,0.2)" strokeWidth="1" />
        <path d="M 1600,-100 L 1600,150 L 1750,300 L 1750,1200" fill="none" stroke="rgba(0,255,255,0.1)" strokeWidth="1" />

        {/* Intersection Nodes with concentric rings and glowing cores */}
        <g filter="url(#neon-glow)">
          {/* Node 1 (Fuchsia) */}
          <circle cx="800" cy="600" r="35" fill="none" stroke="rgba(212,20,255,0.2)" strokeWidth="1" />
          <circle cx="800" cy="600" r="18" fill="none" stroke="rgba(212,20,255,0.4)" strokeWidth="2" />
          <circle cx="800" cy="600" r="6" fill="#d414ff" filter="url(#neon-glow-intense)" />
          <circle cx="800" cy="600" r="2" fill="#fff" />

          {/* Node 2 (Deep Purple) */}
          <circle cx="900" cy="700" r="45" fill="none" stroke="rgba(74,0,224,0.2)" strokeWidth="1" />
          <circle cx="900" cy="700" r="25" fill="none" stroke="rgba(74,0,224,0.4)" strokeWidth="2" />
          <circle cx="900" cy="700" r="8" fill="#4a00e0" filter="url(#neon-glow-intense)" />

          {/* Node 3 (Cyan) */}
          <circle cx="200" cy="400" r="28" fill="none" stroke="rgba(0,255,255,0.2)" strokeWidth="1" />
          <circle cx="200" cy="400" r="5" fill="#00ffff" filter="url(#neon-glow-intense)" />
          <circle cx="200" cy="400" r="2" fill="#fff" />

          {/* Node 4 (Cyan) */}
          <circle cx="1500" cy="600" r="40" fill="none" stroke="rgba(0,255,255,0.2)" strokeWidth="1" />
          <circle cx="1500" cy="600" r="15" fill="none" stroke="rgba(0,255,255,0.4)" strokeWidth="1" />
          <circle cx="1500" cy="600" r="5" fill="#00ffff" filter="url(#neon-glow-intense)" />

          {/* Node 5 (Secondary Fuchsia) */}
          <circle cx="1400" cy="200" r="20" fill="none" stroke="rgba(212,20,255,0.3)" strokeWidth="1" />
          <circle cx="1400" cy="200" r="4" fill="#d414ff" />
        </g>

        {/* Tech Chevrons (>>>>) */}
        <g stroke="rgba(255,255,255,0.3)" strokeWidth="2" fill="none">
          {/* Arrow cluster right */}
          <path d="M 1700,580 L 1710,590 L 1700,600" />
          <path d="M 1715,580 L 1725,590 L 1715,600" />
          <path d="M 1730,580 L 1740,590 L 1730,600" />
          
          {/* Arrow cluster left */}
          <path d="M 100,720 L 90,710 L 100,700" />
          <path d="M 115,720 L 105,710 L 115,700" />
          <path d="M 130,720 L 120,710 L 130,700" />
          
          {/* Vertical arrow cluster */}
          <path d="M 180,150 L 190,140 L 200,150" />
          <path d="M 180,165 L 190,155 L 200,165" />
          <path d="M 180,180 L 190,170 L 200,180" />
        </g>

        {/* Circle Arrow Nodes */}
        <g stroke="rgba(255,255,255,0.4)" fill="none" strokeWidth="1.5">
          <circle cx="1100" cy="450" r="12" />
          <path d="M 1096,452 L 1100,446 L 1104,452 M 1100,446 L 1100,456" />
          
          <circle cx="1450" cy="900" r="12" />
          <path d="M 1446,902 L 1450,896 L 1454,902 M 1450,896 L 1450,906" />

          <circle cx="450" cy="200" r="12" />
          <path d="M 446,202 L 450,196 L 454,202 M 450,196 L 450,206" />
        </g>
      </svg>
    </div>
  );
}
