import { projects } from "@/app/utils/constants";
import Image from "next/image";
import { github } from "@/app/assets";
import { Tilt } from "react-tilt";

type Project = (typeof projects)[number];

const ProjectCard = ({
	name,
	description,
	tags,
	image,
	source_code_link,
	link,
}: Project) => {
	return (
		<Tilt className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
			{/* image */}
			<div className="relative w-full h-[230px]">
				<Image
					src={image}
					alt="author"
					className="w-full h-full object-cover rounded-2xl"
					onClick={() => window.open(link, "_blank")}
				/>

				<div className="absolute inset-0 flex justify-end m-3 card-img_hover">
					<div
						onClick={() => window.open(source_code_link, "_blank")}
						className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer bg-black"
					>
						<Image
							src={github}
							alt="source code"
							className="w-1/2 h-1/2 object-contain"
						/>
					</div>
				</div>
			</div>

			{/* desc */}
			<div className="mt-5">
				<h3 className="text-white font-bold text-[24px]">{name}</h3>
				<p className="mt-2 text-secondary text-[14px]">{description}</p>
			</div>

			{/* tag */}
			<div className="mt-4 flex flex-wrap gap-2">
				{tags.map((tag) => (
					<p
						key={`${name}-${tag.name}`}
						className={`text-[14px] ${tag.color}`}
					>
						#{tag.name}
					</p>
				))}
			</div>

			{/* link */}
			<div className="mt-4 flex flex-wrap gap-2">
				<a href={link} target="_blank">
					<p className={`text-[14px] ${link}`}>{link}</p>
				</a>
			</div>
		</Tilt>
	);
};

export default function About() {
	return (
		<div className="flex flex-col md:p-20 px-4 h-full" id="projects">
			<p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider font-bold">
				Introduction
			</p>
			<p className="mt-4 text-secondary text-[17px] max-w-4xl leading-[30px]">
				I am a skilled software developer with experience in both
				frontend and backend, and expertise in Javascript, Typescript,
				and the major popular frameworks like React, Node.js. Also I am
				familiar with Databases and AWS infrastructures. I like to show
				some projects that I have done recently.
			</p>

			<div className="mt-14 flex flex-wrap gap-7">
				{projects.map((project, index) => (
					<ProjectCard key={`project-${index}`} {...project} />
				))}
			</div>
		</div>
	);
}
