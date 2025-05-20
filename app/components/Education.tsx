'use client';

import { motion } from 'framer-motion';

export default function Education() {
	return (
		<section className="py-12 md:py-20 bg-gradient-to-b from-black to-purple-900/20">
			<div className="max-w-7xl mx-auto px-4">
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center"
				>
					Education
				</motion.h2>

				<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        whileHover={{ scale: 1.05 }}
                        className="bg-white/5 rounded-xl p-6 text-left hover:bg-white/10 transition-colors"
                    >
                        <h2 className="underline text-lg font-semibold">Bachelor of Science in Computer Science</h2>
                        <p>December 2019</p>
                        <p>College of Staten Island, New York, NY</p>
                    </motion.div>
				</div>
			</div>
		</section>
	);
}
