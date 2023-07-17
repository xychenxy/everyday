import Carousel from "react-multi-carousel";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { PageSection } from "@/app/components/PageSection";
import { Category, CategoryProps } from "@/app/components/Category";
import "react-multi-carousel/lib/styles.css";
import { isMobile } from "react-device-detect";

type CategoriesSectionProps = {
	categories: CategoryProps[];
};

export const CategoriesSection = ({ categories }: CategoriesSectionProps) => {
	const router = useRouter();

	return (
		<PageSection
			title="Categories"
			topButtonLabel="View all categories"
			onTopButtonClick={() => router.push("/categories")}
		>
			<Carousel
				draggable={isMobile}
				partialVisible={isMobile}
				responsive={{
					desktop: {
						breakpoint: { max: 5000, min: 1024 },
						items: 6,
						slidesToSlide: 3,
						paritialVisibilityGutter: 80,
					},
					tablet: {
						breakpoint: { max: 1024, min: 464 },
						items: 3,
						paritialVisibilityGutter: 50,
					},
					mobile: {
						breakpoint: { max: 464, min: 0 },
						items: 2,
						slidesToSlide: 3,
						paritialVisibilityGutter: 10,
					},
				}}
				containerClass="carousel-container"
				removeArrowOnDeviceType={["tablet", "mobile"]}
				itemClass={isMobile ? "carousel-item" : ""}
			>
				{categories.map((category) => (
					<Link key={category.id} href={`/categories/${category.id}`}>
						<Category round {...category} />
					</Link>
				))}
			</Carousel>
		</PageSection>
	);
};
