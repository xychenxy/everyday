import { style } from "@vanilla-extract/css";

export const container = style({
	position: "relative",
	padding: "1rem 0",
	paddingLeft: "1rem",

	"@media": {
		"screen and (min-width: 1440)": {
			maxWidth: "1600px",
			margin: "0 auto",
			padding: "0 1.5rem",
		},
	},
});
