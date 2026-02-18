import { motion } from 'framer-motion';
import clapboard from '../assets/images/clapboard.png';

const letterAnimation = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 }
};

const staggerContainer = {
    visible: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

export function Hero() {
    return (
        <section className="relative h-screen overflow-hidden bg-white flex items-center justify-center">
            {/* Background Grid Pattern - Animated */}
            <motion.div
                className="absolute inset-0 opacity-[0.03]" // Very subtle
                style={{
                    backgroundImage: 'linear-gradient(rgba(20, 83, 45, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(20, 83, 45, 1) 1px, transparent 1px)',
                    backgroundSize: '50px 50px'
                }}
                animate={{
                    backgroundPosition: ["0px 0px", "50px 50px"]
                }}
                transition={{
                    repeat: Infinity,
                    duration: 10, // Slower movement
                    ease: "linear"
                }}
            />

            {/* Floating Gradient Blobs - Reduced Opacity */}
            <motion.div
                className="absolute top-1/3 left-1/3 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-[128px] opacity-10"
                animate={{
                    x: [0, 50, 0],
                    y: [0, -30, 0],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.div
                className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-[128px] opacity-5"
                animate={{
                    x: [0, -40, 0],
                    y: [0, 30, 0],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />


            {/* Radial Gradient Overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-gray-100/50" />

            <div className="relative z-10 text-center px-4 max-w-7xl mx-auto mt-10 md:mt-20">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                    className="mb-8 relative inline-block"
                >
                    <h1 className="text-4xl md:text-9xl lg:text-[10rem] font-anton text-primary leading-none tracking-tighter drop-shadow-sm overflow-hidden uppercase relative z-10">
                        <motion.span className="inline-block" variants={letterAnimation}>N</motion.span>
                        <motion.span className="inline-block" variants={letterAnimation}>O</motion.span>
                        <motion.span className="inline-block" variants={letterAnimation}>O</motion.span>
                        <motion.span className="inline-block" variants={letterAnimation}>Z</motion.span>
                        <motion.span className="inline-block" variants={letterAnimation}>I</motion.span>
                        <br />
                        <motion.div className="inline-flex overflow-hidden">
                            {Array.from("PRODUCTION").map((char, index) => (
                                <motion.span key={index} variants={letterAnimation}>
                                    {char}
                                </motion.span>
                            ))}
                        </motion.div>
                    </h1>

                    {/* Decorative Clapboard - Right Side / Gap */}
                    <motion.div
                        className="absolute top-[-40%] -right-8 translate-x-0 translate-y-0 md:left-auto md:translate-x-0 md:-right-20 md:top-[10%] md:-translate-y-1/2 z-0 block"
                        initial={{ opacity: 0, x: 50, rotate: -15 }}
                        whileInView={{ opacity: 1, x: 0, rotate: -12 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <img
                            src={clapboard}
                            alt="Clapboard"
                            className="w-20 h-20 md:w-80 md:h-80 object-contain drop-shadow-xl"
                        />
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                >
                    <p className="text-3xl md:text-5xl lg:text-6xl font-[family-name:var(--font-handwriting)] text-accent opacity-100">
                        Love in motion. Your journey, our lens
                    </p>
                </motion.div>

            </div>
        </section>
    );
}
