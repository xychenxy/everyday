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
import { ShoppingCartMenu } from "../../ShoppingCartMenu";
import { Button } from "@/app/styles/components";
import { toAud } from "@/app/helpers";
import { Text } from "@/app/styles/components";
import { Icon } from "@/app/styles/components/Icon";
import { Lemon, ShoppingCart } from "@/app/styles/components/Icon/SVG";
import {
	headerContainer,
	linkContainer,
	optionsContainer,
	navigationItems,
	content,
} from "./Header.css";

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
	totalPrice = 0,
	cartItems = [],
	toggleCartVisibility = () => {},
	goToCheckout = () => {},
	saveItem = () => {},
}: HeaderComponentProps) => (
	<div className={headerContainer}>
		<div className={content}>
			<Link
				href="/"
				aria-label="go to home page"
				className={linkContainer}
			>
				<Icon IconSvg={Lemon} size="40px" />
			</Link>

			{!logoOnly && (
				<>
					<div className={optionsContainer}>
						<span className={navigationItems}>
							<Link href="/" tabIndex={-1}>
								<Button $appearance="outline">Home</Button>
							</Link>
							<Link href="/categories" tabIndex={-1}>
								<Button $appearance="outline">
									All restaurants
								</Button>
							</Link>
						</span>
						<Button
							$appearance="outline"
							aria-label="food cart"
							onClick={toggleCartVisibility}
						>
							<Icon IconSvg={ShoppingCart} size="24px" />
							{totalPrice > 0 && (
								<>
									<Text kind="label2" paddingX={"extraTight"}>
										Order
									</Text>
									<Text kind="label2">
										{toAud(totalPrice)}
									</Text>
								</>
							)}
						</Button>
					</div>
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
		</div>
	</div>
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
