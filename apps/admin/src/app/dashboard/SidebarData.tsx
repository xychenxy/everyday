import { RxDashboard } from "react-icons/rx";
import { FiUser, FiAirplay } from "react-icons/fi";
export const datas = [
	{
		id: 1,
		icon: <RxDashboard />,
		text: "Dashboard",
		href: "/",
	},
	{
		id: 2,
		icon: <FiAirplay />,
		text: "Projects",
		href: "/projects",
	},
	// {
	// 	id: 4,
	// 	icon: <FiUser />,
	// 	text: "About",
	// 	href: "/about",
	// },
	// {
	// 	id: 8,
	// 	icon: <FiLogOut />,
	// 	text: "Logout",
	// },
];

const SidebarData = ({ toggle }: { toggle: boolean }) => {
	return (
		<div>
			{datas.map((data) => {
				return (
					<a href={data.href} key={data.id}>
						<div
							// className={`${
							// 	toggle ? "last:w-[2.5rem]" : "last:w-[9.5rem]"
							// } sidebar last:absolute left-4 bottom-4`}
							className={`${
								toggle ? "last:w-[2.5rem]" : "last:w-[9.5rem]"
							} sidebar left-4 bottom-4`}
						>
							<div className="mr-3 text-[1.2rem] text-brown">
								{data.icon}
							</div>
							<div
								className={`${
									toggle ? "opacity-0 delay-200" : ""
								} text-[0.9rem] text-brown whitespace-pre`}
							>
								{data.text}
							</div>
						</div>
					</a>
				);
			})}
		</div>
	);
};

export default SidebarData;
