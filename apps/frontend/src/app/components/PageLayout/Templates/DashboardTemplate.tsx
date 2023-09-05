"use client";
import SidebarData from "@/app/dashboard/SidebarData";
import { useState } from "react";
import { BiChevronLeft } from "react-icons/bi";
import Unknown from "@/app/assets/images/unknown.jpg";
import Image from "next/image";

type DashboardTemplateProps = {
	children: React.ReactNode;
};

export const DashboardTemplate: React.FC<DashboardTemplateProps> = ({
	children,
}) => {
	const [toggle, setToggle] = useState(false);

	return (
		<div className="w-full h-screen bg-slate-50 flex flex-row flex-nowrap">
			<div
				className={`${
					toggle ? "w-[5.8rem]" : ""
				} sidebar-container bg-white`}
			>
				<div className="p-4">
					<div
						className={`h-[2rem] w-[100%] flex items-center `}
					></div>
					<div className="flex justify-between">
						<div className="w-full h-0.5 bg-gray-200 mt-4 mb-4" />
					</div>

					<SidebarData toggle={toggle} />
					<div
						className="absolute top-[1rem] -right-5 flex justify-center items-center  w-10 h-10 bg-gray-100 rounded-full cursor-pointer"
						onClick={() => {
							setToggle(!toggle);
						}}
					>
						<BiChevronLeft
							className={`${
								toggle ? "rotate-180" : ""
							} text-3xl transition-all duration-300`}
						/>
					</div>
				</div>
			</div>

			<div className="grow">
				<div className="flex flex-col ">
					<header className="h-[4rem] bg-white">
						<div className="w-[100%] h-[4rem] flex flex-row justify-end items-center">
							<Image
								src={Unknown}
								className="h-[3rem] w-auto"
								alt="Picture of the author"
							/>
						</div>
					</header>
					{children}
				</div>
			</div>
		</div>
	);
};
