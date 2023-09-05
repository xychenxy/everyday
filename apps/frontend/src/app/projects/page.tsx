"use client";
import { DashboardTemplate } from "@/app/components/PageLayout/Templates/DashboardTemplate";
import restaurantProject from "@/app/assets/images/project-restaurant.png";
import dashboardProject from "@/app/assets/images/dashboard.png";
import { objectKeys } from "ts-extras";
import Image from "next/image";

const projects = {
	porfolio: {
		name: "Portfolio",
		imageSrc: dashboardProject,
		description: "Portfolio is used to advanced my skills.",
		details: [],
		tech: [
			"Next.js",
			"Nest.js",
			"vanilla-extract css",
			"TypeScript",
			"Tailwind css",
			"Spline",
		],
		link: "/",
	},
	pirateRestaurants: {
		name: "Pirate Restaurants",
		imageSrc: restaurantProject,
		description:
			"Pirate food is an online reaturant, users can visit various restaurants to order their favorite foods. It includes key features:",
		details: [
			"Categories page to display food",
			"Restaurants page to show restaurants",
			"Checkout page to allow users to complete their orders by filling out a form",
			"Success page to how notification",
		],
		tech: ["Next.js", "vanilla-extract css", "TypeScript"],
		link: "https://nextjs-13-restaurants.vercel.app/",
	},
};

export default function Home() {
	return (
		<DashboardTemplate>
			<section className="grow flex flex-row flex-wrap">
				{objectKeys(projects).map((name, index) => {
					const project = projects[name];
					return (
						<div className="p-6 " key={index}>
							<div className="w-[20rem] bg-white rounded-2xl shadow">
								<div className="p-4">
									<h3 className="font-bold pb-4">
										{project.name}
									</h3>
									<a
										href={project.link}
										target="_blank"
										className="cursor-pointer"
									>
										<Image
											src={project.imageSrc}
											className="w-[100%] h-[10rem]"
											alt="Picture of the author"
										/>
									</a>

									<div className="pt-4">
										<h4 className="font-bold">
											Description
										</h4>
										<p>{project.description}</p>
										<ul className="list-outside list-disc pt-2 pl-4">
											{project.details.map(
												(detail, index) => (
													<li
														className="text-sm"
														key={index}
													>
														{detail}
													</li>
												)
											)}
										</ul>
										<h4 className="font-bold py-2">Tech</h4>
										<div className="flex gap-2 flex-wrap">
											{project.tech.map((tech, index) => (
												<span
													className="text-xs bg-blue-200 px-2 py-1 rounded-xl hover:bg-blue-400 cursor-pointer transition duration-150 ease-in-out"
													key={index}
												>
													{tech}
												</span>
											))}
										</div>
										<h4 className="font-bold py-2">Link</h4>
										<a
											href={project.link}
											target="_blank"
											className="text-xs px-2 py-1 rounded-s border-2 border-solid border-blue-200 hover:border-blue-400 cursor-pointer transition duration-150 ease-in-out"
										>
											{project.name}
										</a>
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</section>
		</DashboardTemplate>
	);
}
