import { useState, useCallback, useEffect } from "react";
import { CartItem } from "@/app/app-state/cart";
import { toAud } from "@/app/helpers";
import { Modal } from "@/app/components/Modal";
import { Box, Text, Button } from "@/app/styles/components";
import { actionContainer } from "../../FoodItemModal.css";

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
					<Box paddingX={"extraLoose"}>
						<Text kind="heading2" paddingBottom={"normal"}>
							{item.name}
						</Text>
						<Text kind="label1">{item.description}</Text>
					</Box>
					<Box padding={"extraLoose"} className={actionContainer}>
						<Box
							display={"flex"}
							justifyContent={"stretch"}
							alignItems={"center"}
						>
							<Button
								aria-label="decrease quantity by one"
								onClick={() => setQuantity(quantity - 1)}
								disabled={quantity <= 1}
							>
								-
							</Button>
							<Text>{quantity}</Text>
							<Button
								aria-label="increase quantity by one"
								onClick={() => setQuantity(quantity + 1)}
								disabled={quantity >= 10}
							>
								+
							</Button>
						</Box>
						<Button
							aria-label="confirm"
							onClick={saveItem}
							$appearance="filled"
						>
							add for {toAud(item.price * quantity)}
						</Button>
					</Box>
				</div>
			)}
		</Modal>
	);
};
