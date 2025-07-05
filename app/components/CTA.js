// app/components/CTA.js
'use client';

import { motion } from 'framer-motion';

const CTA = () => {
    return (
        <section className="py-20 md:py-28 px-4">
            <div className="container mx-auto max-w-4xl">
                <motion.div
                    className="bg-gradient-to-br from-slate-900 to-slate-800/70 p-12 md:p-16 rounded-2xl text-center border border-slate-800"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-4">
                        Mulai Beriklan Bersama RRI Bandarlampung
                    </h2>
                    <p className="text-lg text-slate-400 max-w-xl mx-auto mb-8">
                        Join thousands of creators and businesses who are building faster and better with our platform. Start your free trial today.
                    </p>
                    <motion.button
                        className="bg-blue-500 text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-blue-600 transition duration-300"
                        whileHover={{ scale: 1.05, boxShadow: '0px 0px 20px rgba(59, 130, 246, 0.5)' }} // Biru glow
                        whileTap={{ scale: 0.95 }}
                    >
                        Get Started for Free
                    </motion.button>

                </motion.div>
            </div>
        </section>
    );
};

export default CTA;