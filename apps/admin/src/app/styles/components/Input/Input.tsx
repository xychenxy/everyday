import React from "react";
import { inputRecipe, InputVariants } from "./Input.css";
import Box from "../Box/Box";
import Text from "../Text/Text";

type Props = {
	children?: React.ReactNode;
	label?: string;
} & InputVariants &
	React.ComponentProps<typeof Box>;

const Input = ({ label, $width, children, ...props }: Props) => {
	return (
		<Box display={"flex"} flexDirection={"column"} paddingBottom={"snug"}>
			{label && (
				<Text paddingLeft={"none"} paddingBottom={"tight"}>
					{label}
				</Text>
			)}
			<Box
				as="input"
				className={inputRecipe({
					$width,
				})}
				{...props}
			>
				{children}
			</Box>
		</Box>
	);
};

export default Input;
