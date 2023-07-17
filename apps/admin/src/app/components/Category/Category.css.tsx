import { style } from "@vanilla-extract/css";
import { vars } from "@/app/styles/theme/theme.css";

export const image = style({
	objectFit: "cover",
	borderRadius: 25,
	width: "100%",
	height: "100%",
	minWidth: "50px",
	minHeight: "50px",
	maxHeight: "300px",
	border: "1px solid #fff",

	":hover": {
		boxShadow: vars.boxShadow.outerBorder,
	},
});

export const roundedImage = style({
	objectFit: "cover",
	borderRadius: vars.radius.full,
	width: "4.5rem",
	height: "4.5rem",
	minWidth: "4.5rem",
	minHeight: "4.5rem",
	maxHeight: "200px",

	"@media": {
		"screen and (min-width: 768px)": {
			width: "6.5rem",
			height: "6.5rem",
			minWidth: "6.5rem",
			minHeight: "6.5rem",
		},
	},
});

export const titleContainer = style({
	position: "absolute",
	top: "1.5rem",
	left: "1.5rem",
	borderRadius: vars.radius.small,
	background: "#202020",
	padding: "8px 16px",
	textShadow: "2px 1px 2px rgba(0, 0, 0, 0.5)",
	zIndex: "1",
	color: "white",
});

export const container = style({
	position: "relative",
	cursor: "pointer",
});

export const roundContainer = style({
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	flexDirection: "column",
});

export const roundWrap = style({
	background: vars.color.cardBackground,
	padding: "2rem",
});

export const roundImage = style({ objectFit: "cover", borderRadius: 9999 });
