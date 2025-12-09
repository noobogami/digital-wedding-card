// Wedding Card Configuration
// Update these values to customize your wedding card

export const weddingConfig = {
  // Couple Names
  couple: {
    bride: "آتنا",
    groom: "علی",
  },

  // Event Details
  event: {
    type: "جشن بله برون - نامزدی", // Event type (e.g., "جشن عروسی", "جشن نامزدی")
    date: {
      dayName: "پنجشنبه", // Day of week in Farsi
      persianDate: "۱۳ آذر ۱۴۰۴", // Persian date
      time: "۱۹:۰۰", // Time in 24-hour format
    },
  },

  // Location Details
  location: {
    name: "تالار پذیرایی ساقدوش",
    address: "پاسداران - انتهای بوستان دوم- خ افشاری (ساقدوش) - تالار پذیرایی ساقدوش",
    coordinates: {
      latitude: 35.7638266,
      longitude: 51.4701472,
    },
  },

  // Custom Message (on the back of card)
  message: {
    intro: "قرار است قصه دلهایمان از همین جا آغاز شود.",
    coupleNames: "آتنا و علی", // Can be different from couple.bride/groom if needed
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




