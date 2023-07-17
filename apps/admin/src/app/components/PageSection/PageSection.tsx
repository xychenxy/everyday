import * as React from "react";
import { Text, Stack, Button, Box } from "@/app/styles/components";
import { container } from "./PageSection.css";

type PageSectionProps = {
	title: string;
	topButtonLabel?: string;
	onTopButtonClick?: () => void;
	children: React.ReactNode;
};

export const PageSection: React.FC<PageSectionProps> = ({
	title,
	topButtonLabel,
	onTopButtonClick,
	children,
}) => (
	<Box className={container}>
		<Stack
			$orientation="horizontal"
			$alignment="center"
			$spacing="spaceBetween"
			paddingBottom={"loose"}
		>
			<Text kind="heading2">{title}</Text>
			{topButtonLabel && (
				<Button onClick={onTopButtonClick}>{topButtonLabel}</Button>
			)}
		</Stack>
		{children}
	</Box>
);
