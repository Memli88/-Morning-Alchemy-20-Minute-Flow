const phases = [
  {
    title: "Phase 1 — Awakening & Release",
    duration: 180,
    desc: `
• Sacred Shaking (soft knees, heels grounded)
• Thymus Tapping with a smile
• Door of Life Swing (kidneys & belly)
Breathing: nasal inhale, audible sigh exhale
`
  },
  {
    title: "Phase 2 — Energy & DHEA Activation",
    duration: 240,
    desc: `
• Ego Eradicator + Breath of Fire (2 min)
  Visualize energy pumping up the spine
• Spinal Flex (fast, rhythmic)
Bandhas: lightly engage Mula Bandha on holds
`
  },
  {
    title: "Phase 3 — VO₂ Max Flow",
    duration: 480,
    desc: `
Repeat 3–4 rounds without stopping:
• Down Dog → Spinal Wave → Plank
• Loaded Beast (spring-loaded hips)
• Front Step Through + Thoracic Twist
• Crab Reach (full hip extension)
• Vinyasa back to Down Dog
Breathing: deep Ujjayi
`
  },
  {
    title: "Phase 4 — Heart Coherence",
    duration: 300,
    desc: `
• Seated or Savasana
• Left hand on heart, right on belly
• Heart breathing (5s in / 5s out)
• Elevated Emotion: gratitude before it happens
`
  }
];

let totalTime = 1200;
let timer = null;
let phaseIndex = 0;
let phaseTime = phases[0].duration;

const timeEl = document.getElementById("time");
const titleEl = document.getElementById("phase-title");
const descEl = document.getElementById("phase-desc");

function updateUI() {
  const min = Math.floor(totalTime / 60);
  const sec = totalTime % 60;
  timeEl.textContent = `${min}:${sec.toString().padStart(2, "0")}`;

  titleEl.textContent = phases[phaseIndex].title;
  descEl.textContent = phases[phaseIndex].desc;
}

function startFlow() {
  if (timer) return;

  updateUI();

  timer = setInterval(() => {
    totalTime--;
    phaseTime--;

    if (phaseTime <= 0 && phaseIndex < phases.length - 1) {
      phaseIndex++;
      phaseTime = phases[phaseIndex].duration;
      updateUI();
    }

    if (totalTime <= 0) {
      clearInterval(timer);
      timer = null;
      titleEl.textContent = "Flow Complete ✨";
      descEl.textContent = "Stay in stillness. Let the chemistry integrate.";
    }

    updateUI();
  }, 1000);
}

function resetFlow() {
  clearInterval(timer);
  timer = null;
  phaseIndex = 0;
  totalTime = 1200;
  phaseTime = phases[0].duration;
  titleEl.textContent = "Ready";
  descEl.textContent = "Press Start to begin the flow";
  timeEl.textContent = "20:00";
}

document.getElementById("startBtn").addEventListener("click", startFlow);
document.getElementById("resetBtn").addEventListener("click", resetFlow);
