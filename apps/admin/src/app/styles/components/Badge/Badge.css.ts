import { vars } from "@/app/styles/theme/theme.css";

import { recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "@/app/styles/theme/sprinkle.css";

export const badgeRecipe = recipe({
	base: {
		border: "1px solid transparent",
		padding: "3px 8px",
		background: vars.color.badgeBackground,
		borderRadius: "4px",
	},
	variants: {
		kind: {
			text: sprinkles({
				fontSize: "normal",
				lineHeight: "normal",
				fontWeight: 400,
			}),
			label1: sprinkles({
				fontSize: "medium",
				lineHeight: "medium",
				fontWeight: 400,
			}),
			label2: sprinkles({
				fontSize: "small",
				lineHeight: "small",
				fontWeight: 400,
			}),
		},
	},
});

export type TextVariants = Parameters<typeof badgeRecipe>[0];
