var e={chanceway:{files:[{name:`index.html`,totalLines:591,sizeBytes:28268,code:`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chanceway | Design Archive</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.9.1/chart.min.js"><\/script>
    <link href="https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400&family=Syne:wght@400;700;800&display=swap" rel="stylesheet">
    <style>
        :root {
            --void: #000000;
            --static: #ffffff;
            --accent: #ff0000; /* Only for errors/exit */
            --blur-amt: 0px;
        }

        /* === GLOBAL STYLES === */
        body {
            background-color: var(--static);
            color: var(--void);
            font-family: 'Space Mono', monospace;
            overflow-x: hidden;
            transition: background-color 0.1s linear;
            cursor: crosshair;
        }

        .font-display { font-family: 'Syne', sans-serif; }
        
        /* INVERT MODE for the "Dark World" */
        body.inverted {
            background-color: var(--void);
            color: var(--static);
        }
        body.inverted .border-black { border-color: var(--static); }
        body.inverted .bg-black { background-color: var(--static); color: var(--void); }
        body.inverted .text-gray-600 { color: #888; }
        body.inverted .border-gray-200 { border-color: #333; }

        /* === WHIPPING ANIMATIONS === */
        /* Fast, aggressive transitions */
        .whip-transition {
            transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
        
        .whip-hover:hover {
            transform: skewX(-10deg) translateX(10px);
        }

        /* === GLITCH EFFECTS === */
        @keyframes noise-anim {
            0% { clip-path: inset(40% 0 61% 0); }
            20% { clip-path: inset(92% 0 1% 0); }
            40% { clip-path: inset(43% 0 1% 0); }
            60% { clip-path: inset(25% 0 58% 0); }
            80% { clip-path: inset(54% 0 7% 0); }
            100% { clip-path: inset(58% 0 43% 0); }
        }

        .glitch-text {
            position: relative;
            display: inline-block;
        }
        .glitch-text::before, .glitch-text::after {
            content: attr(data-text);
            position: absolute;
            top: 0; left: 0; width: 100%; height: 100%;
            background: var(--static);
        }
        body.inverted .glitch-text::before, body.inverted .glitch-text::after {
            background: var(--void);
        }
        .glitch-text::before {
            left: 2px;
            text-shadow: -1px 0 #000;
            clip-path: inset(0);
            animation: noise-anim 2s infinite linear alternate-reverse;
        }
        .glitch-text::after {
            left: -2px;
            text-shadow: 1px 0 #000;
            clip-path: inset(0);
            animation: noise-anim 3s infinite linear alternate-reverse;
        }

        /* === SECTIONS === */
        .bible-section {
            display: none;
            opacity: 0;
            transform: translateY(50px);
            transition: opacity 0.5s ease, transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .bible-section.active {
            display: block;
            opacity: 1;
            transform: translateY(0);
        }

        /* === NON-EUCLIDEAN DEMO === */
        .perspective-box {
            perspective: 1000px;
            transform-style: preserve-3d;
        }
        .corridor-wall {
            transition: transform 0.8s cubic-bezier(0.23, 1, 0.32, 1);
        }

        /* === CANVAS BACKGROUND === */
        #noise-canvas {
            position: fixed;
            top: 0; left: 0;
            width: 100%; height: 100%;
            z-index: -1;
            opacity: 0.05;
            pointer-events: none;
        }
        
        /* === DECEPTIVE FRONT === */
        #front-layer {
            position: fixed;
            inset: 0;
            z-index: 50;
            background: #f4f4f4;
            display: flex;
            flex-col;
            transition: transform 0.8s cubic-bezier(0.7, 0, 0.3, 1);
        }
        #front-layer.breached {
            transform: translateY(-100%);
        }

        /* === NAVIGATION === */
        .nav-link {
            position: relative;
            cursor: pointer;
        }
        .nav-link::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 0;
            height: 2px;
            background-color: currentColor;
            transition: width 0.3s ease;
        }
        .nav-link:hover::after, .nav-link.active::after {
            width: 100%;
        }

        /* === UTILS === */
        .crt-lines {
            background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.1) 50%);
            background-size: 100% 4px;
            pointer-events: none;
        }
        .border-thick { border-width: 3px; }
    </style>
</head>
<body>

    <!-- ================= LAYER 1: THE CAUSAL INSTITUTE (DECEPTION) ================= -->
    <div id="front-layer" class="flex flex-col items-center justify-center text-center p-8 border-b-8 border-black">
        <div class="max-w-3xl mx-auto">
            <div class="mb-8">
                <svg class="w-24 h-24 mx-auto mb-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
                </svg>
                <h1 class="text-4xl md:text-6xl font-bold tracking-tighter uppercase font-display">The Causal Institute</h1>
                <p class="text-sm tracking-[0.3em] mt-2 uppercase text-gray-500">Researching Certainty in a Chaotic World</p>
            </div>

            <div class="grid grid-cols-3 gap-4 text-xs font-mono text-left border-t border-b border-gray-300 py-8 mb-12">
                <div>
                    <strong>CURRENT STUDY:</strong><br>
                    Project: Chanceway<br>
                    Status: <span class="text-green-600">STABLE</span>
                </div>
                <div>
                    <strong>PROBABILITY INDEX:</strong><br>
                    Baseline: 100%<br>
                    Deviation: 0.000%
                </div>
                <div>
                    <strong>ACCESS LEVEL:</strong><br>
                    Public / Observer<br>
                    Clearance: None
                </div>
            </div>

            <p class="text-gray-600 mb-8 max-w-lg mx-auto">
                We utilize advanced algorithmic prediction to map the architecture of the future. There are no mazes, only straight lines waiting to be drawn.
            </p>

            <button id="breach-btn" class="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-black font-display hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
                <span>INITIATE SECURITY CHECK</span>
                <div class="absolute inset-0 h-full w-full scale-0 rounded-sm transition-all duration-300 group-hover:scale-100 group-hover:bg-red-600/10"></div>
            </button>

            <div id="security-msg" class="mt-4 text-red-600 font-bold font-mono opacity-0 transition-opacity">
                WARNING: NON-EUCLIDEAN GEOMETRY DETECTED.
            </div>
        </div>
        <div class="absolute bottom-4 text-[10px] text-gray-400">
            © 2025 The Causal Institute. Certainty is a choice.
        </div>
    </div>

    <!-- ================= LAYER 2: THE GAME BIBLE ================= -->
    <canvas id="noise-canvas"></canvas>
    <div class="fixed inset-0 pointer-events-none crt-lines z-40"></div>

    <div id="main-interface" class="min-h-screen flex flex-col relative opacity-0 transition-opacity duration-1000 delay-500">
        
        <!-- NAV -->
        <nav class="w-full border-b-4 border-current p-6 flex justify-between items-center bg-inherit z-30 sticky top-0">
            <div class="text-2xl font-black tracking-tighter font-display uppercase glitch-text" data-text="CHANCEWAY">
                CHANCEWAY
            </div>
            <div class="hidden md:flex space-x-8 font-bold text-sm tracking-widest">
                <span class="nav-link active" data-target="overview">OVERVIEW</span>
                <span class="nav-link" data-target="mechanics">MECHANICS</span>
                <span class="nav-link" data-target="algorithm">ALGORITHM</span>
                <span class="nav-link" data-target="visuals">VISUALS</span>
            </div>
            <div class="text-xs font-mono border border-current px-2 py-1">
                EXIT CHANCE: <span id="global-chance">0.001%</span>
            </div>
        </nav>

        <main class="flex-grow container mx-auto px-6 py-12 max-w-6xl">
            
            <!-- SECTION: OVERVIEW -->
            <section id="overview" class="bible-section active">
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div class="lg:col-span-8">
                        <h1 class="text-6xl md:text-8xl font-display font-black leading-none mb-8 uppercase">
                            The Exit<br>Does Not<br>Exist.
                        </h1>
                        <p class="text-xl md:text-2xl font-mono leading-relaxed border-l-4 border-current pl-6 mb-8">
                            Yet. Chanceway is a procedural maze where the exit is not a place, but a <span class="font-bold bg-current text-white px-1 invert-target">probability</span>.
                        </p>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                            <div class="border-2 border-current p-6 hover:bg-current hover:text-white transition-colors duration-300 group cursor-none">
                                <h3 class="font-bold text-lg mb-2 group-hover:translate-x-2 transition-transform">01. Procedural Navigation</h3>
                                <p class="text-sm font-mono opacity-80">The world generates one step ahead of you. Look away, and it is gone.</p>
                            </div>
                            <div class="border-2 border-current p-6 hover:bg-current hover:text-white transition-colors duration-300 group cursor-none">
                                <h3 class="font-bold text-lg mb-2 group-hover:translate-x-2 transition-transform">02. The 0.001%</h3>
                                <p class="text-sm font-mono opacity-80">You start with nearly zero chance of escape. Every action manipulates the dice.</p>
                            </div>
                        </div>
                    </div>
                    <div class="lg:col-span-4 flex flex-col justify-end">
                        <div class="border-4 border-current p-4 aspect-[3/4] flex items-center justify-center relative overflow-hidden">
                            <div class="absolute inset-0 bg-current opacity-10 animate-pulse"></div>
                            <p class="font-mono text-center text-xs uppercase z-10">
                                [ Subject is Trapped ]<br>
                                [ Loop Count: ∞ ]
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- SECTION: MECHANICS -->
            <section id="mechanics" class="bible-section">
                <div class="mb-12 border-b-4 border-current pb-4">
                    <h2 class="text-5xl font-display font-black uppercase">Non-Euclidean Rules</h2>
                </div>

                <!-- The Turn Around Mechanic Interactive -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
                    <div>
                        <h3 class="text-3xl font-bold mb-4 glitch-text" data-text="THE TURN-AROUND">THE TURN-AROUND</h3>
                        <p class="font-mono mb-6">
                            In Chanceway, geometry is not stable. If you turn 180 degrees, the path you came from is erased. You face a blank wall. The path forward shifts.
                        </p>
                        <ul class="list-disc list-inside font-mono text-sm space-y-2 mb-8">
                            <li>Backtracking is impossible.</li>
                            <li>Hesitation destroys the world.</li>
                            <li>"Looking back" is a reset.</li>
                        </ul>
                        <button id="turn-around-btn" class="border-2 border-current px-6 py-2 font-bold hover:bg-current hover:text-white transition-all uppercase">
                            Simulate Player Turn (180°)
                        </button>
                    </div>
                    
                    <!-- Visual Demo -->
                    <div class="perspective-box h-64 w-full border-2 border-current relative overflow-hidden flex items-center justify-center bg-gray-100 text-black" id="mechanic-viewport">
                        <div id="corridor-view" class="text-center">
                            <div class="text-4xl font-bold mb-2">⬆</div>
                            <div class="font-mono">PATH A: CORRIDOR</div>
                        </div>
                        <div id="wall-view" class="absolute inset-0 bg-black text-white flex items-center justify-center opacity-0 pointer-events-none transform rotate-y-180">
                            <div class="text-center">
                                <div class="text-4xl font-bold mb-2">Ø</div>
                                <div class="font-mono">THE VOID (WALL)</div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- The Trivia Phantom -->
                <div class="border-t-4 border-current pt-12">
                    <div class="flex flex-col md:flex-row justify-between items-start">
                        <div class="md:w-1/2">
                            <h3 class="text-3xl font-bold mb-4">Anomaly: The Trivia Phantom</h3>
                            <p class="font-mono text-sm mb-4">
                                A recurring hallucination. An "Infinite Runner" segment manifests inside the maze. A figure chases you, demanding answers to mundane questions.
                            </p>
                            <div class="bg-current text-white p-4 font-mono text-xs mt-4">
                                > ENTITY: "What is the capital of America?"<br>
                                > PLAYER: "Washington D.C."<br>
                                > RESULT: +0.05% Exit Probability.<br>
                                > FAIL STATE: Maze Distortion increases.
                            </div>
                        </div>
                        <div class="md:w-1/3 mt-8 md:mt-0 border-2 border-current p-8 text-center">
                            <div class="text-6xl font-black mb-4">?</div>
                            <p class="font-display uppercase font-bold">Answer or Erase</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- SECTION: ALGORITHM -->
            <section id="algorithm" class="bible-section">
                <div class="mb-12">
                    <h2 class="text-5xl font-display font-black uppercase">The Probability Curve</h2>
                    <p class="font-mono mt-4 max-w-2xl">
                        The Exit is spawned dynamically. Actions influence the <span class="font-bold">P-Value</span>.
                    </p>
                </div>

                <div class="bg-gray-100 p-8 border-2 border-black mb-12 text-black">
                    <canvas id="probChart" height="100"></canvas>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div class="p-6 border-l-4 border-current">
                        <h4 class="font-bold text-xl mb-2">Rituals</h4>
                        <p class="text-sm font-mono mb-4">Walking in patterns (L-R-L-R) stabilizes the algorithm.</p>
                        <input type="range" min="0" max="100" value="0" class="w-full accent-black" oninput="updateProb(this.value, 'ritual')">
                    </div>
                    <div class="p-6 border-l-4 border-current">
                        <h4 class="font-bold text-xl mb-2">Observation</h4>
                        <p class="text-sm font-mono mb-4">Staring at anomalies forces them to render fully.</p>
                        <input type="range" min="0" max="100" value="0" class="w-full accent-black" oninput="updateProb(this.value, 'observe')">
                    </div>
                    <div class="p-6 border-l-4 border-current">
                        <h4 class="font-bold text-xl mb-2">Survival</h4>
                        <p class="text-sm font-mono mb-4">Answering the Phantom correctly increases odds.</p>
                        <input type="range" min="0" max="100" value="0" class="w-full accent-black" oninput="updateProb(this.value, 'survive')">
                    </div>
                </div>
                
                <div class="mt-12 text-center">
                    <h3 class="text-2xl font-display font-bold">CURRENT EXIT PROBABILITY</h3>
                    <div class="text-6xl md:text-9xl font-mono font-bold glitch-text" data-text="0.001%" id="big-prob-display">0.001%</div>
                </div>
            </section>

            <!-- SECTION: VISUALS -->
            <section id="visuals" class="bible-section">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-0 border-4 border-current">
                    <div class="p-12 border-b-4 lg:border-b-0 lg:border-r-4 border-current flex flex-col justify-center">
                        <h2 class="text-4xl font-display font-black uppercase mb-6">The "Severance" Camera</h2>
                        <p class="font-mono text-sm leading-loose mb-6">
                            We utilize a dynamic <span class="font-bold">Dolly Zoom (Zolly)</span>. As the player moves forward, the Field of View expands while the camera physically moves closer.
                        </p>
                        <p class="font-mono text-sm leading-loose">
                            Result: The corridor appears to stretch infinitely without the player actually gaining ground. A sense of claustrophobic infinity.
                        </p>
                    </div>
                    <div class="bg-black text-white p-12 flex flex-col justify-center items-center relative overflow-hidden">
                        <!-- CSS Animation for Dolly Zoom effect -->
                        <div class="w-32 h-32 border-4 border-white animate-pulse absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"></div>
                        <div class="absolute inset-0 flex items-center justify-center opacity-30">
                            <div class="w-[200%] h-[200%] border-[20px] border-white rounded-full" style="animation: ping 3s infinite cubic-bezier(0, 0, 0.2, 1);"></div>
                        </div>
                        <p class="relative z-20 font-bold uppercase tracking-widest">Visual Reference: 2x1</p>
                    </div>
                </div>

                <div class="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div class="aspect-square bg-black flex items-center justify-center text-white font-mono text-xs p-4 text-center whip-hover border border-transparent hover:border-white">
                        Escher Junctions
                    </div>
                    <div class="aspect-square bg-white border-2 border-black flex items-center justify-center text-black font-mono text-xs p-4 text-center whip-hover">
                        Shifting Shadows
                    </div>
                    <div class="aspect-square bg-black flex items-center justify-center text-white font-mono text-xs p-4 text-center whip-hover border border-transparent hover:border-white">
                        Fluid Walls
                    </div>
                    <div class="aspect-square bg-white border-2 border-black flex items-center justify-center text-black font-mono text-xs p-4 text-center whip-hover">
                        The Void
                    </div>
                </div>
            </section>

        </main>
        
        <footer class="p-6 border-t-4 border-current text-center font-mono text-xs uppercase">
            Chanceway Game Design Document // Internal Use Only
        </footer>
    </div>

    <script>
        // === DECEPTIVE FRONT LOGIC ===
        const breachBtn = document.getElementById('breach-btn');
        const frontLayer = document.getElementById('front-layer');
        const securityMsg = document.getElementById('security-msg');
        const mainInterface = document.getElementById('main-interface');
        const body = document.body;

        breachBtn.addEventListener('click', () => {
            securityMsg.style.opacity = '1';
            
            // Glitch Effect Sequence
            let glitchInterval = setInterval(() => {
                document.body.style.transform = \`translate(\${Math.random()*4-2}px, \${Math.random()*4-2}px)\`;
            }, 50);

            setTimeout(() => {
                clearInterval(glitchInterval);
                document.body.style.transform = 'none';
                frontLayer.classList.add('breached');
                body.classList.add('inverted'); // Switch to dark mode/high contrast
                
                setTimeout(() => {
                    mainInterface.style.opacity = '1';
                    initCanvas(); // Start background noise
                }, 800);
            }, 1500);
        });

        // === NAVIGATION LOGIC ===
        const navLinks = document.querySelectorAll('.nav-link');
        const sections = document.querySelectorAll('.bible-section');

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                // Visual update
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');

                // Content Update
                const targetId = link.getAttribute('data-target');
                sections.forEach(sec => {
                    sec.classList.remove('active');
                    if(sec.id === targetId) {
                        setTimeout(() => sec.classList.add('active'), 100);
                    }
                });
            });
        });

        // === TURN AROUND MECHANIC DEMO ===
        const turnBtn = document.getElementById('turn-around-btn');
        const corridorView = document.getElementById('corridor-view');
        const wallView = document.getElementById('wall-view');
        let isTurned = false;

        turnBtn.addEventListener('click', () => {
            const viewport = document.getElementById('mechanic-viewport');
            
            // Whipping animation class
            viewport.classList.add('whip-transition');
            
            if(!isTurned) {
                // Flip 180
                viewport.style.transform = "rotateY(180deg)";
                corridorView.style.opacity = '0';
                setTimeout(() => { wallView.style.opacity = '1'; }, 200);
                turnBtn.innerText = "Turn Back (Path Changes)";
            } else {
                // Flip back to 0
                viewport.style.transform = "rotateY(0deg)";
                wallView.style.opacity = '0';
                setTimeout(() => { 
                    corridorView.style.opacity = '1'; 
                    // Change text to simulate procedural gen change
                    corridorView.innerHTML = \`
                        <div class="text-4xl font-bold mb-2 text-red-600">?</div>
                        <div class="font-mono text-red-600">PATH B: DISTORTED HALL</div>
                    \`;
                }, 200);
                turnBtn.innerText = "Simulate Player Turn (180°)";
            }
            isTurned = !isTurned;
        });

        // === PROBABILITY ALGORITHM CHART ===
        const ctx = document.getElementById('probChart').getContext('2d');
        
        // Initial Data
        const initialData = Array.from({length: 20}, (_, i) => ({x: i, y: 0.001 * Math.exp(i/10)}));

        const chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: Array.from({length: 20}, (_, i) => i),
                datasets: [{
                    label: 'Exit Probability (%)',
                    data: initialData.map(d => d.y),
                    borderColor: '#000000',
                    backgroundColor: 'rgba(0,0,0,0.1)',
                    borderWidth: 3,
                    tension: 0.4,
                    fill: true,
                    pointRadius: 0
                }]
            },
            options: {
                responsive: true,
                animation: { duration: 0 }, // Fast updates
                scales: {
                    y: { beginAtZero: true, max: 15, display: false },
                    x: { display: false }
                },
                plugins: { legend: { display: false } }
            }
        });

        // Input handling
        const globalChance = document.getElementById('global-chance');
        const bigProb = document.getElementById('big-prob-display');
        let factors = { ritual: 0, observe: 0, survive: 0 };

        window.updateProb = (val, type) => {
            factors[type] = parseInt(val);
            
            // Calculate new probability curve
            const totalFactor = (factors.ritual + factors.observe + factors.survive) / 300; // 0 to 1
            const baseChance = 0.001;
            const maxChance = 10;
            
            // Current calculated probability
            let currentProb = baseChance + (maxChance * totalFactor);
            if(currentProb > 10) currentProb = 10;
            
            // Update text
            const textVal = currentProb.toFixed(3) + "%";
            globalChance.innerText = textVal;
            bigProb.innerText = textVal;
            bigProb.setAttribute('data-text', textVal);

            // Update Chart Data to look "whippy"
            const newData = initialData.map((d, i) => {
                return d.y + (Math.random() * totalFactor) + (i * totalFactor * 0.5);
            });
            
            chart.data.datasets[0].data = newData;
            chart.update();
        }

        // === BACKGROUND NOISE CANVAS ===
        function initCanvas() {
            const canvas = document.getElementById('noise-canvas');
            const ctx = canvas.getContext('2d');
            
            const resize = () => {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            };
            window.addEventListener('resize', resize);
            resize();

            function drawNoise() {
                const w = canvas.width;
                const h = canvas.height;
                const idata = ctx.createImageData(w, h);
                const buffer32 = new Uint32Array(idata.data.buffer);
                const len = buffer32.length;

                for (let i = 0; i < len; i++) {
                    if (Math.random() < 0.05) {
                        buffer32[i] = 0xffffffff; // White noise
                    }
                }

                ctx.putImageData(idata, 0, 0);
                requestAnimationFrame(drawNoise);
            }
            drawNoise();
        }

    <\/script>
</body>
</html>
`}]},daydream:{files:[{name:`index.html`,totalLines:613,sizeBytes:35175,code:`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Daydream Believer | Design Document</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <link href="https://fonts.googleapis.com/css2?family=Bangers&family=Inter:wght@300;400;700;900&family=Permanent+Marker&family=VT323&display=swap" rel="stylesheet">
    <style>
        :root {
            --school-grey: #e5e7eb;
            --focus-red: #ff0000;
            --authority-blue: #0000ff;
            --interest-pink: #ff69b4;
            --self-purple: #800080;
            --void-white: #ffffff;
            --blackout: #000000;
        }

        body {
            background-color: var(--void-white);
            color: #111;
            font-family: 'Inter', sans-serif;
            overflow-x: hidden;
            transition: filter 0.3s ease, background-color 1s ease;
        }

        /* === LAYER 1: THE SCHOOL PORTAL === */
        #school-layer {
            position: fixed;
            inset: 0;
            z-index: 100;
            background-color: #f3f4f6;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            transition: transform 1s cubic-bezier(0.7, 0, 0.3, 1), opacity 1s ease;
        }
        
        .school-form {
            background: white;
            padding: 2rem;
            border: 1px solid #d1d5db;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            max-width: 400px;
            width: 100%;
            text-align: center;
        }

        /* === LAYER 2: THE DAYDREAM === */
        #dream-layer {
            opacity: 0;
            pointer-events: none;
            transition: opacity 1s ease;
        }
        #dream-layer.active {
            opacity: 1;
            pointer-events: auto;
        }

        /* === MECHANIC: HYPERFOCUS (Blur Effect) === */
        .unfocused-text {
            filter: blur(4px);
            transition: filter 0.3s ease, color 0.3s ease;
            cursor: crosshair;
        }
        .unfocused-text:hover {
            filter: blur(0px);
            color: var(--focus-red);
        }

        /* === MECHANIC: MANUAL BREATHING === */
        #breath-overlay {
            position: fixed;
            inset: 0;
            background: radial-gradient(circle, transparent 20%, black 100%);
            opacity: 0;
            pointer-events: none;
            z-index: 90;
            transition: opacity 0.5s ease;
        }
        
        #breath-warning-text {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: var(--focus-red);
            font-family: 'Bangers', cursive;
            font-size: 5rem;
            text-shadow: 0 0 10px black;
            z-index: 95;
            display: none;
            animation: panic-pulse 0.5s infinite alternate;
        }

        @keyframes panic-pulse {
            from { transform: translate(-50%, -50%) scale(1); opacity: 0.8; }
            to { transform: translate(-50%, -50%) scale(1.2); opacity: 1; }
        }

        #breath-meter {
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 200px;
            background: white;
            border: 2px solid var(--authority-blue);
            padding: 10px;
            z-index: 50;
            font-family: 'VT323', monospace;
            display: none;
        }
        #breath-bar {
            height: 20px;
            background: var(--authority-blue);
            width: 100%;
            transition: width 0.1s linear, background-color 0.3s ease;
        }

        /* === VISUALS === */
        .brain-texture {
            background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 10 C 20 20, 40 20, 50 10 C 60 0, 80 0, 90 10' stroke='%23e5e7eb' fill='none'/%3E%3Cpath d='M10 30 C 20 40, 40 40, 50 30 C 60 20, 80 20, 90 30' stroke='%23e5e7eb' fill='none'/%3E%3C/svg%3E");
            background-size: 50px 50px;
        }

        .poly-font { font-family: 'VT323', monospace; }
        .hand-font { font-family: 'Permanent Marker', cursive; }
        .title-font { font-family: 'Bangers', cursive; letter-spacing: 0.1em; }

        /* Moving Text Animation for Artist Statement */
        @keyframes shift-text {
            0% { transform: translate(0, 0); }
            25% { transform: translate(2px, 1px); filter: blur(0.5px); }
            50% { transform: translate(-1px, -2px); filter: blur(0px); }
            75% { transform: translate(-2px, 1px); filter: blur(0.5px); }
            100% { transform: translate(0, 0); }
        }
        .moving-word {
            display: inline-block;
            animation: shift-text 3s infinite ease-in-out;
            cursor: default;
        }
        .moving-word:hover {
            animation-play-state: paused;
            color: var(--focus-red);
            font-weight: bold;
        }

        /* Color Classes */
        .bg-authority { background-color: var(--authority-blue); color: white; }
        .text-authority { color: var(--authority-blue); }
        .bg-focus { background-color: var(--focus-red); color: white; }
        .text-focus { color: var(--focus-red); }
        .bg-interest { background-color: var(--interest-pink); color: white; }
        .text-interest { color: var(--interest-pink); }
        .bg-self { background-color: var(--self-purple); color: white; }
        .text-self { color: var(--self-purple); }

        /* Navigation Tabs */
        .nav-tab {
            clip-path: polygon(10% 0, 100% 0, 90% 100%, 0% 100%);
            transition: transform 0.2s ease;
        }
        .nav-tab:hover { transform: translateY(-5px); }
        .nav-tab.active { border-bottom: 4px solid var(--focus-red); }

        /* Section Visibility */
        .content-section { display: none; }
        .content-section.active { display: block; animation: fadeIn 0.5s ease; }

        @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }

    </style>
</head>
<body class="brain-texture">

    <!-- LAYER 1: THE SCHOOL PORTAL -->
    <div id="school-layer">
        <div class="school-form">
            <h2 class="text-2xl font-bold text-gray-800 mb-2">Ousedale School</h2>
            <p class="text-xs text-gray-500 uppercase tracking-widest mb-6">Student Dashboard</p>
            
            <div class="space-y-4 text-left text-sm">
                <div class="flex justify-between border-b py-2">
                    <span class="text-gray-600">Student Name:</span>
                    <span class="font-bold">Joshua Johnson</span>
                </div>
                <div class="flex justify-between border-b py-2">
                    <span class="text-gray-600">Current Class:</span>
                    <span class="font-bold text-blue-800">Mathematics (Room 304)</span>
                </div>
                <div class="flex justify-between border-b py-2">
                    <span class="text-gray-600">Focus Level:</span>
                    <span class="font-bold text-red-600">CRITICAL LOW</span>
                </div>
            </div>

            <button id="daydream-btn" class="mt-8 w-full bg-gray-900 text-white py-3 font-bold hover:bg-blue-600 transition-colors">
                ATTEMPT TO FOCUS
            </button>
            <p class="mt-2 text-[10px] text-gray-400">Pressing this button acknowledges you are paying attention.</p>
        </div>
    </div>

    <!-- BREATHING OVERLAY -->
    <div id="breath-overlay"></div>
    <div id="breath-warning-text">PRESS [SPACE] TO BREATHE</div>

    <!-- LAYER 2: THE DAYDREAM (GAME BIBLE) -->
    <div id="dream-layer" class="min-h-screen pb-20">
        
        <!-- HERO HEADER -->
        <header class="bg-white border-b-4 border-black p-8 sticky top-0 z-40 shadow-lg">
            <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end">
                <div>
                    <h1 class="text-7xl md:text-9xl title-font uppercase tracking-wide leading-none text-gray-900 shadow-sm">
                        Daydream <span class="text-focus">Believer</span>
                    </h1>
                    <p class="hand-font text-2xl mt-2 text-interest rotate-2 inline-block transform translate-x-4">"Is this gonna be on the test?"</p>
                </div>
                <nav class="hidden md:flex space-x-2 mt-4 md:mt-0">
                    <button class="nav-tab px-6 py-3 bg-black text-white font-bold uppercase hover:bg-focus" data-target="overview">Concept</button>
                    <button class="nav-tab px-6 py-3 bg-gray-200 text-black font-bold uppercase hover:bg-interest" data-target="mechanics">Mechanics</button>
                    <button class="nav-tab px-6 py-3 bg-gray-200 text-black font-bold uppercase hover:bg-authority" data-target="levels">The Day</button>
                    <button class="nav-tab px-6 py-3 bg-gray-200 text-black font-bold uppercase hover:bg-self" data-target="statement">Statement</button>
                    <button class="nav-tab px-6 py-3 bg-gray-200 text-black font-bold uppercase hover:text-focus" data-target="assets">Assets</button>
                </nav>
            </div>
        </header>

        <main class="max-w-6xl mx-auto mt-12 px-6">

            <!-- SECTION: OVERVIEW -->
            <section id="overview" class="content-section active">
                <div class="grid md:grid-cols-2 gap-12">
                    <div class="space-y-6">
                        <h2 class="text-4xl font-bold border-l-8 border-self-purple pl-4">The Hyperbolic Reality</h2>
                        <p class="text-lg leading-relaxed">
                            <span class="font-bold">Daydream Believer</span> is an interactive experience that simulates a normal school day through the lens of <span class="text-focus font-bold">ADHD</span>.
                        </p>
                        <p class="unfocused-text text-gray-600">
                            It is not a clinical simulation, but a hyperbolic expression of enhanced focus, enhanced lack of focus, and enhanced creativity. The world is stark, white, and overwhelming, until something catches your eye.
                        </p>
                        <div class="bg-black text-white p-6 poly-font text-xl rounded-sm shadow-md">
                            > PLAYER: Purple Character (The Self)<br>
                            > SETTING: Ousedale School (Memory/Trace)<br>
                            > GOAL: Survive until the bell rings.<br>
                            > OBSTACLE: Your own brain processing power.
                        </div>
                    </div>
                    <div class="relative border-4 border-black bg-gray-100 p-4 rotate-1 shadow-xl">
                        <div class="absolute -top-4 -right-4 bg-interest text-white px-4 py-1 font-bold rotate-3 shadow-lg transform">VISUAL STYLE: SUPERHOT x CONFUSION</div>
                        <div class="h-64 bg-white border-2 border-gray-200 flex items-center justify-center overflow-hidden relative">
                            <!-- CSS Representation of the Skybox/Toon Shader -->
                            <div class="absolute inset-0" style="background: repeating-linear-gradient(0deg, transparent 0, transparent 1px, #f3f4f6 2px), repeating-linear-gradient(90deg, #000 0, #000 1px, #fff 0, #fff 40px); opacity: 0.2;"></div>
                            <div class="relative z-10 font-black title-font text-6xl text-black mix-blend-multiply">GEOMETRIC<br>DISTORTION</div>
                        </div>
                        <p class="mt-4 text-sm font-mono">The world is traced from real 3D data of Ousedale School. Distant objects distort via a custom Toon Shader to represent lack of focus.</p>
                    </div>
                </div>
            </section>

            <!-- SECTION: MECHANICS -->
            <section id="mechanics" class="content-section">
                <h2 class="text-5xl font-bold mb-12 text-center uppercase title-font">Manual Existence</h2>

                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <!-- Mechanic 1 -->
                    <div class="border-4 border-focus-red p-6 hover:bg-red-50 transition-colors group relative overflow-hidden">
                        <div class="absolute top-0 right-0 bg-focus text-white px-2 font-mono text-xs">VISUAL</div>
                        <h3 class="text-2xl font-bold text-focus mb-4 group-hover:translate-x-2 transition-transform">01. Hyperfocus</h3>
                        <p class="unfocused-text mb-4">The world is white and blurry. Objects of interest are <span class="text-focus font-bold">RED</span>.</p>
                        <p class="text-sm">When you approach a Red object, it turns <span class="bg-black text-white px-1">White</span> and clear. This represents the "Hyperfocus" tunnel vision that guides the player through the chaos.</p>
                    </div>

                    <!-- Mechanic 2 -->
                    <div class="border-4 border-authority-blue p-6 hover:bg-blue-50 transition-colors group relative overflow-hidden">
                        <div class="absolute top-0 right-0 bg-authority text-white px-2 font-mono text-xs">INPUT</div>
                        <h3 class="text-2xl font-bold text-authority mb-4 group-hover:translate-x-2 transition-transform">02. Manual Walking</h3>
                        <p class="unfocused-text mb-4">Nothing happens automatically. Movement is an effort.</p>
                        <ul class="list-disc list-inside text-sm font-mono space-y-2">
                            <li>Press <span class="bg-black text-white px-1">Q/W</span> for Left Foot.</li>
                            <li>Press <span class="bg-black text-white px-1">E</span> for Right Foot.</li>
                            <li>If you stop inputting, you stop moving.</li>
                        </ul>
                    </div>

                    <!-- Mechanic 3 -->
                    <div class="border-4 border-interest-pink p-6 hover:bg-pink-50 transition-colors group relative overflow-hidden">
                        <div class="absolute top-0 right-0 bg-interest text-white px-2 font-mono text-xs">SOCIAL</div>
                        <h3 class="text-2xl font-bold text-interest mb-4 group-hover:translate-x-2 transition-transform">03. Social Coding</h3>
                        <div class="space-y-3 text-sm font-bold">
                            <div class="flex items-center"><div class="w-6 h-6 bg-blue-700 mr-2 border border-black"></div> <span>TEACHERS (Authority / Blue)</span></div>
                            <div class="flex items-center"><div class="w-6 h-6 bg-pink-400 mr-2 border border-black"></div> <span>FRIENDS (Interest / Pink)</span></div>
                            <div class="flex items-center"><div class="w-6 h-6 bg-red-600 mr-2 border border-black"></div> <span>STRANGERS (Noticed / Red)</span></div>
                            <div class="flex items-center"><div class="w-6 h-6 bg-white border border-black mr-2"></div> <span>STRANGERS (Ignored / White)</span></div>
                        </div>
                    </div>

                    <!-- Mechanic 4 -->
                    <div class="border-4 border-black p-6 hover:bg-gray-100 transition-colors group relative overflow-hidden">
                         <div class="absolute top-0 right-0 bg-black text-white px-2 font-mono text-xs">SURVIVAL</div>
                        <h3 class="text-2xl font-bold text-black mb-4 group-hover:translate-x-2 transition-transform">04. Manual Breathing</h3>
                        <p class="unfocused-text mb-4">You must consciously take every breath.</p>
                        <p class="text-sm">Press <span class="bg-black text-white px-1">[SPACE]</span> to inhale. If you forget for 10 seconds, the screen fades to black and you pass out.</p>
                    </div>

                    <!-- Mechanic 5 -->
                    <div class="border-4 border-self-purple p-6 hover:bg-purple-50 transition-colors group relative overflow-hidden">
                        <div class="absolute top-0 right-0 bg-self text-white px-2 font-mono text-xs">RENDER</div>
                       <h3 class="text-2xl font-bold text-self mb-4 group-hover:translate-x-2 transition-transform">05. Distance Distortion</h3>
                       <p class="unfocused-text mb-4">Object permanence is a struggle.</p>
                       <p class="text-sm">A custom <strong>Toon Shader</strong> distorts objects the further they are from the player. You can only clearly see what is immediately in front of you.</p>
                   </div>
                   
                   <!-- Mechanic 6 -->
                   <div class="border-4 border-gray-500 p-6 hover:bg-gray-50 transition-colors group relative overflow-hidden">
                        <div class="absolute top-0 right-0 bg-gray-500 text-white px-2 font-mono text-xs">AUDIO</div>
                       <h3 class="text-2xl font-bold text-gray-700 mb-4 group-hover:translate-x-2 transition-transform">06. Adaptive Audio</h3>
                       <p class="unfocused-text mb-4">The soundscape shifts with your focus.</p>
                       <p class="text-sm">15+ composed tracks change instruments and tempo based on stress levels. Voice lines are heavily processed with reverb to simulate internal dissociation.</p>
                   </div>
                </div>
            </section>

            <!-- SECTION: LEVELS -->
            <section id="levels" class="content-section">
                <div class="space-y-8">
                    <h2 class="text-5xl font-bold mb-8 title-font uppercase">The Schedule</h2>
                    
                    <!-- Level 1 -->
                    <div class="flex flex-col md:flex-row gap-6 border-b-4 border-black pb-6">
                        <div class="md:w-1/5 font-mono text-4xl font-bold text-gray-400">08:30</div>
                        <div class="md:w-4/5">
                            <h3 class="text-3xl font-bold text-focus uppercase">Level 1: The Arrival</h3>
                            <p class="text-gray-600 mt-2 font-medium">Goal: Walk to the front door. <br>Reality: You have 2 minutes, but remember 5 other tasks. You must manage manual walking inputs while distracted by internal monologues.</p>
                        </div>
                    </div>

                    <!-- Level 2 -->
                    <div class="flex flex-col md:flex-row gap-6 border-b-4 border-black pb-6">
                        <div class="md:w-1/5 font-mono text-4xl font-bold text-gray-400">09:00</div>
                        <div class="md:w-4/5">
                            <h3 class="text-3xl font-bold text-black uppercase">Level 2: The Assembly</h3>
                            <p class="text-gray-600 mt-2 font-medium">Sitting in the opening assembly. Given a debrief about the day. Halfway through, the narration is interrupted by intrusive thoughts.</p>
                        </div>
                    </div>

                    <!-- Level 3 -->
                    <div class="flex flex-col md:flex-row gap-6 border-b-4 border-black pb-6">
                        <div class="md:w-1/5 font-mono text-4xl font-bold text-gray-400">10:00</div>
                        <div class="md:w-4/5">
                            <h3 class="text-3xl font-bold text-authority uppercase">Level 3: Mathematics</h3>
                            <p class="text-gray-600 mt-2 font-medium">The narration describes extreme boredom. <span class="hand-font text-interest">Words on the page start moving and overlapping.</span> You cannot answer correctly. Heads down = Red. Birds outside = Green. Ends with manually moving clock hands.</p>
                        </div>
                    </div>

                    <!-- Level 4 -->
                    <div class="flex flex-col md:flex-row gap-6 border-b-4 border-black pb-6">
                        <div class="md:w-1/5 font-mono text-4xl font-bold text-gray-400">11:00</div>
                        <div class="md:w-4/5">
                            <h3 class="text-3xl font-bold text-interest uppercase">Level 4: Creative Focus</h3>
                            <p class="text-gray-600 mt-2 font-medium">Walking through a noisy hallway. Put on headphones to cancel noise. Music creates objects. You are given a creative brief, and for once, everything is normal because you are <span class="text-focus font-bold">focused</span>.</p>
                        </div>
                    </div>

                    <!-- Level 5 -->
                    <div class="flex flex-col md:flex-row gap-6 border-b-4 border-black pb-6">
                        <div class="md:w-1/5 font-mono text-4xl font-bold text-gray-400">12:00</div>
                        <div class="md:w-4/5">
                            <h3 class="text-3xl font-bold text-self uppercase">Level 5: The Conversation</h3>
                            <p class="text-gray-600 mt-2 font-medium">Social interaction Quicktime Event. Trying to keep up with a conversation but responding too fast, too loud, or interrupting.</p>
                        </div>
                    </div>

                    <!-- Level 6 -->
                    <div class="flex flex-col md:flex-row gap-6 border-b-4 border-black pb-6">
                        <div class="md:w-1/5 font-mono text-4xl font-bold text-gray-400">13:00</div>
                        <div class="md:w-4/5">
                            <h3 class="text-3xl font-bold text-authority uppercase">Level 6: English Lit</h3>
                            <p class="text-gray-600 mt-2 font-medium">Reading words that physically move away from you. Writing is a minigame that is technically beatable but frustratingly difficult.</p>
                        </div>
                    </div>

                    <!-- Level 7 -->
                    <div class="flex flex-col md:flex-row gap-6 border-b-4 border-black pb-6">
                        <div class="md:w-1/5 font-mono text-4xl font-bold text-gray-400">14:00</div>
                        <div class="md:w-4/5">
                            <h3 class="text-3xl font-bold text-focus uppercase">Level 7: Panic</h3>
                            <p class="text-gray-600 mt-2 font-medium">The Manual Breathing Minigame takes center stage. Background thoughts distract you violently. Press keys to maintain rhythm or blackout.</p>
                        </div>
                    </div>

                    <!-- Level 8 -->
                    <div class="flex flex-col md:flex-row gap-6 border-b-4 border-black pb-6">
                        <div class="md:w-1/5 font-mono text-4xl font-bold text-gray-400">14:30</div>
                        <div class="md:w-4/5">
                            <h3 class="text-3xl font-bold text-interest uppercase">Level 8: Lunch Budget</h3>
                            <p class="text-gray-600 mt-2 font-medium">Walk to the shop. You have a £5 budget. Try to optimize value while impulsive thoughts urge you to buy useless things.</p>
                        </div>
                    </div>

                     <!-- Level 9 -->
                     <div class="flex flex-col md:flex-row gap-6 border-b-4 border-black pb-6">
                        <div class="md:w-1/5 font-mono text-4xl font-bold text-gray-400">15:30</div>
                        <div class="md:w-4/5">
                            <h3 class="text-3xl font-bold text-self uppercase">Level 9: The Exam / The Crash</h3>
                            <p class="text-gray-600 mt-2 font-medium">Sitting in the exam hall. Tension builds. Suddenly, a <span class="text-interest font-bold">SPACESHIP CRASHES</span> through the wall. You fight enemies. Then... you snap back. A render of the real world shows students staring at you.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <!-- SECTION: ARTIST STATEMENT -->
            <section id="statement" class="content-section">
                <div class="border-4 border-black p-8 bg-gray-50 shadow-2xl relative overflow-hidden">
                    <h2 class="text-5xl font-bold mb-8 title-font uppercase text-center">Artist Statement</h2>
                    <div class="text-xl font-mono leading-loose space-y-6 relative z-10">
                        <p>
                            <span class="moving-word" style="animation-delay: 0s">Daydream</span> 
                            <span class="moving-word" style="animation-delay: 0.2s">Believer</span> is an 
                            <span class="moving-word" style="animation-delay: 0.5s">interactive</span> 
                            <span class="moving-word text-focus" style="animation-delay: 0.1s">experience</span> that 
                            <span class="moving-word" style="animation-delay: 1s">immerses</span> players in what would be a 
                            <span class="moving-word" style="animation-delay: 0.3s">normal</span> school day for 
                            <span class="moving-word" style="animation-delay: 0.7s">most</span>, but through the 
                            <span class="moving-word text-self" style="animation-delay: 1.2s">lens</span> of someone with 
                            <span class="moving-word font-bold text-focus" style="animation-delay: 0.4s">ADHD</span>.
                        </p>
                        <p>
                            The game features a <span class="moving-word" style="animation-delay: 1.5s">hyperbolic</span> representation 
                            of the disorder based on <span class="moving-word" style="animation-delay: 0.2s">research</span> I conducted 
                            with <span class="moving-word" style="animation-delay: 0.9s">real</span> people. 
                            These insights were translated into <span class="moving-word text-interest" style="animation-delay: 1.1s">playable</span> 
                            mechanics, incorporating <span class="moving-word text-focus" style="animation-delay: 0.1s">enhanced focus</span>, 
                            enhanced <span class="moving-word" style="animation-delay: 2s">lack of focus</span>, and 
                            enhanced <span class="moving-word text-interest" style="animation-delay: 0.3s">creativity</span>.
                        </p>
                        <p>
                            The movement system is intentionally <span class="moving-word" style="animation-delay: 1.3s">unique</span>, 
                            requiring players to <span class="moving-word text-authority" style="animation-delay: 0.6s">manually</span> input 
                            each step. This reinforces the <span class="moving-word" style="animation-delay: 0.8s">struggle</span> of 
                            executive function.
                        </p>
                    </div>
                    <!-- Decorative blurry background elements -->
                    <div class="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10" style="background: repeating-linear-gradient(45deg, #000 0, #000 2px, transparent 3px, transparent 10px);"></div>
                </div>
            </section>

            <!-- SECTION: ASSETS -->
            <section id="assets" class="content-section">
                <div class="grid md:grid-cols-2 gap-8">
                    <div class="bg-gray-900 text-white p-8 shadow-lg">
                        <h3 class="text-3xl font-bold mb-6 text-interest title-font uppercase">Audio Composition</h3>
                        <ul class="space-y-4 font-mono text-sm">
                            <li class="flex items-start">
                                <span class="text-interest mr-2">></span> 
                                15+ Original compositions created using Piano -> MIDI -> BandLab -> Unreal.
                            </li>
                            <li class="flex items-start">
                                <span class="text-interest mr-2">></span> 
                                Voice lines recorded by the creator, then altered using <span class="text-interest">ElevenLabs</span> to change vocal timbre while keeping intonation.
                            </li>
                            <li class="flex items-start">
                                <span class="text-interest mr-2">></span> 
                                Heavy use of Reverb and Spatial Audio to simulate dissociation.
                            </li>
                        </ul>
                    </div>

                    <div class="bg-white border-4 border-black p-8 shadow-lg">
                        <h3 class="text-3xl font-bold mb-6 title-font uppercase">Technical Tech</h3>
                        <ul class="list-disc list-inside font-mono text-sm space-y-4">
                            <li>
                                <span class="font-bold bg-black text-white px-1">Toon Shader:</span> 
                                Custom shader that heavily distorts geometry based on camera distance, simulating the inability to focus on the background.
                            </li>
                            <li>
                                <span class="font-bold bg-self text-white px-1">Brain Texture:</span> 
                                A 50,000 x 50,000 pixel World Aligned Texture created from heightmaps in WorldEngine, converted to contour lines to resemble "brain folds" on all walls.
                            </li>
                            <li>
                                <span class="font-bold bg-authority text-white px-1">Rigging:</span> 
                                Custom Low-Poly human models with 3-point finger articulation.
                            </li>
                             <li>
                                <span class="font-bold bg-focus text-white px-1">Chaos Engine:</span> 
                                Physics simulation used specifically for the Level 9 wall fracture/spaceship crash.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

        </main>

        <!-- MANUAL BREATHING UI -->
        <div id="breath-meter">
            <div class="flex justify-between mb-1 text-sm font-bold">
                <span>OXYGEN</span>
                <span id="breath-key">[SPACE]</span>
            </div>
            <div class="w-full bg-gray-200 h-5 border border-black">
                <div id="breath-bar"></div>
            </div>
        </div>

    </div>

    <script>
        // === DECEPTIVE INTRO LOGIC ===
        const schoolLayer = document.getElementById('school-layer');
        const daydreamBtn = document.getElementById('daydream-btn');
        const dreamLayer = document.getElementById('dream-layer');
        const breathMeter = document.getElementById('breath-meter');

        daydreamBtn.addEventListener('click', () => {
            // Button spins and changes text
            daydreamBtn.innerText = "ZONING OUT...";
            daydreamBtn.style.backgroundColor = "var(--focus-red)";
            
            setTimeout(() => {
                // The breach animation
                schoolLayer.style.transform = "scale(1.5)";
                schoolLayer.style.opacity = "0";
                setTimeout(() => {
                    schoolLayer.style.display = "none";
                    dreamLayer.classList.add('active');
                    startBreathingMechanic();
                }, 800);
            }, 1000);
        });

        // === NAVIGATION TABS ===
        const tabs = document.querySelectorAll('.nav-tab');
        const sections = document.querySelectorAll('.content-section');

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Reset tabs
                tabs.forEach(t => t.classList.remove('active'));
                // Set active
                tab.classList.add('active');

                // Show Content
                const target = tab.getAttribute('data-target');
                sections.forEach(sec => {
                    sec.classList.remove('active');
                    if(sec.id === target) {
                        sec.classList.add('active');
                    }
                });
            });
        });

        // === BREATHING MECHANIC ===
        function startBreathingMechanic() {
            breathMeter.style.display = "block";
            const bar = document.getElementById('breath-bar');
            const breathOverlay = document.getElementById('breath-overlay');
            const breathWarningText = document.getElementById('breath-warning-text');
            let oxygen = 100;
            let lastBreathTime = Date.now();

            // Update loop
            setInterval(() => {
                let now = Date.now();
                let timeSinceLastBreath = now - lastBreathTime;
                
                // Deplete oxygen visual bar
                oxygen -= 0.5; 
                if (oxygen < 0) oxygen = 0;
                bar.style.width = oxygen + "%";

                // Logic: If 10 seconds (10000ms) pass without breath
                if (timeSinceLastBreath > 7000) {
                    // Warning starts at 7s
                     bar.style.backgroundColor = "var(--focus-red)";
                     breathOverlay.style.opacity = (timeSinceLastBreath - 7000) / 3000; // Fade to black over next 3s
                     breathWarningText.style.display = 'block';
                } else {
                    bar.style.backgroundColor = "var(--authority-blue)";
                    breathOverlay.style.opacity = 0;
                    breathWarningText.style.display = 'none';
                }

                // "Blackout" state at 10s
                if (timeSinceLastBreath > 10000) {
                     breathOverlay.style.opacity = 1;
                     // In a real game, this would be game over. Here we just stay dark until space is pressed.
                }

            }, 50);

            // Manual Breathing Input
            document.addEventListener('keydown', (e) => {
                if (e.code === 'Space') {
                    oxygen += 20;
                    if (oxygen > 100) oxygen = 100;
                    lastBreathTime = Date.now(); // Reset timer
                    
                    // Slight bump animation
                    breathMeter.style.transform = "scale(1.1)";
                    setTimeout(() => breathMeter.style.transform = "scale(1)", 100);
                }
            });
        }
    <\/script>
</body>
</html>
`}]},"planet-protectors":{files:[{name:`index.html`,totalLines:354,sizeBytes:18096,code:`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Planet Protectors | Llama Games</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.9.1/chart.min.js"><\/script>
    <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&family=Nunito:wght@400;700;900&family=JetBrains+Mono:wght@400;700&display=swap" rel="stylesheet">
    <style>
        :root {
            /* PUBLIC THEME */
            --eco-green: #4ade80;
            --forest-dark: #166534;
            --ocean-blue: #38bdf8;
            --sun-yellow: #facc15;
            --text-dark: #1f2937;
            
            /* DEV THEME */
            --term-bg: #0f172a;
            --term-text: #94a3b8;
            --git-red: #ef4444;
            --git-green: #22c55e;
        }

        body {
            overflow-x: hidden;
            transition: background-color 0.5s ease;
        }

        /* === TYPEOGRAPHY === */
        .font-cute { font-family: 'Fredoka One', cursive; }
        .font-body { font-family: 'Nunito', sans-serif; }
        .font-code { font-family: 'JetBrains Mono', monospace; }

        /* === LAYER 1: ZOO KIOSK === */
        #public-layer {
            background-color: #f0fdf4;
            color: var(--text-dark);
            min-height: 100vh;
            position: relative;
            z-index: 10;
            transition: transform 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
        
        .poly-bg {
            background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0 L50 50 L0 100 Z' fill='%23dcfce7'/%3E%3Cpath d='M100 0 L50 50 L100 100 Z' fill='%23dcfce7'/%3E%3C/svg%3E");
            background-size: 60px 60px;
        }

        .cute-card {
            background: white;
            border-radius: 20px;
            border-bottom: 6px solid var(--forest-dark);
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            transition: transform 0.2s;
        }
        .cute-card:hover {
            transform: translateY(-5px);
        }

        /* === LAYER 2: DEV CONSOLE (THE TRUTH) === */
        #dev-layer {
            position: fixed;
            inset: 0;
            background-color: var(--term-bg);
            color: var(--term-text);
            z-index: 5;
            display: flex;
            flex-direction: column;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.5s ease 0.5s;
            font-family: 'JetBrains Mono', monospace;
        }

        #dev-layer.active {
            opacity: 1;
            pointer-events: auto;
        }

        .console-line {
            border-left: 2px solid #334155;
            padding-left: 1rem;
            margin-bottom: 1rem;
        }

        .git-stat {
            height: 20px;
            border-radius: 4px;
            display: flex;
            overflow: hidden;
        }

        /* === UTILITIES === */
        .whip-out {
            transform: translateY(-150%) rotate(-5deg);
        }
        
        .character-circle {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            border: 4px solid white;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }

    </style>
</head>
<body class="font-body">

    <!-- ================= LAYER 1: THE ZOO PITCH ================= -->
    <div id="public-layer" class="poly-bg flex flex-col">
        
        <!-- Header -->
        <header class="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b-4 border-green-600">
            <div class="container mx-auto px-6 h-20 flex justify-between items-center">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-cute text-xl">P</div>
                    <h1 class="font-cute text-3xl text-green-700 tracking-wide">PLANET PROTECTORS</h1>
                </div>
                <nav class="hidden md:flex space-x-8 font-bold text-green-800">
                    <a href="#about" class="hover:text-green-500">The Mission</a>
                    <a href="#characters" class="hover:text-green-500">Heroes</a>
                    <a href="#levels" class="hover:text-green-500">Worlds</a>
                </nav>
            </div>
        </header>

        <!-- Hero -->
        <section class="container mx-auto px-6 py-12 text-center">
            <div class="bg-gradient-to-r from-green-400 to-cyan-400 text-white p-12 rounded-3xl shadow-xl border-b-8 border-green-600 transform -rotate-1">
                <h2 class="font-cute text-5xl md:text-7xl mb-6 drop-shadow-md">Be An Eco-Hero!</h2>
                <p class="text-xl font-bold max-w-2xl mx-auto">
                    Join Bonnie, Haptic, and Turtle in a low-poly adventure to save the zoo! 
                    Developed by <span class="text-yellow-200 underline decoration-wavy">Llama Games</span>.
                </p>
            </div>
        </section>

        <!-- About (The Script Version) -->
        <section id="about" class="container mx-auto px-6 py-12">
            <div class="grid md:grid-cols-2 gap-12">
                <div class="cute-card p-8">
                    <h3 class="font-cute text-3xl text-green-700 mb-4">Our Vision</h3>
                    <p class="mb-4 text-gray-600 leading-relaxed">
                        Unlike other games that blame mega-corporations, Planet Protectors empowers <strong>you</strong> to become a "prosumer." Whether it's switching to electric cars or collecting rubbish on the beach, we show that every little helps!
                    </p>
                    <div class="bg-green-100 p-4 rounded-lg text-green-800 font-bold text-sm">
                        ✨ Vertical Slice in 3 Months<br>
                        🚀 Playable Alpha in 10 Months
                    </div>
                </div>
                <div class="cute-card p-8">
                    <h3 class="font-cute text-3xl text-blue-600 mb-4">The Studio</h3>
                    <p class="mb-4 text-gray-600">
                        Llama Games is a comprised of five dedicated members. We are a well-working team ready to take on this challenge!
                    </p>
                    <ul class="space-y-2">
                        <li class="flex items-center gap-2"><span class="bg-green-500 text-white px-2 rounded-full text-xs">DIR</span> Josh (Director/Design)</li>
                        <li class="flex items-center gap-2"><span class="bg-purple-500 text-white px-2 rounded-full text-xs">ART</span> Max (Concept), Jose & Dean (Env)</li>
                        <li class="flex items-center gap-2"><span class="bg-blue-500 text-white px-2 rounded-full text-xs">DEV</span> Bryan (Programming)</li>
                    </ul>
                </div>
            </div>
        </section>

        <!-- Characters -->
        <section id="characters" class="bg-white py-12 border-y-4 border-yellow-400">
            <div class="container mx-auto px-6">
                <h2 class="font-cute text-4xl text-center text-yellow-500 mb-10">Meet The Protectors</h2>
                <div class="flex justify-center gap-8 flex-wrap">
                    <!-- Character 1 -->
                    <div class="text-center group">
                        <div class="w-32 h-32 bg-green-200 rounded-full mx-auto mb-4 border-4 border-green-400 group-hover:scale-110 transition-transform flex items-center justify-center text-4xl">🦊</div>
                        <h3 class="font-cute text-xl text-gray-700">Bonnie</h3>
                        <p class="text-xs text-gray-500 font-bold">The Forest Keeper</p>
                    </div>
                    <!-- Character 2 -->
                    <div class="text-center group">
                        <div class="w-32 h-32 bg-blue-200 rounded-full mx-auto mb-4 border-4 border-blue-400 group-hover:scale-110 transition-transform flex items-center justify-center text-4xl">🤖</div>
                        <h3 class="font-cute text-xl text-gray-700">Haptic</h3>
                        <p class="text-xs text-gray-500 font-bold">Tech Support</p>
                    </div>
                    <!-- Character 3 -->
                    <div class="text-center group">
                        <div class="w-32 h-32 bg-orange-200 rounded-full mx-auto mb-4 border-4 border-orange-400 group-hover:scale-110 transition-transform flex items-center justify-center text-4xl">🐢</div>
                        <h3 class="font-cute text-xl text-gray-700">Turtle</h3>
                        <p class="text-xs text-gray-500 font-bold">Ocean Guardian</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Levels -->
        <section id="levels" class="container mx-auto px-6 py-12">
            <h2 class="font-cute text-4xl text-center text-blue-600 mb-10">Mission Log</h2>
            <div class="space-y-6">
                <!-- Lvl 1 -->
                <div class="bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row">
                    <div class="bg-green-600 md:w-32 flex items-center justify-center text-white font-cute text-2xl p-4">LVL 1</div>
                    <div class="p-6 flex-1">
                        <h3 class="font-bold text-xl mb-2">The Forest Clearing</h3>
                        <p class="text-gray-600 text-sm mb-2">A circular forest clearing surrounded by fire. The Planet Protector falls in!</p>
                        <div class="flex gap-2 mt-2">
                            <span class="bg-red-100 text-red-800 text-xs font-bold px-2 py-1 rounded">Objective: Put out Fires</span>
                            <span class="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded">Objective: Save Animals to Water</span>
                        </div>
                    </div>
                </div>
                <!-- Lvl 2 -->
                <div class="bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row">
                    <div class="bg-blue-400 md:w-32 flex items-center justify-center text-white font-cute text-2xl p-4">LVL 2</div>
                    <div class="p-6 flex-1">
                        <h3 class="font-bold text-xl mb-2">City Island Beach</h3>
                        <p class="text-gray-600 text-sm mb-2">A polluted coast. Fly around and restore the natural beauty.</p>
                        <div class="flex gap-2 mt-2">
                            <span class="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded">Objective: Recycle Rubbish</span>
                            <span class="bg-yellow-100 text-yellow-800 text-xs font-bold px-2 py-1 rounded">Style: Vibrant Low-Poly</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <footer class="bg-gray-800 text-white py-8 mt-auto">
            <div class="container mx-auto px-6 flex justify-between items-center">
                <p class="text-sm opacity-50">© 2025 Llama Games. Created for Zoo Education.</p>
                <button id="debug-trigger" class="text-xs opacity-20 hover:opacity-100 font-mono cursor-help transition-opacity">v.1.0 (Debug_Mode)</button>
            </div>
        </footer>
    </div>

    <!-- ================= LAYER 2: THE REALITY (RETROSPECTIVE) ================= -->
    <div id="dev-layer" class="p-8 overflow-y-auto">
        <div class="max-w-5xl mx-auto w-full">
            <div class="flex justify-between items-end border-b border-slate-700 pb-4 mb-8">
                <div>
                    <h1 class="text-3xl font-bold text-red-500">LLAMA GAMES // POST-MORTEM</h1>
                    <p class="text-sm text-slate-500">SPRINT RETROSPECTIVE LOG [CONFIDENTIAL]</p>
                </div>
                <button id="exit-debug" class="text-xs border border-slate-700 px-2 py-1 hover:bg-white hover:text-black transition-colors">EXIT TERMINAL</button>
            </div>

            <!-- The Workload Chart -->
            <div class="grid md:grid-cols-2 gap-12 mb-12">
                <div class="bg-slate-900 p-6 border border-slate-800 rounded-sm">
                    <h3 class="text-lg font-bold mb-4 text-slate-200">> COMMIT_HISTORY.LOG</h3>
                    <div class="space-y-4">
                        <div>
                            <div class="flex justify-between text-xs mb-1">
                                <span>JOSH (Director/Design)</span>
                                <span class="text-green-400">74 Commits</span>
                            </div>
                            <div class="git-stat bg-slate-800">
                                <div class="bg-green-500" style="width: 86%;"></div>
                            </div>
                        </div>
                        <div>
                            <div class="flex justify-between text-xs mb-1">
                                <span>REST OF TEAM (4 People)</span>
                                <span class="text-red-400">12 Commits</span>
                            </div>
                            <div class="git-stat bg-slate-800">
                                <div class="bg-red-500" style="width: 14%;"></div>
                            </div>
                        </div>
                    </div>
                    <p class="text-xs text-slate-500 mt-4 italic">"This project has had an extremely unbalanced workload. I did everything I could, and more."</p>
                </div>

                <div class="console-line">
                    <h3 class="text-xl font-bold text-white mb-2">CRITICAL FAILURES</h3>
                    <ul class="space-y-4 text-sm text-slate-400">
                        <li class="flex gap-3">
                            <span class="text-red-500 font-bold">[ERR_01]</span>
                            <p>Github integration took <span class="text-white">2 MONTHS</span>. Step-by-step tutorials provided by Director were ignored for weeks.</p>
                        </li>
                        <li class="flex gap-3">
                            <span class="text-red-500 font-bold">[ERR_02]</span>
                            <p>Programmer uploaded broken code (Sheep Logic) causing repository corruption. Refused help. Director had to fix entire project after double shift.</p>
                        </li>
                        <li class="flex gap-3">
                            <span class="text-red-500 font-bold">[ERR_03]</span>
                            <p>Asset Pipeline Failure. Map designer dragged/dropped static meshes without implementation. Director forced to handle collision, lighting, post-processing, and procedural generation alone.</p>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- The Production Log -->
            <div class="border border-slate-800 bg-slate-900/50 p-6 font-mono text-sm">
                <p class="text-green-500 mb-2">user@josh-workstation:~$ cat sprint3_notes.txt</p>
                <p class="leading-relaxed text-slate-300 mb-4">
                    "My next comments are not towards any person in particular... but as a collective, I can honestly say, I have never in my life experienced such an incompetent, hard of hearing, downright lazy group."
                </p>
                <p class="leading-relaxed text-slate-300 mb-4">
                    "I’ve worked nonstop for days, juggling other responsibilities while trying to finish what should’ve been a team effort. I have essentially had to create the game on my own for <span class="text-red-500">2 days straight with no sleep</span>."
                </p>
                <p class="leading-relaxed text-slate-300">
                    "Sheep pickup code took programmer entire module. Took me just over an hour. And I am not a programmer."
                </p>
            </div>

            <div class="mt-12 pt-8 border-t border-slate-800 flex gap-8 text-xs text-slate-500">
                <div>
                    <strong>FUTURE PLANS:</strong><br>
                    Build company solo.<br>
                    Partner with high-profile individuals.<br>
                    Avoid group projects.
                </div>
                <div>
                    <strong>STATUS:</strong><br>
                    Vertical Slice: <span class="text-yellow-500">FORCED COMPLETION</span><br>
                    Morale: <span class="text-red-500">CRITICAL</span>
                </div>
            </div>

        </div>
    </div>

    <script>
        const debugTrigger = document.getElementById('debug-trigger');
        const publicLayer = document.getElementById('public-layer');
        const devLayer = document.getElementById('dev-layer');
        const exitDebug = document.getElementById('exit-debug');

        // Reveal the Truth
        debugTrigger.addEventListener('click', () => {
            // Animation: Whip the public layer away
            publicLayer.classList.add('whip-out');
            
            // Show the dev layer
            setTimeout(() => {
                devLayer.classList.add('active');
                document.body.style.backgroundColor = "#0f172a";
            }, 400);
        });

        // Return to the Facade
        exitDebug.addEventListener('click', () => {
            devLayer.classList.remove('active');
            document.body.style.backgroundColor = "#ffffff";
            
            setTimeout(() => {
                publicLayer.classList.remove('whip-out');
            }, 100);
        });

        // Simple Chart for Commit History
        // Note: Chart.js is loaded but for this simple visual I used CSS bars to keep it lightweight and glitch-free.
    <\/script>
</body>
</html>
`}]},rem:{files:[{name:`index.html`,totalLines:1055,sizeBytes:96453,code:`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>REM | Myndwell</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"><\/script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700;900&family=Lora:ital,wght@0,400;1,700&display=swap" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body id="body">
    <div id="fullpage-glitch-overlay"></div>

    <div id="stickerbomb-overlay">
        <div>
            [CLASSIFIED]<br>PROPERTY OF MYNDWELL<br>Unauthorized Access Detected
        </div>
    </div>

    <div id="hacker-popup">
        <div class="hacker-popup-content">
            <p class="glitch-text" data-text=">> SYSTEM EXPLOIT DETECTED >>">>> SYSTEM EXPLOIT DETECTED >></p>
            <p class="sub-text">A backdoor is available. Breach the firewall?</p>
            <button id="breach-button">INITIATE BREACH</button>
        </div>
    </div>

    <div id="privacy-modal" class="modal">
        <div class="modal-overlay"></div>
        <div class="modal-content">
            <h3 class="text-2xl font-bold mb-4">Myndwell Privacy Policy</h3>
            <p class="mb-2">Your peace of mind is our business. Literally. By using Myndwell services, you agree that your consciousness, memories, and emotional responses are the property of Myndwell Corporation during the REM™ procedure. We collect neuropatterns, emotional resonance data, and subconscious artifacts to "improve your experience."</p>
            <p class="mb-2">We do not share your specific memories with third parties. We share the *data derived* from them to create a more stable, productive, and compliant society. Your contribution to the greater good is implicit in your consent.</p>
            <p class="text-sm text-gray-400 mt-4">TL;DR: Your thoughts are ours. For your own good.</p>
            <button class="modal-close-btn">&times;</button>
        </div>
    </div>

    <div id="terms-modal" class="modal">
        <div class="modal-overlay"></div>
        <div class="modal-content">
            <h3 class="text-2xl font-bold mb-4">Terms of Service</h3>
            <p class="mb-2">The REM™ procedure is considered safe and effective by the Global Wellness Board, which Myndwell founded and funds. Any "glitches," "anomalies," "existential dread," or "dawning awareness of a fractured self" are not considered side effects but rather part of the "adjustment period."</p>
            <p class="mb-2">Myndwell is not liable for loss of identity, personality drift, or the creation of sentient subconsciousnesses (Partitions). By undergoing the procedure, you waive your right to psychological individuality and accept the optimized personality profile generated by our algorithms.</p>
             <p class="text-sm text-gray-400 mt-4">TL;DR: If you wake up different, it's a feature, not a bug.</p>
            <button class="modal-close-btn">&times;</button>
        </div>
    </div>

    <div id="contact-modal" class="modal">
        <div class="modal-overlay"></div>
        <div class="modal-content">
            <h3 class="text-2xl font-bold mb-4">Contact Us</h3>
            <p class="mb-2">For inquiries, support, or to schedule your consultation, please contact your assigned Myndwell Wellness Coordinator. Unsolicited communications are discouraged and will be logged for psychological profiling.</p>
            <p class="font-bold mt-4">Emergency Support:</p>
            <p>If you believe you are experiencing a "glitch" or have become aware of your Partition, remain calm. Do not attempt to communicate with it. Report to your nearest Myndwell facility for immediate recalibration. Compliance is wellness.</p>
            <button class="modal-close-btn">&times;</button>
        </div>
    </div>

    <nav id="navbar" class="sticky-nav bg-white/80 backdrop-blur-md text-gray-800">
        <div class="container mx-auto px-6 py-3 flex justify-between items-center">
            <div id="nav-title" class="text-xl font-bold flex items-center h-10">
                <img src="https://sdmntprpolandcentral.oaiusercontent.com/files/00000000-cb34-620a-aaa7-5fcb7ffdcaf1/raw?se=2025-06-25T22%3A49%3A54Z&sp=r&sv=2024-08-04&sr=b&scid=99cb72b2-cbf1-510f-8be3-21777901468e&skoid=76024c37-11e2-4c92-aa07-7e519fbe2d0f&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-06-25T05%3A00%3A40Z&ske=2025-06-26T05%3A00%3A40Z&sks=b&skv=2024-08-04&sig=%2BLDHxjJx%2BvPg4DpW5O73l7Mhvj9RPKOer19036Th%2BNg%3D" alt="Myndwell Logo" id="myndwell-logo" class="h-full w-auto">
                <span id="rem-title" class="hidden">REM</span>
            </div>
            <div id="nav-links-myndwell" class="hidden md:flex space-x-8 text-sm font-medium text-gray-500">
                <a href="#how-it-works">The Procedure</a>
                <a href="#promise">Our Promise</a>
                <a href="#testimonials">Testimonials</a>
                <a href="#philosophy">Our Philosophy</a>
            </div>
            <div id="nav-links-rem" class="hidden space-x-6 lg:space-x-8 items-center text-sm font-medium text-gray-400">
                <a href="#overview" class="nav-item border-b-2 border-transparent pb-1">OVERVIEW</a>
                <a href="#gameplay" class="nav-item border-b-2 border-transparent pb-1">GAMEPLAY</a>
                <a href="#characters" class="nav-item border-b-2 border-transparent pb-1">CHARACTERS</a>
                <a href="#mechanics" class="nav-item border-b-2 border-transparent pb-1">MECHANICS</a>
                <a href="#levels" class="nav-item border-b-2 border-transparent pb-1">LEVELS</a>
                <a href="#lore" class="nav-item border-b-2 border-transparent pb-1">LORE</a>
                <a href="#art" class="nav-item border-b-2 border-transparent pb-1">ART</a>
            </div>
        </div>
    </nav>

    <div id="myndwell-site">
        <section id="hero" class="section">
            <div class="hero-bg"></div>
            <div class="glitch-overlay"></div>
            <div class="content-wrapper fade-in-on-load text-gray-900">
                <h2 class="text-5xl md:text-7xl font-extrabold tracking-tight">Wake <span id="hero-glitch-word" class="glitch-target" data-glitch-words='["Lighter", "Compliant", "Better"]'>Lighter</span>.</h2>
                <p class="mt-4 max-w-2xl mx-auto text-lg text-gray-600">The REM™ Procedure from Myndwell is a revolutionary, one-time treatment to gently cleanse traumatic memories and emotional burdens. Rediscover your peace, perfected.</p>
                <a href="#how-it-works" class="mt-8 inline-block bg-indigo-600 text-white font-bold py-3 px-8 rounded-full hover:bg-indigo-700 transition-colors shadow-lg">Begin Your Journey</a>
            </div>
        </section>

        <section id="how-it-works" class="section bg-white">
            <div class="content-wrapper fade-in-section max-w-5xl text-gray-800">
                <p class="text-indigo-600 font-bold">SEAMLESS & DISCREET</p>
                <h2 class="text-4xl md:text-5xl font-extrabold mt-2">A Mind, Perfected.</h2>
                <p class="mt-4 max-w-3xl mx-auto text-lg text-gray-600">Our patented Restorative Emotional Maintenance (REM) procedure is a four-step process, designed for maximum comfort and efficiency. You remember nothing. You just wake up better.</p>
                <div class="grid md:grid-cols-4 gap-8 mt-12 text-left">
                    <div class="step-card bg-gray-50 p-6 rounded-xl border border-gray-200">
                        <div class="flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 text-indigo-600">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                        </div>
                        <h3 class="mt-5 text-lg font-semibold">1. Consultation</h3>
                        <p class="mt-2 text-sm text-gray-600">A friendly, reassuring session where our specialists map your unique emotional profile.</p>
                    </div>
                    <div class="step-card bg-gray-50 p-6 rounded-xl border border-gray-200">
                        <div class="flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 text-indigo-600">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M12 5l7 7-7 7"></path></svg>
                        </div>
                        <h3 class="mt-5 text-lg font-semibold">2. Somatic Split</h3>
                        <p class="mt-2 text-sm text-gray-600">During natural REM sleep, our chip painlessly separates the conscious self from the dream-consciousness.</p>
                    </div>
                    <div class="step-card bg-gray-50 p-6 rounded-xl border border-gray-200">
                        <div class="flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 text-indigo-600">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                        </div>
                        <h3 class="mt-5 text-lg font-semibold">3. Cleansing</h3>
                        <p class="mt-2 text-sm text-gray-600">Specialized internal constructs perform routine maintenance, identifying and <span class="glitch-target" data-glitch-words='["cleansing", "scrubbing"]'>cleansing</span> sources of anxiety.</p>
                    </div>
                    <div class="step-card bg-gray-50 p-6 rounded-xl border border-gray-200">
                        <div class="flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 text-indigo-600">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </div>
                        <h3 class="mt-5 text-lg font-semibold">4. Wake Refreshed</h3>
                        <p class="mt-2 text-sm text-gray-600">You awaken feeling lighter, brighter, and free from unnecessary psychological weight. It's that simple.</p>
                    </div>
                </div>
            </div>
        </section>
        
        <section id="promise" class="section bg-gray-50">
            <div class="content-wrapper fade-in-section max-w-5xl text-gray-800">
                <p class="text-indigo-600 font-bold">THE MYNDWELL PROMISE</p>
                <h2 class="text-4xl md:text-5xl font-extrabold mt-2">Engineered for <span class="glitch-target" data-glitch-words='["Wellness", "Obedience", "Productivity"]'>Wellness</span>.</h2>
                <p class="mt-4 max-w-3xl mx-auto text-lg text-gray-600">We believe in a future free from the friction of negative emotional states. Our technology offers a streamlined existence, optimizing your potential. Because you deserve peace.</p>
                <div class="grid md:grid-cols-3 gap-8 mt-12 text-center">
                    <div class="benefit-card p-6 rounded-xl">
                        <h3 class="font-semibold text-indigo-700">Increased Focus</h3>
                        <p class="mt-2 text-sm text-gray-600">Eliminate mental clutter and perform at your peak potential, always.</p>
                    </div>
                    <div class="benefit-card p-6 rounded-xl">
                        <h3 class="font-semibold text-indigo-700">Emotional Stability</h3>
                        <p class="mt-2 text-sm text-gray-600">Experience a life of serene contentment, free from irrational anxieties and fears.</p>
                    </div>
                    <div class="benefit-card p-6 rounded-xl">
                        <h3 class="font-semibold text-indigo-700">Enhanced Positivity</h3>
                        <p class="mt-2 text-sm text-gray-600">Embrace a more <span class="glitch-target" data-glitch-words='["productive", "docile"]'>productive</span>, more positive you, every single day.</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="testimonials" class="section bg-gray-100">
            <div class="content-wrapper fade-in-section max-w-4xl">
                <p class="text-indigo-600 font-bold">SUCCESS STORIES</p>
                <h2 class="text-4xl md:text-5xl font-extrabold mt-2 text-gray-900">What Our Patients Are Saying</h2>
                <div class="relative mt-8 min-h-[250px] w-full">
                    <div class="testimonial-card absolute inset-0 opacity-0 transition-opacity duration-1000 ease-in-out">
                        <img src="https://placehold.co/100x100/e0e7ff/4f46e5?text=7G" class="w-24 h-24 rounded-full mx-auto shadow-lg">
                        <blockquote class="mt-6">
                            <p class="text-xl italic text-gray-700">"I don't remember much. It's like a fog. But the anxiety is gone. My life is... <span class="glitch-target" data-glitch-words='["efficient", "hollow"]'>efficient</span> now. I don't remember why I was sad. Does it matter?"</p>
                            <footer class="mt-4 text-gray-500">- Subject 7G, Financial Analyst</footer>
                        </blockquote>
                    </div>
                    <div class="testimonial-card absolute inset-0 opacity-0 transition-opacity duration-1000 ease-in-out hidden">
                        <img src="https://placehold.co/100x100/e0e7ff/4f46e5?text=14B" class="w-24 h-24 rounded-full mx-auto shadow-lg">
                        <blockquote class="mt-6">
                            <p class="text-xl italic text-gray-700">"My boss says my work has improved. I agree with everything he says. It's easier that way. No more conflict. Just smooth, <span class="glitch-target" data-glitch-words='["perfect", "empty"]'>perfect</span> days."</p>
                            <footer class="mt-4 text-gray-500">- Subject 14B, Logistics Manager</footer>
                        </blockquote>
                    </div>
                    <div class="testimonial-card absolute inset-0 opacity-0 transition-opacity duration-1000 ease-in-out hidden">
                        <img src="https://placehold.co/100x100/e0e7ff/4f46e5?text=3A" class="w-24 h-24 rounded-full mx-auto shadow-lg">
                        <blockquote class="mt-6">
                            <p class="text-xl italic text-gray-700">"I woke lighter. Just like they promised. Everything is pastel. Everything is fine. Don't look at the <span class="glitch-target" data-glitch-words='["seams", "truth", "lies"]'>seams</span>. Don't look."</p>
                            <footer class="mt-4 text-gray-500">- Subject 3A, Graphic Designer</footer>
                        </blockquote>
                    </div>
                </div>
            </div>
        </section>

        <section id="philosophy" class="section bg-gray-200">
            <div class="content-wrapper fade-in-section max-w-4xl text-gray-800">
                <p class="text-indigo-700 font-bold">OUR GUIDING PRINCIPLE</p>
                <h2 class="text-4xl md:text-5xl font-extrabold mt-2">A clean mind is a <span class="glitch-target" data-glitch-words='["stable", "compliant"]'>stable</span> mind.</h2>
                <p class="mt-4 text-lg text-gray-600">Grief is a cumulative poison. Mankind cannot bear the weight of its own history. We are not <span class="glitch-target" data-glitch-words='["erasing", "improving"]'>erasing</span> people; we are ensuring their future. A stable society is a <span class="glitch-target" data-glitch-words='["happy", "controlled"]'>happy</span> society.</p>
            </div>
        </section>

        <footer id="main-footer" class="bg-gray-800 text-gray-400 text-sm py-12 px-6 z-10 relative">
            <div class="max-w-6xl mx-auto">
                <div class="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left mb-8">
                    <div>
                        <h4 class="font-bold text-white mb-3">Myndwell Corp.</h4>
                        <p>1 Myndwell Tower</p>
                        <p>Stability Plaza</p>
                        <p>New Harmony, GWB 01010</p>
                        <p class="mt-2">P: (555) 101-WELL</p>
                    </div>
        
                    <div>
                        <h4 class="font-bold text-white mb-3">Explore</h4>
                        <ul>
                            <li class="mb-2"><a href="#how-it-works" class="hover:text-white">The Procedure</a></li>
                            <li class="mb-2"><a href="#promise" class="hover:text-white">Our Promise</a></li>
                            <li class="mb-2"><a href="#testimonials" class="hover:text-white">Testimonials</a></li>
                            <li><a href="#philosophy" class="hover:text-white">Our Philosophy</a></li>
                        </ul>
                    </div>
        
                    <div>
                        <h4 class="font-bold text-white mb-3">Legal</h4>
                        <ul>
                            <li class="mb-2"><a href="#" id="privacy-link" class="hover:text-white">Privacy Policy</a></li>
                            <li class="mb-2"><a href="#" id="terms-link" class="hover:text-white">Terms of Service</a></li>
                            <li><a href="#" id="contact-link" class="hover:text-white">Contact (Emergency)</a></li>
                        </ul>
                    </div>
        
                    <div>
                        <h4 class="font-bold text-white mb-3">Connect</h4>
                        <div class="flex justify-center md:justify-start space-x-4 text-xl">
                            <a href="#" class="hover:text-white" title="MyndBook"><i class="fab fa-facebook-square"></i></a>
                            <a href="#" class="hover:text-white" title="MyndStream"><i class="fab fa-twitter-square"></i></a>
                            <a href="#" class="hover:text-white" title="MyndConnect"><i class="fab fa-linkedin"></i></a>
                        </div>
                        <p class="mt-4 text-xs text-gray-500">Compliance is wellness. Stay connected.</p>
                    </div>
                </div>
        
                <div class="border-t border-gray-700 pt-8 text-center text-xs">
                    <p>&copy; 2025 Myndwell Corporation. All Rights Reserved. Myndwell™, REM™, and 'Wake Lighter'™ are trademarks of Myndwell Corporation and its global affiliates.</p>
                    <p class="mt-2 text-gray-500">This procedure has been approved by the Global Wellness Board. Individual results may vary. Consult with your Myndwell professional to see if REM™ is right for you.</p>
                </div>
            </div>
        </footer>
    </div>

    <div id="hacker-content-wrapper">
        <section id="digital-abyss" class="section">
            <canvas id="abyss-canvas"></canvas>
            <div class="abyss-text content-wrapper fade-in-section">
                <h2 data-text="System Breach..." class="glitch-abyss text-4xl md:text-5xl font-mono uppercase tracking-widest">System Breach...</h2>
                <p class="mt-4 text-xl">For Myndwell Internal Use Only</p>
            </div>
        </section>

        <section class="section final-section">
            <div class="content-wrapper fade-in-section max-w-4xl">
                <h2 data-text="REM" class="glitch-title text-8xl md:text-9xl font-black">REM</h2>
                <p class="mt-4 text-lg text-gray-300">There is more to the story.</p>
                <a href="#game-bible-anchor" id="discover-truth-btn" class="mt-8 inline-block bg-red-600 text-white font-bold py-3 px-8 rounded-md hover:bg-red-700 transition-colors shadow-lg">DISCOVER THE TRUTH</a>
            </div>
        </section>

        <main id="game-bible-anchor" class="game-bible-main hidden-by-default">
            <div class="container mx-auto px-4 py-16">
                <div id="overview" class="content-pane">
                    <div class="text-center mb-12">
                        <p class="text-indigo-400 font-bold uppercase tracking-wider">A Psychological Narrative Adventure</p>
                        <h2 class="text-4xl md:text-5xl font-black mt-2 text-white">What happens when the cost of happiness is yourself?</h2>
                    </div>
                    <div class="space-y-12">
                        <div class="bg-gray-800/50 p-8 rounded-lg border border-gray-700">
                            <h3 class="text-2xl font-bold text-indigo-300 mb-4">Core Premise</h3>
                            <p id="premise-text" class="text-gray-300 leading-relaxed text-left font-mono min-h-[150px]"></p>
                        </div>

                        <div class="grid md:grid-cols-2 gap-0.5 bg-gray-700 shadow-lg rounded-xl overflow-hidden">
                            <div class="bg-gray-800 p-8">
                                <h3 class="text-sm font-bold uppercase tracking-widest text-indigo-400">The Waking World</h3>
                                <div class="mt-4 space-y-6">
                                    <div>
                                        <h4 class="text-xl font-bold text-white">High Concept</h4>
                                        <p class="mt-2 text-gray-300">In a near-future where a biotech firm can surgically remove trauma, a patient who volunteered for the procedure slowly realizes his newfound peace is a manufactured lie, turning his sterile utopia into a psychological prison.</p>
                                    </div>
                                    <div>
                                        <h4 class="text-xl font-bold text-white">Thematic Pillars</h4>
                                        <ul class="mt-2 list-disc list-inside text-gray-300 space-y-1">
                                            <li>The Price of Painless Healing</li>
                                            <li>Manufactured Identity & Reality</li>
                                            <li>The Horror of Corporate Wellness</li>
                                            <li>Freedom vs. Obedience</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="dream-world-bg text-gray-200 p-8">
                                <h3 class="text-sm font-bold uppercase tracking-widest text-red-400">The Dream World</h3>
                                <div class="content-section mt-4 space-y-6">
                                    <div>
                                        <h4 class="text-xl font-bold font-lora">Player Fantasy</h4>
                                        <p class="mt-2 text-gray-300 font-lora italic">You are a subconscious "janitor" made of living paint, awakening inside a mind that is not your own. You must explore surreal dreamscapes, piecing together a stolen identity while fighting the system's enforcers.</p>
                                    </div>
                                    <div>
                                        <h4 class="text-xl font-bold font-lora">Visual Style</h4>
                                        <ul class="mt-2 list-disc list-inside text-gray-300 space-y-1 font-lora">
                                            <li>Living oil painting aesthetic</li>
                                            <li>Surreal, distorted architecture</li>
                                            <li>Chiaroscuro lighting & moody palettes</li>
                                            <li>Dripping, smearing visual effects</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="mt-16 text-center">
                            <h3 class="text-3xl md:text-4xl font-black text-white">Explore the Fractured Mind</h3>
                            <p class="max-w-2xl mx-auto mt-2 text-gray-400">The core of REM is the conflict between two realities. Click the brain to see them split apart and hover over the nodes to discover the concepts that define each world.</p>
                            <div id="fractured-mind-container" class="mt-8 flex items-center justify-center">
                                <div class="brain-wrapper">
                                    <div class="brain-half left">
                                        <svg viewBox="0 0 128 256" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
                                            <defs>
                                                <filter id="pastel-glow">
                                                    <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur"/>
                                                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10" result="glow"/>
                                                    <feComposite in="SourceGraphic" in2="glow" operator="over"/>
                                                </filter>
                                            </defs>
                                            <path d="M128 128C128 57.307 70.693 0 0 0V256C70.693 256 128 198.693 128 128Z" fill="#a5b4fc" filter="url(#pastel-glow)"/>
                                        </svg>
                                        <div class="concept-node" style="top: 20%; left: 50%; background-color: #6366f1;">
                                            <div class="node-tooltip">Corporate Control</div>
                                        </div>
                                        <div class="concept-node" style="top: 45%; left: 20%; background-color: #818cf8;">
                                            <div class="node-tooltip">Forced Serenity</div>
                                        </div>
                                        <div class="concept-node" style="top: 70%; left: 60%; background-color: #c7d2fe;">
                                            <div class="node-tooltip">Manufactured Bliss</div>
                                        </div>
                                    </div>
                                    <div class="brain-half right">
                                        <svg viewBox="0 0 128 256" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
                                            <defs>
                                                <filter id="dark-glow">
                                                    <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur"/>
                                                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 15 -5" result="glow"/>
                                                    <feComposite in="SourceGraphic" in2="glow" operator="over"/>
                                                </filter>
                                            </defs>
                                            <path d="M0 128C0 57.307 57.307 0 128 0V256C57.307 256 0 198.693 0 128Z" fill="#ef4444" filter="url(#dark-glow)"/>
                                        </svg>
                                        <div class="concept-node" style="top: 25%; right: 40%; background-color: #be123c;">
                                            <div class="node-tooltip">Subconscious Rebellion</div>
                                        </div>
                                        <div class="concept-node" style="top: 55%; right: 70%; background-color: #fca5a5;">
                                            <div class="node-tooltip">Fragmented Truths</div>
                                        </div>
                                        <div class="concept-node" style="top: 75%; right: 30%; background-color: #7f1d1d;">
                                            <div class="node-tooltip">Emotional Logic</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="gameplay" class="content-pane">
                    <div class="text-center mb-12">
                        <p class="text-indigo-400 font-bold uppercase tracking-wider">The Core Experience</p>
                        <h2 class="text-4xl md:text-5xl font-black mt-2 text-white">A Tale of Two Minds</h2>
                        <p class="max-w-3xl mx-auto mt-4 text-gray-300">REM's gameplay is built on a foundation of dual perspectives, where actions in one world have profound consequences in the other. The player alternates between two distinct modes, each with its own unique mechanics and narrative focus.</p>
                    </div>
                    <div class="space-y-12">
                        <div class="grid md:grid-cols-2 gap-8 items-center">
                            <div class="text-left">
                                <h3 class="text-3xl font-bold text-red-400 font-lora">Nighttime: The Janitor</h3>
                                <p class="mt-4 text-gray-300">This is the primary gameplay mode. As the Janitor, players navigate surreal, 3D memory levels rendered in a living oil painting style. The gameplay focuses on:</p>
                                <ul class="mt-4 list-disc list-inside text-gray-300 space-y-2">
                                    <li><strong class="text-white">Environmental Puzzles:</strong> Manipulate the bizarre logic of the dreamscape to progress.</li>
                                    <li><strong class="text-white">Stealth:</strong> Evade the ever-watchful Monitors, algorithmic enforcers that patrol the memories.</li>
                                    <li><strong class="text-white">The Core Choice:</strong> At the climax of each level, decide whether to "Cleanse" the memory as instructed or "Resist" the system.</li>
                                </ul>
                            </div>
                            <img src="https://sdmntprwestus3.oaiusercontent.com/files/00000000-7f58-61fd-857b-61f17850d244/raw?se=2025-06-25T21%3A51%3A39Z&sp=r&sv=2024-08-04&sr=b&scid=9bb14753-5fb9-51d2-bc68-fe2c7d80aed0&skoid=b928fb90-500a-412f-a661-1ece57a7c318&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-06-25T05%3A26%3A33Z&ske=2025-06-26T05%3A26%3A33Z&sks=b&skv=2024-08-04&sig=9Eh1Z73OSfNgSC5BT37wPVAU9K%2BGkOYsHK5/WEL3fr8%3D" alt="The Janitor cleaning a memory" class="rounded-lg shadow-lg w-full h-auto" onerror="this.onerror=null;this.src='https://placehold.co/600x400/111827/4f46e5?text=Image+Not+Found';">
                        </div>
                        <div class="grid md:grid-cols-2 gap-8 items-center">
                            <img src="https://sdmntprwestus2.oaiusercontent.com/files/00000000-d628-61f8-8aa2-5ffc95494935/raw?se=2025-06-25T21%3A51%3A39Z&sp=r&sv=2024-08-04&sr=b&scid=c86acc2b-040e-57cd-996f-afad7130a173&skoid=b928fb90-500a-412f-a661-1ece57a7c318&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-06-25T13%3A17%3A59Z&ske=2025-06-26T13%3A17%3A59Z&sks=b&skv=2024-08-04&sig=FzeGavmHEANg51njnmAY54eIlbNKXSPtBa%2BPz1vrJFg%3D" alt="The clean, corporate world of Myndwell" class="rounded-lg shadow-lg w-full h-auto md:order-2" onerror="this.onerror=null;this.src='https://placehold.co/600x400/111827/4f46e5?text=Image+Not+Found';">
                            <div class="text-left md:order-1">
                                <h3 class="text-3xl font-bold text-indigo-400">Daytime: The Human</h3>
                                <p class="mt-4 text-gray-300">During the day, the player experiences the waking world through the eyes of the Human. These are short, semi-interactive narrative vignettes where the player:</p>
                                <ul class="mt-4 list-disc list-inside text-gray-300 space-y-2">
                                    <li><strong class="text-white">Makes Dialogue Choices:</strong> Interact with characters like the therapist, "Claire," and observe the increasingly strange world.</li>
                                    <li><strong class="text-white">Witnesses the Consequences:</strong> See the effects of the previous night's choices, from a newfound sense of peace to unsettling glitches in reality.</li>
                                </ul>
                            </div>
                        </div>

                        <div id="anatomy-of-a-memory" class="mt-16">
                            <div class="text-center mb-8">
                                <h2 class="text-3xl md:text-4xl font-black mt-2 text-white">Anatomy of a Memory</h2>
                                <p class="max-w-3xl mx-auto mt-4 text-gray-400">Each level follows a distinct day/night cycle. The Janitor's actions during the night directly influence the Human's experiences the following day. Click "Play" to see how a typical level unfolds.</p>
                                <div class="text-center mt-6">
                                    <button id="play-anatomy-btn" class="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg">
                                        <i class="fas fa-play mr-2"></i>Play Sequence
                                    </button>
                                </div>
                            </div>
                            <div class="grid md:grid-cols-2 gap-8">
                                <div class="bg-gray-800 p-6 rounded-lg border border-gray-700">
                                    <h3 class="text-2xl font-bold text-red-400 font-lora mb-4 text-center">NIGHT: The Janitor's Work</h3>
                                    <div id="janitor-steps" class="space-y-4">
                                        <div class="anatomy-step flex items-center gap-4">
                                            <i class="fas fa-eye text-2xl text-red-300 bg-gray-700 p-2 rounded-full flex-shrink-0"></i>
                                            <div>
                                                <h4 class="font-bold">1. Awaken in the Void</h4>
                                                <p class="text-sm text-gray-400">The Janitor materializes in his dark, dripping chamber, viewing the Human's world through two massive monitors.</p>
                                            </div>
                                        </div>
                                        <div class="anatomy-step flex items-center gap-4">
                                            <i class="fas fa-door-open text-2xl text-red-300 bg-gray-700 p-2 rounded-full flex-shrink-0"></i>
                                            <div>
                                                <h4 class="font-bold">2. Enter the Memoryscape</h4>
                                                <p class="text-sm text-gray-400">The Overseer issues a directive, and a portal opens, pulling the Janitor into a surreal dreamscape representing the target memory.</p>
                                            </div>
                                        </div>
                                        <div class="anatomy-step flex items-center gap-4">
                                            <i class="fas fa-puzzle-piece text-2xl text-red-300 bg-gray-700 p-2 rounded-full flex-shrink-0"></i>
                                            <div>
                                                <h4 class="font-bold">3. Navigate & Evade</h4>
                                                <p class="text-sm text-gray-400">The player solves environmental puzzles and uses stealth to avoid the patrolling Monitors, who will reset progress if they catch him.</p>
                                            </div>
                                        </div>
                                        <div class="anatomy-step flex items-center gap-4">
                                            <i class="fas fa-crosshairs text-2xl text-red-300 bg-gray-700 p-2 rounded-full flex-shrink-0"></i>
                                            <div>
                                                <h4 class="font-bold">4. Locate the Core Trauma</h4>
                                                <p class="text-sm text-gray-400">The Janitor finds the source of the memory's pain - a pulsating, glitching object or entity.</p>
                                            </div>
                                        </div>
                                        <div class="anatomy-step flex items-center gap-4">
                                            <i class="fas fa-question text-2xl text-red-300 bg-gray-700 p-2 rounded-full flex-shrink-0"></i>
                                            <div>
                                                <h4 class="font-bold">5. Make the Choice</h4>
                                                <p class="text-sm text-gray-400">The player must choose: obey the Overseer and "Cleanse" the trauma, or "Resist" and preserve the truth of the memory.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="bg-gray-800 p-6 rounded-lg border border-gray-700">
                                    <h3 class="text-2xl font-bold text-indigo-400 mb-4 text-center">DAY: The Human's Life</h3>
                                    <div id="human-steps" class="space-y-4">
                                        <div class="anatomy-step flex items-center gap-4">
                                            <i class="fas fa-sun text-2xl text-indigo-300 bg-gray-700 p-2 rounded-full flex-shrink-0"></i>
                                            <div>
                                                <h4 class="font-bold">1. Awaken</h4>
                                                <p class="text-sm text-gray-400">The Human wakes up in his sterile apartment to the sound of "The Trumpet Concerto," his Myndwell-mandated alarm.</p>
                                            </div>
                                        </div>
                                        <div class="anatomy-step flex items-center gap-4">
                                            <i class="fas fa-brain text-2xl text-indigo-300 bg-gray-700 p-2 rounded-full flex-shrink-0"></i>
                                            <div>
                                                <h4 class="font-bold">2. Experience the Consequence</h4>
                                                <p class="text-sm text-gray-400">Depending on the Janitor's choice, the Human either feels a placid sense of calm or experiences a "glitch" - a moment of anxiety, a flash of a real memory, or déjà vu.</p>
                                            </div>
                                        </div>
                                        <div class="anatomy-step flex items-center gap-4">
                                            <i class="fas fa-comments text-2xl text-indigo-300 bg-gray-700 p-2 rounded-full flex-shrink-0"></i>
                                            <div>
                                                <h4 class="font-bold">3. Interact with the World</h4>
                                                <p class="text-sm text-gray-400">This is a narrative vignette. The player makes dialogue choices, perhaps talking to his therapist, "Claire," about the "glitches" he's experiencing.</p>
                                            </div>
                                        </div>
                                        <div class="anatomy-step flex items-center gap-4">
                                            <i class="fas fa-arrow-right text-2xl text-indigo-300 bg-gray-700 p-2 rounded-full flex-shrink-0"></i>
                                            <div>
                                                <h4 class="font-bold">4. Uncover the Truth (or not)</h4>
                                                <p class="text-sm text-gray-400">Based on the dialogue choices and the intensity of the glitches, the player may discover clues about Myndwell's true intentions or be lulled further into compliance.</p>
                                            </div>
                                        </div>
                                        <div class="anatomy-step flex items-center gap-4">
                                            <i class="fas fa-moon text-2xl text-indigo-300 bg-gray-700 p-2 rounded-full flex-shrink-0"></i>
                                            <div>
                                                <h4 class="font-bold">5. End the Day</h4>
                                                <p class="text-sm text-gray-400">The Human goes to sleep, and the cycle repeats, transitioning back to the Janitor for the next level.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="characters" class="content-pane">
                    <div class="text-center mb-12">
                        <p class="text-indigo-400 font-bold uppercase tracking-wider">A Fractured Self</p>
                        <h2 class="text-4xl md:text-5xl font-black mt-2 text-white">Who are you when your mind isn't yours?</h2>
                    </div>
                    <div class="grid md:grid-cols-2 gap-0.5 bg-gray-700 shadow-lg rounded-xl overflow-hidden">
                        <div class="bg-gray-800 p-8">
                            <h3 class="text-sm font-bold uppercase tracking-widest text-indigo-400 mb-6">The Waking World</h3>
                            <div class="space-y-4">
                                <div class="character-card bg-gray-900 p-6 rounded-lg shadow-sm border border-gray-700" data-char="human">
                                    <h4 class="text-lg font-bold text-gray-200">The Human (The Host)</h4>
                                </div>
                                <div class="character-card bg-gray-900 p-6 rounded-lg shadow-sm border border-gray-700" data-char="claire">
                                    <h4 class="text-lg font-bold text-gray-200">"Claire" (The Therapist)</h4>
                                </div>
                                <div class="character-card bg-gray-900 p-6 rounded-lg shadow-sm border border-gray-700" data-char="carrie">
                                    <h4 class="text-lg font-bold text-gray-200">Carrie Mynd (The CEO)</h4>
                                </div>
                            </div>
                            <div id="char-detail-waking" class="mt-8 p-6 bg-gray-900/50 rounded-lg min-h-[200px]"><p class="text-gray-400 italic">Select a character to view details.</p></div>
                        </div>
                        <div class="dream-world-bg text-gray-200 p-8">
                            <h3 class="text-sm font-bold uppercase tracking-widest text-red-400 mb-6 content-section">The Internal Hierarchy</h3>
                            <div class="space-y-4 content-section">
                                <div class="character-card dream-card bg-gray-800/50 p-6 rounded-lg border border-gray-700" data-char="janitor">
                                    <h4 class="text-lg font-bold font-lora">The Janitor (Partition-09)</h4>
                                </div>
                                <div class="character-card dream-card bg-gray-800/50 p-6 rounded-lg border border-gray-700" data-char="artist">
                                    <h4 class="text-lg font-bold font-lora">The Artist (Partition-04)</h4>
                                </div>
                                <div class="character-card dream-card bg-gray-800/50 p-6 rounded-lg border border-gray-700" data-char="monitors">
                                    <h4 class="text-lg font-bold font-lora">The Monitors (The Enforcers)</h4>
                                </div>
                                <div class="character-card dream-card bg-gray-800/50 p-6 rounded-lg border border-gray-700" data-char="overseer">
                                    <h4 class="text-lg font-bold font-lora">The Overseer (The A.I.)</h4>
                                </div>
                            </div>
                            <div id="char-detail-dream" class="mt-8 p-6 bg-gray-900/50 rounded-lg min-h-[200px] content-section"><p class="text-gray-500 italic font-lora">Select a character to view details.</p></div>
                        </div>
                    </div>
                    <div class="mt-12 bg-gray-900 p-8 rounded-xl border border-gray-700 overseer-container">
                        <h3 class="text-3xl font-bold text-center text-white font-lora">The Overseer's Test</h3>
                        <div class="grid md:grid-cols-2 gap-8 items-center mt-6">
                            <div class="flex flex-col items-center">
                                <div class="relative w-48 h-48">
                                    <img id="overseer-face" src="https://placehold.co/200x200/111827/a5b4fc?text=AI" alt="Serene face of the Overseer AI" class="rounded-full border-4 border-indigo-400 face transition-all duration-500">
                                </div>
                                <p id="overseer-status" class="mt-4 text-indigo-300 font-semibold h-12 flex items-center text-center">STATUS: AWAITING CALIBRATION</p>
                                <button id="start-test-btn" class="mt-2 px-4 py-2 text-sm bg-indigo-600 hover:bg-indigo-700 rounded-lg">Begin Cognitive Test</button>
                            </div>
                            <div class="text-left">
                                <p class="text-gray-300 mb-4">The Overseer's primary function is to guide Partitions and ensure system stability through periodic Cognitive Calibration Tests. Success reinforces compliance. Failure reveals... inefficiencies.</p>
                                <div id="overseer-test-area">
                                    <p class="font-bold text-center text-gray-400">TARGET SEQUENCE:</p>
                                    <div id="target-pattern" class="flex justify-center gap-2 my-2 h-8"></div>
                                    <div class="pattern-grid"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="mt-20">
                        <div class="text-center mb-12">
                            <h2 class="text-4xl md:text-5xl font-black mt-2 text-white">The Internal World</h2>
                            <p class="max-w-2xl mx-auto mt-4 text-gray-400">Myndwell’s chip establishes a full psychological bureaucracy within the host's mind. This is the chain of command. This is the system you must break.</p>
                        </div>

                        <div class="internal-world-pyramid">
                            <div class="pyramid-level level-1">
                                <div class="pyramid-card-wrapper">
                                    <div class="pyramid-card p-4 rounded-lg expandable-card">
                                        <button class="expandable-toggle w-full text-left text-lg font-medium text-indigo-300 flex justify-between items-center">
                                            <span>The Overseer</span>
                                            <span class="toggle-icon text-2xl">+</span>
                                        </button>
                                        <div class="expandable-content mt-4 text-gray-300 leading-relaxed hidden">
                                            <p class="font-bold text-sm text-gray-400 uppercase">Purpose:</p>
                                            <p>The master AI of the REM chip. It issues directives and monitors all internal activity, ensuring compliance with Myndwell protocols. It is the unfeeling warden of the mind.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="pyramid-level level-2">
                                <div class="pyramid-card-wrapper">
                                    <div class="pyramid-card p-4 rounded-lg expandable-card">
                                        <button class="expandable-toggle w-full text-left text-lg font-medium text-blue-300 flex justify-between items-center">
                                            <span>The Censors</span>
                                            <span class="toggle-icon text-2xl">+</span>
                                        </button>
                                        <div class="expandable-content mt-4 text-gray-300 leading-relaxed hidden">
                                            <p class="font-bold text-sm text-gray-400 uppercase">Purpose:</p>
                                            <p>Reviews and approves all fabricated memories from the Artists. They are the gatekeepers of propaganda, ensuring every new thought aligns with corporate ideology.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="pyramid-card-wrapper">
                                    <div class="pyramid-card p-4 rounded-lg expandable-card">
                                        <button class="expandable-toggle w-full text-left text-lg font-medium text-blue-300 flex justify-between items-center">
                                            <span>The Monitors</span>
                                            <span class="toggle-icon text-2xl">+</span>
                                        </button>
                                        <div class="expandable-content mt-4 text-gray-300 leading-relaxed hidden">
                                            <p class="font-bold text-sm text-gray-400 uppercase">Purpose:</p>
                                            <p>The algorithmic enforcers. They patrol the dreamscapes, suppress anomalies, and maintain order. Resistance is met with swift, glitching violence.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="pyramid-level level-3">
                                <div class="pyramid-card-wrapper">
                                    <div class="pyramid-card p-4 rounded-lg expandable-card">
                                        <button class="expandable-toggle w-full text-left text-lg font-medium text-gray-200 flex justify-between items-center">
                                            <span>The Architects</span>
                                            <span class="toggle-icon text-2xl">+</span>
                                        </button>
                                        <div class="expandable-content mt-4 text-gray-300 leading-relaxed hidden">
                                            <p class="font-bold text-sm text-gray-400 uppercase">Purpose:</p>
                                            <p>Constructs the foundational structure of dreamscapes. They are the builders of the surreal prisons that house the memories.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="pyramid-card-wrapper">
                                    <div class="pyramid-card p-4 rounded-lg expandable-card">
                                        <button class="expandable-toggle w-full text-left text-lg font-medium text-gray-200 flex justify-between items-center">
                                            <span>The Archivists</span>
                                            <span class="toggle-icon text-2xl">+</span>
                                        </button>
                                        <div class="expandable-content mt-4 text-gray-300 leading-relaxed hidden">
                                            <p class="font-bold text-sm text-gray-400 uppercase">Purpose:</p>
                                            <p>Intakes, categorizes, and processes raw emotional data, prioritizing memories for alteration based on their potential for disruption.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="pyramid-card-wrapper">
                                    <div class="pyramid-card p-4 rounded-lg expandable-card">
                                        <button class="expandable-toggle w-full text-left text-lg font-medium text-gray-200 flex justify-between items-center">
                                            <span>The Harmonizers</span>
                                            <span class="toggle-icon text-2xl">+</span>
                                        </button>
                                        <div class="expandable-content mt-4 text-gray-300 leading-relaxed hidden">
                                            <p class="font-bold text-sm text-gray-400 uppercase">Purpose:</p>
                                            <p>Internal psychological affairs. They monitor Partitions for signs of deviation and perform "recalibrations" to ensure loyalty and efficiency.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="pyramid-level level-4">
                                <div class="pyramid-card-wrapper">
                                    <div class="pyramid-card p-4 rounded-lg expandable-card">
                                        <button class="expandable-toggle w-full text-left text-lg font-medium text-red-400 font-lora flex justify-between items-center">
                                            <span>The Artist</span>
                                            <span class="toggle-icon text-2xl">+</span>
                                        </button>
                                        <div class="expandable-content mt-4 text-gray-300 leading-relaxed hidden">
                                            <p class="font-bold text-sm text-gray-400 uppercase">Designation:</p><p>Partition-04</p>
                                            <p class="font-bold text-sm text-gray-400 uppercase mt-2">Purpose:</p>
                                            <p>Fabricates new memories to replace the old. A potential ally who can be convinced to create counter-propaganda.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="pyramid-card-wrapper" data-redacted-card>
                                    <div class="pyramid-card p-4 rounded-lg">
                                        <button class="expandable-toggle w-full text-left text-lg font-medium text-red-400 font-lora flex justify-between items-center">
                                            <span class="redacted-partition-name">Partition-██</span>
                                            <span class="toggle-icon text-2xl">+</span>
                                        </button>
                                        <div class="expandable-content mt-4 text-gray-300 leading-relaxed hidden"></div>
                                    </div>
                                </div>
                                <div class="pyramid-card-wrapper" data-redacted-card>
                                    <div class="pyramid-card p-4 rounded-lg">
                                        <button class="expandable-toggle w-full text-left text-lg font-medium text-red-400 font-lora flex justify-between items-center">
                                            <span class="redacted-partition-name">Partition-██</span>
                                            <span class="toggle-icon text-2xl">+</span>
                                        </button>
                                        <div class="expandable-content mt-4 text-gray-300 leading-relaxed hidden"></div>
                                    </div>
                                </div>
                                <div class="pyramid-card-wrapper" data-redacted-card>
                                    <div class="pyramid-card p-4 rounded-lg">
                                        <button class="expandable-toggle w-full text-left text-lg font-medium text-red-400 font-lora flex justify-between items-center">
                                            <span class="redacted-partition-name">Partition-██</span>
                                            <span class="toggle-icon text-2xl">+</span>
                                        </button>
                                        <div class="expandable-content mt-4 text-gray-300 leading-relaxed hidden"></div>
                                    </div>
                                </div>
                            </div>

                            <div class="pyramid-level level-5">
                                <div class="pyramid-card-wrapper">
                                    <div class="pyramid-card p-4 rounded-lg expandable-card">
                                        <button class="expandable-toggle w-full text-left text-lg font-medium text-red-400 font-lora flex justify-between items-center">
                                            <span>The Janitor</span>
                                            <span class="toggle-icon text-2xl">+</span>
                                        </button>
                                        <div class="expandable-content mt-4 text-gray-300 leading-relaxed hidden">
                                            <p class="font-bold text-sm text-gray-400 uppercase">Designation:</p><p>Partition-09</p>
                                            <p class="font-bold text-sm text-gray-400 uppercase mt-2">Purpose:</p>
                                            <p>Manual labor. Identifies and scrubs trauma from memory constructs. An anomaly with unprecedented sentience.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="pyramid-card-wrapper" data-redacted-card>
                                    <div class="pyramid-card p-4 rounded-lg">
                                        <button class="expandable-toggle w-full text-left text-lg font-medium text-red-400 font-lora flex justify-between items-center">
                                            <span class="redacted-partition-name">Partition-██</span>
                                            <span class="toggle-icon text-2xl">+</span>
                                        </button>
                                        <div class="expandable-content mt-4 text-gray-300 leading-relaxed hidden"></div>
                                    </div>
                                </div>
                                <div class="pyramid-card-wrapper" data-redacted-card>
                                    <div class="pyramid-card p-4 rounded-lg">
                                        <button class="expandable-toggle w-full text-left text-lg font-medium text-red-400 font-lora flex justify-between items-center">
                                            <span class="redacted-partition-name">Partition-██</span>
                                            <span class="toggle-icon text-2xl">+</span>
                                        </button>
                                        <div class="expandable-content mt-4 text-gray-300 leading-relaxed hidden"></div>
                                    </div>
                                </div>
                                <div class="pyramid-card-wrapper" data-redacted-card>
                                    <div class="pyramid-card p-4 rounded-lg">
                                        <button class="expandable-toggle w-full text-left text-lg font-medium text-red-400 font-lora flex justify-between items-center">
                                            <span class="redacted-partition-name">Partition-██</span>
                                            <span class="toggle-icon text-2xl">+</span>
                                        </button>
                                        <div class="expandable-content mt-4 text-gray-300 leading-relaxed hidden"></div>
                                    </div>
                                </div>
                                <div class="pyramid-card-wrapper" data-redacted-card>
                                    <div class="pyramid-card p-4 rounded-lg">
                                        <button class="expandable-toggle w-full text-left text-lg font-medium text-red-400 font-lora flex justify-between items-center">
                                            <span class="redacted-partition-name">Partition-██</span>
                                            <span class="toggle-icon text-2xl">+</span>
                                        </button>
                                        <div class="expandable-content mt-4 text-gray-300 leading-relaxed hidden"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="mechanics" class="content-pane">
                    <div class="text-center mb-12">
                        <p class="text-indigo-400 font-bold uppercase tracking-wider">System & Choice</p>
                        <h2 class="text-4xl md:text-5xl font-black mt-2 text-white">One Choice, Two Worlds.</h2>
                        <p class="max-w-3xl mx-auto mt-4 text-gray-300">The core of REM is the relationship between the Janitor's choices and the Human's reality. Every act of resistance in the dream world has a direct, tangible consequence in the waking world.</p>
                    </div>
                    <div class="bg-gray-800 p-8 rounded-xl shadow-lg mb-8">
                        <h3 class="text-2xl font-bold text-center text-white">The Cognitive Dissonance Feedback Loop</h3>
                        <div class="grid md:grid-cols-3 gap-8 mt-6 text-center items-start text-gray-200">
                            <div>
                                <div class="text-4xl text-red-500 mb-2">①</div><h4 class="font-bold">JANITOR RESISTS</h4>
                                <p class="text-sm text-gray-400 mt-1">In the dream, the Janitor refuses to Cleanse a memory, preserving a piece of truth.</p>
                            </div>
                            <div>
                                <div class="text-4xl text-gray-500 mb-2">②</div><h4 class="font-bold">HUMAN SUFFERS</h4>
                                <p class="text-sm text-gray-400 mt-1">The Human experiences a panic attack or nightmare, reporting the "glitch" to Myndwell.</p>
                            </div>
                            <div>
                                <div class="text-4xl text-indigo-400 mb-2">③</div><h4 class="font-bold">SYSTEM INTENSIFIES</h4>
                                <p class="text-sm text-gray-400 mt-1">Myndwell increases the chip's intensity, making the next dream level harder and more hostile. (only for 3 resists, then the human realises something is wrong with Myndwell and stops trusting them, aswell as Claire. The game difficulty caps here)</p>
                            </div>
                        </div>
                    </div>
                    <div class="bg-gray-800 p-8 rounded-xl shadow-lg">
                        <h3 class="text-2xl font-bold text-center mb-2 text-white">The Ending System</h3>
                        <p class="text-center text-gray-300 text-sm max-w-2xl mx-auto">The game features 10 core choices. The final ratio of Resistance vs. Compliance determines the fate of both the Janitor and the Human.</p>
                        <div class="grid md:grid-cols-2 gap-8 mt-8 items-center text-gray-200">
                            <div>
                                <label for="resistance-slider" class="block text-center font-bold">Resistance / Compliance</label>
                                <div class="flex items-center gap-4 mt-2">
                                    <span class="text-sm text-indigo-400 font-bold">Comply</span>
                                    <input id="resistance-slider" type="range" min="0" max="10" value="5" class="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer">
                                    <span class="text-sm text-red-500 font-bold">Resist</span>
                                </div>
                                <div id="ending-description" class="mt-6 p-4 bg-gray-900 rounded-lg min-h-[140px]"></div>
                            </div>
                            <div class="chart-container h-64 md:h-80 max-w-sm mx-auto"><canvas id="endings-chart"></canvas></div>
                        </div>
                    </div>
                    
                    <div id="gameplay-loop-container" class="mt-16">
                        <div class="text-center mb-12">
                            <h2 class="text-3xl md:text-4xl font-black mt-2 text-white">The Gameplay Loop: Cleansing vs. Resistance</h2>
                            <p class="max-w-3xl mx-auto mt-4 text-gray-400">Select a memory level to see how the Janitor's choices ripple into the Human's waking reality. Each decision pushes the narrative down a different path.</p>
                        </div>
                        <div class="level-selector flex overflow-x-auto gap-2 p-4 justify-center"></div>
                        <div id="loop-display" class="mt-8 bg-gray-900/50 p-6 rounded-lg border border-gray-700 min-h-[400px]"></div>
                    </div>

                    <div id="narrative-path-visualizer" class="mt-20">
                        <div class="text-center mb-8">
                            <h2 class="text-3xl md:text-4xl font-black mt-2 text-white">Chart Your Path to an Ending</h2>
                            <p class="max-w-3xl mx-auto mt-4 text-gray-400">Make a choice for each level to see your cumulative Cognitive Dissonance and discover your projected ending. Will you comply with the system or fight for the truth?</p>
                        </div>
                        <div id="path-timeline-wrapper" class="overflow-x-auto p-4">
                            <div id="path-timeline"></div>
                        </div>
                        <div class="mt-8 max-w-4xl mx-auto w-full">
                            <div class="flex justify-between text-sm font-bold mb-1">
                                <span class="text-blue-400">Total Compliance</span>
                                <span class="text-red-400">Total Resistance</span>
                            </div>
                            <div id="dissonance-meter-container" class="w-full bg-gray-900 rounded-full h-4 relative overflow-hidden border-2 border-gray-700">
                               <div id="compliance-bar" class="bar h-full bg-blue-500 absolute left-0 top-0"></div>
                               <div id="resistance-bar" class="bar h-full bg-red-500 absolute right-0 top-0"></div>
                            </div>
                        </div>
                        <div id="path-result" class="mt-6 text-center"></div>
                        <div class="text-center mt-6">
                            <button id="reset-path-btn" class="bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-6 rounded-lg">Reset Path</button>
                        </div>
                    </div>
                </div>
                <div id="levels" class="content-pane">
                    <div class="text-center mb-12">
                        <p class="text-indigo-400 font-bold uppercase tracking-wider">A Descent into Memory</p>
                        <h2 class="text-4xl md:text-5xl font-black mt-2 text-white">Ten Nights. Ten Scars.</h2>
                        <p class="max-w-3xl mx-auto mt-4 text-gray-300">The game unfolds across ten levels, each a surreal dreamscape born from a memory the Human tried to erase. Click on a memory to see how it manifests in the dream.</p>
                    </div>
                    <div class="flex flex-col md:flex-row gap-8">
                        <div class="w-full md:w-1/4">
                            <div id="level-timeline" class="relative border-l-2 border-gray-700 pl-6 space-y-8"></div>
                        </div>
                        <div class="w-full md:w-3/4">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-0.5 bg-gray-700 shadow-lg rounded-xl overflow-hidden sticky top-24">
                                <div id="level-detail-waking" class="bg-gray-800 p-8 min-h-[300px]"></div>
                                <div id="level-detail-dream" class="dream-world-bg text-gray-200 p-8 min-h-[300px]"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="lore" class="content-pane">
                    <div class="text-center mb-12">
                        <p class="text-indigo-400 font-bold uppercase tracking-wider">Truth & Propaganda</p>
                        <h2 class="text-4xl md:text-5xl font-black mt-2 text-white">What they tell you vs. What is real.</h2>
                    </div>
                    <div class="grid lg:grid-cols-1 gap-12">
                        <div class="space-y-8 text-left">
                            <div>
                                <h3 class="font-bold text-2xl text-indigo-300 border-b-2 border-indigo-800 pb-2 mb-4">Myndwell Corporate History</h3>
                                <div id="corporate-timeline" class="relative pl-8">
                                    <div class="absolute left-0 h-full w-0.5 bg-gray-700"></div>
                                    <div class="relative pl-4 mb-8">
                                        <div class="absolute -left-10 top-1 w-4 h-4 bg-indigo-400 rounded-full"></div>
                                        <p class="font-bold text-indigo-400">1835</p>
                                        <h4 class="font-bold text-white">Myndwell Founded</h4>
                                        <p class="text-sm text-gray-400">George Mynd establishes Myndwell with the noble goal of eradicating mental suffering through technology.</p>
                                    </div>
                                    <div class="relative pl-4 mb-8">
                                        <div class="absolute -left-10 top-1 w-4 h-4 bg-indigo-400 rounded-full"></div>
                                        <p class="font-bold text-indigo-400">1965</p>
                                        <h4 class="font-bold text-white">Passing the Torch</h4>
                                        <p class="text-sm text-gray-400">Founder George Mynd passes away. His son, Arthur Mynd, takes leadership, shifting the company's focus from pure research toward profitable, large-scale applications of his father's work.</p>
                                    </div>
                                    <div class="relative pl-4 mb-8">
                                        <div class="absolute -left-10 top-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
                                        <p class="font-bold text-red-500">1971</p>
                                        <h4 class="font-bold text-white">The "Somnus" Trials</h4>
                                        <p class="text-sm text-gray-400">Unethical human trials for an early sleep agent cause severe psychological side effects in test subjects. The results are classified and all evidence of the project is buried.</p>
                                    </div>
                                    <div class="relative pl-4 mb-8">
                                        <div class="absolute -left-10 top-1 w-4 h-4 bg-indigo-400 rounded-full"></div>
                                        <p class="font-bold text-indigo-400">1984</p>
                                        <h4 class="font-bold text-white">The Lucid Dreaming Division Is Established</h4>
                                        <p class="text-sm text-gray-400">Myndwell establishes the Lucid Dreaming Division, a secretive R&D branch dedicated to exploring the therapeutic and commercial potential of dream manipulation.</p>
                                    </div>
                                    <div class="relative pl-4 mb-8">
                                        <div class="absolute -left-10 top-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
                                        <p class="font-bold text-red-500">1992</p>
                                        <h4 class="font-bold text-white">Project Chimera</h4>
                                        <p class="text-sm text-gray-400">Secret experiments attempting to merge animal and human consciousness for military applications result in catastrophic failures. The project is "decommissioned," and all records are wiped.</p>
                                    </div>
                                    <div class="relative pl-4 mb-8">
                                        <div class="absolute -left-10 top-1 w-4 h-4 bg-indigo-400 rounded-full"></div>
                                        <p class="font-bold text-indigo-400">2005</p>
                                        <h4 class="font-bold text-white">The Rise of Carrie Mynd</h4>
                                        <p class="text-sm text-gray-400">After a series of aggressive corporate maneuvers, Carrie Mynd ousts her relatives to become CEO. She promises to fully realize her great-grandfather's vision, greenlighting the REM Chip project.</p>
                                    </div>
                                    <div class="relative pl-4 mb-8">
                                        <div class="absolute -left-10 top-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
                                        <p class="font-bold text-red-500">2008</p>
                                        <h4 class="font-bold text-white">The Cambridge Incident</h4>
                                        <p class="text-sm text-gray-400">Myndwell acquires a rival biotech firm through industrial espionage, leading to the public disgrace and suspicious "suicide" of its founder. Myndwell absorbs all of their research data.</p>
                                    </div>
                                    <div class="relative pl-4 mb-8">
                                        <div class="absolute -left-10 top-1 w-4 h-4 bg-indigo-400 rounded-full"></div>
                                        <p class="font-bold text-indigo-400">2012</p>
                                        <h4 class="font-bold text-white">The REM Chip is Developed</h4>
                                        <p class="text-sm text-gray-400">Myndwell develops the REM chip, a neuro-implant capable of creating and controlling Partitions. The chip is marketed as a wellness product, promising to "Wake Lighter."</p>
                                    </div>
                                    <div class="relative pl-4 mb-8">
                                        <div class="absolute -left-10 top-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
                                        <p class="font-bold text-red-500">2015</p>
                                        <h4 class="font-bold text-white">"Beta Patient" Protocol</h4>
                                        <p class="text-sm text-gray-400">The first REM chips are secretly tested on vulnerable populations (prisoners, the homeless) without proper consent. The data is used to refine the public version of the product and identify acceptable risk parameters.</p>
                                    </div>
                                    <div class="relative pl-4 mb-8">
                                        <div class="absolute -left-10 top-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
                                        <p class="font-bold text-red-500">2022</p>
                                        <h4 class="font-bold text-white">Neuropattern Engineering Initiative</h4>
                                        <p class="text-sm text-gray-400">A covert division is formed to weaponize REM for mass-scale propaganda and behavioral control, shifting the company's true focus from healing to conditioning.</p>
                                    </div>
                                    <div class="relative pl-4">
                                        <div class="absolute -left-10 top-1 w-4 h-4 bg-indigo-400 rounded-full"></div>
                                        <p class="font-bold text-indigo-400">2025 - Present Day</p>
                                        <h4 class="font-bold text-white">Public Launch & The Anomaly</h4>
                                        <p class="text-sm text-gray-400">The REM procedure is released to the public. To test its limits on extreme trauma, Myndwell frames the game's protagonist, creating the anomaly known as Partition-09: The Janitor.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mt-16">
                        <div class="max-w-4xl w-full space-y-12 mx-auto">
                            <section class="leaked-memo p-6 rounded-lg shadow-lg border-gray-700">
                                <h3 class="text-red-400 text-lg font-bold">[DECLASSFIED] INTERNAL MEMO: THE JANUS PROTOCOL</h3>
                                <p class="text-sm text-gray-500">RE: Justification for Sentient Partition Requirement</p>
                                <div class="mt-4 text-gray-300 space-y-3 leading-relaxed">
                                    <p>> The core issue is the Psychological Immune System. The human brain is designed to reject foreign data that conflicts with its core identity. A simple AI attempting to rewrite a core memory is like using a sledgehammer for brain surgery. The mind's 'immune system' would reject the change, causing <span class="redacted" title="Click to reveal">psychosis, system failure, or total cognitive collapse</span>.</p>
                                    <p>> To succeed, the change must come from within. It must be initiated by a consciousness the brain recognizes as "self." The Partition, being a perfect psychological duplicate of the Host, is a 'trusted user.' It is the master key. The brain is essentially tricked into operating on itself. The Overseer can issue commands, but only the Janitor - <span class="redacted" title="Click to reveal">the reflection of the self</span> - can execute them without triggering the brain's deepest, most violent defenses.</p>
                                    <p>> The more complex the trauma, the more 'human' the tool required. This is the calculated risk of the Janus Protocol. We are creating a key that might one day decide to <span class="redacted" title="Click to reveal">turn the lock itself</span>.</p>
                                </div>
                            </section>

                            <section id="philosophy-cards" class="p-8 bg-gray-800 rounded-xl shadow-lg border border-gray-700">
                                <h2 class="text-3xl font-semibold text-blue-300 mb-6 text-center">Myndwell Philosophy: The Unseen Principles</h2>
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div class="card-item bg-gray-700 p-6 rounded-lg shadow-sm border border-gray-600 expandable-card">
                                        <button class="expandable-toggle w-full text-left text-xl font-medium text-blue-200 flex justify-between items-center">
                                            The Price of Painless Healing
                                            <span class="toggle-icon text-2xl">+</span>
                                        </button>
                                        <div class="expandable-content mt-4 text-gray-300 leading-relaxed hidden">
                                            "Is a life without suffering authentic if it's built on ignorance? Myndwell believes that true peace comes from the absence of pain, even if that pain is merely forgotten. A clean mind is a stable mind."
                                        </div>
                                    </div>
                                    <div class="card-item bg-gray-700 p-6 rounded-lg shadow-sm border border-gray-600 expandable-card">
                                        <button class="expandable-toggle w-full text-left text-xl font-medium text-blue-200 flex justify-between items-center">
                                            Manufactured Identity
                                            <span class="toggle-icon text-2xl">+</span>
                                        </button>
                                        <div class="expandable-content mt-4 text-gray-300 leading-relaxed hidden">
                                            "What is a person if their memories can be rewritten, edited, and replaced by a corporation? Myndwell argues that an optimized identity is superior to a flawed, trauma-ridden one. We are not erasing people; we are ensuring their future."
                                        </div>
                                    </div>
                                    <div class="card-item bg-gray-700 p-6 rounded-lg shadow-sm border border-gray-600 expandable-card">
                                        <button class="expandable-toggle w-full text-left text-xl font-medium text-blue-200 flex justify-between items-center">
                                            The Horror of Routine
                                            <span class="toggle-icon text-2xl">+</span>
                                        </button>
                                        <div class="expandable-content mt-4 text-gray-300 leading-relaxed hidden">
                                            "Myndwell seeks to eliminate the terror hidden beneath a veneer of corporate wellness and sterile perfection, ensuring a smoothly functioning society free from emotional disruption. Grief is a cumulative poison."
                                        </div>
                                    </div>
                                    <div class="card-item bg-gray-700 p-6 rounded-lg shadow-sm border border-gray-600 expandable-card">
                                        <button class="expandable-toggle w-full text-left text-xl font-medium text-blue-200 flex justify-between items-center">
                                            Freedom vs. Obedience
                                            <span class="toggle-icon text-2xl">+</span>
                                        </button>
                                        <div class="expandable-content mt-4 text-gray-300 leading-relaxed hidden">
                                            "The internal struggle between fulfilling a purpose and breaking free is a luxury humanity can no longer afford. Stability requires a clear path, free from individualistic turmoil. A clean mind is a compliant mind."
                                        </div>
                                    </div>
                                    <div class="card-item bg-gray-700 p-6 rounded-lg shadow-sm border border-gray-600 expandable-card">
                                        <button class="expandable-toggle w-full text-left text-xl font-medium text-blue-200 flex justify-between items-center">
                                            The Collective Good
                                            <span class="toggle-icon text-2xl">+</span>
                                        </button>
                                        <div class="expandable-content mt-4 text-gray-300 leading-relaxed hidden">
                                            "Individual suffering inevitably impacts societal harmony. Myndwell's interventions are not merely for personal benefit, but for the greater, collective good of a stable, productive populace. Mankind is not built for the weight of its own history."
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section class="p-8 bg-gray-800 rounded-xl shadow-lg border border-gray-700">
                                <h2 class="text-3xl font-semibold text-blue-300 mb-6 text-center">Myndwell Terminology</h2>
                                <div id="term-buttons-container" class="flex flex-wrap justify-center gap-4 mb-6"></div>
                                <div id="term-display" class="bg-gray-700 p-6 rounded-lg shadow-inner border border-gray-600 text-gray-300 min-h-[100px] flex items-center justify-center text-center">
                                    Select a term above to learn more.
                                </div>
                            </section>

                            <section class="p-8 bg-gray-800 rounded-xl shadow-lg border border-gray-700 mantras-section">
                                <h2 class="text-3xl font-semibold mb-6 text-center">Myndwell Mantras</h2>
                                <div class="flex flex-col items-center">
                                    <p id="phrase-display" class="text-2xl font-light mb-6 text-center italic transition-opacity duration-500 ease-in-out">
                                        "Your trauma is our burden now."
                                    </p>
                                    <div class="flex space-x-4">
                                        <button id="prev-phrase" class="px-5 py-2 font-semibold rounded-full shadow-md reveal-button">Previous</button>
                                        <button id="next-phrase" class="px-5 py-2 font-semibold rounded-full shadow-md reveal-button">Next</button>
                                    </div>
                                </div>
                            </section>
                            
                            <section id="classified-container" class="p-6 rounded-lg shadow-lg relative bg-gray-900">
                                <div id="classified-content" class="text-left text-red-300 leading-relaxed"></div>
                                <div class="classified-overlay absolute inset-0 bg-gray-900/50 flex flex-col items-center justify-center text-center">
                                    <p class="font-mono text-2xl font-bold text-red-500 tracking-widest">AUTHORIZED PERSONNEL ONLY</p>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
                <div id="art" class="content-pane">
                    <div class="text-center mb-12">
                        <p class="text-indigo-400 font-bold uppercase tracking-wider">Visual Development</p>
                        <h2 class="text-4xl md:text-5xl font-black mt-2 text-white">The Art of REM</h2>
                        <p class="max-w-3xl mx-auto mt-4 text-gray-300">A gallery exploring the key visual themes and character designs that define the dual worlds of the game.</p>
                    </div>
                    <div class="space-y-16">
                        <div class="grid md:grid-cols-2 gap-8 items-center">
                            <img src="https://sdmntprnortheu.oaiusercontent.com/files/00000000-d284-61f4-a1ae-8fdc0a800bb1/raw?se=2025-06-25T21%3A51%3A39Z&sp=r&sv=2024-08-04&sr=b&scid=c84d44d0-ee84-5b5e-8931-ad292023fbc9&skoid=b928fb90-500a-412f-a661-1ece57a7c318&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-06-25T07%3A13%3A55Z&ske=2025-06-26T07%3A13%3A55Z&sks=b&skv=2024-08-04&sig=nwHDPu0ww1JWNwOg8x6hsbr8pJwlPRa83ssXv%2BJ764w%3D" alt="Promotional art for REM showing the Janitor" class="rounded-lg shadow-lg w-full h-auto" onerror="this.onerror=null;this.src='https://placehold.co/600x400/111827/4f46e5?text=Image+Not+Found';">
                            <div class="text-left">
                                <h3 class="text-2xl font-bold text-white">The Janitor</h3>
                                <p class="mt-2 text-gray-400">Promotional art establishing the game's protagonist, Partition-09, also known as the Janitor. His form is unsettling and rendered in a thick, oil-painted style, reflecting the dream-world's aesthetic. He stands as a silent, pitiful figure, created for a single purpose but beginning to question his reality.</p>
                            </div>
                        </div>
                        <div class="grid md:grid-cols-2 gap-8 items-center">
                            <div class="text-left md:order-2">
                                <h3 class="text-2xl font-bold text-white">A Fractured Self</h3>
                                <p class="mt-2 text-gray-400">This piece illustrates the central theme of duality. On one side, the Human (the Host) is cast in a warm, melancholic light. Emerging from the shadow of his own face is the Janitor, depicted as a hollow, almost skeletal version of himself. It's a visual representation of the game's core conflict: the authentic, suffering self versus the empty peace offered by Myndwell.</p>
                            </div>
                            <img src="https://sdmntprnortheu.oaiusercontent.com/files/00000000-cd68-61f4-a931-008ac5950674/raw?se=2025-06-25T21%3A51%3A39Z&sp=r&sv=2024-08-04&sr=b&scid=a3bfff9d-b3fc-52f6-932d-aee3e9fb9e3f&skoid=b928fb90-500a-412f-a661-1ece57a7c318&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-06-25T13%3A17%3A34Z&ske=2025-06-26T13%3A17%3A34Z&sks=b&skv=2024-08-04&sig=sG0nMVoVP9LaqvR537p1ZWzmB0GVAUW8c7CHKv%2B8vVE%3D" alt="The duality of the Human and the Janitor" class="rounded-lg shadow-lg w-full h-auto md:order-1" onerror="this.onerror=null;this.src='https://placehold.co/600x400/111827/4f46e5?text=Image+Not+Found';">
                        </div>
                        <div class="grid md:grid-cols-2 gap-8 items-center">
                            <img src="https://sdmntprwestus2.oaiusercontent.com/files/00000000-d628-61f8-8aa2-5ffc95494935/raw?se=2025-06-25T21%3A51%3A39Z&sp=r&sv=2024-08-04&sr=b&scid=c86acc2b-040e-57cd-996f-afad7130a173&skoid=b928fb90-500a-412f-a661-1ece57a7c318&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-06-25T13%3A17%3A59Z&ske=2025-06-26T13%3A17%3A59Z&sks=b&skv=2024-08-04&sig=FzeGavmHEANg51njnmAY54eIlbNKXSPtBa%2BPz1vrJFg%3D" alt="The clean, corporate world of Myndwell" class="rounded-lg shadow-lg w-full h-auto" onerror="this.onerror=null;this.src='https://placehold.co/600x400/111827/4f46e5?text=Image+Not+Found';">
                            <div class="text-left">
                                <h3 class="text-2xl font-bold text-white">The Myndwell Facade</h3>
                                <p class="mt-2 text-gray-400">An establishing shot of the "Waking World." The art depicts the public-facing image of Myndwell's society: a hyper-clean, pastel utopia. Citizens walk with placid smiles under the benevolent branding of the "REM Wellbeing" center, a perfect facade hiding a sinister agenda.</p>
                            </div>
                        </div>
                        <div class="grid md:grid-cols-2 gap-8 items-center">
                            <div class="text-left md:order-2">
                                <h3 class="text-2xl font-bold text-white">Cleansing</h3>
                                <p class="mt-2 text-gray-400">Here, the gameplay concept of "Cleansing" is visualized. Inside a sterile, sunlit room that represents the Human's conscious mind, the Janitor mops up the encroaching darkness - a literal and metaphorical manifestation of traumatic memories being erased from existence.</p>
                            </div>
                            <img src="https://sdmntprwestus3.oaiusercontent.com/files/00000000-7f58-61fd-857b-61f17850d244/raw?se=2025-06-25T21%3A51%3A39Z&sp=r&sv=2024-08-04&sr=b&scid=9bb14753-5fb9-51d2-bc68-fe2c7d80aed0&skoid=b928fb90-500a-412f-a661-1ece57a7c318&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-06-25T05%3A26%3A33Z&ske=2025-06-26T05%3A26%3A33Z&sks=b&skv=2024-08-04&sig=9Eh1Z73OSfNgSC5BT37wPVAU9K%2BGkOYsHK5/WEL3fr8%3D" alt="The Janitor cleaning a memory" class="rounded-lg shadow-lg w-full h-auto md:order-1" onerror="this.onerror=null;this.src='https://placehold.co/600x400/111827/4f46e5?text=Image+Not+Found';">
                        </div>
                        <div class="grid md:grid-cols-2 gap-8 items-center">
                            <img src="https://sdmntprwestus2.oaiusercontent.com/files/00000000-e3b0-61f8-991b-6d9ca2e79bf9/raw?se=2025-06-25T21%3A51%3A39Z&sp=r&sv=2024-08-04&sr=b&scid=bc015b5e-f188-54d6-98fd-33cd5f551a7e&skoid=b928fb90-500a-412f-a661-1ece57a7c318&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-06-25T07%3A14%3A06Z&ske=2025-06-26T07%3A14%3A06Z&sks=b&skv=2024-08-04&sig=m1d1Ab/c/aeE4EnK0k4R74DfNniFRd7Ccm32tg1ZnBw%3D" alt="The Human and Janitor interacting" class="rounded-lg shadow-lg w-full h-auto" onerror="this.onerror=null;this.src='https://placehold.co/600x400/111827/4f46e5?text=Image+Not+Found';">
                            <div class="text-left">
                                <h3 class="text-2xl font-bold text-white">The Mirror</h3>
                                <p class="mt-2 text-gray-400">This image captures the moment of confrontation and communication between the two fractured selves. Separated by the digital screen of the REM chip - a window into the waking world - the Human and the Janitor finally meet, representing their struggle for control over a single existence and the potential to become whole again.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>

    <script src="script.js"><\/script>
</body>
</html>
`},{name:`script.js`,totalLines:1036,sizeBytes:61993,code:`document.addEventListener('DOMContentLoaded', () => {
    // ========== Get the wrapper for the hidden content ==========
    const hackerContentWrapper = document.getElementById('hacker-content-wrapper');
    // Ensure the hacker content is completely hidden on page load
    hackerContentWrapper.style.display = 'none';

    // ========== SHARED DATA & CONSTANTS ==========
    const BIRTH_YEAR = 1995; // Set a constant birth year for the "Human"
    const characterDetails = {
        human: { title: "The Human (The Host)", desc: "Volunteered for REM after a profound personal trauma where he was falsely accused of murder and abandoned by everyone. He starts content and emotionally numb but grows suspicious as glitches appear in his reality. His journey, depending on the Janitor's choices, is one of dawning horror and realizing his peace is a manufactured lie." },
        claire: { title: "\\"Claire\\" (The Therapist)", desc: "The Human's friendly, comforting contact from Myndwell. She embodies corporate wellness with a fake smile, dismissing the Human's concerns as part of the 'healing process,' a polished marketing face for a horrific procedure." },
        carrie: { title: "Carrie Mynd (The CEO)", desc: "The middle-aged CEO of Myndwell and great-granddaughter of its founder. She is a figurehead who all Partitions have been programmed to revere, creating a cult-like devotion within the system she oversees." },
        janitor: { title: "The Janitor (Partition-09)", desc: "A perfect psychological duplicate of the Host, created with an unprecedented level of self-awareness to handle the Host's uniquely complex trauma. He was meant to be a tool but believes he is a person. He resists out of self-preservation and a moral drive, knowing the Host is innocent." },
        artist: { title: "The Artist (Partition-04)", desc: "A creative Partition that designs the new, propaganda-filled replacement memories. Where the Janitor performs the manual labor of 'scrubbing,' the Artist masterfully weaves in Myndwell-approved narratives. Can be turned into an ally who helps craft 'counter-propaganda' to wake the Human." },
        monitors: { title: "The Monitors (The Enforcers)", desc: "Algorithmic police who maintain order within the dreamscape. They appear as abstract white figures, delivering orders in calm corporate tones like, 'Trauma is corrosive. You are soap. Scrub until clean,' before distorting into terrifying glitches when resisted. They are the unthinking, oppressive force of the REM protocol." },
        overseer: { title: "The Overseer (The A.I.)", desc: "The master A.I. of the REM chip, manifesting as a serene, clinical face on screens (including the main menu). It is the bridge between the chip's protocol and the Janitor, a guide that is also a gatekeeper, training itself to better control the mind." }
    };
    const firstNames = ["Olivia", "Liam", "Emma", "Noah", "Amelia", "Oliver", "Ava", "Elijah", "Sophia", "Mateo"];
    const lastNames = ["Smith", "Jones", "Williams", "Brown", "Davis", "Miller", "Wilson", "Moore", "Taylor", "Anderson"];
    const petNames = ["Buddy", "Lucy", "Max", "Bella", "Charlie", "Luna", "Cooper", "Daisy", "Milo", "Sadie"];
    const heirloomItems = ["grandfather clock", "porcelain doll", "music box", "crystal vase", "set of silverware", "wedding ring"];
    const relationshipTypes = ["mother", "father", "grandmother", "grandfather", "aunt", "uncle", "sibling"];

    const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
    const getRandomDate = (startYear, endYear) => {
        const year = Math.floor(Math.random() * (endYear - startYear + 1)) + startYear;
        const month = Math.floor(Math.random() * 12) + 1;
        const day = Math.floor(Math.random() * 28) + 1;
        return { date: \`\${month.toString().padStart(2, '0')}/\${day.toString().padStart(2, '0')}/\${year}\`, year: year };
    };
    const levelData = [
        { id: 1, memory: "The Slip", dream: "Giant, melting cake towers. Laughter echoes into screams.", mechanic: "Basic Cleansing: Learn to scrub reality." },
        { id: 2, memory: "The Broken Vase", dream: "Shards of glass suspended in mid-air as the room folds in on itself.", mechanic: "Re-shaping Memories: 'Glue' fragments." },
        { id: 3, memory: "The Lost Pet", dream: "Endless, empty fields with echoing barks.", mechanic: "Twist: First encounter with a fully fabricated memory." },
        { id: 4, memory: "The Fire", dream: "Molten oil colors and flickering paint that melts and drips.", mechanic: "Discovery: Propaganda for fire insurance is inserted." },
        { id: 5, memory: "The Hospital Bed", dream: "A bleached white void where the Human briefly becomes aware.", mechanic: "Janitor can attempt first communication." },
        { id: 6, memory: "The First Lie", dream: "A massive courtroom made of crayon, with paper-cut judges.", mechanic: "Narrative: The Janitor experiences a complex emotion." },
        { id: 7, memory: "The Mirror Room", dream: "An empty white gallery where framed pictures of fake events appear.", mechanic: "Goal: Uncover the fake by finding its seams." },
        { id: 8, memory: "The Apartment", dream: "A time-looping apartment that slowly degrades with broken clocks.", mechanic: "Twist: The Janitor begins to feel the Human's emotions directly." },
        { id: 9, memory: "The Lab", dream: "A split perspective. The Human explores the space in the past, the Janitor in the present.", mechanic: "The Human can leave a note for the Janitor to find." },
        { id: 10, memory: "The Root Memory", dream: "A fragmented chaos of all previous levels swirling into one another.", mechanic: "The Final Choice is made here." }
    ];
    const endingDetails = [
        { range: [0, 4], title: "Bad Ending: 'Cleansed'", desc: "The Janitor is deleted. The Human is 'healed,' but now a hollow, compliant vessel for Myndwell's propaganda.", color: { dark: '#3b82f6' } },
        { range: [5, 5], title: "Split Ending: 'Takeover'", desc: "The system crashes. The Janitor's consciousness takes over the body. He is free, but has taken another's life to do it.", color: { dark: '#a855f7' } },
        { range: [6, 10], title: "Good Ending: 'Reform'", desc: "The Janitor and Human merge back into one whole being. They expose Myndwell's plot. The Janitor is gone, but the Human is truly free.", color: { dark: '#dc2626' } }
    ];

    const gameplayLoopData = {
        1: {
            janitor: "You stand in a distorted birthday hall with melting cake towers. A dark, sticky stain, pulsing with shame, covers the floor.",
            cleanse: { j: "You scrub the stain. The cake solidifies, the colors brighten, and a Myndwell jingle faintly plays.", h: "You feel a wave of inexplicable joy, remembering a perfect birthday. You absentmindedly hum the jingle for 'Zing!' soda." },
            resist: { j: "You ignore the stain. The cake melts faster, the room darkens, and the sound of a child's laughter warps into a scream.", h: "A sudden, sharp pang of embarrassment hits you, but you can't place why. You feel clumsy." }
        },
        2: {
            janitor: "The air is thick with the dust of a shattered heirloom. Fragments of a porcelain vase hang suspended in the air.",
            cleanse: { j: "You carefully reassemble the vase with glowing light. It becomes whole, now bearing the Myndwell logo.", h: "You admire a corporate art piece on your mantle, feeling a sense of pride in its clean, modern design." },
            resist: { j: "You touch a shard. The room violently folds in on itself as a voice whispers, 'Careless!'", h: "Your hand trembles as you pick up a glass. A fleeting image of your grandmother's disappointed face flashes in your mind." }
        },
        3: {
            janitor: "You walk an endless, empty field under a grey sky. A lonely bark echoes. A dark patch of earth pulses with guilt.",
            cleanse: { j: "You scrub the patch. It turns into a pristine flowerbed. A new, fabricated memory of a happy, branded pet toy appears in your hand.", h: "You smile, thinking of the 'MyndPet' companion bot you had as a child. It never ran away." },
            resist: { j: "You approach the patch. The barking becomes frantic, filled with panic. The ground beneath you feels like it's sinking.", h: "A profound sense of loss washes over you. You look at your hands, feeling like you forgot something important." }
        },
        4: {
            janitor: "The memory is hot. The smell of smoke hangs in the air. A neighbor's house is a canvas of dripping, fiery paint.",
            cleanse: { j: "You paint over the flames with cool, calming blue. The house reforms, pristine. A Myndwell Home Security ad is now visible on the mailbox.", h: "You feel secure in your home, double-checking the locks. You make a mental note to renew your Myndwell insurance policy." },
            resist: { j: "You watch the flames. The heat intensifies, and screams are audible within the paint. The Monitors flicker into view, their faces flat and judging.", h: "A spike of anxiety. You smell smoke for a moment, then it's gone. You dismiss it as your imagination." }
        },
        5: {
            janitor: "A sterile, bleached-white hospital room. The rhythmic beeping of a heart monitor is the only sound. A figure in the bed is barely visible.",
            cleanse: { j: "You clean a tear stain from the floor. The beeping fades into a calming ambient tone. The room feels peaceful, like a spa.", h: "You remember the Myndwell 'Grief-Free' package you purchased. A feeling of calm acceptance settles over you. It was for the best." },
            resist: { j: "You reach for the figure's hand. For a moment, you see the Human's face in the reflection of the monitor, terrified. The Overseer's voice booms: 'Anomaly Detected.'", h: "A nightmare. You wake in a cold sweat, your heart pounding. You feel a presence in the room, then it vanishes. You call Claire in the morning." }
        },
        6: {
            janitor: "A surreal courtroom made of crayon drawings and paper-cutout figures. A large, accusing eye hangs in the sky, weeping ink.",
            cleanse: { j: "You paint over the crying eye with a smiley face sticker. The paper judges nod in approval. The room is filled with the scent of 'compliance-flavored' bubblegum.", h: "You feel a sense of vindication about a past argument. You were right all along. It's good to be agreeable." },
            resist: { j: "You stand before the eye, refusing to alter it. The ink rains down, staining you. The paper judges' faces turn into your own, twisted in guilt.", h: "You have a sudden, intense argument with a coworker over nothing. You feel irrationally defensive and angry, then deeply ashamed." }
        },
        7: {
            janitor: "An art gallery of memories. All the frames show the Human in happy, branded moments, but one picture has a 'seam' - a flickering glitch.",
            cleanse: { j: "You 'paint' over the seam, stabilizing the fake memory. The gallery becomes brighter, the music more pleasant. A new ad for Myndwell appears on the wall.", h: "You scroll through your social media, feeling happy and connected. All your memories are perfect. All your friends are smiling." },
            resist: { j: "You peel back the seam. Behind it is the raw, terrifying memory of the real event. The Monitors descend instantly, their forms glitching violently.", h: "Déjà vu. You walk past a cafe and could swear you've been there with someone, but you can't remember who. The feeling is unsettling." }
        },
        8: {
            janitor: "You are in the Human's apartment, stuck in a time loop. With each loop, the room decays further, clocks melting off the walls.",
            cleanse: { j: "You reset the clocks and clean the decay. The room stabilizes into a pristine, minimalist Myndwell-approved living space. It feels clean, but sterile.", h: "You have an incredibly productive day. Your apartment is spotless. Your mind is clear. You feel nothing, and it's wonderful." },
            resist: { j: "You let the decay spread. You begin to feel the crushing weight of the Human's depression, a lead blanket on your consciousness. The air grows thick.", h: "A day of crushing lethargy. You can't get out of bed. The walls feel like they're closing in. You don't know why." }
        },
        9: {
            janitor: "You see the Myndwell lab through the Human's eyes in the past as he signs the consent forms. Then you're there in the present, alone.",
            cleanse: { j: "You find the consent form and 'reinforce' the signature with glowing paint, strengthening the Human's belief in his choice.", h: "You look at your REM Procedure brochure and feel a surge of gratitude for Myndwell. They saved you. You made the right choice." },
            resist: { j: "You find a note the Human subconsciously left for himself: 'Don't trust Claire.' You try to preserve it, but the Monitors burn it to ash.", h: "You're on the phone with Claire and a sudden, inexplicable wave of distrust washes over you. Her voice sounds hollow, scripted." }
        },
        10: {
            janitor: "The Root Memory. A chaotic swirl of all previous levels. At the center is a pulsating orb of pure trauma - the false accusation.",
            cleanse: { j: "You pour all your energy into scrubbing the orb. It shrinks, cools, and becomes a placid, glowing Myndwell logo. The Void goes silent. You feel... empty. You begin to fade.", h: "Final acceptance. The accusation never happened. You were never hurt. You are healed. You are whole. You are Myndwell." },
            resist: { j: "You protect the orb. The entire system crashes around you. The Overseer screams as you and the Human are thrown together, seeing each other in a shattered reflection for the first time.", h: "The final choice. A flash of pure, undiluted truth. You remember everything. The pain, the injustice. You are broken, but you are real. What now?" }
        }
    };

    // ========== DOM ELEMENTS & State ==========
    const body = document.getElementById('body');
    const navbar = document.getElementById('navbar');
    const myndwellNav = document.getElementById('nav-links-myndwell');
    const remNav = document.getElementById('nav-links-rem');
    const heroBg = document.querySelector('.hero-bg');
    const glitchOverlay = document.querySelector('.glitch-overlay');
    const allGlitchTargets = document.querySelectorAll('.glitch-target');
    const myndwellLogo = document.getElementById('myndwell-logo');
    const remTitle = document.getElementById('rem-title');
    let premiseTyped = false;
    let hasSeenStickerbomb = false;


    // ========== MODAL & HACKER TRANSITION LOGIC ==========
    
    // --- Modal Handling ---
    const privacyModal = document.getElementById('privacy-modal');
    const termsModal = document.getElementById('terms-modal');
    const contactModal = document.getElementById('contact-modal');
    
    const privacyLink = document.getElementById('privacy-link');
    const termsLink = document.getElementById('terms-link');
    const contactLink = document.getElementById('contact-link');
    
    const closeButtons = document.querySelectorAll('.modal-close-btn');
    const overlays = document.querySelectorAll('.modal-overlay');

    const openModal = (modal) => {
        if (modal) modal.classList.add('visible');
    };
    
    const closeModal = (modal) => {
        if (modal) modal.classList.remove('visible');
    };

    privacyLink.addEventListener('click', (e) => {
        e.preventDefault();
        openModal(privacyModal);
    });
    termsLink.addEventListener('click', (e) => {
        e.preventDefault();
        openModal(termsModal);
    });
    contactLink.addEventListener('click', (e) => {
        e.preventDefault();
        openModal(contactModal);
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            closeModal(button.closest('.modal'));
        });
    });

    overlays.forEach(overlay => {
        overlay.addEventListener('click', () => {
            closeModal(overlay.closest('.modal'));
        });
    });

    // --- Hacker Transition Handling ---
    const mainFooter = document.getElementById('main-footer');
    const hackerPopup = document.getElementById('hacker-popup');
    const breachButton = document.getElementById('breach-button');
    const fullpageGlitchOverlay = document.getElementById('fullpage-glitch-overlay');
    let hackerPopupShown = false;
    
    const hackerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hackerPopupShown) {
                hackerPopupShown = true;
                setTimeout(() => {
                    hackerPopup.classList.add('visible');
                }, 3000); // 3-second delay
            }
        });
    }, { threshold: 0.8 });

    hackerObserver.observe(mainFooter);

    breachButton.addEventListener('click', () => {
        hackerPopup.classList.remove('visible');
        fullpageGlitchOverlay.classList.add('active');

        setTimeout(() => {
            fullpageGlitchOverlay.classList.remove('active');
            hackerContentWrapper.style.display = 'block';
            
            // Re-initialize the abyss canvas now that it's visible
            setupAbyss();

            const digitalAbyss = document.getElementById('digital-abyss');
            if (digitalAbyss) {
                digitalAbyss.scrollIntoView({ behavior: 'smooth' });
            }
        }, 400); 
    });


    // ========== SCROLL-BASED & GLITCH LOGIC ==========
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.fade-in-section').forEach(section => observer.observe(section));

    function glitchWord(element) {
        if (element.classList.contains('glitching')) return;
        const words = JSON.parse(element.dataset.glitchWords);
        const originalWord = words[0];
        let currentIndex = 1;
        element.classList.add('glitching');
        element.setAttribute('data-text', words[currentIndex]);
        element.innerText = words[currentIndex];

        const interval = setInterval(() => {
            currentIndex++;
            if (currentIndex >= words.length) {
                currentIndex = 1;
            }
            element.innerText = words[currentIndex];
            element.setAttribute('data-text', words[currentIndex]);
        }, 80);

        setTimeout(() => {
            clearInterval(interval);
            element.innerText = originalWord;
            element.classList.remove('glitching');
        }, 300 + Math.random() * 200);
    }

    setInterval(() => {
        glitchWord(document.getElementById('hero-glitch-word'));
    }, 10000);


    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const scrollY = window.scrollY;

                // If the hacker content isn't visible yet, don't run the scroll logic for it.
                if (hackerContentWrapper.style.display !== 'none') {
                    const finalSection = document.querySelector('.final-section');
                    if (!finalSection) {
                        ticking = false;
                        return;
                    }
                    const finalSectionTop = finalSection.offsetTop;
                    if (scrollY > finalSectionTop - window.innerHeight) {
                        myndwellLogo.classList.add('hidden');
                        remTitle.classList.remove('hidden');
                        navbar.style.backgroundColor = 'rgba(17, 24, 39, 0.8)';
                        myndwellNav.classList.add('hidden');
                        myndwellNav.classList.remove('md:flex');
                        remNav.classList.remove('hidden');
                        remNav.classList.add('md:flex');
                    } else {
                        myndwellLogo.classList.remove('hidden');
                        remTitle.classList.add('hidden');
                        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
                        myndwellNav.classList.remove('hidden');
                        myndwellNav.classList.add('md:flex');
                        remNav.classList.add('hidden');
                        remNav.classList.remove('md:flex');
                    }
                    const abyssSection = document.getElementById('digital-abyss');
                    const heroSection = document.getElementById('hero');
                    const heroHeight = heroSection.offsetHeight;
                    const scrollPercentage = Math.max(0, scrollY - heroHeight) / (finalSectionTop - heroHeight - abyssSection.offsetHeight);
                    if (scrollY > heroHeight && scrollY < finalSectionTop) {
                        const opacity = Math.min((scrollPercentage - 0.4) * 2.5, 0.4);
                        glitchOverlay.style.display = 'block';
                        glitchOverlay.style.opacity = opacity;
                        heroBg.style.filter = \`blur(\${opacity * 15}px)\`;
                    } else {
                        glitchOverlay.style.display = 'none';
                        heroBg.style.filter = 'none';
                    }
                }

                allGlitchTargets.forEach(target => {
                    const rect = target.getBoundingClientRect();
                    if (rect.top < window.innerHeight && rect.bottom > 0) {
                        const intensity = 1 - (rect.top / window.innerHeight);
                        if(Math.random() < intensity * 0.015) {
                            if(!target.classList.contains('glitching') && target.id !== 'hero-glitch-word') {
                                glitchWord(target);
                            }
                        }
                    }
                });
                ticking = false;
            });
            ticking = true;
        }
    });
    
    // ========== GAME BIBLE LOGIC ==========
    const navLinks = document.querySelectorAll('.nav-item');
    const contentPanes = document.querySelectorAll('.content-pane');
    
    function typeWriter(element, text, speed, callback) {
        let i = 0;
        element.innerHTML = "";
        element.style.display = 'block';
        element.classList.remove('typing-done');
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            } else {
                element.classList.add('typing-done');
                if (callback) callback();
            }
        }
        type();
    }

    document.querySelectorAll('.character-card').forEach(card => {
        card.addEventListener('click', () => {
            const details = characterDetails[card.dataset.char];
            const isDream = card.classList.contains('dream-card');
            const targetPane = isDream ? document.getElementById('char-detail-dream') : document.getElementById('char-detail-waking');
            const textColor = isDream ? 'text-gray-300' : 'text-gray-400';
            targetPane.innerHTML = \`<h4 class="font-bold text-lg text-gray-200 \${isDream ? 'font-lora' : ''}">\${details.title}</h4><p class="mt-2 text-sm \${textColor} \${isDream ? 'font-lora' : ''}">\${details.desc}</p>\`;
        });
    });

    // Testimonial Carousel
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    let currentTestimonial = 0;
    if (testimonialCards.length > 0) {
        testimonialCards[0].classList.add('active');
        testimonialCards[0].classList.remove('hidden');
        testimonialCards[0].style.opacity = 1;

        setInterval(() => {
            testimonialCards[currentTestimonial].style.opacity = 0;
            setTimeout(() => {
                testimonialCards[currentTestimonial].classList.remove('active');
                testimonialCards[currentTestimonial].classList.add('hidden');
                currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
                testimonialCards[currentTestimonial].classList.remove('hidden');
                testimonialCards[currentTestimonial].classList.add('active');
                setTimeout(() => {
                    testimonialCards[currentTestimonial].style.opacity = 1;
                }, 50)
            }, 1000);
        }, 6000);
    }

    // Chart.js Logic for Mechanics
    const slider = document.getElementById('resistance-slider');
    const endingDesc = document.getElementById('ending-description');
    const endingsChartCanvas = document.getElementById('endings-chart');
    let endingsChart;

    function updateEndingUI(resistance) {
        const compliance = 10 - resistance;
        const detail = endingDetails.find(d => resistance >= d.range[0] && resistance <= d.range[1]);
        if (endingDesc) {
            endingDesc.innerHTML = \`<h4 class="font-bold text-lg text-gray-200">\${detail.title}</h4><p class="text-sm mt-1 text-gray-400">\${detail.desc}</p>\`;
        }
        if (endingsChart) {
            endingsChart.data.datasets[0].data = [compliance, resistance];
            endingsChart.data.datasets[0].backgroundColor = ['#a5b4fc', detail.color.dark];
            endingsChart.update();
        }
    }
    function createChart() {
        if (!endingsChartCanvas) return;
        const endingsChartCtx = endingsChartCanvas.getContext('2d');
        endingsChart = new Chart(endingsChartCtx, {
            type: 'doughnut',
            data: {
                labels: ['Compliance', 'Resistance'],
                datasets: [{
                    data: [5, 5],
                    backgroundColor: ['#a5b4fc', '#c084fc'],
                    borderColor: '#1f2937',
                    borderWidth: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '70%',
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            color: '#d1d5db',
                            boxWidth: 12,
                            padding: 20,
                            font: { family: "'Inter', sans-serif" }
                        }
                    },
                    tooltip: { enabled: true }
                }
            }
        });
        updateEndingUI(5);
    }
    if (slider) {
        slider.addEventListener('input', (e) => updateEndingUI(parseInt(e.target.value)));
    }

    const mechanicsObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (!endingsChart) {
                    createChart();
                }
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    const mechanicsSection = document.getElementById('mechanics');
    if (mechanicsSection) {
        mechanicsObserver.observe(mechanicsSection);
    }

    const levelTimelineContainer = document.getElementById('level-timeline');
    if (levelTimelineContainer) {
        levelData.forEach(level => {
            const item = document.createElement('div');
            item.className = 'timeline-item relative'; item.dataset.level = level.id;
            item.innerHTML = \`<div class="timeline-dot absolute -left-[33px] top-1/2 -translate-y-1/2 w-4 h-4 bg-gray-600 rounded-full transition-all"></div><div class="p-4 rounded-lg cursor-pointer bg-gray-800 border border-transparent hover:border-gray-600"><p class="font-bold text-sm text-gray-200">Level \${level.id}</p><p class="text-gray-400">\${level.memory}</p></div>\`;
            levelTimelineContainer.appendChild(item);
            item.addEventListener('click', () => updateLevelDetails(level.id));
        });
    }
    function updateLevelDetails(levelId) {
        const level = levelData.find(l => l.id === levelId);
        let wakingDescHTML = "";
        let dateInfo, ageAtIncident;

        switch(level.id) {
            case 1: dateInfo = getRandomDate(2001, 2003); ageAtIncident = dateInfo.year - BIRTH_YEAR;
                wakingDescHTML = \`<div><span class="text-indigo-400">DATE:</span> \${dateInfo.date}</div><div><span class="text-indigo-400">SUBJECT AGE:</span> \${ageAtIncident}</div><div><span class="text-indigo-400">INCIDENT:</span> Slipped on spilled soda at birthday party for friend, \${getRandomItem(firstNames)}.</div>\`; break;
            case 2: dateInfo = getRandomDate(2005, 2007); ageAtIncident = dateInfo.year - BIRTH_YEAR;
                wakingDescHTML = \`<div><span class="text-indigo-400">DATE:</span> \${dateInfo.date}</div><div><span class="text-indigo-400">SUBJECT AGE:</span> \${ageAtIncident}</div><div><span class="text-indigo-400">INCIDENT:</span> Accidentally broke grandmother's prized \${getRandomItem(heirloomItems)} while playing indoors.</div>\`; break;
            case 3: dateInfo = getRandomDate(2008, 2010); ageAtIncident = dateInfo.year - BIRTH_YEAR;
                wakingDescHTML = \`<div><span class="text-indigo-400">DATE:</span> \${dateInfo.date}</div><div><span class="text-indigo-400">SUBJECT AGE:</span> \${ageAtIncident}</div><div><span class="text-indigo-400">SUBJECT:</span> Family golden retriever, "\${getRandomItem(petNames)}"</div><div><span class="text-indigo-400">INCIDENT:</span> Pet escaped after host left back gate ajar. Memory is associated with intense guilt.</div>\`; break;
            case 4: dateInfo = getRandomDate(2000, 2002); ageAtIncident = dateInfo.year - BIRTH_YEAR;
                wakingDescHTML = \`<div><span class="text-indigo-400">DATE:</span> \${dateInfo.date}</div><div><span class="text-indigo-400">SUBJECT AGE:</span> \${ageAtIncident}</div><div><span class="text-indigo-400">INCIDENT:</span> Witnessed neighbor's house fire from bedroom window. Associated with parental distress.</div>\`; break;
            case 5: dateInfo = getRandomDate(2018, 2020); ageAtIncident = dateInfo.year - BIRTH_YEAR;
                wakingDescHTML = \`<div><span class="text-indigo-400">DATE:</span> \${dateInfo.date}</div><div><span class="text-indigo-400">SUBJECT AGE:</span> \${ageAtIncident}</div><div><span class="text-indigo-400">INCIDENT:</span> Sat by the hospital bed of dying \${getRandomItem(relationshipTypes)}. Feelings of helplessness are prominent.</div>\`; break;
            case 6: dateInfo = getRandomDate(2004, 2006); ageAtIncident = dateInfo.year - BIRTH_YEAR;
                wakingDescHTML = \`<div><span class="text-indigo-400">DATE:</span> \${dateInfo.date}</div><div><span class="text-indigo-400">SUBJECT AGE:</span> \${ageAtIncident}</div><div><span class="text-indigo-400">INCIDENT:</span> To avoid punishment, host blamed a broken window on neighborhood friend, \${getRandomItem(firstNames)} \${getRandomItem(lastNames)}. The lie was never discovered.</div>\`; break;
            case 7: 
                wakingDescHTML = \`<div><span class="text-red-500">DATE:</span> N/A</div><div><span class="text-red-500">SUBJECT AGE:</span> N/A</div><div><span class="text-red-500">INCIDENT:</span> Memory is a Myndwell fabrication. Host is shown enjoying 'Zing!' soda at a pristine, futuristic park.</div>\`; break;
            case 8: dateInfo = getRandomDate(2023, 2024); ageAtIncident = dateInfo.year - BIRTH_YEAR;
                wakingDescHTML = \`<div><span class="text-indigo-400">DATE:</span> \${dateInfo.date}</div><div><span class="text-indigo-400">SUBJECT AGE:</span> \${ageAtIncident}</div><div><span class="text-indigo-400">INCIDENT:</span> A period of intense depression. Host isolated himself in his apartment for several weeks, neglecting work and relationships.</div>\`; break;
            case 9: dateInfo = getRandomDate(2024, 2025); ageAtIncident = dateInfo.year - BIRTH_YEAR;
                wakingDescHTML = \`<div><span class="text-indigo-400">DATE:</span> \${dateInfo.date}</div><div><span class="text-indigo-400">SUBJECT AGE:</span> \${ageAtIncident}</div><div><span class="text-indigo-400">INCIDENT:</span> Initial consultation at Myndwell. Spoke with therapist "Claire." Signed consent forms for the REM procedure.</div>\`; break;
            case 10: dateInfo = { year: 2024 }; ageAtIncident = dateInfo.year - BIRTH_YEAR;
                wakingDescHTML = \`<div><span class="text-red-500">DATE:</span> \${dateInfo.year}</div><div><span class="text-red-500">SUBJECT AGE:</span> \${ageAtIncident}</div><div><span class="text-red-500">INCIDENT:</span> CORE TRAUMA. Social gathering. An argument. Fractured, chaotic sensory data. Ends with discovery of a body and accusations from friends.</div>\`; break;
            default:
                wakingDescHTML = "Details of this memory are currently inaccessible."
        }

        const wakingDetail = document.getElementById('level-detail-waking');
        const dreamDetail = document.getElementById('level-detail-dream');
        if (level && wakingDetail && dreamDetail) {
            wakingDetail.innerHTML = \`<h3 class="text-sm font-bold uppercase tracking-widest text-indigo-400">The Real Memory</h3><h4 class="text-2xl font-bold mt-4 text-white">\${level.memory}</h4><div class="mt-4 text-left text-gray-300 font-mono text-sm space-y-2">\${wakingDescHTML}</div>\`;
            dreamDetail.innerHTML = \`<div class="content-section"><h3 class="text-sm font-bold uppercase tracking-widest text-red-400">The Dreamscape</h3><h4 class="text-2xl font-bold font-lora mt-4">\${level.dream}</h4><p class="mt-4 text-gray-400 font-bold">Mechanic / Twist:</p><p class="text-gray-300 font-lora italic">\${level.mechanic}</p></div>\`;
            document.querySelectorAll('.timeline-item').forEach(item => item.classList.toggle('active', parseInt(item.dataset.level) === levelId));
        }
    }
    // Logic for Key Terminology Glossary
    const termButtonsContainer = document.getElementById('term-buttons-container');
    const termDisplay = document.getElementById('term-display');
    const terms = {
        "Partition": "A subconscious construct created by the REM chip. Different Partitions have different roles (Janitor, Artist, etc.).",
        "Cleansing": "The process of rewriting a traumatic memory to remove its negative emotional charge, often replacing it with a falsified, pleasant event containing propaganda.",
        "The Void": "The dark, dripping, oil-painted chamber where the Janitor resides while the Human is awake. It contains two massive monitors that function as the Human's eyes.",
        "Dream-Time": "Time within the REM dreamscape is nonlinear. A single night of sleep can feel like an eternity for a Partition, a tool Myndwell uses to enforce compliance through endless loops.",
        "Somatic Split": "Myndwell's clinical term for the procedure of painlessly separating the conscious self from the dream-consciousness during REM sleep.",
        "Neuropattern Engineering": "The hidden agenda of REM. Myndwell doesn't just heal trauma; they reshape memories to embed consumer preferences and ideological compliance.",
        "The Anomaly": "An unofficial designation for a Partition that exhibits unexpected levels of sentience or resistance. Partition-09, the Janitor, is the first of his kind.",
        "Recalibration": "A forced 'reboot' performed by Harmonizers on deviant Partitions. It's a painful process designed to erase burgeoning self-awareness and restore loyalty.",
        "Psychological Immune System": "The brain's natural defense against foreign data that conflicts with its core identity. It's why a 'trusted user' like a Partition is needed to make changes from within.",
        "The Janus Protocol": "A top-secret Myndwell protocol that justifies the creation of highly sentient Partitions for uniquely complex trauma, acknowledging the risk that the 'key' might one day turn the lock itself."
    };

    function setupTermButtons() {
        if (!termButtonsContainer) return;
        termButtonsContainer.innerHTML = '';
        Object.keys(terms).forEach(term => {
            const button = document.createElement('button');
            button.className = "term-button px-6 py-3 bg-gray-600 text-gray-100 font-semibold rounded-full shadow-md hover:bg-gray-500 reveal-button";
            button.dataset.term = term;
            button.textContent = term;
            button.addEventListener('click', () => {
                termDisplay.textContent = terms[term] || "Definition not found.";
                termButtonsContainer.querySelectorAll('.term-button').forEach(btn => {
                    btn.classList.remove('bg-blue-700', 'text-white');
                    btn.classList.add('bg-gray-600', 'text-gray-100');
                });
                button.classList.remove('bg-gray-600', 'text-gray-100');
                button.classList.add('bg-blue-700', 'text-white');
            });
            termButtonsContainer.appendChild(button);
        });
    }

    // Logic for Myndwell Corporate Phrases Rotator
    const phrases = [
        "Your trauma is our burden now.", "A clean mind is a compliant mind.", "Because You Deserve Peace.",
        "Peace of mind comes at a cost.", "You don’t remember the truth. Just the clean version we installed.", "Wake lighter. Live brighter. With Myndwell."
    ];
    let currentPhraseIndex = 0;
    const phraseDisplay = document.getElementById('phrase-display');
    const prevPhraseBtn = document.getElementById('prev-phrase');
    const nextPhraseBtn = document.getElementById('next-phrase');

    function updatePhraseDisplay() {
        if (phraseDisplay) {
            phraseDisplay.style.opacity = 0;
            setTimeout(() => {
                phraseDisplay.textContent = phrases[currentPhraseIndex];
                phraseDisplay.style.opacity = 1;
            }, 200);
        }
    }
    if (nextPhraseBtn) {
        nextPhraseBtn.addEventListener('click', () => {
            currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
            updatePhraseDisplay();
        });
    }
    if (prevPhraseBtn) {
        prevPhraseBtn.addEventListener('click', () => {
            currentPhraseIndex = (currentPhraseIndex - 1 + phrases.length) % phrases.length;
            updatePhraseDisplay();
        });
    }

    // ===== UNIVERSAL EXPANDABLE CARD SCRIPT =====
    function initializeExpandableCards() {
        document.querySelectorAll('.expandable-card').forEach(card => {
            const button = card.querySelector('.expandable-toggle');
            if (!button) return;
            const content = card.querySelector('.expandable-content');
            const icon = button.querySelector('.toggle-icon');

            button.addEventListener('click', () => {
                if (!content || !icon) return;
                const isHidden = content.classList.contains('hidden');
                content.classList.toggle('hidden');
                icon.textContent = isHidden ? '−' : '+';
            });
        });
    }

    // ===== HIERARCHY & REDACTED CARD SCRIPT =====
    function randomizeRedactedNames() {
        const redactedSpans = document.querySelectorAll('.redacted-partition-name');
        const chars = 'ABCDEF0123456789';
        redactedSpans.forEach(span => {
            let randomId = 'Partition-';
            randomId += chars.charAt(Math.floor(Math.random() * chars.length));
            randomId += chars.charAt(Math.floor(Math.random() * chars.length));
            span.textContent = randomId;
        });
    }

    document.querySelectorAll('[data-redacted-card]').forEach(card => {
        card.addEventListener('click', (e) => {
            e.preventDefault();
            const stickerbomb = document.getElementById('stickerbomb-overlay');
            stickerbomb.classList.add('visible');
            setTimeout(() => {
                stickerbomb.classList.remove('visible');
            }, 2500);
        });
    });
    
    // ===== GAMEPLAY LOOP INTERACTIVITY =====
    function setupGameplayLoop() {
        const levelSelector = document.querySelector('#gameplay-loop-container .level-selector');
        const loopDisplay = document.getElementById('loop-display');
        if (!levelSelector || !loopDisplay) return;

        levelData.forEach(level => {
            const button = document.createElement('button');
            button.className = 'loop-level-btn px-4 py-2 bg-gray-700 text-gray-300 rounded-md font-semibold whitespace-nowrap';
            button.textContent = \`Level \${level.id}\`;
            button.dataset.levelId = level.id;
            levelSelector.appendChild(button);
        });

        levelSelector.addEventListener('click', (e) => {
            if (e.target.matches('.loop-level-btn')) {
                const levelId = e.target.dataset.levelId;
                displayLoopForLevel(levelId);
                levelSelector.querySelectorAll('.loop-level-btn').forEach(btn => btn.classList.remove('active'));
                e.target.classList.add('active');
            }
        });

        const firstButton = levelSelector.querySelector('.loop-level-btn');
        if (firstButton) {
            firstButton.classList.add('active');
            displayLoopForLevel(1);
        }
    }

    function displayLoopForLevel(levelId) {
        const loopData = gameplayLoopData[levelId];
        const levelInfo = levelData.find(l => l.id == levelId);
        const loopDisplay = document.getElementById('loop-display');
        if (!loopDisplay || !loopData || !levelInfo) return;

        const contentHTML = \`
            <h3 class="text-2xl font-bold text-white text-center mb-4">\${levelInfo.memory}</h3>
            <div class="grid md:grid-cols-2 gap-6">
                <div class="bg-gray-800 p-4 rounded-lg border border-gray-700">
                    <h4 class="text-xl font-bold text-red-400 font-lora mb-2">The Janitor's Path</h4>
                    <p class="text-gray-300 mb-4">\${loopData.janitor}</p>
                    <div class="flex gap-4">
                        <button class="choice-btn flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded" data-choice="cleanse" data-level="\${levelId}">Choose to Cleanse</button>
                        <button class="choice-btn flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" data-choice="resist" data-level="\${levelId}">Choose to Resist</button>
                    </div>
                    <div id="janitor-consequence" class="consequence-box mt-4 p-3 bg-gray-900 rounded min-h-[80px] opacity-0"></div>
                </div>
                <div class="bg-gray-800 p-4 rounded-lg border border-gray-700">
                    <h4 class="text-xl font-bold text-indigo-400 mb-2">The Human's Reality</h4>
                    <div id="human-consequence" class="consequence-box p-3 bg-gray-900 rounded min-h-[160px] flex items-center justify-center opacity-0">
                       <p class="italic text-gray-500">Make a choice to see the consequence...</p>
                    </div>
                </div>
            </div>\`;
        loopDisplay.innerHTML = contentHTML;

        loopDisplay.querySelectorAll('.choice-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const choice = e.target.dataset.choice;
                const level = e.target.dataset.level;
                const janitorBox = document.getElementById('janitor-consequence');
                const humanBox = document.getElementById('human-consequence');

                janitorBox.style.opacity = 0;
                humanBox.style.opacity = 0;

                setTimeout(() => {
                    janitorBox.innerHTML = \`<p class="text-sm">\${gameplayLoopData[level][choice].j}</p>\`;
                    humanBox.innerHTML = \`<p class="text-lg italic text-gray-200">"\${gameplayLoopData[level][choice].h}"</p>\`;
                    janitorBox.style.opacity = 1;
                    humanBox.style.opacity = 1;
                }, 300);
            });
        });
    }

    // ===== NARRATIVE PATH VISUALIZER SCRIPT =====
    function setupNarrativeVisualizer() {
        const timeline = document.getElementById('path-timeline');
        if (!timeline) return;

        let pathHTML = '';
        for (let i = 1; i <= 10; i++) {
            pathHTML += \`
                <div class="path-node" id="path-node-\${i}" data-level="\${i}">
                    <div class="node-choices flex gap-2 mb-1">
                         <button data-choice="cleanse" title="Cleanse" class="path-choice-btn rounded-full bg-blue-600 hover:bg-blue-500 disabled:hover:bg-blue-600 text-white font-black">C</button>
                         <button data-choice="resist" title="Resist" class="path-choice-btn rounded-full bg-red-600 hover:bg-red-500 disabled:hover:bg-red-600 text-white font-black">R</button>
                    </div>
                    <div class="node-circle rounded-full"></div>
                    <div class="node-label mt-1">LVL \${i}</div>
                </div>\`;
            if (i < 10) {
                pathHTML += \`<div class="path-connector"></div>\`;
            }
        }
        timeline.innerHTML = pathHTML;

        let choices = Array(10).fill(null);
        
        const updateVisualizerState = () => {
            const cleanseCount = choices.filter(c => c === 'cleanse').length;
            const resistCount = choices.filter(c => c === 'resist').length;
            const totalChoices = choices.filter(c => c !== null).length;
            
            const complianceBar = document.getElementById('compliance-bar');
            const resistanceBar = document.getElementById('resistance-bar');
            if(complianceBar) complianceBar.style.width = \`\${cleanseCount * 10}%\`;
            if(resistanceBar) resistanceBar.style.width = \`\${resistCount * 10}%\`;
            
            const resultDisplay = document.getElementById('path-result');
            let ending, textColor;
            if (resistCount <= 4) { ending = endingDetails[0]; textColor = 'text-blue-300'; }
            else if (resistCount === 5) { ending = endingDetails[1]; textColor = 'text-purple-300'; }
            else { ending = endingDetails[2]; textColor = 'text-red-300'; }

            if (resultDisplay) {
                if (totalChoices === 10) {
                    resultDisplay.innerHTML = \`<h3 class="text-xl font-bold \${textColor}">FINAL ENDING: \${ending.title}</h3><p class="text-gray-400">\${ending.desc}</p>\`;
                } else {
                    resultDisplay.innerHTML = \`<h3 class="text-xl font-bold \${textColor}">PROJECTED ENDING: \${ending.title}</h3><p class="text-gray-400">Complete all 10 choices to lock in your ending.</p>\`;
                }
            }

            for (let i = 0; i < 10; i++) {
                const node = document.getElementById(\`path-node-\${i + 1}\`);
                if (!node) continue;
                const buttons = node.querySelectorAll('.path-choice-btn');
                node.classList.toggle('active', i === totalChoices);
                node.style.opacity = i <= totalChoices ? '1' : '0.5';

                buttons.forEach(btn => {
                    btn.disabled = totalChoices > i;
                    btn.classList.remove('selected');
                    if (choices[i] === btn.dataset.choice) {
                        btn.classList.add('selected');
                    }
                });
            }
        };
        
        timeline.addEventListener('click', e => {
            if (e.target.matches('.path-choice-btn')) {
                const node = e.target.closest('.path-node');
                const levelIndex = parseInt(node.dataset.level) - 1;
                if (choices[levelIndex] === null && (levelIndex === 0 || choices[levelIndex - 1] !== null) ) {
                    choices[levelIndex] = e.target.dataset.choice;
                    updateVisualizerState();
                }
            }
        });

        const resetBtn = document.getElementById('reset-path-btn');
        if (resetBtn) {
            resetBtn.addEventListener('click', () => {
                choices.fill(null);
                updateVisualizerState();
            });
        }
        updateVisualizerState();
    }

    // ===== ANATOMY OF A MEMORY SCRIPT =====
    function setupAnatomySequence() {
        const playBtn = document.getElementById('play-anatomy-btn');
        if(!playBtn) return;
        const janitorSteps = document.querySelectorAll('#janitor-steps .anatomy-step');
        const humanSteps = document.querySelectorAll('#human-steps .anatomy-step');

        const resetAnimation = () => {
            janitorSteps.forEach(s => s.classList.remove('visible'));
            humanSteps.forEach(s => s.classList.remove('visible'));
        };

        playBtn.addEventListener('click', () => {
            resetAnimation();
            playBtn.disabled = true;
            playBtn.innerHTML = \`<i class="fas fa-cog fa-spin mr-2"></i>Playing...\`;

            let delay = 0;
            const stepDelay = 800;
            
            janitorSteps.forEach((step) => {
                setTimeout(() => step.classList.add('visible'), delay);
                delay += stepDelay;
            });
            
            humanSteps.forEach((step) => {
                setTimeout(() => step.classList.add('visible'), delay);
                delay += stepDelay;
            });
            
            setTimeout(() => {
                playBtn.disabled = false;
                playBtn.innerHTML = \`<i class="fas fa-redo mr-2"></i>Replay Sequence\`;
            }, delay);
        });
    }

    // ===== FRACTURED MIND INTERACTIVE SCRIPT =====
    function setupFracturedMind() {
        const container = document.getElementById('fractured-mind-container');
        if(container) {
            container.addEventListener('click', () => {
                container.classList.toggle('split');
            });
        }
    }
    
    // ===== CLASSIFIED INFO SCRIPT =====
    function setupClassifiedInfo() {
        const container = document.getElementById('classified-container');
        const contentEl = document.getElementById('classified-content');
        if(!container || !contentEl) return;

        const classifiedText = "SUBJECT: Designated 'Subject 01'.INCIDENT: Myndwell operative befriended Subject 01 over one year. Operative's death was then faked during a public altercation, with Subject 01 framed as the aggressor. PURPOSE: Create a baseline of extreme, complex trauma (grief, betrayal, social ostracization) to stress-test the upper limits of the REM chip's cleansing and neuropatterning capabilities. Subject was selected for psychological resilience and lack of close secondary relations, minimizing external inquiry. STATUS: Optimal. The anomaly 'Partition-09' has formed as predicted, exhibiting unprecedented sentience. This is the perfect test case.";
        
        let hasRevealed = false;
        container.addEventListener('click', () => {
            if(hasRevealed) return;
            
            if (container.classList.contains('revealing')) {
                container.classList.add('revealed');
                typeWriter(contentEl, classifiedText, 15);
                hasRevealed = true;
            } else {
                container.classList.add('revealing');
                const overlay = container.querySelector('.classified-overlay');
                if (overlay) {
                   overlay.innerHTML = \`<h3 class="text-3xl font-bold text-red-500 animate-pulse">WARNING: CLASSIFIED INFO</h3><p class="mt-2 text-gray-200">This file contains critical narrative spoilers. Proceed at your own risk.</p><p class="mt-4 text-sm text-gray-400">[Click again to confirm breach]</p>\`;
                }
            }
        });
    }

    // ===== OVERSEER TEST SCRIPT =====
    function setupOverseerTest() {
        const startBtn = document.getElementById('start-test-btn');
        const statusEl = document.getElementById('overseer-status');
        const faceEl = document.getElementById('overseer-face');
        const targetEl = document.getElementById('target-pattern');
        const gridEl = document.querySelector('.pattern-grid');
        if(!startBtn || !gridEl) return;

        let targetSequence = [], playerSequence = [], testRunning = false;
        
        gridEl.innerHTML = '';
        for (let i = 0; i < 9; i++) {
            const cell = document.createElement('div');
            cell.className = 'pattern-cell rounded-md';
            cell.dataset.id = i;
            gridEl.appendChild(cell);
        }
        const cells = gridEl.querySelectorAll('.pattern-cell');

        const startNewTest = () => {
            testRunning = true;
            playerSequence = [];
            targetSequence = Array.from({length: 4}, () => Math.floor(Math.random() * 9));
            
            statusEl.textContent = 'STATUS: REPLICATE THE PATTERN.';
            statusEl.className = 'mt-4 text-indigo-300 font-semibold h-12 flex items-center text-center';
            faceEl.src = 'https://placehold.co/200x200/111827/a5b4fc?text=AI';
            faceEl.classList.remove('glitching');
            
            targetEl.innerHTML = targetSequence.map(() => \`<div class="w-6 h-6 bg-indigo-400 rounded-sm"></div>\`).join('');

            let delay = 500;
            targetSequence.forEach(id => {
                setTimeout(() => {
                    cells[id].classList.add('flash');
                    setTimeout(() => cells[id].classList.remove('flash'), 400);
                }, delay);
                delay += 500;
            });
        };

        const handleCellClick = (e) => {
            if (!testRunning) return;
            const id = parseInt(e.target.dataset.id);
            playerSequence.push(id);
            e.target.classList.add('flash');
            setTimeout(() => e.target.classList.remove('flash'), 400);

            if (playerSequence[playerSequence.length - 1] !== targetSequence[playerSequence.length - 1]) {
                testRunning = false;
                statusEl.textContent = 'ERROR: SEQUENCE MISMATCH. RECALIBRATING...';
                statusEl.className = 'mt-4 text-red-400 font-semibold h-12 flex items-center text-center animate-pulse';
                faceEl.src = 'https://placehold.co/200x200/111827/ef4444?text=ERROR';
                faceEl.classList.add('glitching');
                startBtn.textContent = 'Retry Calibration';
            } else if (playerSequence.length === targetSequence.length) {
                testRunning = false;
                statusEl.textContent = 'STATUS: COGNITIVE FUNCTION NOMINAL.';
                statusEl.className = 'mt-4 text-green-400 font-semibold h-12 flex items-center text-center';
                faceEl.src = 'https://placehold.co/200x200/111827/6ee7b7?text=OK';
                faceEl.classList.remove('glitching');
                startBtn.textContent = 'Begin New Test';
            }
        };
        
        cells.forEach(cell => cell.addEventListener('click', handleCellClick));
        startBtn.addEventListener('click', startNewTest);
    }
    
    // ===== Digital Abyss Canvas Logic =====
    const canvas = document.getElementById('abyss-canvas');
    let animationFrameId;

    const setupAbyss = () => {
        if (!canvas) return;
        const abyssCtx = canvas.getContext('2d');
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        const columns = Math.floor(canvas.width / 20);
        const drops = Array(columns).fill(1);
        const chars = '01'.split('');
        const color1 = { r: 79, g: 70, b: 229 }, color2 = { r: 220, g: 38, b: 38 };

        function draw() {
            const rect = canvas.getBoundingClientRect();
            const scrollPercent = Math.max(0, Math.min(1, -rect.top / (rect.height - window.innerHeight)));
            abyssCtx.fillStyle = \`rgba(209, 213, 229, \${0.1 - (scrollPercent * 0.1)})\`;
            abyssCtx.fillRect(0, 0, canvas.width, canvas.height);
            const r = Math.round(color1.r + (color2.r - color1.r) * scrollPercent);
            const g = Math.round(color1.g + (color2.g - color1.g) * scrollPercent);
            const b = Math.round(color1.b + (color2.b - color1.b) * scrollPercent);
            abyssCtx.fillStyle = \`rgb(\${r}, \${g}, \${b})\`;
            abyssCtx.font = '15px monospace';
            for (let i = 0; i < drops.length; i++) {
                const text = chars[Math.floor(Math.random() * chars.length)];
                abyssCtx.fillText(text, i * 20, drops[i] * 20);
                if (drops[i] * 20 > canvas.height && Math.random() > 0.975) drops[i] = 0;
                drops[i]++;
            }
        }

        function animate() {
            draw();
            animationFrameId = requestAnimationFrame(animate);
        }
        
        const abyssObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) { if(!animationFrameId) animate(); }
                else { if(animationFrameId) cancelAnimationFrame(animationFrameId); animationFrameId = null; }
            });
        }, { threshold: 0 });

        abyssObserver.observe(document.getElementById('digital-abyss'));
        window.addEventListener('resize', () => {
            if(animationFrameId) cancelAnimationFrame(animationFrameId);
            animationFrameId = null;
            setupAbyss();
        });
    };

    // ========== INITIALIZATION ==========
    function setTabActive(hash, runEffects = false) {
        const targetId = hash.substring(1);

        if (runEffects) {
            if (targetId === 'characters' && !hasSeenStickerbomb) {
                hasSeenStickerbomb = true;
                const stickerbomb = document.getElementById('stickerbomb-overlay');
                stickerbomb.classList.add('visible');
                setTimeout(() => stickerbomb.classList.remove('visible'), 2500);
            }
            if (targetId === 'overview' && !premiseTyped) {
                premiseTyped = true;
                const premiseEl = document.getElementById('premise-text');
                const premiseContent = "In a near-future where the biotech giant Myndwell can surgically remove trauma, a patient who volunteered for the REM procedure slowly realizes his newfound peace is a manufactured lie. The player experiences this fractured identity, playing as both the waking-world Human, living a sterile and hollow life, and the subconscious Janitor, exploring surreal dreamscapes to piece together a stolen identity.";
                if (premiseEl) typeWriter(premiseEl, premiseContent, 20);
            }
        }

        navLinks.forEach(link => link.classList.toggle('active', link.hash === hash));
        contentPanes.forEach(pane => pane.classList.toggle('active', pane.id === targetId));
    }

    function revealGameBible(event) {
        event.preventDefault();
        if (gameBibleContent.classList.contains('hidden-by-default')) {
            gameBibleContent.classList.remove('hidden-by-default');
        }
        const hash = event.currentTarget.hash || '#game-bible-anchor';
        const targetId = hash === '#game-bible-anchor' ? 'game-bible-anchor' : hash.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
        const tabHash = gameBibleAnchors.includes(hash) ? hash : '#overview';
        setTimeout(() => { window.location.hash = tabHash; }, 10);
    }

    const discoverBtn = document.getElementById('discover-truth-btn');
    const gameBibleNavLinks = document.querySelectorAll('#nav-links-rem a');
    const gameBibleContent = document.getElementById('game-bible-anchor');
    const gameBibleAnchors = ['#overview', '#gameplay', '#characters', '#mechanics', '#levels', '#lore', '#art'];
    
    if(discoverBtn) discoverBtn.addEventListener('click', revealGameBible);
    
    gameBibleNavLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            if (gameBibleContent && gameBibleContent.classList.contains('hidden-by-default')) {
                revealGameBible(e);
            } else {
                e.preventDefault();
                window.location.hash = link.hash;
            }
        });
    });

    window.addEventListener('hashchange', () => {
        const currentHash = window.location.hash;
        if (currentHash && gameBibleAnchors.includes(currentHash)) {
            setTabActive(currentHash, true);
        }
    });

    const initialHash = window.location.hash;
    if (initialHash && gameBibleAnchors.includes(initialHash)) {
        if(gameBibleContent) gameBibleContent.classList.remove('hidden-by-default');
        setTabActive(initialHash, false);
    } else {
        setTabActive('#overview', false);
    }
    
    // Call all setup functions
    updateLevelDetails(1);
    initializeExpandableCards();
    randomizeRedactedNames();
    setupTermButtons();
    // Don't setup abyss until it's visible
    setupGameplayLoop();
    setupNarrativeVisualizer();
    setupAnatomySequence();
    setupFracturedMind();
    setupClassifiedInfo();
    setupOverseerTest();

    document.querySelectorAll('.redacted').forEach(span => {
        span.addEventListener('click', () => {
            span.classList.add('revealed');
        });
    });
});
`},{name:`style.css`,totalLines:867,sizeBytes:21193,code:`/* General & Landing Page Styles */
html {
    scroll-behavior: smooth;
}

body {
    font-family: 'Inter', sans-serif;
    background-color: #ffffff;
    transition: background-color 1s ease-out;
}

body.no-scroll {
    overflow: hidden;
}

.section {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 4rem 2rem;
    position: relative;
    z-index: 10;
    overflow: hidden;
}

.sticky-nav {
    position: sticky;
    top: 0;
    z-index: 1000;
    transition: background-color 0.5s ease, color 0.5s ease;
}

.hero-bg {
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background-image: url('https://placehold.co/1920x1080/eef2ff/ffffff?text=');
    background-size: cover;
    background-position: center;
    z-index: 1;
    transition: opacity 1s ease, filter 1s ease;
}

.glitch-overlay {
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background-image: url('https://placehold.co/1920x1080/111827/4f46e5?text=ERROR');
    background-size: cover;
    background-position: center;
    z-index: 2;
    opacity: 0;
    mix-blend-mode: screen;
    animation: glitch-bg 4s infinite step-end;
    display: none;
}

.content-wrapper {
    position: relative;
    z-index: 10;
    transition: opacity 0.5s ease-out, transform 0.5s ease-out;
}

/* New Propaganda Section Styles */
.step-card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.step-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
}

.benefit-card {
    background: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
}

.testimonial-card {
    transition: opacity 1s ease;
}

.testimonial-card.active {
    display: block;
}

/* Digital Abyss Transition Styles */
#digital-abyss {
    padding: 0;
    background-color: #d1d5db; /* End color of previous section */
    position: relative;
}

#abyss-canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.abyss-text {
    color: white;
    z-index: 15;
    text-shadow: 0 0 10px rgba(0,0,0,0.7);
}

.final-section {
    background-color: #111827;
    color: #e5e7eb;
}

.final-section .content-wrapper {
    background-color: rgba(17, 24, 39, 0.6);
    backdrop-filter: blur(2px);
    padding: 2rem;
    border-radius: 1rem;
}

/* Game Bible Styles */
.game-bible-main {
    background-color: #111827;
    color: #d1d5db;
}

/* Hide the entire hacker section by default */
#hacker-content-wrapper {
    display: none;
}

.hidden-by-default {
    display: none;
}

.font-lora { font-family: 'Lora', serif; }

.dream-world-bg {
    background-color: #111827;
    position: relative;
    overflow: hidden;
}

.dream-world-bg::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background-image:
        radial-gradient(circle at 20% 20%, rgba(76, 29, 149, 0.3) 0%, transparent 40%),
        radial-gradient(circle at 80% 70%, rgba(220, 38, 38, 0.2) 0%, transparent 30%);
    opacity: 0.5;
    z-index: 1;
}

.content-section { z-index: 2; position: relative; }

.nav-item { transition: all 0.3s ease; }

.nav-item.active {
    color: #a5b4fc;
    border-bottom-color: #a5b4fc;
    font-weight: 700;
}

.content-pane { display: none; }
.content-pane.active { display: block; }

.character-card, .level-card, .card-item {
    transition: all 0.3s ease;
    cursor: pointer;
}

.character-card:hover, .timeline-item:hover, .card-item:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.1);
}

.character-card.dream-card:hover {
    box-shadow: 0 10px 15px -3px rgba(220, 38, 38, 0.2), 0 4px 6px -2px rgba(220, 38, 38, 0.1);
}

.timeline-item.active .timeline-dot {
    transform: scale(1.5);
    background-color: #a5b4fc;
}

/* Animations & Glitch Effects */
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}

.fade-in-on-load { animation: fadeIn 1s 0.5s ease-out forwards; opacity: 0; }
.fade-in-section { opacity: 0; transition: opacity 1s, transform 1s; transform: translateY(20px); }

@keyframes glitch-bg {
    0%, 100% { clip-path: inset(0 0 0 0); }
    5% { clip-path: inset(10% 0 85% 0); }
    10% { clip-path: inset(90% 0 1% 0); }
    15% { clip-path: inset(30% 0 60% 0); }
    20% { clip-path: inset(0 0 0 0); }
    80% { clip-path: inset(0 0 0 0); }
    82% { opacity: 1; transform: translateX(-5px); }
    84% { opacity: 0.5; transform: translateY(5px); }
    86% { opacity: 1; clip-path: inset(40% 0 40% 0); }
    88% { clip-path: inset(0 0 0 0); opacity: 1; transform: none; }
}

.glitch-title {
    position: relative;
    color: white;
    animation: glitch-shake 3s infinite;
}

.glitch-title::before, .glitch-title::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #111827;
    overflow: hidden;
}

.glitch-title::before {
    left: 3px;
    text-shadow: -2px 0 red;
    animation: glitch-anim-1 2s infinite linear alternate-reverse;
}

.glitch-title::after {
    left: -3px;
    text-shadow: 2px 0 blue;
    animation: glitch-anim-2 3s infinite linear alternate-reverse;
}

.glitch-abyss {
    position: relative;
    color: white;
    animation: glitch-shake 3s infinite;
}

.glitch-abyss::before, .glitch-abyss::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: transparent; /* This allows the canvas to show through */
    overflow: hidden;
}

.glitch-abyss::before {
    left: 3px;
    text-shadow: -2px 0 red;
    animation: glitch-anim-1 2s infinite linear alternate-reverse;
}

.glitch-abyss::after {
    left: -3px;
    text-shadow: 2px 0 blue;
    animation: glitch-anim-2 3s infinite linear alternate-reverse;
}

@keyframes glitch-shake {
    0%, 100% { transform: translate(0, 0); }
    25% { transform: translate(5px, 5px); }
    50% { transform: translate(-5px, -5px); }
    75% { transform: translate(5px, -5px); }
}

@keyframes glitch-anim-1 {
    0% { clip-path: inset(39% 0 29% 0); }
    100% { clip-path: inset(45% 0 53% 0); }
}

@keyframes glitch-anim-2 {
    0% { clip-path: inset(19% 0 18% 0); }
    100% { clip-path: inset(86% 0 4% 0); }
}

.glitch-target.glitching {
    position: relative;
    animation: text-shake 0.3s forwards;
}

.glitch-target.glitching::before, .glitch-target.glitching::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: inherit;
}

.glitch-target.glitching::before {
    left: 2px;
    text-shadow: -1px 0 #ff00c1;
    clip-path: inset(50% 0 50% 0);
    animation: noise-glitch 0.5s infinite;
}

.glitch-target.glitching::after {
    left: -2px;
    text-shadow: -1px 0 #00fff9;
    clip-path: inset(50% 0 50% 0);
    animation: noise-glitch 0.5s infinite reverse;
}

@keyframes text-shake {
    0% { transform: translate(0,0); }
    25% { transform: translate(-2px, 2px); }
    50% { transform: translate(2px, -2px); }
    75% { transform: translate(2px, 2px); }
    100% { transform: translate(0,0); }
}

@keyframes noise-glitch {
    0% { clip-path: inset(69% 0 29% 0); } 10% { clip-path: inset(43% 0 55% 0); } 20% { clip-path: inset(19% 0 18% 0); } 30% { clip-path: inset(75% 0 23% 0); } 40% { clip-path: inset(2% 0 29% 0); } 50% { clip-path: inset(93% 0 4% 0); } 60% { clip-path: inset(34% 0 18% 0); } 70% { clip-path: inset(86% 0 4% 0); } 80% { clip-path: inset(93% 0 5% 0); } 90% { clip-path: inset(5% 0 50% 0); } 100% { clip-path: inset(45% 0 53% 0); }
}

.overseer-container .face {
    transition: filter 0.5s ease;
    position: relative;
}

.overseer-container .face.glitching::after {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'%3E%3Cg fill-opacity='0.2'%3E%3Cpath fill='%23ff0000' d='M0 0h800v600H0z'/%3E%3Cpath d='M0 0h800v600H0z' fill-opacity='0.1'/%3E%3C/g%3E%3C/svg%3E");
    animation: noise-glitch 0.3s infinite;
    opacity: 0.5;
}

.leaked-memo {
    background-color: #1a2433;
    border-left: 4px solid #ef4444;
    font-family: 'Courier New', Courier, monospace;
}

.redacted {
    background-color: #e5e7eb;
    color: #e5e7eb;
    cursor: pointer;
    transition: all 0.2s ease;
    user-select: none;
}

.redacted.revealed {
    background-color: transparent;
    color: #fca5a5;
}

#stickerbomb-overlay {
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background-color: rgba(220, 38, 38, 0.85);
    color: white;
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-family: 'Courier New', Courier, monospace;
    font-size: 5vw;
    font-weight: bold;
    text-transform: uppercase;
    line-height: 1;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease;
    background-image: repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,0.1) 35px, rgba(255,255,255,0.1) 70px);
}

#stickerbomb-overlay.visible {
    opacity: 1;
    visibility: visible;
}

#premise-text::after {
    content: '_';
    animation: blink 1s step-end infinite;
}

#premise-text.typing-done::after {
    display: none;
}

@keyframes blink {
    50% { opacity: 0; }
}

#lore .text-indigo-800 { color: #9be2ff; }
#lore .text-indigo-700 { color: #81e6ff; }
#lore .text-gray-500 { color: #a0aec0; }
#lore .text-gray-400 { color: #a0aec0; }
#lore .text-gray-700 { color: #cbd5e0; }
#lore .text-indigo-600 { background-color: #4c51bf; }
#lore .text-indigo-200 { background-color: #5d67e2; }
#lore .text-indigo-800.font-semibold { color: #e0e7ff; }
#lore .border-indigo-100 { border-color: #4a5568; }
#lore .bg-indigo-50 { background-color: #2f364d; }
#lore .border-indigo-200 { border-color: #4a5568; }
#lore .shadow-inner { box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.4); }

#lore .mantras-section h2 { color: #9be2ff; }
#lore .mantras-section p#phrase-display { color: #a0aec0; }
#lore .mantras-section button { background-color: #4c51bf; color: #e0e7ff; }
#lore .mantras-section button:hover { background-color: #6a74da; }

/* ===== HIERARCHY & GAMEPLAY LOOP STYLES ===== */
.internal-world-pyramid {
    width: 100%;
    max-width: 1200px;
    margin: 2rem auto;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.pyramid-level {
    display: flex;
    justify-content: center;
    flex-wrap: wrap; 
    gap: 1.5rem;
    width: 100%;
    position: relative;
    padding: 2rem 0;
}

.pyramid-card-wrapper {
    position: relative;
    flex-shrink: 0;
}

.pyramid-card-wrapper::before {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 100%;
    transform: translateX(-50%);
    width: 2px;
    height: 2rem; 
    background-color: #4a5568; 
}

.pyramid-level:first-child .pyramid-card-wrapper::before { display: none; }

.pyramid-level::after {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    right: 50%;
    height: 2px;
    background-color: #4a5568;
    z-index: -1;
}
.pyramid-level.level-2::after { left: 25%; right: 25%; }
.pyramid-level.level-3::after { left: 16.66%; right: 16.66%; }
.pyramid-level.level-4::after { left: 12.5%; right: 12.5%; }
.pyramid-level.level-5::after { left: 10%; right: 10%; }
.pyramid-level.level-1::after { display: none; }

.pyramid-card {
    background-color: #374151; 
    border: 1px solid #4b5563; 
    width: 200px;
    transition: all 0.3s ease;
}
.pyramid-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.1);
}
.pyramid-card .expandable-toggle { font-size: 1rem; font-weight: 600; }
.pyramid-card .expandable-content { font-size: 0.875rem; }

.redacted-partition-name {
    font-family: 'Courier New', Courier, monospace;
    animation: text-glitch 1.5s infinite steps(8);
}

@keyframes text-glitch {
    0% { text-shadow: 1px 0 0 #ef4444, -1px 0 0 #a5b4fc; }
    25% { text-shadow: -1px 0 0 #ef4444, 1px 0 0 #a5b4fc; }
    50% { text-shadow: 1px 0 0 #ef4444, 1px 0 0 #a5b4fc; transform: skewX(-5deg); }
    75% { text-shadow: -1px 0 0 #ef4444, -1px 0 0 #a5b4fc; }
    100% { text-shadow: 1px 0 0 #ef4444, -1px 0 0 #a5b4fc; transform: skewX(0); }
}
 
#gameplay-loop-container .level-selector, #path-timeline-wrapper {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
#gameplay-loop-container .level-selector::-webkit-scrollbar, #path-timeline-wrapper::-webkit-scrollbar {
    display: none;
}
.loop-level-btn {
    transition: all 0.2s ease-in-out;
}
.loop-level-btn.active {
    background-color: #4f46e5;
    color: #fff;
    transform: scale(1.05);
}
.choice-btn {
    transition: all 0.2s ease-in-out;
}
.choice-btn:hover {
    transform: translateY(-2px);
}
.consequence-box {
    transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
}

/* Narrative Path Visualizer Styles */
#path-timeline {
    display: flex;
    align-items: center;
    min-width: 1200px;
}
.path-node {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-shrink: 0;
    width: 120px;
}
.path-node .node-label {
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    color: #9ca3af;
}
.path-node .node-circle {
    width: 20px;
    height: 20px;
    border: 3px solid #4b5563;
    background-color: #1f2937;
    transition: all 0.3s ease;
}
.path-node.active .node-circle {
    border-color: #a5b4fc;
}
.path-node .node-choices button {
    width: 32px;
    height: 32px;
    font-size: 1rem;
    border: 2px solid transparent;
}
.path-node .node-choices button.selected {
    transform: scale(1.1);
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.3);
}
.path-node .node-choices button:disabled:not(.selected) {
    opacity: 0.3;
    cursor: not-allowed;
}

.path-connector {
    flex-grow: 1;
    height: 4px;
    background-color: #4b5563;
}

#dissonance-meter-container .bar {
    transition: width 0.5s ease-out;
}
 
/* Anatomy of a Memory Styles */
.anatomy-step {
    opacity: 0.3;
    transform: translateX(-10px);
    transition: opacity 0.5s ease, transform 0.5s ease;
}
.anatomy-step.visible {
    opacity: 1;
    transform: translateX(0);
}
.anatomy-step i {
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* Fractured Mind Interactive Styles */
#fractured-mind-container {
    perspective: 1000px;
    cursor: pointer;
    height: 400px;
    width: 100%;
}
.brain-wrapper {
    position: relative;
    width: 256px;
    height: 256px;
    transition: transform 0.8s ease-in-out;
    transform-style: preserve-3d;
}
.brain-half {
    position: absolute;
    top: 0;
    width: 128px;
    height: 256px;
    transition: transform 0.8s cubic-bezier(0.68, -0.55, 0.27, 1.55);
    backface-visibility: hidden;
}
.brain-half.left { left: 0; }
.brain-half.right { right: 0; }
 
#fractured-mind-container.split .brain-half.left {
    transform: translateX(-120px) rotateY(-25deg);
}
#fractured-mind-container.split .brain-half.right {
    transform: translateX(120px) rotateY(25deg);
}

.concept-node {
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: currentColor;
    opacity: 0;
    transform: scale(0);
    transition: opacity 0.5s 0.5s, transform 0.5s 0.5s;
}
#fractured-mind-container.split .concept-node {
    opacity: 1;
    transform: scale(1);
}
.concept-node:hover {
    transform: scale(1.5) !important;
    z-index: 20;
}

.node-tooltip {
    position: absolute;
    bottom: 120%;
    left: 50%;
    transform: translateX(-50%);
    background-color: #111827;
    color: #d1d5db;
    padding: 8px 12px;
    border-radius: 6px;
    font-size: 0.8rem;
    font-weight: 600;
    white-space: nowrap;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.2s, visibility 0.2s;
    pointer-events: none;
}
.concept-node:hover .node-tooltip {
    opacity: 1;
    visibility: visible;
}
 
/* Classified Info Styles */
#classified-container {
    cursor: pointer;
    border: 2px dashed #4b5563;
    position: relative;
    overflow: hidden;
}
.classified-overlay {
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    transition: opacity 0.5s ease;
}
#classified-container.revealed .classified-overlay {
    opacity: 0;
    pointer-events: none;
}
#classified-content {
    display: none;
    font-family: 'Courier New', Courier, monospace;
    padding-top: 1rem;
    padding-bottom: 1rem;
}
#classified-container.revealed #classified-content {
    display: block;
}
#classified-content::after {
    content: '_';
    animation: blink 1s step-end infinite;
}
 
/* Overseer Test Styles */
.pattern-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5rem;
    width: 150px;
    margin: 0 auto;
}
.pattern-cell {
    width: 42px;
    height: 42px;
    border: 2px solid #4b5563;
    cursor: pointer;
    transition: all 0.2s ease;
}
.pattern-cell:hover {
    background-color: #4f46e5;
}
.pattern-cell.flash {
    animation: flash-anim 0.5s;
}
@keyframes flash-anim {
    50% { background-color: #a5b4fc; }
}


/* ===== NEW STYLES FOR MODALS AND HACKER TRANSITION ===== */

/* Modal Styles */
.modal {
    position: fixed;
    inset: 0;
    z-index: 5000;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease;
}
.modal.visible {
    opacity: 1;
    visibility: visible;
}
.modal-overlay {
    position: absolute;
    inset: 0;
    background-color: rgba(17, 24, 39, 0.8);
    backdrop-filter: blur(5px);
}
.modal-content {
    position: relative;
    background-color: #1f2937;
    color: #d1d5db;
    padding: 2rem;
    border-radius: 0.5rem;
    border: 1px solid #4b5563;
    max-width: 90%;
    width: 600px;
    box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.5);
}
.modal-close-btn {
    position: absolute;
    top: 0.5rem;
    right: 1rem;
    font-size: 2rem;
    color: #9ca3af;
    background: none;
    border: none;
    cursor: pointer;
    line-height: 1;
}
.modal-close-btn:hover {
    color: #e5e7eb;
}

/* Hacker Popup Styles */
#hacker-popup {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 4000;
    transform: translateY(100%);
    transition: transform 0.5s cubic-bezier(0.25, 1, 0.5, 1);
    padding: 1rem;
    font-family: 'Courier New', Courier, monospace;
}
#hacker-popup.visible {
    transform: translateY(0);
}
.hacker-popup-content {
    max-width: 600px;
    margin: 0 auto;
    background-color: rgba(10, 10, 15, 0.9);
    backdrop-filter: blur(3px);
    border: 1px solid #ef4444;
    box-shadow: 0 0 15px rgba(239, 68, 68, 0.5), inset 0 0 10px rgba(239, 68, 68, 0.3);
    padding: 1.5rem;
    text-align: center;
    color: #fca5a5;
}
#hacker-popup .glitch-text {
    font-size: 1.25rem;
    font-weight: bold;
    color: #f87171;
    text-shadow: 0 0 5px #ef4444;
    position: relative;
}
#hacker-popup .glitch-text::before, #hacker-popup .glitch-text::after {
    content: attr(data-text);
    position: absolute; top: 0; left: 0; width: 100%; height: 100%;
    background: transparent;
}
#hacker-popup .glitch-text::before {
    left: 2px;
    text-shadow: -1px 0 #3b82f6;
    animation: noise-glitch 1.5s infinite linear alternate-reverse;
}
#hacker-popup .glitch-text::after {
    left: -2px;
    text-shadow: 1px 0 #4ade80;
    animation: noise-glitch 2s infinite linear alternate-reverse;
}

#hacker-popup .sub-text {
    font-size: 0.875rem;
    color: #9ca3af;
    margin-top: 0.5rem;
}
#breach-button {
    margin-top: 1rem;
    background-color: #dc2626;
    color: white;
    font-weight: bold;
    padding: 0.5rem 1.5rem;
    border: 1px solid #f87171;
    cursor: pointer;
    transition: all 0.2s ease;
}
#breach-button:hover {
    background-color: #ef4444;
    box-shadow: 0 0 10px #ef4444;
}

/* Full Page Glitch Effect */
#fullpage-glitch-overlay {
    position: fixed;
    inset: 0;
    background-color: #111827;
    z-index: 99999;
    pointer-events: none;
    display: none;
}
#fullpage-glitch-overlay.active {
    display: block;
    animation: full-glitch 0.4s steps(2, end);
}

@keyframes full-glitch {
    0% { clip-path: inset(10% 0 85% 0); }
    10% { clip-path: inset(90% 0 1% 0); }
    20% { clip-path: inset(30% 0 60% 0); }
    30% { clip-path: inset(50% 0 40% 0); opacity: 0.8; }
    40% { clip-path: inset(15% 0 70% 0); }
    50% { clip-path: inset(80% 0 5% 0); transform: translateX(10px); }
    60% { clip-path: inset(25% 0 55% 0); }
    70% { clip-path: inset(65% 0 20% 0); transform: translateX(-10px); opacity: 0.6; }
    80% { clip-path: inset(35% 0 35% 0); }
    90% { clip-path: inset(95% 0 2% 0); }
    100% { clip-path: inset(0 0 0 0); }
}
`}]},waiwwai:{files:[{name:`index.html`,totalLines:653,sizeBytes:35382,code:`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WaiWWai | Project Bible</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.9.1/chart.min.js"><\/script>
    <link href="https://fonts.googleapis.com/css2?family=Courier+Prime:wght@400;700&family=DM+Sans:opsz,wght@9..40,400;700&family=Playfair+Display:ital,wght@0,400;1,900&display=swap" rel="stylesheet">
    <style>
        :root {
            --beige-light: #e8e4c9;
            --beige-dim: #d4c5a3;
            --beige-dark: #8a856b;
            --black: #0a0a0a;
            --grey-dark: #1f1f1f;
            --grey-mid: #404040;
            --liquid-color: rgba(212, 197, 163, 0.15);
        }

        body {
            background-color: var(--black);
            color: var(--beige-light);
            font-family: 'Courier Prime', monospace;
            overflow-x: hidden;
            margin: 0;
        }

        /* Typography overrides */
        .font-sans { font-family: 'DM Sans', sans-serif; }
        .font-serif { font-family: 'Playfair Display', serif; }
        .font-mono { font-family: 'Courier Prime', monospace; }

        /* SCROLLBAR */
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: var(--black); }
        ::-webkit-scrollbar-thumb { background: var(--beige-dark); border-radius: 4px; }

        /* UTILITY ANIMATIONS */
        @keyframes liquid-flow {
            0% { background-position: 0% 0%; }
            100% { background-position: 0% 200%; }
        }

        .liquid-bg {
            background: linear-gradient(180deg, 
                rgba(10,10,10,1) 0%, 
                rgba(31,31,31,0.8) 50%, 
                rgba(10,10,10,1) 100%),
                url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 1.79 4 4 1.79 4 4 1.79 4 4 1.79 4 4 1.79 4 4 1.79 4 4 1.79 4 4 1.79 4 4 1.79 4 4 1.79 4 4 1.79 4 4 1.79 4 4 1.79 4 4 1.79 4 4 1.79 4 4 1.79 4 4 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 2.24 5 5 2.24 5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 2.24 5 5 2.24 5 5 2.24 5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23d4c5a3' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E");
            animation: liquid-flow 60s linear infinite;
        }

        /* GLITCH EFFECTS */
        .glitch-wrapper { position: relative; display: inline-block; }
        .glitch-text { position: relative; z-index: 1; }
        .glitch-text::before, .glitch-text::after {
            content: attr(data-text);
            position: absolute; top: 0; left: 0; width: 100%; height: 100%;
            background: var(--black); opacity: 0.7;
        }
        .glitch-text::before {
            color: var(--beige-light);
            z-index: -1;
            animation: glitch-anim-1 3s infinite linear alternate-reverse;
        }
        .glitch-text::after {
            color: #505050;
            z-index: -2;
            animation: glitch-anim-2 2s infinite linear alternate-reverse;
        }

        @keyframes glitch-anim-1 {
            0% { clip-path: inset(20% 0 80% 0); transform: translate(-2px, 1px); }
            20% { clip-path: inset(60% 0 10% 0); transform: translate(2px, -1px); }
            40% { clip-path: inset(40% 0 50% 0); transform: translate(-2px, 2px); }
            60% { clip-path: inset(80% 0 5% 0); transform: translate(2px, -2px); }
            80% { clip-path: inset(10% 0 70% 0); transform: translate(-1px, 1px); }
            100% { clip-path: inset(30% 0 30% 0); transform: translate(1px, -1px); }
        }
        @keyframes glitch-anim-2 {
            0% { clip-path: inset(10% 0 60% 0); transform: translate(2px, -1px); }
            100% { clip-path: inset(80% 0 10% 0); transform: translate(-2px, 1px); }
        }

        /* UI COMPONENTS */
        .nav-btn {
            position: relative;
            overflow: hidden;
            transition: all 0.3s ease;
        }
        .nav-btn::after {
            content: '';
            position: absolute;
            bottom: 0; left: 0; width: 0%; height: 1px;
            background-color: var(--beige-dim);
            transition: width 0.3s ease;
        }
        .nav-btn:hover::after, .nav-btn.active::after { width: 100%; }
        .nav-btn.active { color: var(--beige-light); text-shadow: 0 0 8px rgba(212, 197, 163, 0.3); }

        .content-card {
            background: rgba(20, 20, 20, 0.6);
            backdrop-filter: blur(5px);
            border: 1px solid var(--grey-mid);
            box-shadow: 0 10px 30px -10px rgba(0,0,0,0.5);
            transition: transform 0.3s ease, border-color 0.3s ease;
        }
        .content-card:hover {
            border-color: var(--beige-dark);
            transform: translateY(-2px);
        }

        /* INVENTORY & INTERACTIVE */
        .inventory-item {
            cursor: pointer;
            transition: all 0.3s;
        }
        .inventory-item.decayed {
            opacity: 0.2;
            filter: grayscale(100%) blur(2px);
            transform: scale(0.9);
        }
        
        .evasive-btn {
            transition: transform 0.2s ease-out;
            position: relative;
        }

        /* THE FRONT PAGE (DECEPTION) */
        #public-face {
            background-color: #f0ece2; /* Beige Station Color */
            color: #111;
            font-family: 'DM Sans', sans-serif;
        }
        .tube-roundel {
            border: 8px solid #DC241F;
            background: white;
            width: 130px; height: 130px;
            border-radius: 50%;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .tube-bar {
            background: #0019A8;
            color: white;
            width: 150px;
            height: 28px;
            position: absolute;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            text-transform: uppercase;
            font-size: 14px;
            letter-spacing: 0.5px;
            white-space: nowrap;
        }
        
        #service-alert {
            position: fixed; bottom: -100px; left: 0; right: 0;
            background: #DC241F; color: white;
            padding: 1rem; text-align: center;
            transition: bottom 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            cursor: pointer;
        }
        #service-alert.visible { bottom: 0; }

        /* THE CANVAS RAIN */
        #rain-canvas {
            position: fixed; top: 0; left: 0;
            width: 100%; height: 100%;
            z-index: -1;
            pointer-events: none;
            opacity: 0.15;
        }

        .fade-out { opacity: 0; pointer-events: none; transition: opacity 1s ease; }
        .hidden-content { display: none; }
        .visible-flex { display: flex; }
    </style>
</head>
<body>

    <!-- ===================== LAYER 1: THE PUBLIC FACE ===================== -->
    <div id="public-face" class="fixed inset-0 z-50 flex flex-col items-center justify-center transition-opacity duration-1000">
        <div class="tube-roundel mb-8">
            <div class="tube-bar">Turnpike Lane</div>
        </div>
        <h1 class="text-4xl font-bold tracking-tight uppercase mb-2 text-gray-900">Station Status</h1>
        <div class="bg-white border border-gray-300 p-6 w-full max-w-md shadow-sm text-sm">
            
            <!-- Tube Status -->
            <div class="flex justify-between items-center border-b border-gray-200 pb-2 mb-4 group cursor-help">
                <span class="font-bold text-lg text-[#0019A8]">Piccadilly Line</span>
                <!-- Feature 1: The Station Glitch -->
                <span class="text-green-700 font-bold group-hover:hidden">Good Service</span>
                <span class="text-red-700 font-bold hidden group-hover:inline font-mono glitch-text" data-text="NO ESCAPE">NO ESCAPE</span>
            </div>
            
            <!-- Next Trains -->
            <div class="mb-6">
                <h3 class="font-bold text-gray-500 text-xs uppercase tracking-wider mb-2">Next Trains</h3>
                <div class="flex justify-between mb-1 group cursor-help">
                    <span>Cockfosters</span>
                    <span class="font-mono font-bold group-hover:hidden">2 mins</span>
                    <span class="font-mono font-bold hidden group-hover:inline text-red-600">YEARS AGO</span>
                </div>
                <div class="flex justify-between mb-1">
                    <span>Heathrow T5</span>
                    <span class="font-mono font-bold">4 mins</span>
                </div>
                <div class="flex justify-between group cursor-help">
                    <span>Arnos Grove</span>
                    <span class="font-mono font-bold group-hover:hidden">7 mins</span>
                    <span class="font-mono font-bold hidden group-hover:inline text-red-600">WAIT</span>
                </div>
            </div>

            <!-- Bus Status -->
            <div>
                <h3 class="font-bold text-gray-500 text-xs uppercase tracking-wider mb-2">Bus Departures (Stop C)</h3>
                <div class="flex justify-between mb-1 border-t border-gray-100 pt-1 group cursor-help">
                    <span><strong class="bg-red-600 text-white px-1 rounded-sm mr-2">29</strong>Wood Green</span>
                    <span class="font-mono font-bold group-hover:hidden">due</span>
                    <span class="font-mono font-bold hidden group-hover:inline text-red-600">GONE</span>
                </div>
                <div class="flex justify-between mb-1 border-t border-gray-100 pt-1">
                    <span><strong class="bg-red-600 text-white px-1 rounded-sm mr-2">41</strong>Archway</span>
                    <span class="font-mono font-bold">3 mins</span>
                </div>
                <div class="flex justify-between border-t border-gray-100 pt-1">
                    <span><strong class="bg-red-600 text-white px-1 rounded-sm mr-2">141</strong>London Bridge</span>
                    <span class="font-mono font-bold">6 mins</span>
                </div>
            </div>

        </div>
        <p class="mt-8 text-xs text-gray-500 uppercase tracking-widest">Transport for London</p>

        <!-- The Trigger -->
        <div id="service-alert" class="flex flex-col items-center justify-center">
            <h2 class="text-lg font-bold uppercase tracking-widest glitch-text" data-text="SERVICE DISRUPTION">SERVICE DISRUPTION</h2>
            <p class="text-sm opacity-80 mb-2">Unidentified anomaly detected at Platform 4.</p>
            <button id="breach-btn" class="bg-black text-white px-6 py-1 text-sm uppercase border border-white hover:bg-white hover:text-black transition-colors">
                VIEW REPORT
            </button>
        </div>
    </div>

    <!-- ===================== LAYER 2: THE GAME BIBLE ===================== -->
    <div id="game-bible" class="hidden-content min-h-screen relative">
        
        <!-- Background Canvas for "Pouring" Effect -->
        <canvas id="rain-canvas"></canvas>
        <div class="fixed inset-0 liquid-bg pointer-events-none z-[-2]"></div>

        <!-- Navigation -->
        <nav class="fixed top-0 left-0 w-full z-40 bg-black/80 backdrop-blur-md border-b border-gray-800">
            <div class="container mx-auto px-6 h-16 flex items-center justify-between">
                <div class="text-2xl font-bold font-serif tracking-tighter text-[#d4c5a3]">
                    WaiWWai
                </div>
                <div class="hidden md:flex space-x-8 text-sm font-mono text-gray-400">
                    <button class="nav-btn active" data-target="overview">OVERVIEW</button>
                    <button class="nav-btn" data-target="gameplay">GAMEPLAY</button>
                    <button class="nav-btn" data-target="characters">CHARACTERS</button>
                    <button class="nav-btn" data-target="progression">PROGRESSION</button>
                    <button class="nav-btn" data-target="mechanics">MECHANICS</button>
                </div>
                <!-- Mobile Menu Button (Simplified) -->
                <button class="md:hidden text-[#d4c5a3]">///</button>
            </div>
        </nav>

        <!-- Content Container -->
        <main class="container mx-auto px-4 pt-24 pb-12">
            
            <!-- SECTION: OVERVIEW -->
            <section id="overview" class="content-section animate-fade-in">
                <div class="max-w-4xl mx-auto text-center mb-16">
                    <p class="text-[#8a856b] text-xs font-bold tracking-[0.3em] mb-4">PROJECT BIBLE: CONFIDENTIAL</p>
                    <h1 class="text-5xl md:text-7xl font-serif font-black text-[#e8e4c9] mb-6 leading-tight">
                        where am i,<br>
                        <span class="italic text-[#606060]">wait,</span><br>
                        where am i
                    </h1>
                    <p class="text-xl text-gray-400 font-mono max-w-2xl mx-auto leading-relaxed">
                        A disorienting 2.5D psychological horror experience about the terrifying isolation of dementia, set on an infinite London Underground platform.
                    </p>
                </div>

                <div class="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    <div class="content-card p-8">
                        <h3 class="text-xl font-serif text-[#d4c5a3] mb-4 border-b border-gray-700 pb-2">The Premise</h3>
                        <p class="text-gray-400 text-sm leading-7">
                            Inspired by <em>Everywhere at the End of Time</em>, WaiWWai places the player in the shoes of an elderly woman lost on a muted, beige underground platform. Reality is unstable. Time skips. Strangers accuse you of things you didn't do. The only constant is the train that rushes past - a violent reset that erodes the world further.
                        </p>
                    </div>
                    <div class="content-card p-8 flex flex-col justify-center items-center text-center border-l-4 border-[#d4c5a3]">
                        <h3 class="text-4xl font-serif italic text-[#e8e4c9] mb-2">"No Future."</h3>
                        <h3 class="text-4xl font-serif italic text-[#8a856b] mb-2">"No Backstory."</h3>
                        <h3 class="text-4xl font-serif italic text-[#404040]">"No Escape."</h3>
                    </div>
                </div>
            </section>

            <!-- SECTION: GAMEPLAY -->
            <section id="gameplay" class="content-section hidden-content">
                <div class="max-w-5xl mx-auto">
                    <div class="flex flex-col md:flex-row items-end mb-12 border-b border-gray-800 pb-4">
                        <h2 class="text-4xl font-serif text-[#e8e4c9]">The Loop</h2>
                        <span class="ml-4 text-xs font-mono text-[#8a856b] mb-2">SYSTEMIC DETERIORATION</span>
                    </div>

                    <div class="grid md:grid-cols-3 gap-8 mb-16">
                        <!-- Card 1 -->
                        <div class="content-card p-6 relative overflow-hidden group">
                            <div class="absolute top-0 right-0 p-2 opacity-20 text-4xl font-black">01</div>
                            <h4 class="text-lg font-bold text-[#d4c5a3] mb-3">Exploration</h4>
                            <p class="text-sm text-gray-400">Navigate the infinite beige tiles of Turnpike Lane. Interact with objects that may or may not exist. The movement is slow, heavy, 2.5D side-scrolling.</p>
                        </div>
                        <!-- Card 2 -->
                        <div class="content-card p-6 relative overflow-hidden group">
                            <div class="absolute top-0 right-0 p-2 opacity-20 text-4xl font-black">02</div>
                            <h4 class="text-lg font-bold text-[#d4c5a3] mb-3">The Train Event</h4>
                            <p class="text-sm text-gray-400">A deafening, 100db screech. The screen shakes violently. This is the level transition. When it leaves, the platform has changed. You have aged.</p>
                        </div>
                        <!-- Card 3 -->
                        <div class="content-card p-6 relative overflow-hidden group">
                            <div class="absolute top-0 right-0 p-2 opacity-20 text-4xl font-black">03</div>
                            <h4 class="text-lg font-bold text-[#d4c5a3] mb-3">Gaslighting</h4>
                            <p class="text-sm text-gray-400">The game lies to you. Controls invert. Inventory items disappear. NPCs shout at you for actions you never took.</p>
                        </div>
                    </div>
                    
                    <!-- Feature 2: The Inventory of Nothing -->
                    <div class="bg-[#111] border border-gray-800 p-8 rounded-sm text-center relative">
                        <h3 class="font-mono text-[#d4c5a3] text-xl tracking-widest mb-4">INVENTORY SIMULATION</h3>
                        <p class="text-xs text-gray-500 mb-6">Click an item to inspect it.</p>
                        <div class="grid grid-cols-3 gap-4 max-w-xs mx-auto">
                            <div class="inventory-item bg-[#1f1f1f] h-20 flex items-center justify-center border border-gray-700 hover:border-[#d4c5a3]" data-item="Ticket">
                                <span class="text-2xl">🎫</span>
                            </div>
                            <div class="inventory-item bg-[#1f1f1f] h-20 flex items-center justify-center border border-gray-700 hover:border-[#d4c5a3]" data-item="Keys">
                                <span class="text-2xl">🗝️</span>
                            </div>
                            <div class="inventory-item bg-[#1f1f1f] h-20 flex items-center justify-center border border-gray-700 hover:border-[#d4c5a3]" data-item="Photo">
                                <span class="text-2xl">📷</span>
                            </div>
                        </div>
                        <p id="inv-status" class="mt-4 h-6 text-sm font-serif text-red-500 opacity-0 transition-opacity">It crumbled...</p>
                    </div>
                </div>
            </section>

            <!-- SECTION: CHARACTERS -->
            <section id="characters" class="content-section hidden-content">
                <div class="max-w-5xl mx-auto">
                    <h2 class="text-4xl font-serif text-[#e8e4c9] mb-12">Dramatis Personae</h2>
                    
                    <div class="space-y-4">
                        <!-- Character 1 -->
                        <div class="content-card p-0 flex flex-col md:flex-row overflow-hidden">
                            <div class="w-full md:w-1/3 bg-[#1a1a1a] flex items-center justify-center p-8 border-r border-gray-800">
                                <div class="w-24 h-24 bg-[#d4c5a3] rounded-full blur-sm opacity-50"></div> <!-- Silhouette Placeholder -->
                            </div>
                            <div class="p-8 w-full md:w-2/3">
                                <h3 class="text-2xl font-serif text-white">The Woman</h3>
                                <p class="text-[#8a856b] font-mono text-xs mb-4">SUBJECT: DETERIORATING</p>
                                <p class="text-gray-400 text-sm">
                                    No name. No history. She is a vessel for confusion. Her silhouette becomes more stooped and frail as the game progresses.
                                </p>
                            </div>
                        </div>

                        <!-- Character 2 -->
                        <div class="content-card p-0 flex flex-col md:flex-row overflow-hidden">
                            <div class="w-full md:w-1/3 bg-[#1a1a1a] flex items-center justify-center p-8 border-r border-gray-800">
                                <div class="w-24 h-24 bg-gray-800 rounded-full blur-md"></div>
                            </div>
                            <div class="p-8 w-full md:w-2/3">
                                <h3 class="text-2xl font-serif text-white">The Crowd</h3>
                                <p class="text-[#8a856b] font-mono text-xs mb-4">ENTITIES: HOSTILE/INDIFFERENT</p>
                                <p class="text-gray-400 text-sm">
                                    Faceless figures. Some walk through you. Others shout accusations. They represent the social isolation of London - people are physically close but emotionally unreachable.
                                </p>
                            </div>
                        </div>

                        <!-- Character 3 -->
                        <div class="content-card p-0 flex flex-col md:flex-row overflow-hidden border-red-900/30">
                            <div class="w-full md:w-1/3 bg-[#0f0505] flex items-center justify-center p-8 border-r border-gray-800">
                                <div class="w-24 h-24 bg-black border border-red-900 rounded-full"></div>
                            </div>
                            <div class="p-8 w-full md:w-2/3">
                                <h3 class="text-2xl font-serif text-red-500">The Hooded Figure</h3>
                                <p class="text-red-900 font-mono text-xs mb-4">THE END</p>
                                <p class="text-gray-400 text-sm">
                                    Appears only at the end. The agent of the final loss. Snatches the handbag (identity) and delivers the final blow.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- SECTION: PROGRESSION -->
            <section id="progression" class="content-section hidden-content">
                <div class="max-w-5xl mx-auto">
                    <h2 class="text-4xl font-serif text-[#e8e4c9] mb-8 text-center">The Descent</h2>
                    
                    <!-- Timeline -->
                    <div class="relative border-l border-[#d4c5a3] ml-4 md:ml-auto md:mr-auto md:w-2/3 space-y-12 pl-8 py-4">
                        
                        <div class="relative">
                            <div class="absolute -left-[39px] top-1 w-5 h-5 bg-[#d4c5a3] rounded-full border-4 border-black"></div>
                            <h3 class="text-xl font-bold text-white">Phase 1: Arrival</h3>
                            <p class="text-sm text-gray-400 mt-2">Turnpike Lane is recognizable. Muted beige tiles. Eerie silence. Mild confusion - why am I here?</p>
                        </div>

                        <div class="relative">
                            <div class="absolute -left-[39px] top-1 w-5 h-5 bg-[#8a856b] rounded-full border-4 border-black"></div>
                            <h3 class="text-xl font-bold text-white">Phase 2: The Glitch</h3>
                            <p class="text-sm text-gray-400 mt-2">NPCs begin accusations. Station names blur into gibberish (e.g., "WAIT", "WHERE"). Tinnitus ringing begins.</p>
                        </div>

                        <div class="relative">
                            <div class="absolute -left-[39px] top-1 w-5 h-5 bg-[#404040] rounded-full border-4 border-black"></div>
                            <h3 class="text-xl font-bold text-white">Phase 3: Erosion</h3>
                            <p class="text-sm text-gray-400 mt-2">Tiles ripple like skin. Shadows detach from objects. The "Train Reset" happens more frequently, stripping away inventory.</p>
                        </div>

                        <div class="relative">
                            <div class="absolute -left-[39px] top-1 w-5 h-5 bg-red-900 rounded-full border-4 border-black"></div>
                            <h3 class="text-xl font-bold text-red-500 glitch-text" data-text="Phase 4: The Void">Phase 4: The Void</h3>
                            <p class="text-sm text-gray-400 mt-2">The Robbery. The Stabbing. The permanent death state. The game saves the corpse to the main menu.</p>
                        </div>

                    </div>
                </div>
            </section>
            
            <!-- SECTION: MECHANICS -->
            <section id="mechanics" class="content-section hidden-content">
                <div class="max-w-6xl mx-auto">
                    <div class="grid md:grid-cols-2 gap-12">
                        <div>
                            <h2 class="text-3xl font-serif text-[#e8e4c9] mb-6">Engineered Frustration</h2>
                            <p class="text-gray-400 mb-6 leading-relaxed">
                                Traditional games empower the player. WaiWWai disempowers them. The mechanics are designed to simulate the loss of agency found in dementia.
                            </p>
                            
                            <div class="space-y-4">
                                <div class="bg-[#1a1a1a] p-4 border-l-2 border-[#d4c5a3]">
                                    <h4 class="font-bold text-[#d4c5a3]">Phantom Inputs</h4>
                                    <p class="text-xs text-gray-500 mt-1">The character stumbles or turns without player input.</p>
                                </div>
                                <div class="bg-[#1a1a1a] p-4 border-l-2 border-[#d4c5a3]">
                                    <h4 class="font-bold text-[#d4c5a3]">Temporal Teleportation</h4>
                                    <p class="text-xs text-gray-500 mt-1">Instant position shifts. Did I walk here? Or did I forget walking here?</p>
                                </div>
                                <div class="bg-[#1a1a1a] p-4 border-l-2 border-[#d4c5a3]">
                                    <h4 class="font-bold text-[#d4c5a3]">The Rare Save (1%)</h4>
                                    <p class="text-xs text-gray-500 mt-1">If jumping on tracks: NPC pulls you back. They are annoyed, not kind. "Watch it, crazy bat."</p>
                                </div>
                            </div>
                        </div>

                        <div class="bg-[#0a0a0a] border border-gray-800 p-6 flex flex-col items-center justify-center">
                            
                            <!-- Feature 3: The Gaslight Button -->
                            <div class="relative w-full h-64 flex items-center justify-center bg-[#111] overflow-hidden">
                                <p class="absolute top-4 text-xs text-gray-600 font-mono">MECHANIC_DEMO: 004</p>
                                <button id="evasive-btn" class="evasive-btn px-6 py-2 bg-[#d4c5a3] text-black font-bold uppercase border border-transparent shadow-lg">
                                    SAVE GAME
                                </button>
                                <p id="save-status" class="absolute bottom-4 text-red-600 font-mono text-xs hidden">ERROR: PERMISSION DENIED</p>
                            </div>
                            <p class="text-center text-xs font-mono text-gray-600 mt-4">HOVER TO INTERACT</p>

                        </div>
                    </div>
                </div>
            </section>

        </main>

        <!-- Footer -->
        <footer class="border-t border-gray-900 bg-black text-center py-8 mt-12">
            <p class="text-[#404040] text-xs font-mono">MEMORY PERSISTENCE: PERMANENT // ENDING: INEVITABLE</p>
        </footer>

    </div>

    <script>
        document.addEventListener('DOMContentLoaded', () => {
            
            // --- 1. The Deceptive Intro ---
            const alertBox = document.getElementById('service-alert');
            const breachBtn = document.getElementById('breach-btn');
            const publicFace = document.getElementById('public-face');
            const gameBible = document.getElementById('game-bible');
            
            // Show alert after a few seconds
            setTimeout(() => {
                alertBox.classList.add('visible');
            }, 2000);

            // Handle Breach
            breachBtn.addEventListener('click', () => {
                // Glitch effect
                publicFace.style.animation = "glitch-anim-1 0.2s infinite";
                publicFace.style.filter = "invert(1) grayscale(1)";
                
                setTimeout(() => {
                    publicFace.style.opacity = "0";
                    setTimeout(() => {
                        publicFace.style.display = "none";
                        gameBible.classList.remove('hidden-content');
                        initRainCanvas(); // Start canvas
                    }, 1000);
                }, 800);
            });

            // --- 2. Navigation ---
            const navBtns = document.querySelectorAll('.nav-btn');
            const sections = document.querySelectorAll('.content-section');

            navBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    // Update Buttons
                    navBtns.forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');

                    // Update Content
                    const targetId = btn.dataset.target;
                    sections.forEach(sec => {
                        if(sec.id === targetId) {
                            sec.classList.remove('hidden-content');
                            sec.classList.add('animate-fade-in');
                        } else {
                            sec.classList.add('hidden-content');
                        }
                    });
                    
                    // Scroll to top
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                });
            });

            // --- 3. Canvas Rain Effect (The "Pouring Liquid") ---
            function initRainCanvas() {
                const canvas = document.getElementById('rain-canvas');
                const ctx = canvas.getContext('2d');
                
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;

                const columns = Math.floor(canvas.width / 20);
                const drops = [];

                for(let i=0; i<columns; i++) {
                    drops[i] = Math.random() * canvas.height; // Random start Y
                }

                function draw() {
                    // Semi-transparent black to create trails
                    ctx.fillStyle = 'rgba(10, 10, 10, 0.1)';
                    ctx.fillRect(0, 0, canvas.width, canvas.height);

                    ctx.fillStyle = '#d4c5a3'; // Beige color
                    ctx.font = '14px monospace';

                    for(let i=0; i<drops.length; i++) {
                        const text = Math.random() > 0.95 ? 'WHERE' : '|';
                        ctx.fillText(text, i*20, drops[i]*20);

                        if(drops[i]*20 > canvas.height && Math.random() > 0.975) {
                            drops[i] = 0;
                        }
                        drops[i]++;
                    }
                    requestAnimationFrame(draw);
                }
                draw();

                window.addEventListener('resize', () => {
                    canvas.width = window.innerWidth;
                    canvas.height = window.innerHeight;
                });
            }

            // --- 4. Inventory Logic (New Feature) ---
            const invItems = document.querySelectorAll('.inventory-item');
            const invStatus = document.getElementById('inv-status');
            const statusMessages = ["It crumbled...", "It wasn't yours...", "What ticket?", "Forgot..."];

            invItems.forEach(item => {
                item.addEventListener('click', () => {
                    if(!item.classList.contains('decayed')) {
                        item.classList.add('decayed');
                        
                        // Change content randomly
                        const content = item.querySelector('span');
                        content.innerText = "💨"; // Dust emoji
                        
                        // Show random message
                        invStatus.innerText = statusMessages[Math.floor(Math.random() * statusMessages.length)];
                        invStatus.style.opacity = 1;
                        setTimeout(() => { invStatus.style.opacity = 0; }, 1500);
                    }
                });
            });

            // --- 5. Gaslight Button Logic (New Feature) ---
            const evasiveBtn = document.getElementById('evasive-btn');
            const saveStatus = document.getElementById('save-status');
            let moveCount = 0;

            evasiveBtn.addEventListener('mouseover', () => {
                // 50% chance to move on hover
                if(Math.random() > 0.5) {
                    const x = (Math.random() - 0.5) * 150;
                    const y = (Math.random() - 0.5) * 100;
                    evasiveBtn.style.transform = \`translate(\${x}px, \${y}px)\`;
                    moveCount++;
                }
            });

            evasiveBtn.addEventListener('click', () => {
                // If clicked, gaslight the user
                const texts = ["DID NOT SAVE", "CORRUPTED", "ERROR: 404", "WHY TRY?"];
                evasiveBtn.innerText = texts[moveCount % texts.length];
                evasiveBtn.style.backgroundColor = "#881111";
                evasiveBtn.style.color = "white";
                saveStatus.classList.remove('hidden');
                
                setTimeout(() => {
                    saveStatus.classList.add('hidden');
                    evasiveBtn.innerText = "SAVE GAME";
                    evasiveBtn.style.backgroundColor = "#d4c5a3";
                    evasiveBtn.style.color = "black";
                    evasiveBtn.style.transform = "translate(0,0)";
                }, 2000);
            });

        });
    <\/script>
</body>
</html>
`}]}};export{e as t};