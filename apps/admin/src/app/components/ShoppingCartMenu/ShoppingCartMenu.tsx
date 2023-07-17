import { CartItem } from "../../app-state/cart";
import { toAud } from "../../helpers";

import { Sidebar } from "../Sidebar";
import { Text, Button, Box, Badge } from "@/app/styles/components";

const Footer = ({ onClick, totalPrice }: any) => (
	<div>
		<Box
			display={"flex"}
			justifyContent={"space-between"}
			paddingBottom={"normal"}
		>
			<Text>Total</Text>
			<Text>{toAud(totalPrice)}</Text>
		</Box>
		<Button
			$appearance="filled"
			disabled={totalPrice === 0}
			onClick={onClick}
			$width="full"
		>
			Checkout
		</Button>
	</div>
);

const ShoppingCartMenuItem = ({ item, onChange }: any) => (
	<Box
		display={"flex"}
		justifyContent={"space-between"}
		alignItems={"flex-start"}
		paddingBottom={"normal"}
	>
		<div>
			<Text>{item.name}</Text>
			<Text paddingY={"extraTight"}>{item.description}</Text>
			<Text>{toAud(item.price * item.quantity)}</Text>
		</div>
		<Text>
			<Badge>{item.quantity}</Badge>
		</Text>
	</Box>
);

type ShoppingCartMenuProps = {
	isOpen: boolean;
	totalPrice: number;
	onClose: () => void;
	cartItems: CartItem[];
	onGoToCheckoutClick?: () => void;
	onItemChange: (item: any) => void;
};

export const ShoppingCartMenu = ({
	isOpen,
	onClose,
	cartItems,
	totalPrice,
	onItemChange,
	onGoToCheckoutClick,
}: ShoppingCartMenuProps) => (
	<Sidebar
		title="Your order"
		onClose={onClose}
		isOpen={isOpen}
		footer={
			<Footer onClick={onGoToCheckoutClick} totalPrice={totalPrice} />
		}
	>
		{cartItems.map((item) => (
			<ShoppingCartMenuItem
				key={item.id}
				item={item}
				onChange={(quantity: number) =>
					onItemChange({ ...item, quantity })
				}
			/>
		))}
	</Sidebar>
);
