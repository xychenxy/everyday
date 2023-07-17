import { style } from "@vanilla-extract/css";

export const container = style({
	overflow: "auto",
});

export const pageContainer = style({
	minHeight: "100%",
	display: "grid",
	gridTemplateRows: "auto 1fr auto",
});
