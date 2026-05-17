import { motion } from 'framer-motion';
import { DecoIcon } from '../theme';

const EnvelopePostcard = ({ image, imageAlt, theme, envelopeOpened }) => {
  return (
    <div className="absolute inset-0 z-[3] flex items-center justify-center p-5 sm:p-6 pointer-events-none">
      <div className={`relative ${image ? 'w-[min(400px,76vw)] max-w-[88%]' : 'w-20 sm:w-24'}`}>
        {image && (
          <motion.div
            className="w-full"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: envelopeOpened ? 0.6 : 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div
              className={`rounded-2xl bg-white/95 p-2 sm:p-2.5 shadow-[0_12px_40px_rgba(0,0,0,0.14)] border-2 ${theme.envelopeBorder}`}
            >
              <div className="relative aspect-square w-full overflow-hidden rounded-xl">
                <img
                  src={image}
                  alt={imageAlt}
                  className="h-full w-full object-cover"
                  draggable={false}
                />
                <motion.div
                  className={`pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ${theme.envelopeBorder} opacity-60`}
                  aria-hidden
                />
              </div>
            </div>
          </motion.div>
        )}

        <div
          className={`absolute left-1/2 z-10 w-20 h-20 sm:w-24 sm:h-24 -translate-x-1/2 ${
            image ? '-top-10 sm:-top-12' : 'top-1/2 -translate-y-1/2'
          }`}
        >
          <motion.div
            className={`w-full h-full bg-gradient-to-br ${theme.sealGradient} rounded-full shadow-2xl flex items-center justify-center`}
            whileHover={!envelopeOpened ? {
              scale: 1.15,
              rotate: [0, -10, 10, -10, 0],
            } : {}}
            animate={{
              boxShadow: theme.sealGlow.map((g) => `0 10px 35px ${g}`),
            }}
            transition={{
              boxShadow: {
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              },
              hover: {
                type: 'spring',
                stiffness: 400,
                damping: 10,
              },
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
                ease: 'easeInOut',
              }}
            >
              <DecoIcon className="text-white text-4xl drop-shadow-lg" />
            </motion.div>
            <motion.div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/30 to-transparent pointer-events-none" />
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
                ease: 'easeInOut',
              }}
            >
              ✨
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default EnvelopePostcard;
