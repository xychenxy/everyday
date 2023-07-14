import { Banner } from "./components/Banner";
import { CategoriesSection } from "./components/CategoriesSection";
import { styled } from "styled-components";
import { categories } from "@/app/stub/categories";
import { RestaurantsSection } from "./components/RestaurentsSection";
import { AwardWinningSection } from "./components/AwardWinningSection";

const Spacing = styled.div`
	margin-bottom: 4.5rem;
`;

export const HomePage = () => {
	return (
		<div>
			<Banner />
			<Spacing />
			<RestaurantsSection title="Our favorite restaurants" />
			<Spacing />
			<AwardWinningSection />
			<Spacing />
			<CategoriesSection categories={categories} />
		</div>
	);
};
