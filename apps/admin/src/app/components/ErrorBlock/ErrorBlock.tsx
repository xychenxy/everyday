import * as React from "react";
import styled, { css } from "styled-components";

import { Button } from "@/app/components/Elements/Button";
import { Typography } from "@/app/components/Elements/Typography";

const ErrorContainer = styled.div(
	({ theme: { spacing } }) => css`
		margin: 0 auto;
		padding: ${spacing.l} 0;
		display: flex;
		align-items: center;
		flex-direction: column;
	`
);

const ImageContainer = styled.div(
	({ theme: { spacing } }) => css`
		text-align: center;
		margin-top: ${spacing.m};
		display: flex;
		justify-content: center;
		width: 100%;
	`
);

type ErrorBlockProps = {
	title: string;
	image: React.ReactNode;
	body: string;
	buttonText: string;
	onButtonClick: () => void;
};

export const ErrorBlock = ({
	title,
	image,
	body,
	buttonText,
	onButtonClick,
}: ErrorBlockProps) => (
	<ErrorContainer>
		<Typography fontSize="heading2">{title}</Typography>
		<ImageContainer>{image}</ImageContainer>
		<Typography>{body}</Typography>
		<Button onClick={onButtonClick}>{buttonText}</Button>
	</ErrorContainer>
);
