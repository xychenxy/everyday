import { Banner } from "./components/Banner";
import { CategoriesSection } from "./components/CategoriesSection";
import { categories } from "@/app/stub/categories";
import { RestaurantsSection } from "./components/RestaurentsSection";
import { AwardWinningSection } from "./components/AwardWinningSection";
import Box from "../../styles/components/Box/Box";
import { PageTemplate } from "@/app/components/PageLayout/Templates";

export const HomePage = () => {
	return (
		<PageTemplate>
			<Banner />
			<Box paddingBottom={"extraLoose"} />
			<RestaurantsSection />
			<Box paddingBottom={"extraLoose"} />
			<AwardWinningSection />
			<Box paddingBottom={"extraLoose"} />
			<CategoriesSection categories={categories} />
		</PageTemplate>
	);
};
