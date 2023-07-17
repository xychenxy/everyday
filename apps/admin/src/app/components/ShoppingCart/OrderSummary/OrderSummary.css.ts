import { style } from "@vanilla-extract/css";
import { vars } from "@/app/styles/theme/theme.css";

export const container = style({
	// width: "100%",
	minHeight: 250,
	padding: "0.5rem 1.5rem",
	background: vars.color.orderSummaryBackground,
	borderRadius: 5,
	display: "grid",
	gridTemplateRows: "auto 1fr auto",
});

export const buttomContainer = style({
	borderTop: "1px solid black",
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	paddingTop: "1rem",
	paddingBottom: "1rem",
});

export const cartItemsContainer = style({
	overflow: "auto",
});
