import React from "react";
import { motion } from "framer-motion";

interface PreloaderProps {
    onLoadingComplete?: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onLoadingComplete }) => {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
            className="fixed inset-0 z-[1000] flex items-center justify-center bg-white"
        >
            <div className="relative">
                {/* Logo with layoutId for shared element transition */}
                <motion.img
                    layoutId="main-logo"
                    src={`${import.meta.env.BASE_URL}images/logo2.png`}
                    alt="VZEEPAY Logo"
                    className="h-16 w-auto md:h-20"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{
                        scale: [0.8, 1.1, 1],
                        opacity: 1,
                        transition: {
                            duration: 0.8,
                            ease: "easeOut"
                        }
                    }}
                />

                {/* Optional pulse effect around the logo */}
                <motion.div
                    className="absolute inset-0 bg-primary/10 rounded-full -z-10"
                    animate={{
                        scale: [1, 1.5, 2],
                        opacity: [0.5, 0.2, 0],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeOut"
                    }}
                />
            </div>
        </motion.div>
    );
};

export default Preloader;
