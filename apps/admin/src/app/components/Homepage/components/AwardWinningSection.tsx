import Link from "next/link";
import { restaurants } from "@/app/assets/images";
import { Button, Text, Box } from "@/app/styles/components";
import Image from "next/image";
import {
	awardwinningContainer,
	awardwinningText,
	awardwinningImage,
} from "../HomePage.css";

export const AwardWinningSection = () => (
	<Box className={awardwinningContainer}>
		<div className={awardwinningText}>
			<Text kind="heading1" paddingBottom={"loose"}>
				Award winning
			</Text>
			<Text kind="text" padding={"normal"}>
				The best restaurants near you!
			</Text>
			<Link href="/categories">
				<Button $appearance="filled">Explore best restaurants</Button>
			</Link>
		</div>

		<div className={awardwinningImage}>
			<Image src={restaurants} alt="restaurants" priority />
		</div>
	</Box>
);
