import React from "react";
import { buttonRecipe, TextVariants } from "./Button.css";
import Box from "../Box/Box";

type Props = {
	children?: React.ReactNode;
} & TextVariants &
	React.ComponentProps<typeof Box>;

const Button = ({ $appearance, $size, $width, children, ...props }: Props) => {
	return (
		<Box
			as="button"
			className={buttonRecipe({
				$appearance,
				$size,
				$width,
			})}
			{...props}
		>
			{children}
		</Box>
	);
};

export default Button;
