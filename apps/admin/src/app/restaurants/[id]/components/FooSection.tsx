import styled, { css } from "styled-components";
import { memo } from "react";
import { Typography } from "@/app/components/Elements/Typography";
import { breakpoints } from "@/app/styles/breakpoints";
import type { CartItem } from "@/app/app-state/cart";
import type { FoodMenuItem } from "@/app/type";
import { toEuro } from "@/app/helpers";

type FoodSectionProps = {
	items: FoodMenuItem[];
	title: string;
	cartItems: CartItem[];
	onItemClick: (item: CartItem) => void;
};

const StyledHeading = styled(Typography)`
	margin-bottom: 1.5rem;
`;

const StyledContainer = styled.div`
	grid-template-columns: repeat(1, 1fr);
	gap: 24px;
	display: grid;
	padding-bottom: 3rem;

	@media ${breakpoints.M} {
		grid-template-columns: repeat(2, 1fr);
	}

	@media ${breakpoints.L} {
		grid-template-columns: repeat(3, 1fr);
	}
`;

const Container = styled.div(
	({ theme: { boxShadow, color, borderRadius } }) => css`
		padding: 1.5rem;
		border-radius: ${borderRadius.xs};
		transition: box-shadow 0.1s ease-in;
		position: relative;
		background: ${color.foodItemBackground};

		&:hover {
			cursor: pointer;
			box-shadow: ${boxShadow.card};
		}
	`
);

const Quantity = styled(Typography)(
	({ theme: { color, borderRadius } }) => css`
		padding: 0.25rem;
		width: 35px;
		height: 35px;
		border-radius: ${borderRadius.xs};
		display: flex;
		align-items: center;
		justify-content: center;
		background: ${color.black};
		color: ${color.white};
		position: absolute;
		top: 0;
		right: 0;
	`
);

const Description = styled(Typography)(
	({ theme: { color } }) => `
	margin: 0;
	color: ${color.badgeText};
	margin-top: 0.5rem;
`
);

const Price = styled(Typography)`
	margin: 0;
	margin-top: 1rem;
`;

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
			<div>
				<StyledHeading>{title}</StyledHeading>
				<StyledContainer>
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
				</StyledContainer>
			</div>
		);
	}
);
FoodSection.displayName = "FoodSection";

export const FoodItem = memo(
	({ quantity = 0, name, price, description, onClick }: FoodItemProps) => (
		<Container onClick={onClick}>
			<div>
				{quantity > 0 && (
					<Quantity aria-label="food quantity" fontWeight="medium">
						{quantity}
					</Quantity>
				)}
				<Typography>{name}</Typography>
				<Description>{description}</Description>
				<Price>{toEuro(price)}</Price>
			</div>
		</Container>
	)
);
FoodItem.displayName = "FoodItem";
