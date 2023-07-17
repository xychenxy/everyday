import { style } from "@vanilla-extract/css";
import { vars } from "@/app/styles/theme/theme.css";

export const bannerContainer = style({
	background: vars.color.bannerBackground,
	width: "100%",
	height: "410px",
	paddingTop: "3.75rem",

	display: "grid",
	gridTemplateRows: "auto auto 1fr",
	textAlign: "center",

	"@media": {
		"screen and (min-width: 768px)": {
			paddingTop: "6rem",
			height: "566px",
		},
	},
});

export const awardwinningContainer = style({
	height: "487px",
	overflow: "hidden",
	backgroundColor: vars.color.topBannerBackground,
	width: "100%",
	display: "flex",
	margin: "0 auto",
});

export const awardwinningText = style({
	overflow: "hidden",
	height: "487px",
	width: "100%",
	flex: "1",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",

	"@media": {
		"screen and (min-width: 1024px)": {
			flex: "0.5",
		},
	},
});

export const awardwinningImage = style({
	height: "5076px",
	width: "100%",
	display: "none",

	"@media": {
		"screen and (min-width: 1024px)": {
			display: "block",
			flex: "0.5",
		},
	},
});
