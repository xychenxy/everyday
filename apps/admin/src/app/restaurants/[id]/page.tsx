"use client";

import { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import styled, { css } from "styled-components";
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
import { Typography } from "@/app/components/Elements/Typography";
import { Badge } from "@/app/components/Elements/Badge";
import { Review } from "../../components/Review";
import { AnimatedIllustration } from "../../components/AnimatedIllustration";
import { ErrorBlock } from "../../components/ErrorBlock";
import { Spinner } from "@/app/components/Elements/Spinner";

import { FoodItemModal } from "./components/FoodItemModal";
import { FoodSection } from "./components/FooSection";

const DetailSection = styled.div(
	({ theme: { color, spacing } }) => css`
		padding-top: 2rem !important;
		padding-bottom: 2rem !important;
		background: ${color.restaurantDetailBackground};
		.review-text {
			color: ${color.reviewText};
			margin-bottom: ${spacing.m};
		}
	`
);

const MenuSection = styled.div(
	({ theme: { color } }) => css`
		padding-top: 3rem !important;
		padding-bottom: 5rem !important;
		background: ${color.menuSectionBackground};
	`
);

const StyledBadge = styled(Badge)(
	({ theme: { spacing } }) => css`
		margin-right: ${spacing.s};
	`
);

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
			<PageTemplate type="sticky-header">
				<ErrorBlock
					title="Something went wrong!"
					body="Our bad, something went wrong on our side."
					image={<AnimatedIllustration animation="NotFound" />}
					onButtonClick={retryRequest}
					buttonText="Try again"
				/>
			</PageTemplate>
		);
	}

	if (status === "404") {
		return (
			<PageTemplate type="sticky-header">
				<ErrorBlock
					title="We can't find this page"
					body="This page doesn’t exist, keep looking."
					image={<AnimatedIllustration animation="Error" />}
					onButtonClick={() => router.push("/")}
					buttonText="Home"
				/>
			</PageTemplate>
		);
	}

	if (status === "loading") {
		return (
			<PageTemplate type="sticky-header">
				<Spinner />
			</PageTemplate>
		);
	}

	if (!restaurant) {
		return null;
	}

	const { menu, name, rating, specialty, photoUrl, categories } = restaurant;

	return (
		<PageTemplate type="sticky-header">
			<FoodItemModal
				item={selectedItem}
				cartItems={cartItems}
				onClose={closeModal}
				onItemSave={addItemToCart}
				onItemRemove={clearItemFromCart}
			/>
			<TopBanner photoUrl={photoUrl} />
			<DetailSection>
				<div className="container">
					<Typography>{name}</Typography>
					<Typography>Specialties: {specialty}</Typography>
					<Review rating={rating} />
					<div>
						{categories?.map((category) => (
							<StyledBadge key={category} text={category} />
						))}
					</div>
				</div>
			</DetailSection>
			<MenuSection>
				<div className="container">
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
				</div>
			</MenuSection>
		</PageTemplate>
	);
};

export default RestaurantDetailPage;
