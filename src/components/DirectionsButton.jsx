import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import {
  getDirectionApps,
  isAndroid,
  isMobileDevice,
  openDirections,
} from '../mapUrls';

const DirectionsButton = ({
  latitude,
  longitude,
  label = '',
  className = '',
  children,
  ...motionProps
}) => {
  const [pickerOpen, setPickerOpen] = useState(false);
  const apps = getDirectionApps({ latitude, longitude, label });

  const handleClick = () => {
    if (isMobileDevice()) {
      if (isAndroid()) {
        openDirections({ latitude, longitude, label });
        return;
      }
      setPickerOpen(true);
      return;
    }
    openDirections({ latitude, longitude, label });
  };

  return (
    <>
      <motion.button
        type="button"
        onClick={handleClick}
        className={className}
        {...motionProps}
      >
        {children}
      </motion.button>

      <AnimatePresence>
        {pickerOpen && (
          <>
            <motion.button
              type="button"
              aria-label="بستن"
              className="fixed inset-0 z-[100] bg-black/40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setPickerOpen(false)}
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="انتخاب برنامه مسیریابی"
              className="fixed inset-x-0 bottom-0 z-[101] rounded-t-2xl bg-white px-4 pb-8 pt-3 shadow-2xl"
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 320 }}
            >
              <motion.div className="mx-auto mb-3 h-1 w-10 rounded-full bg-gray-300" />
              <div className="mb-4 flex items-center justify-between">
                <p className="font-vazir text-base font-semibold text-gray-800">
                  مسیریابی با
                </p>
                <button
                  type="button"
                  onClick={() => setPickerOpen(false)}
                  className="rounded-full p-2 text-gray-500 hover:bg-gray-100"
                  aria-label="بستن"
                >
                  <FaTimes />
                </button>
              </div>
              <ul className="max-h-[50vh] space-y-1 overflow-y-auto">
                {apps.map((app) => (
                  <li key={app.id}>
                    <a
                      href={app.href}
                      className="flex flex-col rounded-xl px-4 py-3 font-vazir text-gray-800 hover:bg-gray-100 active:bg-gray-200"
                      onClick={() => setPickerOpen(false)}
                    >
                      <span className="font-semibold">{app.name}</span>
                      {app.description && (
                        <span className="text-xs text-gray-500">{app.description}</span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default DirectionsButton;
