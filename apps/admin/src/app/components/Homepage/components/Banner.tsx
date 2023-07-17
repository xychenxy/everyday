import Link from "next/link";
import { Ladies } from "@/app/assets/images";
import { bannerContainer } from "../HomePage.css";
import { Text, Button } from "@/app/styles/components";

export const Banner = () => (
	<div className={bannerContainer}>
		<Text kind="heading2" paddingBottom={"loose"}>
			Hungry? find your next meal
		</Text>
		<Link href="/categories">
			<Button $appearance="filled">View all restaurants</Button>
		</Link>
		<Ladies
			style={{
				width: "100%",
				height: "100%",
			}}
		/>
	</div>
);
