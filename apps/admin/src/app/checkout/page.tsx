"use client";

import styled, { css } from "styled-components";
import { useAppSelector } from "@/app/app-state";
import { OrderSummary } from "@/app/components/ShoppingCart";
import { selectCartItems } from "@/app/app-state/cart";
import { breakpoints } from "@/app/styles/breakpoints";
import { Typography } from "@/app/components/Elements/Typography";
import { PageTemplate } from "@/app/components/PageLayout/Templates";

import { MultiStepForm } from "./components/MultiStepForm";

const OrderDetailsContainer = styled.div`
	width: 100%;
	margin-bottom: 4rem;

	@media ${breakpoints.M} {
		width: 420px;
	}
`;

const TopContainer = styled.div(
	({ theme: { color, spacing } }) => css`
		padding-top: ${spacing.xl};
		margin-bottom: ${spacing.s};
		min-height: 260px;
		background: ${color.checkoutTopBackground};

		@media ${breakpoints.M} {
			padding-top: ${spacing.xxl};
			min-height: 300px;
		}
	`
);

const BottomContainer = styled.div`
	display: flex;
	margin-top: -12rem !important;
	justify-content: center;
	flex-direction: column-reverse;
	align-items: flex-start;

	@media ${breakpoints.S} {
		margin-top: -10rem !important;
		flex-direction: row;
	}
`;

const StyledHeading = styled(Typography)`
	margin: 0 auto;
`;

const ContentContainer = styled.div(
	({ theme: { color, spacing } }) => css`
		min-height: 100vh;
		padding-bottom: ${spacing.xxl};
		background: ${color.checkoutBottomBackground};
	`
);

const CheckoutPage = () => {
	const cartItems = useAppSelector(selectCartItems);

	return (
		<PageTemplate>
			<ContentContainer>
				<TopContainer>
					<StyledHeading>Checkout</StyledHeading>
				</TopContainer>
				<BottomContainer className="container">
					<MultiStepForm />
					<OrderDetailsContainer>
						<OrderSummary cartItems={cartItems} />
					</OrderDetailsContainer>
				</BottomContainer>
			</ContentContainer>
		</PageTemplate>
	);
};

export default CheckoutPage;
