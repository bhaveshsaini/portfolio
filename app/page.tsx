'use client';

import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import Education from './components/Education';

export default function MinimalModernPortfolio() {
	return (
		<div className="min-h-screen bg-black text-white">
			<HeroSection />
			<ProjectsSection />
			<SkillsSection />
			<Education />
			<ContactSection />
		</div>
	);
}
