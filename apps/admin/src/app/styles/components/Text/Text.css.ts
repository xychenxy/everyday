import { recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "@/app/styles/theme/sprinkle.css";

export const textRecipe = recipe({
	variants: {
		kind: {
			text: sprinkles({
				fontSize: "normal",
				lineHeight: "normal",
				fontWeight: 400,
			}),
			heading1: sprinkles({
				fontSize: "heading1",
				lineHeight: "heading1",
				fontWeight: 600,
			}),
			heading2: sprinkles({
				fontSize: "heading2",
				lineHeight: "heading2",
				fontWeight: 600,
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

export type TextVariants = Parameters<typeof textRecipe>[0];
