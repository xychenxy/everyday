import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../../theme/theme.css";
import { style } from "@vanilla-extract/css";

export const inputRecipe = recipe({
	base: style({
		outline: "none",
		padding: "13px 16px",
		boxSizing: "border-box",
		borderRadius: vars.radius.normal,
		border: "none",
		color: vars.color.primaryText,
		background: vars.color.inputBackground,
		margin: 0,

		":hover": {
			boxShadow: vars.boxShadow.outerBorder,
		},
		":focus": {
			boxShadow: vars.boxShadow.outerBorder,
			color: vars.color.labelActive,
		},
		"::placeholder": {
			color: vars.color.inputHint,
		},
	}),
	variants: {
		$width: {
			auto: {
				width: "auto",
			},
			full: {
				width: "100%",
			},
		},
	},
});

export type InputVariants = Parameters<typeof inputRecipe>[0];
