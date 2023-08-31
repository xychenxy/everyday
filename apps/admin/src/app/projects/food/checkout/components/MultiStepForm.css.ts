import { style, createVar } from "@vanilla-extract/css";
import { vars } from "@/app/styles/theme/theme.css";

export const progressVar = createVar();

export const formContainer = style({
	width: "80%",
	minHeight: "480px",
	background: vars.color.formBackground,
	padding: "1.5rem",
	borderRadius: 4,
	flex: 1,
	margin: "0 auto",

	"@media": {
		"screen and (min-width: 1024px)": {
			flex: 0.6,
		},
	},
});

export const outerbar = style({
	height: 4,
	borderRadius: 4,
	width: "100%",
	background: vars.color.stepsIndicatorOuterBar,
});

export const innerbar = style({
	background: vars.color.stepsIndicatorInnerBar,
	height: 4,
	borderRadius: 4,
	transition: "width 0.5s ease-in-out",
	width: progressVar,
});
