export interface EvidenceItem {
  id: string;
  tag: string;
  title: string;
  caption: string;
  type: 'image' | 'video';
  src: string;
  badge?: string;
  date?: string;
  significance: string;
}

export const DOSSIER_DATA = {
  fileNumber: "ARC-0913-PGL",
  subject: "ARADHYA",
  knownAliases: ["MADAM JII", "PAGLU", "MERI PAGLUUII"],
  assignedPartner: "BESTUU",
  firstContactMethod: "Random Snapchat Spotlight Comment Section",
  originTiming: "Post-10th Board Exams (Chhuttiyan)",
  activeStreak: "145 DAYS 🔥",
  status: "PERMANENTLY SPECIAL BEST FRIEND",
  clearanceLevel: "LEVEL 5 (BEST FRIEND PRIVILEGE)"
};

export const STORY_SECTIONS = {
  encounter: {
    tag: "CASE #001 — THE RANDOM ENCOUNTER",
    heading: "Sab kuch ek random Spotlight comment se shuru hua tha.",
    subheading: "Koi plan nahi tha. Koi expectation nahi thi. Bas ek random scroll aur do logon ka interaction.",
    highlight: "Kise pata tha ek anjaan comment ek din itni deep friendship ban jayega?",
    quote: "She added me. I added her back. Baatein shuru hui..."
  },

  chhuttiyan: {
    tag: "CASE #002 — THE CHHUTTIYAN TIMELINE",
    heading: "10th ke exams khatam hue the aur chhuttiyan chal rahi thi.",
    subheading: "Free time, random talks aur dheere dheere regular banti conversations.",
    timelineNodes: [
      {
        phase: "PHASE 01",
        title: "10th Boards Over",
        desc: "Exams khatam, stress zero, pura din phone pe chill time."
      },
      {
        phase: "PHASE 02",
        title: "The Spotlight Moment",
        desc: "Ek random comment section jahan se add back hua."
      },
      {
        phase: "PHASE 03",
        title: "Random Talks",
        desc: "Pehle normal si formal baatein... phir roz ki aadat."
      },
      {
        phase: "PHASE 04",
        title: "The Shift",
        desc: "Pata hi nahi chala kab random chats ek real friendship mein badal gayi."
      }
    ]
  },

  names: {
    tag: "CASE #003 — OFFICIAL DESIGNATIONS",
    title: "The Identity Shift",
    leftName: "BESTUU",
    leftSub: "Saved by Aradhya",
    rightName: "MERI PAGLUUII",
    rightSub: "Saved by Bestuu",
    quote: "Yahin se friendship officially thodi aur special ho gayi thi.",
    evidenceNote: "EVIDENCE #003: VERIFIED ON RECORD",
    caption: "Ek doosre ke contacts save hone ke baad, best friend status confirm ho gaya."
  },

  streak: {
    tag: "RECORD #145 — THE STREAK CHRONICLES",
    count: 145,
    unit: "DAYS OF ACTIVE STREAK",
    storyLines: [
      "Beech mein streak kai baar tuti...",
      "...lekin somehow hum wapas aa hi gaye.",
      "Numbers bas ek record hain, par roz ki connection real hai."
    ],
    badge: "145 & COUNTING 🔥"
  },

  analysis: {
    tag: "ANALYTICS // MADAM JII PROTOCOL",
    title: "Madam Jii Behavioural Matrix",
    metrics: [
      { label: "Friendship Level", value: "100%", percentage: 100, note: "Unbreakable bond" },
      { label: "Paglu Probability", value: "99.9%", percentage: 99.9, note: "Always doing Paglu things" },
      { label: "Randomness Index", value: "MAXIMUM", percentage: 95, note: "Unpredictable mood swings" },
      { label: "Replaceability", value: "0.00%", percentage: 0, note: "Non-negotiable person" },
      { label: "Bestuu Compatibility", value: "100%", percentage: 100, note: "Top tier understanding" }
    ]
  },

  heartfelt: {
    tag: "CONFIDENTIAL // DECLASSIFIED SINCERITY",
    title: "Ab thodi serious baat...",
    lines: [
      "Sach bolu toh mujhe bilkul idea nahi tha...",
      "...ki ek random Spotlight comment se shuru hui baat mere liye itni important ban jayegi.",
      "Bas holidays mein normal baatein shuru hui thi.",
      "Aur dheere-dheere tum meri life ka ek genuinely special part ban gayi.",
      "Thank you for being my Paglu.",
      "Thank you for being such an amazing Best Friend.",
      "Bas hamesha aise hi rehna."
    ]
  },

  confession: {
    tag: "INCIDENT REPORT // 00:00 HRS",
    title: "ONE LAST THING...",
    statusLabel: "12:00 AM WISH STATUS:",
    statusValue: "FAILED ❌",
    jokeLines: [
      "Haan Madam Jii...",
      "12 baje sharp wish nahi kar paya. 😭",
      "Iske liye daant bilkul expected hai.",
      "Sorry!",
      "Lekin ek cheez zaroor karni thi...",
      "Tumhare birthday ko bas ek regular 2-line WhatsApp text banke nahi nikalne dena tha."
    ]
  },

  birthday: {
    heading: "HAPPY BIRTHDAY MADAM JII ❤️",
    subheading: "Happy Birthday meri Pagluuii.",
    signature: "— From your Bestuu",
    quote: "Randomly mili thi... ab randomly important nahi ho."
  }
};

export const EVIDENCE_ITEMS: EvidenceItem[] = [
  {
    id: "ev-01",
    tag: "EVIDENCE #001",
    title: "The Bestuu Confirmation",
    caption: "Screenshot record: 'Bestuu 🥺' contact name & 118 streak snapshot.",
    type: "image",
    src: "/assets/bestuu-streak-evidence.jpeg",
    badge: "VERIFIED CONTACT",
    significance: "Proof of official nickname designation."
  },
  {
    id: "ev-02",
    tag: "EVIDENCE #002",
    title: "Madam Jii Being Madam Jii",
    caption: "Classic Paglu moment — Spider-Man mask, vibes on a tree.",
    type: "image",
    src: "/assets/paglu-spider-tree.jpeg",
    badge: "PEAK PAGLU",
    significance: "Exhibit A for 99.9% Paglu Probability."
  },
  {
    id: "ev-03",
    tag: "EVIDENCE #003",
    title: "The Sunset Fistbump",
    caption: "Two friends, same wavelength, infinite memories.",
    type: "image",
    src: "/assets/duo-bitmoji-sunset.jpeg",
    badge: "CORE MEMORY",
    significance: "Visual representation of the duo bond."
  },
  {
    id: "ev-04",
    tag: "EVIDENCE #004",
    title: "Memory Reel 01",
    caption: "Archive footage from the friendship chronicles.",
    type: "video",
    src: "/assets/memory-video-1.mp4",
    badge: "MOTION RECORD",
    significance: "Live capture moment."
  },
  {
    id: "ev-05",
    tag: "EVIDENCE #005",
    title: "Memory Reel 02",
    caption: "Playful candid video record.",
    type: "video",
    src: "/assets/memory-video-2.mp4",
    badge: "MOTION RECORD",
    significance: "Candid Madam Jii archive."
  },
  {
    id: "ev-06",
    tag: "EVIDENCE #006",
    title: "Memory Reel 03",
    caption: "Archive footage #03 from friendship records.",
    type: "video",
    src: "/assets/memory-video-3.mp4",
    badge: "MOTION RECORD",
    significance: "Special memory vault."
  }
];
