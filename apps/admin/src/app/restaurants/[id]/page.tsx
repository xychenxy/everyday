"use client";

import { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { PageTemplate } from "@/app/components/PageLayout/Templates";
import { useFetchRestaurant } from "../../api/hooks";
import { useAppDispatch, useAppSelector } from "../../app-state";
import {
	CartItem,
	clearItemAction,
	saveItemAction,
	selectCartItems,
} from "../../app-state/cart";
import { TopBanner } from "../../components/TopBanner";
import { Review } from "../../components/Review";
import { ErrorBlock } from "../../components/ErrorBlock";
import { detailContainer, menucontainer } from "../page.css";
import { Box, Text, Badge } from "@/app/styles/components";
import { FoodItemModal } from "./components/FoodItemModal";
import { FoodSection } from "./components/FooSection";

const RestaurantDetailPage = () => {
	const router = useRouter();
	const { id } = useParams();
	const { restaurant, status, retryRequest } = useFetchRestaurant(id);

	const [selectedItem, setSelectedItem] = useState<CartItem>();
	const closeModal = () => setSelectedItem(undefined);

	const cartItems = useAppSelector(selectCartItems);
	const dispatch = useAppDispatch();
	const addItemToCart = (item: CartItem) => dispatch(saveItemAction(item));
	const clearItemFromCart = (item: CartItem) =>
		dispatch(clearItemAction(item));

	if (status === "500") {
		return (
			<PageTemplate>
				<ErrorBlock
					title="Something went wrong!"
					body="Our bad, something went wrong on our side."
					onButtonClick={retryRequest}
					buttonText="Try again"
				/>
			</PageTemplate>
		);
	}

	if (status === "404") {
		return (
			<PageTemplate>
				<ErrorBlock
					title="We can't find this page"
					body="This page doesn’t exist, keep looking."
					onButtonClick={() => router.push("/")}
					buttonText="Home"
				/>
			</PageTemplate>
		);
	}

	if (status === "loading") {
		return <PageTemplate>loading</PageTemplate>;
	}

	if (!restaurant) {
		return null;
	}

	const { menu, name, rating, specialty, categories } = restaurant;

	return (
		<PageTemplate>
			<FoodItemModal
				item={selectedItem}
				cartItems={cartItems}
				onClose={closeModal}
				onItemSave={addItemToCart}
				onItemRemove={clearItemFromCart}
			/>
			<TopBanner title={name} />
			<Box className={detailContainer}>
				<Text kind="heading2" paddingBottom={"normal"}>
					{name}
				</Text>
				<Text paddingBottom={"snug"}>Specialties: {specialty}</Text>
				<Review rating={rating} />
				<Box display={"flex"} gap={"tight"} paddingTop={"snug"}>
					{categories?.map((category) => (
						<Badge key={category}>{category}</Badge>
					))}
				</Box>
			</Box>
			<Box className={menucontainer}>
				{menu.food && (
					<FoodSection
						title="To eat"
						items={menu.food}
						cartItems={cartItems}
						onItemClick={setSelectedItem}
					/>
				)}
				{menu.dessert && (
					<FoodSection
						title="Dessert"
						items={menu.dessert}
						cartItems={cartItems}
						onItemClick={setSelectedItem}
					/>
				)}
				{menu.drinks && (
					<FoodSection
						title="To drink"
						items={menu.drinks}
						cartItems={cartItems}
						onItemClick={setSelectedItem}
					/>
				)}
			</Box>
		</PageTemplate>
	);
};

export default RestaurantDetailPage;
