import styled, { css } from "styled-components";
import Link from "next/link";
import { Button } from "@/app/components/Elements/Button";
import { Typography } from "@/app/components/Elements/Typography";
import { breakpoints } from "@/app/styles/breakpoints";
import { Ladies } from "@/app/assets/images";

const Container = styled.div(
	({ theme: { color } }) => css`
		background: ${color.bannerBackground};
		width: 100%;
		position: relative;
		height: 410px;
		padding-top: 3.75rem;

		@media ${breakpoints.M} {
			padding-top: 6rem;
			height: 566px;
		}
	`
);

const ContentContainer = styled.div`
	text-align: center;
	display: flex;
	align-items: center;
	flex-direction: column;
	z-index: 1;
`;

const StyledHeading = styled(Typography)(
	({ theme: { color } }) => `
    font-size: 1.5rem;
	margin-bottom: 2.5rem;
    padding: 0 2rem;
    strong {
        color: ${color.primaryText};
        font-weight: 900;
    }
`
);

const IconContainer = styled.div`
	width: 100%;
	height: 300px;
`;

export const Banner = () => (
	<Container>
		<ContentContainer>
			<StyledHeading fontSize="heading1">
				<strong>Hungry?</strong> find your next meal
			</StyledHeading>
			<Link href="/categories">
				<Button>View all restaurants</Button>
			</Link>
		</ContentContainer>
		<IconContainer>
			<Ladies
				style={{
					width: "100%",
					height: "100%",
				}}
			/>
		</IconContainer>
	</Container>
);
