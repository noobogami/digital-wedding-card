// Default wedding card configuration (used when env / runtime overrides are absent).

export const weddingDefaults = {
  couple: {
    bride: 'نام عروس',
    groom: 'نام داماد',
    brideLastName: '',
    groomLastName: '',
  },

  event: {
    type: 'جشن عروسی',
    date: {
      dayName: 'جمعه',
      persianDate: '۱۵ آذر ۱۴۰۴',
      time: '۱۸:۰۰',
    },
  },

  location: {
    name: 'نام تالار یا محل',
    address: 'آدرس کامل محل برگزاری',
    coordinates: {
      latitude: 35.6892,
      longitude: 51.389,
    },
  },

  message: {
    intro: 'متن کوتاه دعوت (خط اول)',
    body: 'متن تکمیلی دعوتنامه.',
  },

  ui: {
    openEnvelope: 'دعوتنامه را باز کنید',
    viewDetails: 'مشاهده جزئیات',
    backButton: 'بازگشت',
    timeLabel: 'زمان',
    venueLabel: 'محل برگزاری',
    navigateButton: 'مسیریابی',
  },

  envelope: {
    image: '/images/envelope-photo.jpg',
    alt: 'عکس دعوتنامه',
  },

  music: {
    src: '/music/background-music.mp3',
    defaultVolume: 0.4,
  },

  theme: {
    pageBackground: 'bg-gradient-to-br from-amber-50 via-rose-50/80 to-stone-100',
    bodyColor: '#faf7f2',

    titleGradient: 'from-yellow-600 via-amber-500 to-yellow-700',
    subtitleGradient: 'from-yellow-700 via-amber-600 to-yellow-800',
    coupleNameText: 'text-yellow-600',
    coupleLastNameText: 'text-yellow-700',
    buttonGradient: 'from-amber-600 via-yellow-500 to-amber-700',
    buttonHoverShadow: 'rgba(180, 83, 9, 0.45)',

    dividerGradient: 'from-transparent via-amber-300 to-transparent',
    cardBorder: 'border-amber-200/80',
    dateBoxBackground: 'bg-gradient-to-r from-amber-50 via-yellow-50/90 to-amber-50',
    dateBoxBorder: 'border-amber-200/90',
    messageBoxBackground: 'bg-gradient-to-br from-amber-50/90 via-rose-50/60 to-stone-50',
    messageBoxBorder: 'border-amber-200/60',
    messageDivider: 'from-transparent via-amber-400 to-transparent',

    dateDayText: 'text-yellow-800',
    dateMainText: 'text-yellow-600',
    dateTimeText: 'text-amber-500',
    messageNamesText: 'text-amber-800',
    backButtonText: 'text-amber-700 hover:text-amber-900',
    envelopeHintText: 'text-amber-900',

    iconBoxBackground: 'bg-gradient-to-br from-amber-100 to-rose-100',
    iconPrimary: 'text-amber-700',
    iconSecondary: 'text-rose-700',
    topIconColor: 'text-amber-600',
    iconHover: 'hover:text-amber-700',
    volumeAccent: 'accent-amber-600',
    decorativeIconColors: ['text-amber-400', 'text-rose-400', 'text-amber-500'],

    envelopeOuter: 'from-amber-100 via-rose-50 to-stone-200',
    envelopeInner: 'from-amber-50 via-rose-50/80 to-stone-100',
    envelopeBorder: 'border-amber-300/70',
    envelopeFlap: 'from-amber-100 via-rose-50 to-stone-200',
    envelopeFlapShadow: 'to-amber-400/30',
    envelopeCorner: 'border-amber-300',
    envelopeGlow: 'rgba(180, 83, 9, 0.35)',
    sealGradient: 'from-amber-700 via-yellow-600 to-rose-900',
    sealGlow: ['rgba(180, 83, 9, 0.45)', 'rgba(146, 64, 14, 0.55)', 'rgba(180, 83, 9, 0.45)'],

    ambientShapes: [
      { color: 'text-amber-300', size: 'text-[140px]', blur: 'blur-2xl', opacity: 'opacity-40' },
      { color: 'text-rose-200', size: 'text-[180px]', blur: 'blur-3xl', opacity: 'opacity-35' },
      { color: 'text-yellow-200', size: 'text-[120px]', blur: 'blur-xl', opacity: 'opacity-30' },
    ],

    confettiColors: ['#D4AF37', '#B45309', '#E8B4B8', '#7C2D12', '#FDE68A', '#F5E6D3'],

    decoration: 'rings',
    eventEmoji: '💍',
  },
};
