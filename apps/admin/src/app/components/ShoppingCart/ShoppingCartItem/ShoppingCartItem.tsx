import { Text } from "@/app/styles/components";
import { CartItem } from "../../../app-state/cart";
import { toAud } from "../../../helpers";

import { container } from "./ShoppingCartItem.css";

type ShoppingCartItemProps = {
	item: CartItem;
};

export const ShoppingCartItem = ({ item }: ShoppingCartItemProps) => {
	const { name, price, quantity } = item;
	return (
		<div className={container}>
			<Text>{quantity}</Text>
			<Text>{name}</Text>
			<Text>{toAud(quantity * price)}</Text>
		</div>
	);
};
