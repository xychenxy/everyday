import { useMemo } from "react";

import { ShoppingCartItem } from "../ShoppingCartItem/ShoppingCartItem";
import { CartItem } from "../../../app-state/cart";
import { toAud } from "../../../helpers";

import {
	buttomContainer,
	cartItemsContainer,
	container,
} from "./OrderSummary.css";
import { Box, Text } from "@/app/styles/components";

type OrderSummaryProps = {
	cartItems: CartItem[];
};

export const OrderSummary = ({ cartItems }: OrderSummaryProps) => {
	const totalPrice = useMemo(
		() =>
			cartItems
				.map((item) => item.quantity * item.price)
				.reduce((acc, next) => acc + next, 0),
		[cartItems]
	);
	return (
		<div className={container}>
			<Box
				display={"flex"}
				justifyContent={"center"}
				alignItems={"center"}
			>
				<Text padding={"normal"} kind="heading2">
					Your order
				</Text>
			</Box>
			<div className={cartItemsContainer}>
				{cartItems.length ? (
					cartItems.map((item) => (
						<ShoppingCartItem key={item.id} item={item} />
					))
				) : (
					<Box
						display={"flex"}
						justifyContent={"center"}
						alignItems={"center"}
					>
						<Text>Your cart is empty.</Text>{" "}
					</Box>
				)}
			</div>
			<div className={buttomContainer}>
				<Text>Total</Text>
				<Text>{toAud(totalPrice)}</Text>
			</div>
		</div>
	);
};
