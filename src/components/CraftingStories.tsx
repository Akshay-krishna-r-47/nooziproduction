import { FadeIn } from './ui/FadeIn';
import { motion } from 'framer-motion';
import handcamer from '../assets/images/handcamer.png';


export function CraftingStories() {
    return (
        <section className="py-10 md:py-20 bg-[#F5F5F3] flex items-center justify-center overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 text-center relative w-full">
                <FadeIn>
                    <h2
                        className="text-5xl md:text-9xl font-[900] uppercase leading-none tracking-[0.1em] mb-8 text-black relative z-10"
                        style={{ fontFamily: '"Tw Cen MT Condensed Extra Bold", "Tw Cen MT Condensed", "Tw Cen MT", sans-serif' }}
                    >
                        CRAFTING <span className="text-accent">STORIES</span><br />
                        THAT MOVE.
                    </h2>

                    <p className="text-gray-500 text-lg md:text-xl max-w-3xl mx-auto font-medium leading-relaxed relative z-10" style={{ fontFamily: '"Cascadia Mono Light", monospace' }}>
                        Noozi is a digital marketing and video production powerhouse. We merge high-end visual aesthetics with data-driven strategy.
                    </p>
                </FadeIn>

                {/* Handcam Decoration */}
                <motion.div
                    className="absolute -bottom-52 -left-10 md:-left-40 z-0 opacity-80"
                    initial={{ x: -100, rotate: -20, opacity: 0 }}
                    whileInView={{ x: 0, rotate: -10, opacity: 0.8 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 1, type: "spring" }}
                >
                    <img src={handcamer} alt="" className="w-48 md:w-80 object-contain" />
                </motion.div>
            </div>
        </section>
    );
}
