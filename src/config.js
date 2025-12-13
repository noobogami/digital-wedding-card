// Wedding Card Configuration
// Update these values to customize your wedding card

export const weddingConfig = {
  // Couple Names
  couple: {
    bride: "عروس",
    groom: "دوماد",
  },

  // Event Details
  event: {
    type: "جشن عروسی", // Event type (e.g., "جشن عروسی", "جشن نامزدی")
    date: {
      dayName: "جمعه", // Day of week in Farsi
      persianDate: "۸ مرداد ۱۲۹۳", // Persian date
      time: "۰۳:۰۰", // Time in 24-hour format
    },
  },

  // Location Details
  location: {
    name: "تالار فلان",
    address: "فلان شهر، فلان جا",
    coordinates: {
      latitude: 42.7638266,
      longitude: 12.4701472,
    },
  },

  // Custom Message (on the back of card)
  message: {
    intro: "قرار است قصه دلهایمان از همین جا آغاز شود.",
    coupleNames: "عروس و دوماد", // Can be different from couple.bride/groom if needed
    body: "با عشق قدم در مسیر تازه‌ای گذاشته‌اند و چه زیبا و خاطره‌انگیز است اگر شما هم شریک این لبخند و شادی باشید و این شب را به‌یادماندنی و پرشورتر کنید.",
  },

  // Colors (Tailwind CSS classes)
  theme: {
    // You can customize gradient colors here
    // These are Tailwind CSS gradient classes
    titleGradient: "from-purple-600 via-pink-600 to-red-600",
    subtitleGradient: "from-pink-500 to-purple-600",
    buttonGradient: "from-purple-500 via-pink-500 to-red-500",
  },
};




