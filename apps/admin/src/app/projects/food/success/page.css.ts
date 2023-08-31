import { style } from "@vanilla-extract/css";
import { vars } from "@/app/styles/theme/theme.css";

export const container = style({
	background: vars.color.menuSectionBackground,
	minHeight: "100vh",
});

export const orderSummaryContainer = style({
	maxWidth: 400,
	margin: "0 auto",
	marginTop: "2.5rem",
	marginBottom: "2.5rem",
	textAlign: "center",
});
