'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
	{
		id: 1,
		title: ' Doctor Lite - Team project',
		description: "Using React, Nodejs and Express, I implemented a tool for my team which retrieves an IBM Cloud customer’s account data and other information such as the resources deployed in their account. I also integrated 3rd party login in this app using SAML. Instead of going back and forth with the customer, we can quickly get all the customer account’s information. This tool has proven to be very helpful for the whole team as this has made a significant impact on our MTTR (Mean time to resolution) metric reducing the time taken to resolve a customer’s ticket.",
		image: '/code.jpg',
		link: false,
		href:''
	},
	{
		id: 2,
		title: 'Cloud-Native Monitoring Dashboard',
		description: 'Built a cloud-native system monitoring app using microservices architecture with Node.js, Express, and React. Integrated Prometheus and Grafana for real-time performance monitoring. Containerized services with Docker and orchestrated using Kubernetes on IBM Cloud. Implemented GitHub Actions for CI/CD and automated deployment via Helm and Terraform. ',
		image: '/code.jpg',
		link: false,
		href:''
	},
	{
		id: 3,
		title: 'Instagram Clone',
		description: 'Clone of Instagram built in NodeJS, Express and React.',
		image: '/code.jpg',
		link: true,
		href: 'https://github.com/bhaveshsaini/instagram_clone'
	},
	{
		id: 4,
		title: 'Backup Creator',
		description: 'Backup any files or folders on a system (for example Raspberry pi).',
		image: '/code.jpg',
		link: true,
		href: 'https://github.com/bhaveshsaini/backup-script'
	},
	{
		id: 5,
		title: 'AI Virtual Assistant',
		description: 'A local LLM–powered assistant using Python with features like real-time person detection via cameras, daily email and agenda summaries, contextual suggestions, and a full reminder system.  Integrated Telegram for chat/commands and connected smart-home devices (e.g., Nest) for automation. The assistant centralizes tasks, alerts, and home control in one system, improving daily workflow and reducing manual effort.',
		image: '/code.jpg',
		link: false,
		href: ''
	},
];

export default function ProjectsSection() {
	return (
		<section className="py-12 md:py-20 px-4 max-w-7xl mx-auto">
			<motion.h2
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
				className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center"
			>
				Projects
			</motion.h2>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				{projects.map((project) => (
					<motion.div
						key={project.id}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: project.id * 0.1 }}
						whileHover={{ scale: 1.02 }}
						className="group relative aspect-video bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-xl overflow-hidden"
					>
						<Image src={project.image} alt={project.title} fill className="object-cover transition-transform group-hover:scale-105" />
						<div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-300" />
						<div className="absolute inset-0 p-6 flex flex-col justify-end">
							<h1 className="underline text-xl font-bold mb-2">{project.title}</h1>
							<p className="font-bold text-gray-300 mb-4">{project.description}</p>
							{project.link ? <div className="flex gap-4">
								<Link href={project.href} className="text-sm px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors">
									View Project on Github
								</Link>
							</div>
							:
							""
							}
						</div>
					</motion.div>
				))}
			</div>
		</section>
	);
}
