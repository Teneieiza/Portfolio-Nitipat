import React, { useState } from 'react';
import Hometext from './Hometext';
import Sidebar from './Sidebar';
import Aboutme from './Aboutme';
import { motion, AnimatePresence } from 'framer-motion';

const Allcomponents = () => {
    const [currentComponent, setCurrentComponent] = useState('home');

    const renderComponent = () => {
        switch (currentComponent) {
            case 'home':
                return <Hometext />;
            case 'about':
                return <Aboutme />;
            default:
                return <Hometext />;
        }
    };

    return (
        <div className="w-full h-full relative flex items-center justify-center">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentComponent}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.5 }}
                    className="relative w-full h-full flex items-center justify-center"
                >
                <div className="flex flex-col gap-10 xl:flex-row">
                    <Sidebar setCurrentComponent={setCurrentComponent} />
                    <div className="flex-grow">
                        {currentComponent === 'home' && <Hometext />}
                        {currentComponent === 'about' && <Aboutme />}
                    </div>
                </div>

                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default Allcomponents;
