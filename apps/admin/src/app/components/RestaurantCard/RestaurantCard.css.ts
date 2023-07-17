import { vars } from "@/app/styles/theme/theme.css";
import { style } from "@vanilla-extract/css";

export const cardContainer = style({
	display: "flex",
	flexDirection: "column",
	width: "100%",
	maxWidth: 500,
	cursor: "pointer",
	":hover": {
		opacity: 0.9,
	},
});

export const cardWrap = style({
	width: "90%",
	margin: "0 auto",
	position: "relative",
});

export const content = style({
	padding: 24,
	background: vars.color.cardBackground,
	borderRadius: "0px 0px 8px 8px",
});

export const imageContainer = style({
	position: "relative",
	display: "flex",
});

export const newTag = style({
	position: "absolute",
	padding: 8,
	background: vars.color.newRestaurantTag,
	display: "inline-block",
	top: "0.5rem",
	left: "2rem",
	borderRadius: 4,
	fontSize: vars.fontSize.heading2,
	fontWeight: 600,
	zIndex: 1,
});

export const closeContainer = style({
	position: "absolute",
	height: "100%",
	width: "100%",
	borderRadius: "8px 8px 0px 0px",
	background: "rgba(0, 0, 0, 0.4)",
	top: 0,
	left: 0,
	bottom: 0,
	right: 0,
});

export const closeText = style({
	fontWeight: 600,
	color: vars.color.white,
});

export const imageContent = style({
	objectFit: "cover",
	overflow: "hidden",
});
