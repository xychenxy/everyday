"use client";

import { useAppSelector } from "@/app/app-state";
import { OrderSummary } from "@/app/components/ShoppingCart";
import { selectCartItems } from "@/app/app-state/cart";
import { PageTemplate } from "@/app/components/PageLayout/Templates";
import { Text } from "@/app/styles/components";
import { MultiStepForm } from "./components/MultiStepForm";
import {
	container,
	orderDetailsContainer,
	topContainer,
	bottomContainer,
} from "./page.css";

const CheckoutPage = () => {
	const cartItems = useAppSelector(selectCartItems);

	return (
		<PageTemplate>
			<div className={container}>
				<div className={topContainer}>
					<Text kind="heading2">Checkout</Text>
				</div>
				<div className={bottomContainer}>
					<MultiStepForm />
					<div className={orderDetailsContainer}>
						<OrderSummary cartItems={cartItems} />
					</div>
				</div>
			</div>
		</PageTemplate>
	);
};

export default CheckoutPage;
