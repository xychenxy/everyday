import { useEffect, useState } from "react";
import Image from "next/image";
import UnknownLogo from "@/app/assets/images/logo-no-background.svg";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

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

export default function Nav() {
	const [isOpen, setIsOpen] = useState(false);
	const [active, setActive] = useState("");

	return (
		<div className="w-full h-screen flex flex-col">
			{/* nav */}
			<div
				className={`flex justify-between items-center w-[100%] mx-auto fixed z-20 min-h-[72px] px-4`}
			>
				<div className="flex justify-between items-center gap-8">
					<Image
						src={UnknownLogo}
						className="h-[2rem] w-auto"
						alt="Picture of the author"
					/>
				</div>

				<div className="flex items-center gap-6">
					<div
						className={`duration-500 ease-in-out md:static absolute md:min-h-fit min-h-[60vh] top-[74px] md:top-0 left-0 md:w-auto  w-full flex px-5 md:py-0 py-10 ${
							isOpen ? "left-[0%] top-[74px]" : "left-[-100%]"
						} z-10 bg-indigo-900 md:bg-transparent`}
					>
						<ul className="flex flex-col gap-4 md:flex-row md:items-center">
							{navLinks.map((link, index) => (
								<li key={index}>
									<button
										onClick={() => {
											setActive(link.name);
										}}
										className={`${
											active === link.name
												? "border-b"
												: ""
										} py-2 `}
									>
										<a href={`#${link.id}`}>{link.name}</a>
									</button>
								</li>
							))}
						</ul>
					</div>
					<div
						className="text-3xl cursor-pointer md:hidden"
						onClick={() => setIsOpen(!isOpen)}
					>
						{isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
					</div>
				</div>
			</div>
		</div>
	);
}
