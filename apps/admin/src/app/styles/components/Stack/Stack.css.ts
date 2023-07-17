import { recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "@/app/styles/theme/sprinkle.css";

export const stackRecipe = recipe({
	base: {},
	variants: {
		$orientation: {
			horizontal: sprinkles({
				display: "flex",
				justifyContent: "flex-start",
				alignItems: "flex-start",
				flexDirection: "row",
			}),
			vertical: sprinkles({
				display: "flex",
				justifyContent: "flex-start",
				alignItems: "flex-start",
				flexDirection: "column",
			}),
		},
		$alignment: {
			strech: sprinkles({
				alignItems: "stretch",
			}),
			flexStart: sprinkles({
				alignItems: "flex-start",
			}),
			center: sprinkles({
				alignItems: "center",
			}),
			flexEnd: sprinkles({
				alignItems: "flex-end",
			}),
		},
		$expand: {
			width: { width: "100%" },
			height: { height: "100%" },
			both: { width: "100%", height: "100%" },
		},
		$spacing: {
			spaceBetween: sprinkles({
				justifyContent: "space-between",
			}),
		},
		$gap: {
			none: sprinkles({
				gap: "none",
			}),
			extraTight: sprinkles({
				gap: "extraTight",
			}),
			tight: sprinkles({
				gap: "tight",
			}),
			snug: sprinkles({
				gap: "snug",
			}),
			normal: sprinkles({
				gap: "normal",
			}),
			loose: sprinkles({
				gap: "loose",
			}),
			extraLoose: sprinkles({
				gap: "extraLoose",
			}),
			ultraLoose: sprinkles({
				gap: "ultraLoose",
			}),
		},
	},
});

export type TextVariants = Parameters<typeof stackRecipe>[0];
