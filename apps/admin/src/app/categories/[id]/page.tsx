"use client";
import Link from "next/link";
import { useRouter, useParams } from "next/navigation";
import { useFetchRestaurantsByCategory } from "../../api/hooks";
import { PageTemplate } from "@/app/components/PageLayout/Templates";
import {
	RestaurantCard,
	RestaurantCardSkeleton,
} from "../../components/RestaurantCard";
import { TopBanner } from "../../components/TopBanner";
import { categories } from "../../stub/categories";
import { Restaurant } from "@/app/type";
import { ErrorBlock } from "../../components/ErrorBlock";
import { Box, Text } from "@/app/styles/components";
import { categoryContainer } from "../page.css";

const CategoryDetailPage = () => {
	const router = useRouter();
	const { id } = useParams();
	const { restaurants, status } = useFetchRestaurantsByCategory(id);
	const category = categories.find((cat) => cat.id === id);

	return (
		<PageTemplate>
			<TopBanner title={category?.title || "Oops!"} />
			<div className="container">
				<Box padding={"extraLoose"}>
					<Text
						display={"inline-block"}
						textDecoration={"underline"}
						paddingRight={"tight"}
					>
						<Link href="/categories">categories</Link>
					</Text>
					/
					<Text display={"inline"} paddingLeft={"tight"}>
						{category?.title.toLowerCase()}
					</Text>
				</Box>
				{status === "success" && restaurants.length <= 0 && (
					<ErrorBlock
						body="It seems that there are no restaurants in this category yet. Try to come back later?"
						title="This is not the food you’re looking for."
						buttonText="See all restaurants"
						onButtonClick={() => {
							router.push("/categories");
						}}
					/>
				)}
				<div className={categoryContainer}>
					{status === "loading"
						? Array.from(Array(3)).map((_, index) => (
								<RestaurantCardSkeleton key={index} />
						  ))
						: restaurants.map(
								(restaurant: Restaurant, index: number) => (
									<RestaurantCard
										key={restaurant.name || index}
										{...restaurant}
										onClick={() =>
											router.push(
												`/restaurants/${restaurant.id}`
											)
										}
									/>
								)
						  )}
				</div>
			</div>
		</PageTemplate>
	);
};

export default CategoryDetailPage;
