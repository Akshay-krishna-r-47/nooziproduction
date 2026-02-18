import { motion } from 'framer-motion';
import canon from '../assets/images/canon.jpg';

export function NextSteps() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        className="md:order-1 relative"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        {/* Handcam Illustration */}
                        <div className="relative">
                            <img
                                src={canon}
                                alt="Production Process"
                                className="w-full max-w-md mx-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500 -mt-12"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        className="md:order-2"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-anton text-black mb-8 relative inline-block uppercase tracking-wide">
                            Next Steps
                            <span className="text-accent">.</span>
                        </h2>

                        <ul className="space-y-6">
                            <li className="flex items-start gap-4">
                                <div className="mt-1 min-w-4 min-h-4 w-4 h-4 rounded-full bg-primary" />
                                <div>
                                    <h4 className="font-bold text-gray-900 text-xl font-handwriting !normal-case" style={{ fontFamily: '"Bradley Hand ITC", cursive' }}>Approval & Agreement</h4>
                                    <p className="text-gray-600 font-light" style={{ fontFamily: '"Cascadia Mono", monospace' }}>Review and confirm the proposal.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="mt-1 min-w-4 min-h-4 w-4 h-4 rounded-full bg-primary" />
                                <div>
                                    <h4 className="font-bold text-gray-900 text-xl font-handwriting !normal-case" style={{ fontFamily: '"Bradley Hand ITC", cursive' }}>Advance Payment</h4>
                                    <p className="text-gray-600 font-light" style={{ fontFamily: '"Cascadia Mono", monospace' }}>Secure your booking with an advance.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="mt-1 min-w-4 min-h-4 w-4 h-4 rounded-full bg-primary" />
                                <div>
                                    <h4 className="font-bold text-gray-900 text-xl font-handwriting !normal-case" style={{ fontFamily: '"Bradley Hand ITC", cursive' }}>Kick-off Meeting</h4>
                                    <p className="text-gray-600 font-light" style={{ fontFamily: '"Cascadia Mono", monospace' }}>Align on creative direction before production begins.</p>
                                </div>
                            </li>
                        </ul>

                        <div className="mt-12 text-right">
                            <h2 className="text-4xl md:text-5xl font-anton text-black mb-2">Contact Us</h2>
                            <div className="text-gray-800 font-medium space-y-1">
                                <p>Email: <a href="mailto:nooziproductions@gmail.com" className="hover:text-primary transition-colors">nooziproductions@gmail.com</a></p>
                                <p>Phone: 9495885051</p>
                                <p>Address: Palazhi</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
