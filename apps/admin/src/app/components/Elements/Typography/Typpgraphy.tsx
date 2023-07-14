import * as React from "react";
import styled, { css } from "styled-components";
import { lightTheme } from "@/app/styles/theme";

type FontSize = keyof (typeof lightTheme)["typography"]["fontSize"];
type FontWeight = keyof (typeof lightTheme)["typography"]["fontWeight"];
type Color = keyof (typeof lightTheme)["color"];

const TypographyBase = styled.span<{
	fontSize: FontSize;
	fontWeight: FontWeight;
}>(
	({
		fontSize,
		fontWeight,
		color: textColor,
		theme: { typography, color },
	}) => css`
		display: block;
		font-family: "Hind";
		color: ${textColor || color.primaryText};
		font-weight: ${typography.fontWeight[fontWeight]};
		font-size: ${typography.fontSize[`body${fontSize}` as FontSize]};
	`
);

interface TypographyProps
	extends Omit<
		React.ComponentPropsWithoutRef<typeof TypographyBase>,
		"fontSize" | "fontWeight" | "color"
	> {
	fontSize?: FontSize;
	fontWeight?: FontWeight;
	color?: Color;
}

export const Typography: React.FC<TypographyProps> = ({
	fontSize = "body",
	fontWeight = "regular",
	color,
	children,
	...props
}) => (
	<TypographyBase
		{...props}
		as={"span"}
		fontSize={fontSize}
		color={color}
		fontWeight={fontWeight}
	>
		{children}
	</TypographyBase>
);
