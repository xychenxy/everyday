import { style } from "@vanilla-extract/css";
import { vars } from "@/app/styles/theme/theme.css";

export const headerContainer = style({
	height: "56px",
	borderBottom: `1px solid ${vars.color.headerBorder}`,
	top: 0,
	left: 0,
	background: vars.color.headerBackground,
	width: "100%",

	"@media": {
		"screen and (min-width: 768px)": {
			height: "72px",
		},
	},
});

export const content = style({
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	height: "100%",

	margin: "0 1.5rem",
	"@media": {
		"screen and (min-width: 640px)": {
			margin: `0 4rem`,
		},
	},
});

export const linkContainer = style({
	paddingLeft: vars.space.normal,
});

export const optionsContainer = style({
	width: "50%",
	height: "100%",
	display: "flex",
	alignItems: "center",
	justifyContent: "flex-end",

	"@media": {
		"screen and (min-width: 768px)": {
			width: "80%",
		},
	},
});

export const navigationItems = style({
	display: "none",

	"@media": {
		"screen and (min-width: 768px)": {
			display: "contents",
		},
	},
});
