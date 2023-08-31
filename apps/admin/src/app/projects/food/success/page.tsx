"use client";
import { LadiesSushi } from "@/app/assets/images";
import { useAppSelector } from "../../../app-state";
import { selectOrderItems } from "../../../app-state/order";
import { PageTemplate } from "@/app/components/PageLayout/Templates";
import { TopBanner } from "@/app/components/TopBanner";
import { OrderSummary } from "@/app/components/ShoppingCart";
import { Text } from "@/app/styles/components";
import { container, orderSummaryContainer } from "./page.css";

const SuccessPage = () => {
	const orderItems = useAppSelector(selectOrderItems);
	return (
		<PageTemplate>
			<div className={container}>
				<TopBanner title="Order confirmed!" />
				<div className={orderSummaryContainer}>
					<Text>Estimated delivery</Text>
					<Text paddingY={"snug"}>13:23 today</Text>
					<OrderSummary cartItems={orderItems} />
				</div>
				<LadiesSushi />
			</div>
		</PageTemplate>
	);
};
export default SuccessPage;
