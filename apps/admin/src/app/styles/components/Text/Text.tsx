import React from "react";
import { textRecipe, TextVariants } from "./Text.css";
import Box from "../Box/Box";

type Props = {
	children: React.ReactNode;
} & TextVariants &
	React.ComponentProps<typeof Box>;

const Text = ({ kind, children, ...props }: Props) => {
	return (
		<Box as="p" {...props} className={textRecipe({ kind })}>
			{children}
		</Box>
	);
};

export default Text;
