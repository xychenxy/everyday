import { style } from "@vanilla-extract/css";
import { vars } from "@/app/styles/theme/theme.css";

export const detailContainer = style({
	padding: "2rem",
	"@media": {
		"screen and (min-width: 768px)": {
			padding: "4rem",
		},
	},
});

export const menucontainer = style({
	background: vars.color.menuSectionBackground,
	"@media": {
		"screen and (min-width: 768px)": {
			padding: "4rem",
		},
	},
});
