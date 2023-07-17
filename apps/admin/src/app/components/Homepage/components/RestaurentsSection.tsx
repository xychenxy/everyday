import Carousel from "react-multi-carousel";
import { useRouter } from "next/navigation";
import { useFetchRestaurants } from "@/app/api/hooks";
import { PageSection } from "@/app/components/PageSection";
import {
	RestaurantCard,
	RestaurantCardSkeleton,
} from "@/app/components/RestaurantCard";
import { Restaurant } from "@/app/type";
import { isMobile } from "react-device-detect";
import "react-multi-carousel/lib/styles.css";

type RestaurantsSectionComponentProps = {
	restaurants: Restaurant[];
	isLoading?: boolean;
	onRestaurantClick: (id: string) => void;
};

// Presentational component, receives input and outputs events
export const RestaurantsSectionComponent = ({
	restaurants,
	onRestaurantClick,
	isLoading,
}: RestaurantsSectionComponentProps) => {
	return (
		<PageSection title={"Our favorite restaurants"}>
			<Carousel
				draggable={isMobile}
				partialVisible={isMobile}
				responsive={{
					desktop: {
						breakpoint: { max: 5000, min: 1024 },
						items: 3,
						slidesToSlide: 3,
					},
					tablet: {
						breakpoint: { max: 1024, min: 464 },
						items: 2,
						paritialVisibilityGutter: 50,
					},
					mobile: {
						breakpoint: { max: 464, min: 0 },
						items: 1,
						paritialVisibilityGutter: 30,
					},
				}}
				containerClass="carousel-container"
				removeArrowOnDeviceType={["tablet", "mobile"]}
				itemClass="carousel-item"
			>
				{isLoading
					? Array.from(Array(3)).map((_, index) => (
							<RestaurantCardSkeleton key={index} />
					  ))
					: restaurants.map((restaurant: Restaurant) => (
							<RestaurantCard
								key={restaurant.name}
								{...restaurant}
								onClick={() =>
									onRestaurantClick(restaurant.id!)
								}
							/>
					  ))}
			</Carousel>
		</PageSection>
	);
};

// Container component, takes care of logic and passes info down to presentational component
export const RestaurantsSection = () => {
	const router = useRouter();

	const { restaurants, status } = useFetchRestaurants();

	return (
		<RestaurantsSectionComponent
			restaurants={restaurants}
			isLoading={status === "loading"}
			onRestaurantClick={(id: string) =>
				router.push(`/restaurants/${id}`)
			}
		/>
	);
};
