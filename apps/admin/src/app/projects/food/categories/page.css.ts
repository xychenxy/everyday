import { style } from "@vanilla-extract/css";

export const container = style({
	padding: "1rem 1rem",
	"@media": {
		"screen and (min-width: 1440px)": {
			maxWidth: "1600px",
			margin: "0 auto",
			padding: "0 1.5rem",
		},
	},
});

export const linkContainer = style({
	display: "grid",
	paddingBottom: "5rem",
	gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
	gap: "12px",

	"@media": {
		"screen and (min-width: 1440px)": {
			gridTemplateColumns: "repeat(auto-fill, minmax(420px, 1fr))",
		},
		"screen and (min-width: 768px)": {
			gap: "24px",
			gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
		},
	},
});

export const categoryContainer = style({
	display: "grid",
	gridTemplateColumns: "repeat(auto-fill, minmax(356px, 1fr))",
	gap: 24,
	paddingBottom: "5rem",
});
