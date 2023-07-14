import { useMemo } from "react";

import { ShoppingCartItem } from "../ShoppingCartItem/ShoppingCartItem";
import { CartItem } from "../../../app-state/cart";
import { Typography } from "@/app/components/Elements/Typography";
import { toEuro } from "../../../helpers";

import {
	OrderSummaryContainer,
	BottomContainer,
	CartItemsContainer,
	StyledHeading,
} from "./OrderSummary.styles";

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
		<>
			<OrderSummaryContainer>
				<StyledHeading fontSize="heading2" withMargin>
					Your order
				</StyledHeading>
				<CartItemsContainer>
					{cartItems.length ? (
						cartItems.map((item) => (
							<ShoppingCartItem key={item.id} item={item} />
						))
					) : (
						<Typography>Your cart is empty.</Typography>
					)}
				</CartItemsContainer>
				<BottomContainer>
					<Typography>Total</Typography>
					<StyledHeading fontSize="heading2">
						{toEuro(totalPrice)}
					</StyledHeading>
				</BottomContainer>
			</OrderSummaryContainer>
		</>
	);
};
