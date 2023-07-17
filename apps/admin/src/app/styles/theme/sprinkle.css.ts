import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";
import { vars } from "./theme.css";

const responsiveProperties = defineProperties({
	conditions: {
		mobile: {},
		tablet: { "@media": "screen and (min-width: 768px)" },
		desktop: { "@media": "screen and (min-width: 1024px)" },
	},
	defaultCondition: "mobile",
	properties: {
		display: ["none", "flex", "inline-block", "inline"],
		flexDirection: ["row", "column"],
		alignItems: ["stretch", "flex-start", "center", "flex-end"],
		justifyContent: [
			"stretch",
			"flex-start",
			"center",
			"flex-end",
			"space-between",
		],
		gap: vars.space,
		paddingTop: vars.space,
		paddingBottom: vars.space,
		paddingLeft: vars.space,
		paddingRight: vars.space,
		borderRadius: vars.radius,
		fontFamily: vars.fontFamily,
		fontSize: vars.fontSize,
		fontWeight: [400, 600],
		lineHeight: vars.lineHeight,
		textAlign: ["left", "center"],
		textDecoration: ["underline"],
	},
	shorthands: {
		padding: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"],
		paddingX: ["paddingLeft", "paddingRight"],
		paddingY: ["paddingTop", "paddingBottom"],
		placeItems: ["alignItems", "justifyContent"],
		typeSize: ["fontSize", "lineHeight"],
	},
});

const colorProperties = defineProperties({
	conditions: {
		lightMode: {},
		darkMode: { "@media": "(prefers-color-scheme: dark)" },
	},
	defaultCondition: "lightMode",
	properties: {
		// state: vars.color.state,
	},
});

export const sprinkles = createSprinkles(responsiveProperties, colorProperties);

// It's a good idea to export the Sprinkles type too
export type Sprinkles = Parameters<typeof sprinkles>[0];
