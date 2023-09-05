import { Content } from "./Content";
import { DashboardTemplate } from "@/app/components/PageLayout/Templates/DashboardTemplate";

export const DashboardSidebar: React.FC = () => {
	return (
		<DashboardTemplate>
			<Content />
		</DashboardTemplate>
	);
};
