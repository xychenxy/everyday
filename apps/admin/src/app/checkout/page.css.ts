import { style } from "@vanilla-extract/css";
import { vars } from "@/app/styles/theme/theme.css";

export const container = style({
	background: vars.color.checkoutBottomBackground,
	minHeight: "100vh",
});

export const topContainer = style({
	height: 260,
	background: vars.color.checkoutTopBackground,
	textAlign: "center",
	paddingTop: 10,
});

export const bottomContainer = style({
	display: "flex",
	justifyContent: "center",
	flexDirection: "column-reverse",
	alignItems: "flex-start",
	marginTop: "-12rem",

	"@media": {
		"screen and (min-width: 1024px)": {
			marginTop: "-10rem",
			flexDirection: "row",
			// gap: "1.5rem",
		},
	},
});

export const orderDetailsContainer = style({
	width: "80%",
	flex: 1,
	margin: "0 auto",
	marginBottom: "4rem",

	"@media": {
		"screen and (min-width: 1024px)": {
			flex: 0.2,
		},
	},
});
