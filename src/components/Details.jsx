import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaRing, FaClock, FaCalendarAlt, FaUsers } from 'react-icons/fa';

const Details = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const details = [
    {
      icon: <FaCalendarAlt className="text-4xl" />,
      title: "تاریخ",
      content: "روز جمعه، ۱۵ آذر ۱۴۰۴", // PLACEHOLDER: Replace with actual date
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: <FaClock className="text-4xl" />,
      title: "زمان",
      content: "ساعت ۱۸:۰۰ الی ۲۲:۰۰", // PLACEHOLDER: Replace with actual time
      color: "from-purple-400 to-purple-600"
    },
    {
      icon: <FaRing className="text-4xl" />,
      title: "مراسم",
      content: "مراسم عقد و جشن عروسی", // PLACEHOLDER: Replace with ceremony type
      color: "from-pink-400 to-pink-600"
    },
    {
      icon: <FaUsers className="text-4xl" />,
      title: "میهمانان",
      content: "با حضور گرم خانواده و دوستان", // PLACEHOLDER: Customize message
      color: "from-red-400 to-red-600"
    }
  ];

  return (
    <div id="details" className="min-h-screen py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50 relative z-10">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto"
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-800 font-vazir"
        >
          جزئیات مراسم
        </motion.h2>

        <motion.div
          variants={itemVariants}
          className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-12 rounded-full"
        />

        <motion.div
          variants={itemVariants}
          className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl mb-12"
        >
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center font-vazir">
            {/* PLACEHOLDER: Replace with your ceremony description */}
            با کمال افتخار و خوشحالی از حضور گرم شما در مراسم ازدواج فرزندانمان دعوت می‌کنیم.
            <br />
            <br />
            این روز خاص را با ما جشن بگیرید و لحظات شیرین این مراسم را همراه ما سپری کنید.
            حضور شما برای ما بسیار ارزشمند و با اهمیت است.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {details.map((detail, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="relative group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className={`inline-block p-4 rounded-full bg-gradient-to-r ${detail.color} text-white mb-4`}>
                  {detail.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2 font-vazir">
                  {detail.title}
                </h3>
                <p className="text-gray-600 text-lg font-vazir">
                  {detail.content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={itemVariants}
          className="mt-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl p-8 text-center text-white shadow-2xl"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4 font-vazir">
            لطفاً حضور خود را تایید فرمایید
          </h3>
          <p className="text-lg mb-6 font-vazir">
            {/* PLACEHOLDER: Add contact info */}
            برای اطلاع از جزئیات بیشتر با شماره ۰۹۱۲۳۴۵۶۷۸۹ تماس بگیرید
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Details;

