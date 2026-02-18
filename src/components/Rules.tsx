import { motion } from 'framer-motion';
import handshake from '../assets/images/handshake.png';

export function Rules() {
    return (
        <section className="py-20 relative bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1">
                            <h2 className="text-3xl md:text-4xl font-anton text-black mb-6 uppercase tracking-wide">
                                Company Rules & Guidelines<span className="text-accent">-</span>
                            </h2>
                            <p className="text-gray-600 mb-6 font-light" style={{ fontFamily: '"Cascadia Mono", monospace' }}>
                                To ensure smooth collaboration and maintain quality standards, we kindly request all clients to follow these guidelines:
                            </p>

                            <div className="mb-4">
                                <h3 className="text-2xl text-black mb-4 font-handwriting font-bold !normal-case" style={{ fontFamily: '"Bradley Hand ITC", cursive' }}>Payment Policy</h3>
                                <ul className="space-y-2">
                                    {[
                                        "A 50% advance payment is required to confirm booking.",
                                        "Remaining 50% is due upon final delivery of the project.",
                                        "Payments are non-refundable once production begins.",
                                        "Delivery Terms :- Final files will be delivered in agreed formats (JPEG, MP4, etc.).",
                                        "Raw footage/files will only be provided if included in the package or purchased separately.",
                                        "Copyright & Usage:- All content produced remains the property of Noozi Production until full payment is received.",
                                        "All client information remains confidential.",
                                        "Mutual respect is expected at all times during production."
                                    ].map((rule, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div className="mt-1.5 min-w-3 min-h-3 w-3 h-3 rounded-full bg-primary" />
                                            <span className="text-gray-600 text-sm font-light leading-relaxed" style={{ fontFamily: '"Cascadia Mono", monospace' }}>{rule}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                            <motion.img
                                src={handshake}
                                alt="Partnership Handshake"
                                className="w-full max-w-[28rem] lg:max-w-lg object-contain opacity-90 drop-shadow-xl"
                                initial={{ opacity: 0, scale: 0.8, x: 50 }}
                                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                                whileHover={{ scale: 1.05, rotate: 2 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
