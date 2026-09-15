/**
 * TIME TRAVEL THROUGH OBJECTS
 * Interactive Expedition Engine
 */

// ==========================================
// 1. DATA REPOSITORY (Level 3 Deep Inspector)
// ==========================================
const STOPS_DATA = {
  1: {
    title: "Chair of Reniseneb",
    date: "c. 1450 BCE · 18th Dynasty Egypt",
    guide: "Curator Cora",
    badge: "SOCIETY // STATUS & POWER",
    summary: "Discovered in Thebes, this chair crafted from ebony and acacia wood proves that seating was initially a technology of separation.",
    deepDive: "In the ancient Mediterranean world, ordinary people squatted on reeds or sat directly on hard-packed earth. To elevate one's pelvis 40 centimeters into the air was an act of political dominance. The legs are modeled after carved lion paws, symbolically granting the seated official the predatory power of a lion.",
    curatorNote: "Notice the slanted backrest supported by vertical stays—ergonomics designed to maintain an upright, austere, and unyielding posture."
  },
  2: {
    title: "Klismos Chair",
    date: "5th Century BCE · Classical Athens",
    guide: "Curator Cora",
    badge: "SOCIETY // DEMOCRATIC PROPORTION",
    summary: "The celebrated Klismos chair marks a historical pivot where seating shifted from rigid divine intimidation to harmonious human balance.",
    deepDive: "Depicted on Greek red-figure vases and grave steles, the Klismos featured swept, saber-like legs and a broad concave horizontal backboard. It accommodated men and women equally in domestic and civic discussions, reflecting the Greek pursuit of balance (sophrosyne).",
    curatorNote: "The curved crest rail supported the thoracic spine rather than forcing stiff posture, matching Athens' emerging intellectual conversation culture."
  },
  3: {
    title: "The Coronation Chair",
    date: "1308 CE · Westminster Abbey",
    guide: "Curator Cora",
    badge: "SOCIETY // MONARCHICAL LEGITIMACY",
    summary: "Commissioned by King Edward I to encase the Stone of Scone, this gothic oak seat transformed furniture into an altar of sovereign right.",
    deepDive: "Once gilded with colored glass and foliage patterns, the chair was built not for luxury, but as an architectural monument. The monarch sits physically above the captured sacred relic of Scotland, turning an everyday object into legal, territorial, and divine supremacy.",
    curatorNote: "Over centuries, schoolboys and visitors carved their initials into its backrest—scratches that now form their own poignant layer of history."
  },
  4: {
    title: "The Caquetoire (“Gossip Chair”)",
    date: "16th Century · French Renaissance",
    guide: "Curator Cora",
    badge: "SOCIETY // FASHION & SPEECH",
    summary: "Deriving its name from the French verb 'caqueter' (to chatter or cackle), this chair adapted to radical shifts in clothing and socialization.",
    deepDive: "As Renaissance court fashion expanded to include wide vertugadins (farthingale hoop skirts), standard box chairs became unusable. The Caquetoire solved this with an aggressively flared trapezoidal seat and open armrests, allowing fabric to drape freely while speakers leaned forward to converse.",
    curatorNote: "Design does not exist in isolation; the silhouettes of human textiles dictate the skeletons of furniture."
  },
  5: {
    title: "Ming Dynasty Quanyi",
    date: "c. 1550–1644 · Ming Dynasty China",
    guide: "Curator Cora",
    badge: "CRAFT // DISCIPLINE & HARMONY",
    summary: "The quintessential Chinese horseshoe-back chair achieves supreme grace through completely hidden structural intelligence.",
    deepDive: "Crafted from precious dense Huanghuali rosewood, the continuous sweeping circular arm represents heaven, while the square seat represents earth. Master joiners employed blind mortise-and-tenon joints with locking wooden pins. No glue or metal fasteners were visible.",
    curatorNote: "The joints expand and contract with seasonal humidity. It is an elastic, living structural puzzle."
  },
  6: {
    title: "Thonet Chair No. 14",
    date: "1859 · Vienna, Austria",
    guide: "Curator Cora & Theorist Theo",
    badge: "TRANSITION // MASS PRODUCTION",
    summary: "The watershed moment where industrial logic transformed artisan furniture into global democratic consumer goods.",
    deepDive: "Michael Thonet perfected bending solid beechwood rods using pressurized steam. Chair No. 14 was composed of only six components held together by ten screws and two nuts. It eliminated carved joints, allowed rapid assembly by unskilled labor, and sold over 50 million units by 1930.",
    curatorNote: "Thonet could ship 36 dismantled chairs in a single 1-cubic-meter crate across oceans. Standardization made design accessible to every Viennese café."
  },
  7: {
    title: "Arts & Crafts Resistance",
    date: "c. 1880–1910 · Britain",
    guide: "Theorist Theo",
    badge: "INDUSTRY // THE HAND REBELS",
    summary: "Led by William Morris and John Ruskin, this movement declared that factory mechanization severed the human soul from the object.",
    deepDive: "Industrial factories flooded markets with cheap, ornate cast-iron and stamped veneer goods that mimicked hand-carving. The Arts & Crafts movement fought back with exposed mortise pins, visible hand-hammering, and natural dyes, arguing that honest labor produces healthy societies.",
    curatorNote: "Their paradox: because intense handcrafting is time-consuming, their handmade products could only be afforded by wealthy elites."
  },
  8: {
    title: "Art Nouveau Organic Vitality",
    date: "c. 1890–1905 · Paris & Brussels",
    guide: "Theorist Theo",
    badge: "INDUSTRY // NATURE IN CAST IRON",
    summary: "Rather than rejecting industrial metals, Art Nouveau bent iron and glass into undulating, sensuous biological forms.",
    deepDive: "Hector Guimard’s Paris Métro entrances and Émile Gallé’s glassware transformed soot-covered cities into botanical greenhouses. Machine-age materials were coaxed into whiplash curves, dragonfly wings, and tendrils—a psychological response against rigid geometric factories.",
    curatorNote: "Notice how industrial production was used to subvert industrial aesthetics."
  },
  9: {
    title: "Bauhaus Modernist Synthesis",
    date: "1919–1933 · Weimar & Dessau",
    guide: "Theorist Theo",
    badge: "INDUSTRY // THE PROTOTYPE AGE",
    summary: "The Bauhaus eliminated the antagonism between art and the machine by defining design as the creation of clean prototypes for mass replication.",
    deepDive: "Marcel Breuer took inspiration from the handlebars of his Adler bicycle to bend seamless tubular steel into the iconic Wassily Chair. Instead of disguising industrial tubing, the chair celebrated it, eliminating decorative clutter in favor of tensile strength, airiness, and geometric purity.",
    curatorNote: "The Venn intersection holds true: Art, Craft, and Industry merged to birth 20th-century Modern Design."
  },
  10: {
    title: "The Handcrafted Horological Era",
    date: "17th–Early 19th Century · Geneva & London",
    guide: "Theorist Theo",
    badge: "TIME // ARTISANAL SECRETS",
    summary: "Before factories, a mechanical watch was a singular mechanical sculpture where no two gears in the world were identical.",
    deepDive: "Watchmakers worked in domestic ateliers with natural northern light. Each tooth of the escapement was cut, filed, and heat-treated by hand. If a gear broke, a watchmaker had to custom-fashion a bespoke replacement by hand to match that specific watch's idiosyncratic clearances.",
    curatorNote: "Watches were luxury heirlooms for kings, captains, and aristocrats. Accuracy varied by several minutes per day."
  },
  11: {
    title: "Waltham: The American System",
    date: "1850 · Waltham, Massachusetts",
    guide: "Theorist Theo",
    badge: "TIME // INTERCHANGEABLE REALITY",
    summary: "Waltham applied precision gauges and automatic tooling to watchmaking, proving that machines could out-measure human fingertips.",
    deepDive: "By dividing production into small specialized steps and developing hardened steel gauges accurate to thousandths of an inch, Waltham produced millions of identical, interchangeable watch plates, springs, and balances. A broken watch could now be fixed instantly with a spare part.",
    curatorNote: "Swiss watch delegations visited Waltham in panic, realizing that handcraft alone could no longer compete with American mechanized precision."
  },
  12: {
    title: "Railways & Synchronized Infrastructure",
    date: "c. 1883 · Transcontinental Lines",
    guide: "Theorist Theo",
    badge: "TIME // ACCURACY AS SAFETY",
    summary: "When trains began traveling faster than the sun’s apparent movement across towns, local solar time became an existential safety hazard.",
    deepDive: "Every municipality used to set its clock to local high noon. This meant train lines crossed dozens of conflicting local times, resulting in disastrous head-on collisions. In response, Standard Railway Time Zones were codified, and train conductors were required to carry certified chronometers.",
    curatorNote: "Precision stopped being a gentleman's luxury; it became the synchronized operational operating system of modern civilization."
  },
  13: {
    title: "Networked Time Synchronization",
    date: "c. 2006 · The Cellular Revolution",
    guide: "Detective Ivy",
    badge: "DIGITAL // INVISIBLE COORDINATION",
    summary: "Time detached from springs, pendulums, and local quartz crystals to live as a cloud-synchronized data stream.",
    deepDive: "With the proliferation of 3G/4G towers and GPS constellations, timekeeping became an ambient digital utility. Atomic clocks in orbit beam microsecond timestamps down to silicon chips in our pockets, automatically adjusting for leap seconds and time zones without human intervention.",
    curatorNote: "The mechanical act of winding a watch—connecting human hand with mechanical heart—vanished in a single generation."
  },
  14: {
    title: "The Biometric Smartwatch",
    date: "2015–Present",
    guide: "Detective Ivy",
    badge: "DIGITAL // BODILY DATA HARVEST",
    summary: "The object on the wrist stopped merely counting seconds and began measuring the intimate biological parameters of its wearer.",
    deepDive: "Equipped with photoplethysmography sensors, electrocardiograms, and accelerometers, the smartwatch measures heart rate variability, blood oxygen, REM cycles, and stress levels. Time is merely one widget on a screen whose true function is tracking and quantifying human existence.",
    curatorNote: "The object is no longer looking outward at the cosmos; it is looking inward into your bloodstream."
  },
  15: {
    title: "The Disappearing Object (Ecosystems)",
    date: "Present",
    guide: "Detective Ivy",
    badge: "DIGITAL // PERIPHERAL TO THE CLOUD",
    summary: "The smartwatch cannot function in isolation. It is a peripheral node tethered to an expansive, invisible corporate ecosystem.",
    deepDive: "The physical watch you wear is merely an input/output portal. If the Bluetooth tether breaks, the phone OS changes, or the remote server authentication certificate expires, the physical hardware loses its core utility. The design object is no longer an artifact; it is an active service subscription.",
    curatorNote: "Designers now build interface flows and software architectures rather than physical housings alone."
  },
  16: {
    title: "Atomic Materials Engineering",
    date: "Present",
    guide: "Detective Ivy",
    badge: "DIGITAL // MATERIAL SCIENCE",
    summary: "Modern smart devices pack more material innovation into a 40mm case than ancient civilizations developed over millennia.",
    deepDive: "Grade 5 aerospace titanium cases, sapphire crystal faces grown in high-temperature autoclaves, zirconia ceramic backplates, and 3nm silicon wafers containing 16 billion microscopic transistors. These materials are chosen for wireless transparency, thermal dissipation, and corrosion resistance.",
    curatorNote: "The physical craftsmanship has shifted from the blacksmith's forge to cleanrooms with electron microscopes."
  },
  17: {
    title: "The Post-Use Lifecycle Fork",
    date: "Critical Present Dilemma",
    guide: "Detective Ivy",
    badge: "FUTURE // WASTE OR LEGACY",
    summary: "Two diametrically opposed philosophies of object longevity sit on human wrists today.",
    deepDive: "A mechanical watch operates on kinetic energy with mechanical parts that can be remachined a century from now. A smartwatch relies on sealed lithium-ion pouches that degrade after 500 charge cycles, glued chassis that resist disassembly, and system-on-chips made obsolete by next year's operating system updates.",
    curatorNote: "The central question: Are we designing tools that become cherished heirlooms, or high-tech planned obsolescence?"
  },
  18: {
    title: "Emotional Durability",
    date: "The Future of Sustainability",
    guide: "Detective Ivy",
    badge: "FUTURE // MEANING OVER OBSOLESCENCE",
    summary: "A product can survive sustainably not merely because of low-carbon materials, but because a human being refuses to throw it away.",
    deepDive: "Design theorist Jonathan Chapman coined 'Emotional Durability': the psychological attachment that prevents an object from becoming trash. Mechanical watches collect scratches, dents, and inscriptions that document personal milestones—a parent passing it down to a child. Time ennobles them rather than rendering them broken.",
    curatorNote: "Can software ever accumulate patina? Can a notification log ever evoke the sentimental tenderness of an engraved brass caseback?"
  },
  19: {
    title: "The Museum Has No Walls",
    date: "Digital Heritage Present",
    guide: "Curator Cora & Detective Ivy",
    badge: "DIGITAL // VIRTUAL ACCESSIBILITY",
    summary: "Photogrammetry and spatial computing remove ancient artifacts from locked glass cabinets and project them globally.",
    deepDive: "High-resolution LiDAR scans allow the Chair of Reniseneb to be magnified to microscopic grain levels by students thousands of miles from Cairo or London. Digital twins democratize artifact preservation, guarding cultural memory against war, earthquakes, and material decay.",
    curatorNote: "The physical object remains in its sanctuary, but its design DNA now belongs to humanity's collective digital commons."
  },
  20: {
    title: "The Unbroken Quest for Trust",
    date: "Tomorrow",
    guide: "Detective Ivy",
    badge: "FUTURE // PROVENANCE & AUTHENTICITY",
    summary: "As digital twins and artificial intelligence proliferate, our need to verify physical truth only deepens.",
    deepDive: "From Egyptian royal cartouches and medieval guild hallmarks to modern cryptographic product passports (DPPs) and blockchain-backed micro-engravings: humans have always demanded proof of origins. The tools transform from chisels to cryptographic signatures, but the fundamental question never changes.",
    curatorNote: "Can we trust this object? In an age of digital abundance, physical provenance becomes the rarest commodity of all."
  }
};

// ==========================================
// 2. AUDIO SYNTHESIS ENGINE (Web Audio API)
// ==========================================
class ExpeditionSoundSystem {
  constructor() {
    this.ctx = null;
    this.enabled = false;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();
    }
  }

  toggle() {
    this.init();
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    this.enabled = !this.enabled;
    return this.enabled;
  }

  // Gentle mechanical tick
  playTick() {
    if (!this.enabled || !this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(800, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(120, this.ctx.currentTime + 0.04);
    gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.04);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.04);
  }

  // Smooth futuristic chime
  playChime() {
    if (!this.enabled || !this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(523.25, this.ctx.currentTime); // C5
    osc.frequency.exponentialRampToValueAtTime(1046.50, this.ctx.currentTime + 0.35); // C6
    gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.35);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.35);
  }
}

const soundSystem = new ExpeditionSoundSystem();

// ==========================================
// 3. LIFECYCLE FORK DATA
// ==========================================
const FORK_DATA = {
  mech: [
    { num: "01", title: "Cradle", desc: "Forged in stainless steel, brass, and synthetic ruby bearings." },
    { num: "02", title: "Active Decades", desc: "Runs on human kinetic movement. No chemical batteries to degrade." },
    { num: "03", title: "Periodic Service", desc: "Disassembled every 5–7 years, cleaned, lubricated, and calibrated by a watchmaker." },
    { num: "04", title: "Generational Transfer", desc: "Scratches and patina transform into ancestral memory. Passed to descendants." },
    { num: "05", title: "Indefinite Life", desc: "Can tick across multiple centuries. Zero landfill requirement." }
  ],
  smart: [
    { num: "01", title: "Cradle", desc: "Rare earth elements, silicon chips, and sealed lithium-cobalt pouches." },
    { num: "02", title: "Active Window", desc: "18–36 months of high-velocity biometric health & notification tracking." },
    { num: "03", title: "Battery Degradation", desc: "Chemical aging drops charge capacity below useful daily thresholds." },
    { num: "04", title: "Software Limit", desc: "OS updates outpace processor memory. Cloud servers phase out support." },
    { num: "05", title: "E-Waste / Fragment", desc: "Glued unibody makes component extraction difficult. Replaced by next annual model." }
  ]
};

// ==========================================
// 4. UI LOGIC & EVENT LISTENERS
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  initScrollSpy();
  initSoundToggle();
  initInteractiveWidgets();
  renderForkContent('mech');
  initModalHandlers();
});

// Sound Toggle
function initSoundToggle() {
  const btn = document.getElementById('sound-toggle');
  const icon = document.getElementById('sound-icon');
  btn.addEventListener('click', () => {
    const isMuted = soundSystem.toggle();
    icon.textContent = isMuted ? '🔊' : '🔇';
    if (isMuted) soundSystem.playChime();
  });
}

// Scroll Spy & Route Progress
function initScrollSpy() {
  const progressBar = document.getElementById('progress-bar');
  const navLinks = document.querySelectorAll('.hud-link');
  const sections = document.querySelectorAll('section[id]');
  const routeTrace = document.getElementById('active-route-trace');

  window.addEventListener('scroll', () => {
    const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
    const currentScroll = window.scrollY;
    const progressPercent = (currentScroll / totalScroll) * 100;
    
    // Update progress bar
    progressBar.style.width = `${progressPercent}%`;

    // Update animated SVG map line offset (1200 is total dash length)
    if (routeTrace) {
      const offset = 1200 - (progressPercent / 100) * 1200;
      routeTrace.style.strokeDashoffset = offset;
    }

    // Identify active section
    let activeId = '';
    sections.forEach(sec => {
      const top = sec.offsetTop - 120;
      const height = sec.offsetHeight;
      if (currentScroll >= top && currentScroll < top + height) {
        activeId = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${activeId}`) {
        link.classList.add('active');
      }
    });
  });
}

// Interactive Elements within Stops
function initInteractiveWidgets() {
  // 1. Ming Chair Joinery Toggle
  const btnJoint = document.getElementById('btn-toggle-joint');
  const joineryBox = document.getElementById('joinery-view');
  if (btnJoint && joineryBox) {
    btnJoint.addEventListener('click', () => {
      joineryBox.classList.toggle('joinery-active');
      soundSystem.playTick();
      if (joineryBox.classList.contains('joinery-active')) {
        btnJoint.textContent = 'Hide Concealed Tenon ✕';
      } else {
        btnJoint.textContent = 'Toggle X-Ray Joinery ⚡';
      }
    });
  }

  // 2. Lifecycle Fork Switcher
  const btnMech = document.getElementById('btn-show-mech');
  const btnSmart = document.getElementById('btn-show-smart');

  if (btnMech && btnSmart) {
    btnMech.addEventListener('click', () => {
      btnMech.classList.add('active');
      btnSmart.classList.remove('active');
      renderForkContent('mech');
      soundSystem.playTick();
    });

    btnSmart.addEventListener('click', () => {
      btnSmart.classList.add('active');
      btnMech.classList.remove('active');
      renderForkContent('smart');
      soundSystem.playTick();
    });
  }
}

// Render Fork Display Content
function renderForkContent(mode) {
  const container = document.getElementById('fork-display-content');
  if (!container) return;
  const steps = FORK_DATA[mode];
  container.innerHTML = steps.map(step => `
    <div class="fork-flow-step">
      <span class="flow-num">${step.num}</span>
      <div>
        <strong>${step.title}:</strong> 
        <span>${step.desc}</span>
      </div>
    </div>
  `).join('');
}

// ==========================================
// 5. MODAL SYSTEM (Level 3 Deep Dive)
// ==========================================
function initModalHandlers() {
  const modal = document.getElementById('inspect-modal');
  const closeBtn = document.getElementById('modal-close');

  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

function openDeepInspect(stopId) {
  const data = STOPS_DATA[stopId];
  if (!data) return;

  soundSystem.playChime();

  document.getElementById('modal-badge').textContent = `${data.badge} // ${data.date}`;
  document.getElementById('modal-title').textContent = data.title;
  document.getElementById('modal-guide').textContent = `GUIDE DISPATCH // ${data.guide}`;
  
  document.getElementById('modal-content').innerHTML = `
    <p><strong>Artifact Summary:</strong> ${data.summary}</p>
    <p>${data.deepDive}</p>
    <div class="modal-fact-box">
      <strong>RESEARCH ARCHIVE NOTE:</strong>
      ${data.curatorNote}
    </div>
  `;

  const modal = document.getElementById('inspect-modal');
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  soundSystem.playTick();
  const modal = document.getElementById('inspect-modal');
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = 'auto';
}

// Restart Expedition helper
function restartExpedition() {
  soundSystem.playChime();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
