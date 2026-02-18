import { motion } from 'framer-motion';

export function RetroTV() {
    return (
        <div className="relative w-64 h-48 md:w-80 md:h-64 mx-auto">
            {/* Antenna */}
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-32 h-20 border-l-2 border-r-2 border-gray-600 rounded-t-full rotate-12" />

            {/* TV Body */}
            <div className="absolute inset-0 bg-gray-800 rounded-2xl border-4 border-gray-300 shadow-xl flex flex-col p-4">
                {/* Screen */}
                <div className="flex-grow bg-gray-200 rounded-lg overflow-hidden relative shadow-inner">
                    <motion.div
                        className="absolute inset-0 bg-gray-900 opacity-20"
                        animate={{ opacity: [0.1, 0.2, 0.1] }}
                        transition={{ repeat: Infinity, duration: 0.2 }}
                    />
                    {/* Static Noise Effect */}
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIi8+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiM5OTkiLz4KPC9zdmc+')] opacity-10 pointer-events-none" />
                </div>

                {/* Controls */}
                <div className="h-8 mt-2 flex items-center justify-between px-2">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-gray-600" />
                        <div className="w-3 h-3 rounded-full bg-gray-600" />
                    </div>
                    <div className="w-16 h-1 bg-gray-700 rounded-full" />
                </div>
            </div>

            {/* Legs */}
            <div className="absolute -bottom-6 left-8 w-4 h-8 bg-gray-400 transform -rotate-12" />
            <div className="absolute -bottom-6 right-8 w-4 h-8 bg-gray-400 transform rotate-12" />
        </div>
    );
}
