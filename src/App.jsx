import { RiChat1Line } from 'react-icons/ri';
import ChatWindow from './ChatWindow';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-0 right-0 p-4 flex flex-col">
        <AnimatePresence mode='wait'>
          {
            !isOpen && (
              <motion.button initial={ { y: 100, opacity: 0 } } animate={ { y: 0, opacity: 1 } } onClick={ () => setIsOpen(true) } className="fixed bottom-0 right-0 m-10 w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center z-[1]">
                <RiChat1Line size="1.5em" />
              </motion.button>
            )
          }
        </AnimatePresence>
        <AnimatePresence mode='wait'>
          {
            isOpen && (
              <motion.div initial={ { y: 100, opacity: 0 } } animate={ { y: 0, opacity: 1 } } className="fixed bottom-0 right-0 m-10 w-[420px] h-[560px] border z-[2] bg-white rounded-2xl overflow-hidden">
                <ChatWindow onClose={ () => setIsOpen(false) } />
              </motion.div>
            )
          }
        </AnimatePresence>
      </div>
    </>
  );
}

export default App;
