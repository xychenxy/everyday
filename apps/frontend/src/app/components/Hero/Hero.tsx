import { useState } from "react";
import Image from "next/image";
import UnknownLogo from "@/app/assets/images/logo-no-background.svg";
import ComputerCanvas from "@/app/components/canvas/Computer";

export const navLinks = [
	{
		id: "home",
		name: "Home",
	},
	{
		id: "projects",
		name: "Projects",
	},
	{
		id: "experience",
		name: "Experience",
	},
	{
		id: "contact",
		name: "Contact",
	},
];

export default function Hero() {
	const [active, setActive] = useState("");

	return (
		<div className="w-full h-screen flex flex-col relative">
			{/* nav */}
			<div
				className={`flex justify-between items-center w-[100%] mx-auto fixed z-20 min-h-[72px] px-4`}
			>
				<Image
					src={UnknownLogo}
					className="h-[2rem] w-auto"
					alt="Picture of the author"
				/>
			</div>

			<div className="fixed right-5 top-20 lg:block hidden">
				<div>
					<ul className="flex flex-col ">
						{navLinks.map((link, index) => (
							<li key={index}>
								<button
									onClick={() => {
										setActive(link.name);
									}}
									className={`py-2 cursor-pointer ${
										active === link.name ? "border-b" : ""
									}`}
								>
									<a href={`#${link.id}`}>{link.name}</a>
								</button>
							</li>
						))}
					</ul>
				</div>
			</div>

			{/* hero content */}
			<div className="grow flex flex-col pt-20" id="home">
				<div className="flex flex-col justify-center items-center gap-4 p-8 ">
					<p className="text-3xl font-semibold">Hi, I am Mavis</p>
					<p className="text-lg italic">
						<span className="not-italic font-semibold text-green-700">
							Full
						</span>{" "}
						of passion of programming,
					</p>
					<p className="text-lg italic">
						and have a{" "}
						<span className="not-italic font-semibold text-green-700">
							Stack
						</span>{" "}
						of funny ideas in my mind.
					</p>
				</div>

				<div className="grow">
					<ComputerCanvas />
				</div>
			</div>
		</div>
	);
}
