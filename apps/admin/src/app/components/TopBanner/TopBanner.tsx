import { Box, Text } from "@/app/styles/components";
import { container } from "./TopBanner.css";

type TopBannerProps = {
	title?: string;
};

export const TopBanner = ({ title }: TopBannerProps) => (
	<Box className={container}>
		{title && <Text kind="heading2">{title}</Text>}
	</Box>
);
