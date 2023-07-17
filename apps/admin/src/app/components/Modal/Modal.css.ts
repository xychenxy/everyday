import { style } from "@vanilla-extract/css";
import { vars } from "@/app/styles/theme/theme.css";

export const modalContainer = style({
	background: vars.color.overlayBackground,
	borderTopLeftRadius: 25,
	borderTopRightRadius: 25,
	position: "fixed",
	zIndex: 99,
	top: "50%",
	left: 0,
	right: 0,
	bottom: 0,
	transformOrigin: "top center",
	boxShadow: "0 28px 48px rgba(0, 0, 0, 0.4)",

	"@media": {
		"screen and (min-width: 768px)": {
			width: "600px",
			height: "272px",
			position: "fixed",
			left: "calc(50% - (600px / 2))",
			top: "calc(50% - (272px / 2))",
			bottom: 0,
			borderRadius: 25,
		},
	},
});

export const backdropContainer = style({
	background: "rgba(0, 0, 0, 0.4)",
	position: "fixed",
	zIndex: 98,
	top: 0,
	right: 0,
	bottom: 0,
	left: 0,
});
