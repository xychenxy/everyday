import styled from "styled-components";

import { CartItem } from "../../app-state/cart";
import { toEuro } from "../../helpers";
import { Button } from "@/app/components/Elements/Button";

import { Select } from "@/app/components/Elements/Select";
import { Sidebar } from "../Sidebar";
import { Typography } from "@/app/components/Elements/Typography";

const FooterContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	justify-content: space-between;
`;

const TotalSection = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 24px;
`;

const Footer = ({ onClick, totalPrice }: any) => (
	<FooterContainer>
		<TotalSection>
			<Typography>Total</Typography>
			<Typography>{toEuro(totalPrice)}</Typography>
		</TotalSection>
		<Button disabled={totalPrice === 0} large onClick={onClick}>
			Checkout
		</Button>
	</FooterContainer>
);

const MenuItemContainer = styled.div`
	display: flex;
	align-items: flex-start;
	> div:first-of-type {
		padding-right: 1rem;
		flex: 0.75;
	}

	> div:last-of-type {
		flex: 0.25;
	}
`;

const ShoppingCartMenuItem = ({ item, onChange }: any) => (
	<MenuItemContainer>
		<div>
			<Typography fontWeight="medium">{item.name}</Typography>
			<Typography>{item.description}</Typography>
			<Typography>{toEuro(item.price * item.quantity)}</Typography>
		</div>
		<Select
			value={item.quantity}
			onChange={onChange}
			options={[...Array(11).keys()]}
		/>
	</MenuItemContainer>
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
		<div style={{ display: "grid", gap: "24px" }}>
			{cartItems.map((item) => (
				<ShoppingCartMenuItem
					key={item.id}
					item={item}
					onChange={(quantity: number) =>
						onItemChange({ ...item, quantity })
					}
				/>
			))}
		</div>
	</Sidebar>
);
