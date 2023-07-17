import { style } from "@vanilla-extract/css";
import { vars } from "@/app/styles/theme/theme.css";

export const container = style({
	display: "grid",
	gap: "24px",
	gridTemplateColumns: "repeat(1, 1fr)",
	paddingBottom: "3rem",

	"@media": {
		"screen and (min-width: 768px)": {
			gridTemplateColumns: "repeat(2, 1fr)",
		},
		"screen and (min-width: 1024px)": {
			gridTemplateColumns: "repeat(3, 1fr)",
		},
	},
});

export const cardContainer = style({
	padding: "1.5rem",
	borderRadius: "4px",
	transition: "box-shadow 0.1s ease-in",
	background: vars.color.foodItemBackground,

	":hover": {
		cursor: "pointer",
		boxShadow: vars.boxShadow.card,
	},
});

export const quantityContainer = style({
	padding: "0.5rem",
	borderRadius: "4px",
	background: vars.color.black,
	color: vars.color.white,
});
