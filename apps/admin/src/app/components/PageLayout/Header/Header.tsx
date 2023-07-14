import styled, { css } from "styled-components";
import useDarkMode from "use-dark-mode";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/app/app-state";
import {
	CartItem,
	saveItemAction,
	selectCartItems,
	selectCartTotal,
	selectCartVisibility,
	toggleVisibilityAction,
} from "@/app/app-state/cart";
import { breakpoints } from "../../../styles/breakpoints";
import { ShoppingCartMenu } from "../../ShoppingCartMenu";
import { Button } from "@/app/components/Elements/Button";
import { toEuro } from "@/app/helpers";
import { Typography } from "@/app/components/Elements/Typography";
import { Icon } from "@/app/components/Elements/Icon";
import { Lemon, ShoppingCart } from "@/app/components/Elements/Icon/SVG";

export const HeaderContainer = styled.div(
	({ theme: { color } }) => css`
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 56px;
		border-bottom: 1px solid ${color.headerBorder};
		top: 0;
		left: 0;
		position: "sticky";
		background: ${color.headerBackground};
		z-index: 2;
		width: 100%;
		padding: 0 1.5rem;

		@media ${breakpoints.S} {
			padding: 0 4rem;
		}

		@media ${breakpoints.M} {
			position: relative;
			height: 72px;
		}
	`
);

export const LogoContainer = styled(Link)`
	padding-left: 1rem;
`;

export const OptionsContainer = styled.div`
	width: 50%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-end;

	.navigation-items {
		display: none;
	}

	a {
		margin-right: 0.5rem;
	}

	@media ${breakpoints.M} {
		.navigation-items {
			display: contents;
		}
		width: 80%;
	}
`;

export const CartText = styled(Typography)(
	({ theme: { color } }) => css`
		display: none;
		@media ${breakpoints.M} {
			display: inline-block;
			color: ${color.cartButtonText};
			margin-right: 0.25rem;
		}
	`
);

export const CartTotal = styled(Typography)(
	({ theme: { color } }) => css`
		display: inline-block;
		color: ${color.buttonText};
	`
);

const ThemeToggle = () => {
	const darkMode = useDarkMode(false);
	return (
		<Button
			round
			clear
			aria-label={`turn on ${darkMode.value ? "light" : "dark"} mode`}
			icon={darkMode.value ? "moon" : "sun"}
			onClick={darkMode.toggle}
		/>
	);
};

const StyleButton = styled(Button)`
	border: 1px solid black;
`;

type HeaderComponentProps = {
	isCartVisible?: boolean;
	cartItems?: CartItem[];
	totalPrice?: number;
	logoOnly?: boolean;
	sticky?: boolean;
	toggleCartVisibility?: () => void;
	goToCheckout?: () => void;
	saveItem?: (item: CartItem) => void;
};

export const HeaderComponent = ({
	isCartVisible = false,
	logoOnly = false,
	sticky = false,
	totalPrice = 0,
	cartItems = [],
	toggleCartVisibility = () => {},
	goToCheckout = () => {},
	saveItem = () => {},
}: HeaderComponentProps) => (
	<HeaderContainer data-testid="header">
		<LogoContainer href="/" aria-label="go to home page">
			<Icon IconSvg={Lemon} size="40px" />
		</LogoContainer>
		{!logoOnly && (
			<>
				<OptionsContainer>
					<span className="navigation-items">
						<ThemeToggle />
						<Link href="/" tabIndex={-1}>
							<Button clear>Home</Button>
						</Link>
						<Link href="/categories" tabIndex={-1}>
							<Button clear>All restaurants</Button>
						</Link>
					</span>
					<StyleButton
						clear
						aria-label="food cart"
						onClick={toggleCartVisibility}
					>
						<Icon IconSvg={ShoppingCart} size="24px" />

						{totalPrice > 0 && (
							<>
								<CartText>Order</CartText>
								<CartTotal>{toEuro(totalPrice)}</CartTotal>
							</>
						)}
					</StyleButton>
				</OptionsContainer>
				<ShoppingCartMenu
					isOpen={isCartVisible}
					onClose={toggleCartVisibility}
					onGoToCheckoutClick={goToCheckout}
					cartItems={cartItems}
					totalPrice={totalPrice}
					onItemChange={saveItem}
				/>
			</>
		)}
	</HeaderContainer>
);

export const Header = ({ sticky }: { sticky?: boolean }) => {
	const isCartVisible = useAppSelector(selectCartVisibility);
	const cartItems = useAppSelector(selectCartItems);
	const totalPrice = useAppSelector(selectCartTotal);
	const dispatch = useAppDispatch();
	const router = useRouter();

	const toggleCartVisibility = () => dispatch(toggleVisibilityAction());
	const saveItem = (item: CartItem) => dispatch(saveItemAction(item));

	const goToCheckout = () => {
		toggleCartVisibility();
		router.push("/checkout");
	};

	return (
		<HeaderComponent
			sticky={sticky}
			goToCheckout={goToCheckout}
			cartItems={cartItems}
			isCartVisible={isCartVisible}
			toggleCartVisibility={toggleCartVisibility}
			totalPrice={totalPrice}
			saveItem={saveItem}
		/>
	);
};
