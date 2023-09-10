"use client";

import About from "@/app/components/Work/Work";
import Experience from "@/app/components/Experience/Experience";
import Hero from "@/app/components/Hero/Hero";
import Contact from "@/app/components/Contact/Contact";
import StarsCanvas from "@/app/components/canvas/Stars";

export default function Home() {
	return (
		<>
			<div className="w-full h-screen scroll-smooth overflow-y-auto no-scrollbar bg-[url('../app/assets/images/bg.jpg')] bg-cover text-white relative z-0">
				<StarsCanvas />
				<div className="max-w-[1536px] w-full mx-auto">
					<Hero />
					<About />
					<Experience />
					<Contact />
				</div>
			</div>
		</>
	);
}
