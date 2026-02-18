import { motion } from 'framer-motion';

const services = [
    "Commercials", "Brand Films", "Music Videos", "Documentaries", "Social Media Content", "Photography", "Drone Shoots"
];

export function ServicesTicker() {
    return (
        <section className="py-12 bg-black overflow-hidden border-y border-white/10">
            <div className="flex whitespace-nowrap">
                <motion.div
                    className="flex space-x-16"
                    animate={{ x: "-100%" }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 20
                    }}
                >
                    {[...services, ...services, ...services].map((service, index) => (
                        <div key={index} className="flex items-center space-x-16">
                            <span className="text-4xl md:text-6xl font-anton text-transparent stroke-text hover:text-accent transition-colors duration-300 cursor-default">
                                {service}
                            </span>
                            <span className="text-2xl text-accent">★</span>
                        </div>
                    ))}
                </motion.div>

                {/* Duplicate for seamless loop */}
                <motion.div
                    className="flex space-x-16 pl-16"
                    animate={{ x: "-100%" }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 20
                    }}
                >
                    {[...services, ...services, ...services].map((service, index) => (
                        <div key={`dup-${index}`} className="flex items-center space-x-16">
                            <span className="text-4xl md:text-6xl font-anton text-transparent stroke-text hover:text-accent transition-colors duration-300 cursor-default">
                                {service}
                            </span>
                            <span className="text-2xl text-accent">★</span>
                        </div>
                    ))}
                </motion.div>
            </div>

            <style>{`
                .stroke-text {
                    -webkit-text-stroke: 1px rgba(255, 255, 255, 0.5);
                }
                .stroke-text:hover {
                    -webkit-text-stroke: 1px #EAB308;
                    color: #EAB308;
                }
            `}</style>
        </section>
    );
}
