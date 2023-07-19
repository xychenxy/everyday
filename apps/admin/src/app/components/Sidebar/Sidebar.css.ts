import { style } from "@vanilla-extract/css";
import { vars } from "@/app/styles/theme/theme.css";

export const sidebarContainer = style({
	background: vars.color.overlayBackground,
	position: "fixed",
	zIndex: 999,
	top: 0,
	right: 0,
	bottom: 0,
	left: 0,
	transformOrigin: "top center",
	boxShadow: "0 28px 48px rgba(0, 0, 0, 0.4)",

	display: "grid",
	gridTemplateRows: "auto 1fr auto",

	"@media": {
		"screen and (min-width: 768px)": {
			width: "420px",
			height: "100vh",
			left: "unset",
		},
	},
});

export const topBar = style({
	display: "flex",
	justifyContent: "space-between",
	background: vars.color.overlayHeader,
	padding: "0.5rem 1.5rem",
	alignItems: "center",
});

export const sidbarContent = style({
	overflow: "auto",
	padding: "1.5rem",
});

export const sidebarfooter = style({
	padding: "1.5rem",
	backgroundColor: vars.color.overlayHeader,
});

export const backdropContainer = style({
	background: "rgba(0, 0, 0, 0.4)",
	position: "fixed",
	zIndex: 998,
	top: 0,
	right: 0,
	bottom: 0,
	left: 0,
});
