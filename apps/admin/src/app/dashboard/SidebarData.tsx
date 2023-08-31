import { datas } from "./Data";
const SidebarData = ({ toggle }: { toggle: boolean }) => {
	return (
		<div>
			{datas.map((data) => {
				return (
					<div
						className={`${
							toggle ? "last:w-[2.5rem]" : "last:w-[9.5rem]"
						} sidebar last:absolute left-4 bottom-4`}
						key={data.id}
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
				);
			})}
		</div>
	);
};

export default SidebarData;
