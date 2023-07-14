"use client";
import styled, { css } from "styled-components";

import { LadiesSushi } from "@/app/assets/images";
import { useAppSelector } from "../app-state";
import { selectOrderItems } from "../app-state/order";
import { PageTemplate } from "@/app/components/PageLayout/Templates";
import { TopBanner } from "@/app/components/TopBanner";
import { OrderSummary } from "@/app/components/ShoppingCart";
import { breakpoints } from "@/app/styles/breakpoints";
import { Typography } from "@/app/components/Elements/Typography";

const Image = styled.div<{ src: string }>(
	({ src }) => css`
		background: url(${src});
		width: 100%;
		height: 230px;
		background-repeat: no-repeat;
		background-position: center bottom;
		background-size: 100%;
		position: relative;
		margin: 0 auto;
		bottom: 0;
		right: 0;
		left: 0;
		background-size: 600px;
		display: flex;
		justify-content: center;
		@media ${breakpoints.S} {
			height: 368px;
			width: 700px;
			background-size: contain;
		}
	`
);

const StyledHeading = styled(Typography)`
	margin-bottom: 1.5rem;
`;

const Container = styled.div(
	({ theme: { color } }) => css`
		background: ${color.menuSectionBackground};
		min-height: 100vh;
	`
);

const OrderSummaryContainer = styled.div`
	max-width: 400px;
	margin: 0 auto;
	margin-top: 2.5rem;
	margin-bottom: 1.5rem;
	text-align: left;
`;

const SuccessPage = () => {
	const orderItems = useAppSelector(selectOrderItems);
	return (
		<PageTemplate type="basic">
			<Container>
				<TopBanner title="Order confirmed!" />
				<OrderSummaryContainer>
					<Typography>Estimated delivery</Typography>
					<StyledHeading>13:23 today</StyledHeading>
					<OrderSummary cartItems={orderItems} />
				</OrderSummaryContainer>
				<LadiesSushi />
			</Container>
		</PageTemplate>
	);
};
export default SuccessPage;
