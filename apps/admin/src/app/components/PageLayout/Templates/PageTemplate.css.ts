import { style } from "@vanilla-extract/css";

export const container = style({
	overflow: "auto",
});

export const pageContainer = style({
	overflow: "hidden",
	height: "100vh",
	display: "grid",
	gridTemplateRows: "auto 1fr",
});
