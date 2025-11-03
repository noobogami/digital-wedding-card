import { motion, AnimatePresence } from 'framer-motion';
import { FaHeart, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { useState } from 'react';

const Hero = () => {
  const [envelopeOpened, setEnvelopeOpened] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Fixed animated background - stays in place while scrolling */}
      <div className="fixed inset-0 bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 overflow-hidden -z-10">
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

      {/* Content */}
      <div className="relative z-10 px-4 w-full flex items-center justify-center">
        <div className="relative w-[500px] max-w-[90vw]" style={{ minHeight: '650px' }}>
          {/* CARD - Always present, behind envelope */}
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
            className="relative"
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
          className="w-full min-h-[650px]"
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
            className="bg-white rounded-3xl p-8 md:p-12 flex flex-col"
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
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="mb-6 text-center"
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="inline-block"
                  >
                    <FaHeart className="text-5xl text-red-500 mx-auto" />
                  </motion.div>
                </motion.div>

                <div className="flex-1 flex flex-col justify-center">
                  {/* Couple Names */}
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-vazir text-center"
                  >
                    {/* PLACEHOLDER: Replace with couple names */}
                    آتنا و علی
                  </motion.h1>

                  {/* Wedding Title */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-xl md:text-2xl text-gray-600 mb-8 font-vazir text-center"
                  >
                    جشن بله برون- نامزدی
                  </motion.div>

                  {/* Decorative Line */}
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent mb-8"
                  />

                  {/* Date and Time */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="text-center mb-8"
                  >
                    <p className="text-lg md:text-xl text-gray-700 font-vazir mb-2">
                      {/* PLACEHOLDER: Replace with actual date */}
                      روز پنجشنبه
                    </p>
                    <p className="text-2xl md:text-3xl font-bold text-purple-600 font-vazir mb-2">
                      ۱۳ آذر ۱۴۰۴
                    </p>
                    <p className="text-base md:text-lg text-gray-600 font-vazir">
                      ساعت ۱۹:۰۰
                    </p>
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
                    className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full text-base md:text-lg font-semibold shadow-lg hover:shadow-xl transition-shadow"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    مشاهده جزئیات
                  </motion.button>

                  {/* Decorative bottom hearts */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="flex justify-center gap-2 mt-6 text-pink-300"
                  >
                    <FaHeart className="text-sm" />
                    <FaHeart className="text-xs" />
                    <FaHeart className="text-sm" />
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
            className="bg-white rounded-3xl p-8 md:p-12 flex flex-col"
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
                {/* Header */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="text-center mb-8"
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-vazir mb-2">
                    جزئیات مراسم
                  </h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mt-4" />
                </motion.div>

                {/* Minimal Details */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="flex-1 space-y-6"
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
                        پاسداران - انتهای بوستان دوم- خ افشاری (ساقدوش)
                      </p>
                    </div>
                  </div>

                  {/* Map - OpenStreetMap (Free, No API Key!) */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                    className="space-y-3"
                  >
                    <div className="rounded-xl overflow-hidden border border-gray-200">
                      {/* PLACEHOLDER: Update latitude and longitude for your venue */}
                      {/* 100% Free - No API key, No payment, No registration! */}
                      <iframe
                        src="https://www.openstreetmap.org/export/embed.html?bbox=51.465990543365486%2C35.761762205235705%2C51.47430539131165%2C35.765893074672434&amp;layer=mapnik&amp;marker=35.7638266%2C51.4701472"
                        width="100%"
                        height="192"
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
                      className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <FaMapMarkerAlt className="text-lg" />
                      <span className="font-vazir">مسیریابی و راهنما</span>
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
              <div className="relative w-[560px] h-[720px] bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 rounded-2xl">
                {/* Back of envelope */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl shadow-2xl border border-pink-200" />
                
                {/* Envelope flap - animated */}
                <motion.div
                  className="absolute top-0 left-0 right-0 h-[360px] bg-gradient-to-br from-pink-100 to-purple-100 origin-top border-x border-t border-pink-200 rounded-t-2xl"
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
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-200/30" />
                  
                  {/* Flap decorative border */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent" />
                </motion.div>

                {/* Wax seal */}
                <div 
                  className="absolute top-[330px] left-1/2 -translate-x-1/2 w-24 h-24 z-10"
                >
                  <motion.div
                    className="w-full h-full bg-gradient-to-br from-red-500 to-red-700 rounded-full shadow-xl flex items-center justify-center"
                    whileHover={!envelopeOpened ? { scale: 1.1, rotate: 5 } : {}}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <FaHeart className="text-white text-4xl" />
                    {/* Seal texture */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
                  </motion.div>
                </div>

                {/* Decorative elements */}
                {!envelopeOpened && (
                  <motion.div 
                    className="absolute bottom-20 left-0 right-0 text-center pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    <p className="text-gray-600 font-vazir text-2xl mb-4">
                      کلیک کنید
                    </p>
                    <div className="flex justify-center gap-2">
                      <FaHeart className="text-pink-400 text-lg" />
                      <FaHeart className="text-red-400 text-base" />
                      <FaHeart className="text-pink-400 text-lg" />
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
        </div>
      </div>
    </div>
  );
};

export default Hero;

