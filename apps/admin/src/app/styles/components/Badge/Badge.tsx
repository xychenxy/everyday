import React from "react";
import { badgeRecipe, TextVariants } from "./Badge.css";
import Box from "../Box/Box";

type Props = {
	children: React.ReactNode;
} & TextVariants &
	React.ComponentProps<typeof Box>;

const Badge = ({ kind, children, ...props }: Props) => {
	return (
		<Box as="span" {...props} className={badgeRecipe({ kind })}>
			{children}
		</Box>
	);
};

export default Badge;
