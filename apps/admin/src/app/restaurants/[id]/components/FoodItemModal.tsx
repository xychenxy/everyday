import { useState, useCallback, useEffect } from "react";
import styled, { css } from "styled-components";

import { CartItem } from "@/app/app-state/cart";
import { toEuro } from "@/app/helpers";
import { breakpoints } from "@/app/styles/breakpoints";
import { Button } from "@/app/components/Elements/Button";
import { Typography } from "@/app/components/Elements/Typography";
import { Modal } from "@/app/components/Elements/Modal";

const StyledBody = styled(Typography)`
	margin: 0;
	margin-top: 8px;
`;

const StyledButton = styled(Button)`
	flex: 1;
`;

const ButtonsContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	flex: 0.45;
	margin-bottom: 1.5rem;
	margin-right: 0;
	@media ${breakpoints.M} {
		margin-bottom: 0;
		margin-right: 1.5rem;
		justify-content: space-between;
	}
`;

const TopContainer = styled.div(
	({ theme: { color } }) => css`
		padding: 2.5rem 1.5rem;
		background: ${color.overlayHeader};
		border-radius: 16px 16px 0px 0px;
	`
);

const BottomContainer = styled.div`
	padding: 1.5rem;
	display: flex;
	flex-direction: column;
	@media ${breakpoints.M} {
		flex-direction: row;
	}
`;

type FoodItemModalProps = {
	item?: CartItem;
	cartItems: CartItem[];
	onClose: () => void;
	onItemSave: (item: CartItem) => void;
	onItemRemove: (item: CartItem) => void;
};

export const FoodItemModal = ({
	item,
	cartItems,
	onClose,
	onItemSave,
	onItemRemove,
}: FoodItemModalProps) => {
	const [quantity, setQuantity] = useState(0);

	const saveItem = useCallback(() => {
		if (item) {
			if (quantity === 0) {
				onItemRemove(item);
			} else {
				onItemSave({ ...item, quantity });
			}
		}

		onClose();
	}, [quantity, onClose, onItemRemove, item, onItemSave]);

	useEffect(() => {
		const cartItem = item && cartItems.find((c) => c.id === item.id);
		setQuantity(cartItem?.quantity || 1);
		return () => setQuantity(0);
	}, [cartItems, item]);

	return (
		<Modal isOpen={!!item} onClose={onClose}>
			{item && (
				<div>
					<TopContainer>
						<Typography>{item.name}</Typography>
						<StyledBody>{item.description}</StyledBody>
					</TopContainer>
					<BottomContainer>
						<ButtonsContainer>
							<Button
								aria-label="decrease quantity by one"
								round
								clear
								icon="minus"
								onClick={() => setQuantity(quantity - 1)}
								disabled={quantity <= 1}
							/>
							<Typography>{quantity}</Typography>
							<Button
								aria-label="increase quantity by one"
								round
								clear
								icon="plus"
								onClick={() => setQuantity(quantity + 1)}
								disabled={quantity >= 10}
							/>
						</ButtonsContainer>
						<StyledButton aria-label="confirm" onClick={saveItem}>
							add for {toEuro(item.price * quantity)}
						</StyledButton>
					</BottomContainer>
				</div>
			)}
		</Modal>
	);
};
