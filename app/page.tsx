'use client';

import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import Education from './components/Education';
import Experience from './components/Experience';

export default function MinimalModernPortfolio() {
	return (
		<div className="min-h-screen bg-black text-white">
			<HeroSection />
			<Experience />
			<ProjectsSection />

			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<SkillsSection />
				<Education />
			</div>
			<ContactSection />
		</div>
	);
}
