import * as React from "react";
import { Box, Button, Text } from "@/app/styles/components";

type ErrorBlockProps = {
	title: string;
	body: string;
	buttonText: string;
	onButtonClick: () => void;
};

export const ErrorBlock = ({
	title,
	body,
	buttonText,
	onButtonClick,
}: ErrorBlockProps) => (
	<Box
		display={"flex"}
		alignItems={"center"}
		flexDirection={"column"}
		paddingY={"extraLoose"}
	>
		<Text fontSize="heading2">{title}</Text>
		<Text padding={"extraLoose"}>{body}</Text>
		<Button $appearance="filled" onClick={onButtonClick}>
			{buttonText}
		</Button>
	</Box>
);
