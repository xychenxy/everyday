import { style } from "@vanilla-extract/css";
import { vars } from "@/app/styles/theme/theme.css";

export const container = style({
	width: "100%",
	height: "240px",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: vars.color.topBannerBackground,
});
