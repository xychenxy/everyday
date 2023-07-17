import { recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "@/app/styles/theme/sprinkle.css";
import { vars } from "../../theme/theme.css";
import { style } from "@vanilla-extract/css";

export const buttonRecipe = recipe({
	base: style({
		all: "unset",
		appearance: "none",
		boxSizing: "border-box",
		cursor: "pointer",
		display: "inline-flex",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: vars.radius.normal,
		border: "1px solid transparent",
		whiteSpace: "nowrap",
		padding: "0.875rem 1rem",
		transition: "box-shadow 150ms ease-in",
		zIndex: 1,

		"@media": {
			"screen and (min-width: 768px)": {
				padding: "0.875rem 1.5rem",
			},
		},
	}),
	variants: {
		$appearance: {
			plain: ``,
			link: {
				textDecoration: "underline",
			},
			outline: style({
				background: vars.color.white,
				":hover": {
					backgroundColor: vars.color.buttonClearHover,
				},
				":active": {
					backgroundColor: vars.color.buttonClearHover,
				},
			}),
			filled: style({
				color: vars.color.white,
				background: vars.color.indicator.enabled,
				":hover": {
					color: vars.color.indicator.hover,
				},
				":active": {
					color: vars.color.indicator.enabled,
				},
			}),
		},
		$size: {
			wafer: style([
				sprinkles({
					paddingX: "none",
					paddingY: "extraTight",
					borderRadius: "small",
					fontSize: "small",
					fontWeight: 400,
					lineHeight: "small",
				}),
				{
					height: "20px",
				},
			]),
			normal: style([
				sprinkles({
					paddingX: "none",
					paddingY: "tight",
					borderRadius: "small",
					fontSize: "normal",
					fontWeight: 400,
					lineHeight: "normal",
				}),
				{
					height: "34px",
				},
			]),
			thick: style([
				sprinkles({
					paddingX: "none",
					paddingY: "snug",
					borderRadius: "small",
					fontSize: "large",
					fontWeight: 600,
					lineHeight: "normal",
				}),
				{
					height: "40px",
				},
			]),
			extraThick: style([
				sprinkles({
					paddingX: "none",
					paddingY: "normal",
					borderRadius: "small",
					fontSize: "heading1",
					fontWeight: 600,
					lineHeight: "normal",
				}),
				{
					height: "48px",
				},
			]),
		},
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

export type TextVariants = Parameters<typeof buttonRecipe>[0];
