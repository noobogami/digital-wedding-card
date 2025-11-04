import { motion, AnimatePresence } from 'framer-motion';
import { FaHeart, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [envelopeOpened, setEnvelopeOpened] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [confetti, setConfetti] = useState([]);
  const [floatingHearts, setFloatingHearts] = useState([]);

  // Generate confetti when envelope opens
  useEffect(() => {
    if (envelopeOpened) {
      // Generate confetti centered around the card (50vw ± 25vw)
      const newConfetti = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: 50 + (Math.random() - 0.5) * 50, // Center ± 25vw
        y: 30, // Start from around where envelope is
        rotation: Math.random() * 360,
        color: ['#ec4899', '#a855f7', '#f59e0b', '#3b82f6', '#10b981'][Math.floor(Math.random() * 5)],
        delay: Math.random() * 0.3,
        velocityX: (Math.random() - 0.5) * 300, // Horizontal spread in pixels
      }));
      setConfetti(newConfetti);

      // Generate floating hearts centered around the card (50vw ± 20vw)
      const newHearts = Array.from({ length: 15 }, (_, i) => ({
        id: i,
        x: 50 + (Math.random() - 0.5) * 40, // Center ± 20vw
        delay: Math.random() * 2,
        duration: 3 + Math.random() * 2,
      }));
      setFloatingHearts(newHearts);

      // Clear confetti after animation
      setTimeout(() => setConfetti([]), 4000);
    }
  }, [envelopeOpened]);

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Fixed animated background - stays in place while scrolling */}
      <div className="fixed inset-0 bg-gradient-to-br from-pink-200 via-purple-100 to-blue-200 overflow-hidden -z-10">
        {/* Animated heart-shaped blurred elements */}
        <motion.div
          className="absolute top-20 right-20"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            rotate: [0, 15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <FaHeart className="text-[200px] text-pink-400 opacity-50 blur-md" />
        </motion.div>
        
        <motion.div
          className="absolute bottom-32 left-20"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            rotate: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <FaHeart className="text-[250px] text-purple-400 opacity-50 blur-lg" />
        </motion.div>
        
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 10, 0],
            x: [-30, 30, -30],
            y: [-20, 20, -20],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <FaHeart className="text-[180px] text-red-300 opacity-45 blur-md" />
        </motion.div>
        
        <motion.div
          className="absolute top-40 left-1/4"
          animate={{
            x: [0, 60, 0],
            y: [0, -50, 0],
            rotate: [0, -15, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <FaHeart className="text-[150px] text-pink-300 opacity-50 blur-md" />
        </motion.div>
        
        <motion.div
          className="absolute bottom-20 right-1/4"
          animate={{
            x: [0, -50, 0],
            y: [0, 30, 0],
            rotate: [0, 25, 0],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <FaHeart className="text-[220px] text-blue-300 opacity-45 blur-lg" />
        </motion.div>
      </div>

      {/* Confetti Animation */}
      <AnimatePresence>
        {confetti.map((piece) => (
          <motion.div
            key={piece.id}
            initial={{ 
              opacity: 1,
              scale: 1,
              rotate: piece.rotation,
              x: 0,
              y: 0,
            }}
            animate={{ 
              x: piece.velocityX,
              y: window.innerHeight,
              rotate: piece.rotation + 720,
              opacity: [1, 1, 0],
              scale: [1, 1.2, 0.8],
            }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: 3 + Math.random(),
              delay: piece.delay,
              ease: "easeIn"
            }}
            className="fixed pointer-events-none z-50"
            style={{
              left: `${piece.x}vw`,
              top: `${piece.y}vh`,
              width: '10px',
              height: '10px',
              backgroundColor: piece.color,
              borderRadius: Math.random() > 0.5 ? '50%' : '2px',
            }}
          />
        ))}
      </AnimatePresence>

      {/* Floating Hearts */}
      <AnimatePresence>
        {floatingHearts.map((heart) => (
          <motion.div
            key={heart.id}
            initial={{ 
              opacity: 0,
              scale: 0,
              y: 0,
            }}
            animate={{ 
              y: -window.innerHeight * 1.2,
              opacity: [0, 1, 1, 0],
              scale: [0, 1, 1, 0.5],
              rotate: [0, 360],
            }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: heart.duration,
              delay: heart.delay,
              ease: "easeOut",
              repeat: Infinity,
            }}
            className="fixed pointer-events-none z-40"
            style={{
              left: `${heart.x}vw`,
              bottom: '-50px',
            }}
          >
            <FaHeart className="text-pink-400 text-2xl" />
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 px-4 w-full flex items-center justify-center">
        <motion.div 
          className="relative min-h-[600px] sm:min-h-[720px]"
          initial={{ scale: 0.75 }}
          animate={{ 
            scale: envelopeOpened ? 1 : 0.75
          }}
          transition={{ 
            duration: 0.6,
            delay: envelopeOpened ? 0.3 : 0,
            ease: [0.43, 0.13, 0.23, 0.96]
          }}
        >
          {/* CARD - Always present, behind envelope - Smaller than envelope */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1,
              y: 0 
            }}
            transition={{ 
              opacity: { duration: 0.6, delay: envelopeOpened ? 0.4 : 0.3 },
              y: { duration: 0.8, delay: 0.3 }
            }}
            style={{ perspective: '2000px' }}
            className="relative w-[450px] max-w-[82vw] mx-auto"
          >
        <motion.div
          animate={{
            rotateY: showDetails ? 180 : 0,
            scale: showDetails ? [1, 0.95, 1] : [1, 0.95, 1],
            y: showDetails ? [0, -10, 0] : [0, -10, 0],
          }}
          transition={{
            duration: 0.8,
            ease: [0.43, 0.13, 0.23, 0.96],
          }}
          style={{
            transformStyle: 'preserve-3d',
            position: 'relative',
          }}
          className="w-full h-[550px] sm:h-[670px]"
        >
          {/* FRONT - Title Card */}
          <motion.div
            style={{
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              position: 'absolute',
              width: '100%',
              height: '100%',
            }}
            animate={{
              boxShadow: showDetails 
                ? '0 5px 20px rgba(0, 0, 0, 0.15)' 
                : '0 20px 60px rgba(0, 0, 0, 0.3)',
            }}
            className="bg-white rounded-3xl p-6 sm:p-8 md:p-12 flex flex-col"
          >
            <AnimatePresence>
              {!showDetails && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col justify-between h-full"
                >
                {/* Decorative top element */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ 
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.2 
                  }}
                  className="mb-3 text-center"
                >
                  <motion.div
                    animate={{ 
                      scale: [1, 1.3, 1],
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="inline-block"
                  >
                    <FaHeart className="text-6xl text-red-500 mx-auto drop-shadow-lg" />
                  </motion.div>
                </motion.div>

                <div className="flex-1 flex flex-col justify-center">
                  {/* Couple Names */}
                  <motion.h1
                    initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1,
                      rotate: 0,
                    }}
                    transition={{ 
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                      delay: 0.3 
                    }}
                    className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent mb-2 font-vazir text-center"
                  >
                    {/* PLACEHOLDER: Replace with couple names */}
                    آتنا و علی
                  </motion.h1>

                  {/* Wedding Title */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{ 
                      type: "spring",
                      stiffness: 150,
                      delay: 0.4 
                    }}
                    className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-4 font-vazir text-center px-4"
                  >
                    🎊 جشن بله برون - نامزدی 🎊
                  </motion.div>

                  {/* Decorative Line */}
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ 
                      duration: 0.8,
                      delay: 0.5,
                      ease: "easeInOut",
                    }}
                    className="h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent mb-4"
                  />

                  {/* Date and Time */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1,
                    }}
                    transition={{ 
                      type: "spring",
                      stiffness: 200,
                      delay: 0.6 
                    }}
                    className="text-center mb-4 bg-gradient-to-r from-pink-50 via-purple-50 to-blue-50 rounded-2xl p-4 border-2 border-pink-200"
                  >
                    <motion.p 
                      className="text-xl md:text-2xl font-bold text-purple-600 font-vazir mb-1"
                      animate={{
                        y: [0, -3, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      {/* PLACEHOLDER: Replace with actual date */}
                      📅 روز پنجشنبه
                    </motion.p>
                    <motion.p 
                      className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-vazir mb-1"
                      animate={{
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      ۱۳ آذر ۱۴۰۴
                    </motion.p>
                    <motion.p 
                      className="text-lg md:text-xl font-semibold text-pink-600 font-vazir"
                      animate={{
                        y: [0, -3, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5,
                      }}
                    >
                      ⏰ ساعت ۱۹:۰۰
                    </motion.p>
                  </motion.div>
                </div>

                {/* Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="text-center"
                >
                  <motion.button
                    onClick={() => setShowDetails(true)}
                    className="inline-block bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white px-8 py-3 rounded-full text-base md:text-xl font-bold shadow-xl font-vazir"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: [0, -2, 2, -2, 0],
                      boxShadow: "0 20px 40px rgba(236, 72, 153, 0.5)",
                    }}
                    whileTap={{ scale: 0.9 }}
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      y: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                      hover: {
                        duration: 0.3,
                      }
                    }}
                  >
                    🎉 مشاهده جزئیات 🎉
                  </motion.button>

                  {/* Decorative bottom hearts */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="flex justify-center gap-3 mt-4 mb-2"
                  >
                    <motion.div
                      animate={{ 
                        y: [0, -4, 0],
                        rotate: [0, 15, -15, 0],
                      }}
                      transition={{ 
                        duration: 1.5, 
                        repeat: Infinity,
                        delay: 0 
                      }}
                    >
                      <FaHeart className="text-xl text-pink-400" />
                    </motion.div>
                    <motion.div
                      animate={{ 
                        y: [0, -4, 0],
                        rotate: [0, 15, -15, 0],
                      }}
                      transition={{ 
                        duration: 1.5, 
                        repeat: Infinity,
                        delay: 0.2 
                      }}
                    >
                      <FaHeart className="text-lg text-red-400" />
                    </motion.div>
                    <motion.div
                      animate={{ 
                        y: [0, -4, 0],
                        rotate: [0, 15, -15, 0],
                      }}
                      transition={{ 
                        duration: 1.5, 
                        repeat: Infinity,
                        delay: 0.4 
                      }}
                    >
                      <FaHeart className="text-xl text-pink-400" />
                    </motion.div>
                  </motion.div>
                </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* BACK - Details Card */}
          <motion.div
            style={{
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              position: 'absolute',
              width: '100%',
              height: '100%',
              rotateY: 180,
            }}
            animate={{
              boxShadow: showDetails 
                ? '0 20px 60px rgba(0, 0, 0, 0.3)' 
                : '0 5px 20px rgba(0, 0, 0, 0.15)',
            }}
            className="bg-white rounded-3xl p-6 sm:p-8 md:p-12 flex flex-col overflow-y-auto"
          >
            <AnimatePresence>
              {showDetails && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2, delay: 0.3 }}
                  className="flex flex-col justify-between h-full"
                >
                {/* Header with Beautiful Message */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="text-center mb-6"
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-vazir mb-4">
                    جزئیات مراسم
                  </h2>
                  
                  {/* Beautiful Message */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 rounded-2xl p-4 mb-4 border border-pink-200"
                  >
                    <p className="text-sm text-gray-700 font-vazir leading-relaxed mb-2">
                      قرار است قصه دلهایمان از همین جا آغاز شود.
                    </p>
                    <div className="flex items-center justify-center gap-2 my-3">
                      <div className="h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent flex-1" />
                      <FaHeart className="text-red-400 text-lg" />
                      <div className="h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent flex-1" />
                    </div>
                    <p className="text-xl font-bold text-purple-600 font-vazir mb-2">
                      آتنا و علی
                    </p>
                    <p className="text-sm text-gray-700 font-vazir leading-relaxed">
                      با عشق قدم در مسیر تازه‌ای گذاشته‌اند و چه زیبا و خاطره‌انگیز است اگر شما هم شریک این لبخند و شادی باشید و این شب را به‌یادماندنی و پرشورتر کنید.
                    </p>
                  </motion.div>
                </motion.div>

                {/* Minimal Details */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                  className="flex-1 space-y-4"
                >
                  {/* Date & Time */}
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-3 rounded-xl">
                      <FaClock className="text-2xl text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-500 font-vazir mb-1">زمان</p>
                      <p className="text-lg font-semibold text-gray-800 font-vazir">
                        {/* PLACEHOLDER: Replace with actual date/time */}
                        پنجشنبه، ۱۳ آذر ۱۴۰۴ - ساعت ۱۹:۰۰
                      </p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-3 rounded-xl">
                      <FaMapMarkerAlt className="text-2xl text-pink-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-500 font-vazir mb-1">محل برگزاری</p>
                      <p className="text-base font-semibold text-gray-800 font-vazir leading-relaxed">
                        {/* PLACEHOLDER: Replace with actual venue */}
                        پاسداران - انتهای بوستان دوم- خ افشاری (ساقدوش) - تالار پذیرایی ساقدوش
                      </p>
                    </div>
                  </div>

                  {/* Map - OpenStreetMap (Free, No API Key!) */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                    className="space-y-2"
                  >
                    <div className="rounded-xl overflow-hidden border border-gray-200">
                      {/* PLACEHOLDER: Update latitude and longitude for your venue */}
                      {/* 100% Free - No API key, No payment, No registration! */}
                      <iframe
                        src="https://www.openstreetmap.org/export/embed.html?bbox=51.465990543365486%2C35.761762205235705%2C51.47430539131165%2C35.765893074672434&amp;layer=mapnik&amp;marker=35.7638266%2C51.4701472"
                        width="100%"
                        height="140"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        title="محل برگزاری مراسم"
                      />
                      {/* 
                        HOW TO CUSTOMIZE:
                        1. Go to https://www.openstreetmap.org
                        2. Search for your venue
                        3. Click "Share" button on the right
                        4. Click "HTML" tab
                        5. Copy the iframe src URL and replace above
                        
                        Or manually update coordinates:
                        Replace 35.6892,51.3890 with your venue's latitude,longitude
                      */}
                    </div>
                    
                    {/* Navigation Button */}
                    <motion.a
                      href="https://www.google.com/maps/dir/?api=1&destination=35.7638266,51.4701472"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-2 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all text-sm"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <FaMapMarkerAlt className="text-base" />
                      <span className="font-vazir">مسیریابی</span>
                    </motion.a>
                  </motion.div>
                </motion.div>

                {/* Back Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                  className="text-center mt-6"
                >
                  <motion.button
                    onClick={() => setShowDetails(false)}
                    className="text-purple-600 hover:text-purple-700 font-semibold font-vazir text-base"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    ← بازگشت
                  </motion.button>
                </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
          </motion.div>

          {/* ENVELOPE - Slides down on click to reveal card */}
          <motion.div
            initial={{ y: 0 }}
            animate={{ 
              y: envelopeOpened ? 900 : 0,
            }}
            transition={{ 
              duration: 1,
              ease: [0.43, 0.13, 0.23, 0.96],
            }}
            className="absolute inset-0 flex items-start justify-center"
            style={{ zIndex: 100, pointerEvents: envelopeOpened ? 'none' : 'auto', top: '-35px' }}
          >
            <motion.div
              className="cursor-pointer relative"
              whileHover={!envelopeOpened ? { scale: 1.02 } : {}}
              whileTap={!envelopeOpened ? { scale: 0.98 } : {}}
              onClick={() => !envelopeOpened && setEnvelopeOpened(true)}
            >
              {/* Envelope Body - Bigger than card */}
              <div className="relative w-[500px] max-w-[90vw] h-[600px] sm:h-[720px] bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 rounded-2xl">
                {/* Back of envelope */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 rounded-2xl shadow-2xl border-2 border-pink-300" />
                
                {/* Sparkle decorations */}
                <motion.div
                  className="absolute top-10 left-10 text-yellow-400 text-2xl"
                  animate={{
                    scale: [1, 1.5, 1],
                    rotate: [0, 180, 360],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  ✨
                </motion.div>
                <motion.div
                  className="absolute top-20 right-10 text-yellow-400 text-xl"
                  animate={{
                    scale: [1, 1.5, 1],
                    rotate: [0, 180, 360],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                >
                  ✨
                </motion.div>
                <motion.div
                  className="absolute bottom-20 left-1/4 text-pink-400 text-3xl"
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  💕
                </motion.div>
                <motion.div
                  className="absolute bottom-32 right-1/4 text-purple-400 text-2xl"
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                >
                  💝
                </motion.div>
                
                {/* Envelope flap - animated */}
                <motion.div
                  className="absolute top-0 left-0 right-0 h-[300px] sm:h-[360px] bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 origin-top border-x border-t border-pink-300 rounded-t-2xl"
                  animate={{
                    clipPath: envelopeOpened 
                      ? 'polygon(0 0, 50% 70%, 100% 0)'
                      : 'polygon(0 0, 50% 65%, 100% 0)',
                  }}
                  whileHover={!envelopeOpened ? {
                    clipPath: 'polygon(0 0, 50% 55%, 100% 0)',
                  } : {}}
                  transition={{ duration: 0.3 }}
                >
                  {/* Flap shadow/depth */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-300/40" />
                  
                  {/* Flap decorative border */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent" />
                  
                  {/* Fun decorative patterns on flap */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <motion.div
                      className="absolute top-10 left-1/4 text-pink-300 text-xl opacity-50"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    >
                      ❤️
                    </motion.div>
                    <motion.div
                      className="absolute top-16 right-1/4 text-purple-300 text-lg opacity-50"
                      animate={{ rotate: [360, 0] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                    >
                      💜
                    </motion.div>
                  </div>
                </motion.div>

                {/* Wax seal */}
                <div 
                  className="absolute top-[270px] sm:top-[330px] left-1/2 -translate-x-1/2 w-20 h-20 sm:w-24 sm:h-24 z-10"
                >
                  <motion.div
                    className="w-full h-full bg-gradient-to-br from-red-500 via-pink-500 to-red-700 rounded-full shadow-2xl flex items-center justify-center"
                    whileHover={!envelopeOpened ? { 
                      scale: 1.15, 
                      rotate: [0, -10, 10, -10, 0],
                    } : {}}
                    animate={{
                      boxShadow: [
                        '0 10px 30px rgba(239, 68, 68, 0.4)',
                        '0 10px 40px rgba(236, 72, 153, 0.6)',
                        '0 10px 30px rgba(239, 68, 68, 0.4)',
                      ],
                    }}
                    transition={{ 
                      boxShadow: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                      hover: {
                        type: "spring", 
                        stiffness: 400, 
                        damping: 10,
                      }
                    }}
                  >
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 10, -10, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <FaHeart className="text-white text-4xl drop-shadow-lg" />
                    </motion.div>
                    {/* Seal texture */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/30 to-transparent pointer-events-none" />
                    {/* Sparkle on seal */}
                    <motion.div
                      className="absolute top-2 right-2 text-yellow-300 text-sm"
                      animate={{
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                        rotate: [0, 180, 360],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      ✨
                    </motion.div>
                  </motion.div>
                </div>

                {/* Decorative elements */}
                {!envelopeOpened && (
                  <motion.div 
                    className="absolute bottom-16 sm:bottom-20 left-0 right-0 text-center pointer-events-none"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: 1,
                      y: [0, -10, 0],
                    }}
                    transition={{ 
                      opacity: { delay: 0.8 },
                      y: {
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }
                    }}
                  >
                    <motion.p 
                      className="text-purple-600 font-vazir text-2xl sm:text-3xl mb-3 sm:mb-4 font-bold"
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      👆 بزن بریم! 🎉
                    </motion.p>
                    <div className="flex justify-center gap-3">
                      <motion.div
                        animate={{
                          rotate: [0, 15, -15, 0],
                          scale: [1, 1.2, 1],
                        }}
                        transition={{
                          duration: 0.8,
                          repeat: Infinity,
                          delay: 0,
                        }}
                      >
                        <FaHeart className="text-pink-500 text-2xl sm:text-3xl" />
                      </motion.div>
                      <motion.div
                        animate={{
                          rotate: [0, 15, -15, 0],
                          scale: [1, 1.3, 1],
                        }}
                        transition={{
                          duration: 0.8,
                          repeat: Infinity,
                          delay: 0.2,
                        }}
                      >
                        <FaHeart className="text-red-500 text-3xl sm:text-4xl" />
                      </motion.div>
                      <motion.div
                        animate={{
                          rotate: [0, 15, -15, 0],
                          scale: [1, 1.2, 1],
                        }}
                        transition={{
                          duration: 0.8,
                          repeat: Infinity,
                          delay: 0.4,
                        }}
                      >
                        <FaHeart className="text-pink-500 text-2xl sm:text-3xl" />
                      </motion.div>
                    </div>
                  </motion.div>
                )}

                {/* Envelope decoration - corner flourishes */}
                <div className="absolute top-6 right-6 w-10 h-10 border-t-2 border-r-2 border-pink-300 opacity-40 pointer-events-none" />
                <div className="absolute top-6 left-6 w-10 h-10 border-t-2 border-l-2 border-pink-300 opacity-40 pointer-events-none" />
                <div className="absolute bottom-6 right-6 w-10 h-10 border-b-2 border-r-2 border-pink-300 opacity-40 pointer-events-none" />
                <div className="absolute bottom-6 left-6 w-10 h-10 border-b-2 border-l-2 border-pink-300 opacity-40 pointer-events-none" />
              </div>

              {/* Pulsing glow effect */}
              {!envelopeOpened && (
                <motion.div
                  className="absolute inset-0 rounded-2xl pointer-events-none -z-10"
                  animate={{
                    boxShadow: [
                      '0 0 20px rgba(236, 72, 153, 0.3)',
                      '0 0 40px rgba(236, 72, 153, 0.5)',
                      '0 0 20px rgba(236, 72, 153, 0.3)',
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              )}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;

