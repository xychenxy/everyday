import React from "react";
import { stackRecipe, TextVariants } from "./Stack.css";
import Box from "../Box/Box";

type Props = {
	children: React.ReactNode;
} & TextVariants &
	React.ComponentProps<typeof Box>;

const Stack = ({
	$orientation,
	$alignment,
	$expand,
	$gap,
	$spacing,
	children,
	...props
}: Props) => {
	return (
		<Box
			className={stackRecipe({
				$orientation,
				$alignment,
				$expand,
				$gap,
				$spacing,
			})}
			{...props}
		>
			{children}
		</Box>
	);
};

export default Stack;
