import { memo } from "react";
import type { CartItem } from "@/app/app-state/cart";
import type { FoodMenuItem } from "@/app/type";
import { toAud } from "@/app/helpers";
import { Box, Text } from "@/app/styles/components";
import {
	container,
	cardContainer,
	quantityContainer,
} from "../../FoodSection.css";

type FoodSectionProps = {
	items: FoodMenuItem[];
	title: string;
	cartItems: CartItem[];
	onItemClick: (item: CartItem) => void;
};

type FoodItemProps = {
	quantity?: number;
	name: string;
	price: number;
	description?: string;
	onClick: () => void;
};

export const FoodSection = memo(
	({ title, cartItems, items, onItemClick }: FoodSectionProps) => {
		return (
			<>
				<Text kind="heading2" paddingBottom={"normal"}>
					{title}
				</Text>
				<Box className={container}>
					{items.map((item: FoodMenuItem) => {
						const cartItem = cartItems.find(
							(c) => c.id === item.id
						);
						const quantity = cartItem?.quantity || 0;

						return (
							<FoodItem
								key={item.name}
								name={item.name}
								price={item.price}
								description={item.description}
								quantity={quantity}
								onClick={() => onItemClick(item as CartItem)}
							/>
						);
					})}
				</Box>
			</>
		);
	}
);
FoodSection.displayName = "FoodSection";

export const FoodItem = memo(
	({ quantity = 0, name, price, description, onClick }: FoodItemProps) => (
		<div onClick={onClick} className={cardContainer}>
			<Box
				display={"flex"}
				justifyContent={"space-between"}
				alignItems={"flex-start"}
			>
				<div>
					<Text>{name}</Text>
					<Text kind="label1" paddingY={"normal"}>
						{description}
					</Text>
					<Text>{toAud(price)}</Text>
				</div>
				{quantity > 0 && (
					<div
						aria-label="food quantity"
						className={quantityContainer}
					>
						{quantity}
					</div>
				)}
			</Box>
		</div>
	)
);
FoodItem.displayName = "FoodItem";
