// Wedding Card Configuration — EXAMPLE / TEMPLATE
//
// Setup (first time or on a new machine):
//   cp src/config.example.js src/config.js
// Then edit src/config.js with your details (that file is gitignored).
//
// Visual style: wedding uses gold/ivory/rose (rings). For engagement-style
// purple/pink hearts, set theme.decoration to "hearts" and swap gradients, e.g.:
//   titleGradient: "from-purple-600 via-pink-600 to-red-600"
//   pageBackground: "bg-gradient-to-br from-pink-200 via-purple-100 to-blue-200"

export const weddingConfig = {
  couple: {
    bride: "نام عروس",
    groom: "نام داماد",
  },

  event: {
    type: "جشن عروسی",
    date: {
      dayName: "جمعه",
      persianDate: "۱۵ آذر ۱۴۰۴",
      time: "۱۸:۰۰",
    },
  },

  location: {
    name: "نام تالار یا محل",
    address: "آدرس کامل محل برگزاری",
    coordinates: {
      latitude: 35.6892,
      longitude: 51.3890,
    },
    // Map.ir — https://github.com/map-ir/mapir-react-component
    map: {
      apiKey: "YOUR_MAP_IR_API_KEY",
      zoom: 16,
      previewHeight: 140,
    },
  },

  // Use \n in intro/body for line breaks, e.g. "خط اول\nخط دوم"
  message: {
    intro: "متن کوتاه دعوت (خط اول)",
    coupleNames: "نام عروس و نام داماد",
    body: "متن تکمیلی دعوتنامه.",
  },

  ui: {
    openEnvelope: "دعوتنامه را باز کنید",
    viewDetails: "مشاهده جزئیات",
    backButton: "بازگشت",
    detailsTitle: "جزئیات مراسم",
    timeLabel: "زمان",
    venueLabel: "محل برگزاری",
    navigateButton: "مسیریابی",
    musicLabel: "موسیقی مراسم",
  },

  music: {
    src: "/music/background-music.mp3",
    defaultVolume: 0.4,
  },

  theme: {
    pageBackground: "bg-gradient-to-br from-amber-50 via-rose-50/80 to-stone-100",
    bodyColor: "#faf7f2",

    titleGradient: "from-amber-800 via-yellow-700 to-rose-800",
    subtitleGradient: "from-rose-800 to-amber-700",
    buttonGradient: "from-amber-600 via-yellow-500 to-amber-700",
    buttonHoverShadow: "rgba(180, 83, 9, 0.45)",

    dividerGradient: "from-transparent via-amber-300 to-transparent",
    cardBorder: "border-amber-200/80",
    dateBoxBackground: "bg-gradient-to-r from-amber-50 via-rose-50/50 to-stone-50",
    dateBoxBorder: "border-amber-200",
    messageBoxBackground: "bg-gradient-to-br from-amber-50/90 via-rose-50/60 to-stone-50",
    messageBoxBorder: "border-amber-200/60",
    messageDivider: "from-transparent via-amber-400 to-transparent",

    dateDayText: "text-amber-800",
    dateMainText: "from-amber-800 to-rose-800",
    dateTimeText: "text-rose-700",
    messageNamesText: "text-amber-800",
    backButtonText: "text-amber-700 hover:text-amber-900",
    envelopeHintText: "text-amber-900",

    iconBoxBackground: "bg-gradient-to-br from-amber-100 to-rose-100",
    iconPrimary: "text-amber-700",
    iconSecondary: "text-rose-700",
    topIconColor: "text-amber-600",
    iconHover: "hover:text-amber-700",
    volumeAccent: "accent-amber-600",
    decorativeIconColors: ["text-amber-400", "text-rose-400", "text-amber-500"],

    envelopeOuter: "from-amber-100 via-rose-50 to-stone-200",
    envelopeInner: "from-amber-50 via-rose-50/80 to-stone-100",
    envelopeBorder: "border-amber-300/70",
    envelopeFlap: "from-amber-100 via-rose-50 to-stone-200",
    envelopeFlapShadow: "to-amber-400/30",
    envelopeCorner: "border-amber-300",
    envelopeGlow: "rgba(180, 83, 9, 0.35)",
    sealGradient: "from-amber-700 via-yellow-600 to-rose-900",
    sealGlow: ["rgba(180, 83, 9, 0.45)", "rgba(146, 64, 14, 0.55)", "rgba(180, 83, 9, 0.45)"],

    ambientShapes: [
      { color: "text-amber-300", size: "text-[140px]", blur: "blur-2xl", opacity: "opacity-40" },
      { color: "text-rose-200", size: "text-[180px]", blur: "blur-3xl", opacity: "opacity-35" },
      { color: "text-yellow-200", size: "text-[120px]", blur: "blur-xl", opacity: "opacity-30" },
    ],

    confettiColors: ["#D4AF37", "#B45309", "#E8B4B8", "#7C2D12", "#FDE68A", "#F5E6D3"],

    decoration: "rings",
    eventEmoji: "💍",
  },
};
