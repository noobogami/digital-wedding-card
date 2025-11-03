import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaMapMarkerAlt, FaCopy, FaCheck, FaDirections } from 'react-icons/fa';

const Location = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [copied, setCopied] = useState(false);

  // PLACEHOLDER: Replace with actual venue address
  const venueAddress = "تهران، خیابان ولیعصر، تالار پذیرایی";
  
  // PLACEHOLDER: Replace with your Google Maps API key and location coordinates
  // Get your API key from: https://developers.google.com/maps/documentation/embed/get-api-key
  const googleMapsApiKey = "YOUR_GOOGLE_MAPS_API_KEY";
  const latitude = "35.6892";  // Tehran latitude as example
  const longitude = "51.3890"; // Tehran longitude as example

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(venueAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleGetDirections = () => {
    // Opens Google Maps with directions
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`, '_blank');
  };

  return (
    <div id="location" className="min-h-screen py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50 relative z-10">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 font-vazir">
            محل برگزاری
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden"
        >
          {/* Address Section */}
          <div className="p-8 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
            <div className="flex items-center justify-center mb-4">
              <FaMapMarkerAlt className="text-4xl ml-4" />
              <h3 className="text-2xl md:text-3xl font-bold font-vazir">آدرس محل مراسم</h3>
            </div>
            <p className="text-xl text-center leading-relaxed font-vazir mb-6">
              {venueAddress}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleCopyAddress}
                className="flex items-center justify-center bg-white text-purple-600 px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                {copied ? (
                  <>
                    <FaCheck className="ml-2" />
                    کپی شد!
                  </>
                ) : (
                  <>
                    <FaCopy className="ml-2" />
                    کپی آدرس
                  </>
                )}
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleGetDirections}
                className="flex items-center justify-center bg-white text-blue-600 px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                <FaDirections className="ml-2" />
                مسیریابی
              </motion.button>
            </div>
          </div>

          {/* Map Section */}
          <div className="relative w-full h-96 md:h-[500px] bg-gray-200">
            {googleMapsApiKey === "YOUR_GOOGLE_MAPS_API_KEY" ? (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                <div className="text-center p-8">
                  <FaMapMarkerAlt className="text-6xl text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 text-lg font-vazir mb-2">
                    برای نمایش نقشه، لطفاً Google Maps API Key را تنظیم کنید
                  </p>
                  <p className="text-gray-500 text-sm font-vazir">
                    فایل: src/components/Location.jsx
                  </p>
                  <a 
                    href="https://developers.google.com/maps/documentation/embed/get-api-key"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-blue-600 hover:text-blue-800 underline"
                  >
                    دریافت API Key
                  </a>
                </div>
              </div>
            ) : (
              <iframe
                src={`https://www.google.com/maps/embed/v1/place?key=${googleMapsApiKey}&q=${latitude},${longitude}&zoom=15`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Wedding Venue Location"
              />
            )}
          </div>

          {/* Additional Info */}
          <div className="p-8 bg-gray-50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <h4 className="text-xl font-bold text-gray-800 mb-2 font-vazir">
                  پارکینگ
                </h4>
                <p className="text-gray-600 font-vazir">
                  {/* PLACEHOLDER: Add parking info */}
                  پارکینگ اختصاصی در دسترس است
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <h4 className="text-xl font-bold text-gray-800 mb-2 font-vazir">
                  دسترسی
                </h4>
                <p className="text-gray-600 font-vazir">
                  {/* PLACEHOLDER: Add accessibility info */}
                  دسترسی آسان از طریق مترو و اتوبوس
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Location;

