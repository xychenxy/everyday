import styled, { css } from "styled-components";
import Link from "next/link";
import { restaurants } from "@/app/assets/images";
import { breakpoints } from "@/app/styles/breakpoints";
import { Button } from "@/app/components/Elements/Button";
import { Typography } from "@/app/components/Elements/Typography";
import Image from "next/image";

const StyledButton = styled(Button)`
	margin-top: 2.5rem;
`;

const Container = styled.div(
	({ theme: { color } }) => css`
		position: relative;
		overflow: hidden;
		background: ${color.topBannerBackground};
		width: 100%;
		display: flex;
		height: 487px;
	`
);

const ContentContainer = styled.div`
	position: relative;
	overflow: hidden;
	display: flex;
	width: 100%;
`;

const LeftContainer = styled.div`
	overflow: hidden;
	width: 100%;
	display: flex;
	height: 487px;
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;

	@media ${breakpoints.M} {
		flex: 0.5;
	}
`;

const SlidingBackground = styled.div`
	height: 5076px;
	animation: slide 20s linear infinite;
	width: 100%;
	display: none;

	@keyframes slide {
		0% {
			transform: translate3d(0, -1692px, 0);
		}
		100% {
			transform: translate3d(0, 0, 0);
		}
	}

	@media ${breakpoints.M} {
		display: block;
		flex: 0.5;
	}
`;

export const AwardWinningSection = () => (
	<Container>
		<ContentContainer className="container">
			<LeftContainer>
				<Typography className="bolder">Award winning</Typography>
				<Typography>The best restaurants near you!</Typography>
				<Link href="/categories">
					<StyledButton>Explore best restaurants</StyledButton>
				</Link>
			</LeftContainer>

			<SlidingBackground>
				<Image src={restaurants} alt="restaurants" />
			</SlidingBackground>
		</ContentContainer>
	</Container>
);
