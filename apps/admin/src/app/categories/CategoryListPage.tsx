import styled from "styled-components";
import Link from "next/link";
import { PageTemplate } from "@/app/components/PageLayout/Templates";
import { TopBanner } from "@/app/components/TopBanner";
import { Typography } from "@/app/components/Elements/Typography";
import { categories } from "@/app/stub/categories";
import { breakpoints } from "@/app/styles/breakpoints";
import { Category } from "@/app/components/Category";

type CategoryItem = {
	id?: string;
	title: string;
	photoUrl: string;
};

type CategoryListProps = {
	categories: CategoryItem[];
};

const StyledContainer = styled.div`
	gap: 12px;
	display: grid;
	padding-bottom: 5rem;
	grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));

	@media ${breakpoints.M} {
		gap: 24px;
		grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
	}

	@media ${breakpoints.XL} {
		grid-template-columns: repeat(auto-fill, minmax(420px, 1fr));
	}
`;

const StyledHeading = styled(Typography)`
	margin-top: 4.5rem;
`;

const StyledBody = styled(Typography)`
	margin-bottom: 2.5rem;
`;

export const CategoryListPage = () => {
	return (
		<PageTemplate>
			<TopBanner title="Categories" />
			<div className="container">
				<StyledHeading>What’s on the menu?</StyledHeading>
				<StyledBody>
					Feeling like having pizza? How about Sushi? Satisfy your
					cravings with a few quick clicks and enjoy the world of
					delivery! Check a great selection of restaurants by
					selecting a category below.
				</StyledBody>
				<CategoryList categories={categories} />
			</div>
		</PageTemplate>
	);
};

export const CategoryList = ({ categories }: CategoryListProps) => (
	<StyledContainer>
		{categories.map((category) => (
			<Link key={category.id} href={`/categories/${category.id}`}>
				<Category {...category} title={category.title} />
			</Link>
		))}
	</StyledContainer>
);
