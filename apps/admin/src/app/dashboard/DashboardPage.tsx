import { useState } from "react";
import { BiChevronLeft } from "react-icons/bi";
import UserProfile from "./UserProfile";
import SidebarData from "./SidebarData";
import { Content } from "./Content";

export const DashboardSidebar: React.FC = () => {
	const [toggle, setToggle] = useState(false);

	return (
		<div className="w-full h-screen bg-slate-50 flex flex-row flex-nowrap">
			<div
				className={`${
					toggle ? "w-[5.8rem]" : ""
				} sidebar-container bg-white`}
			>
				<div className="p-4">
					<UserProfile />
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
				<Content />
			</div>
		</div>
	);
};
