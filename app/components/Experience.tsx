'use client';

import { motion } from 'framer-motion';

export default function Experience() {
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
					Professional Experience
				</motion.h2>

				<div className="md:grid-cols-2">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        whileHover={{ scale: 1.05 }}
                        className="bg-white/5 rounded-xl p-6 text-left hover:bg-white/10 transition-colors"
                    >
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                            <div>
                                <h2 className="underline text-lg font-bold">IBM</h2>
                                <h2><b>Customer Support Engineer - IBM Cloud</b></h2>
                                <p>Jan 2021 - Present</p>
                            </div>
                            <div>
                                <li>
                                    Provided advanced technical support for IBM Cloud services through live chat and ServiceNow tickets, 
                                    troubleshooting customer issues and achieving a 95% satisfaction rating
                                </li>
                                <br />
                                <li>
                                    Designed a custom tool using React and Node.js with 3rd party SAML login to streamline customer 
                                    account data retrieval, reducing resolution times by 30%
                                </li>
                                <br />
                                <li>
                                    Developed and maintained internal dashboards using Grafana to monitor team metrics and system performance 
                                </li>
                            </div>
                            <div>
                                <li>
                                    Worked with IBM Cloud pipeline to build and deploy custom internal tools, improving deployment 
                                    frequency and reliability  
                                </li>
                                <br />
                                <li>
                                    Automated routine tasks with Bash and Python scripts, saving an estimated 15 hours of manual work 
                                    monthly
                                </li>
                                <br />
                                <li>
                                    Implemented a dashboard which showed my team’s metrics for time spent on various projects using 
                                    React for frontend and Node.js & Express for backend and set up a pipeline in IBM Cloud to automate the 
                                    process from building the image from source code to deploying the app 
                                </li>
                            </div>
                        </div>
                    </motion.div>
				</div>
			</div>
		</section>
	);
}
