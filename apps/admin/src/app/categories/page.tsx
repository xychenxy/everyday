"use client";
import Link from "next/link";
import { PageTemplate } from "@/app/components/PageLayout/Templates";
import { TopBanner } from "@/app/components/TopBanner";
import { categories } from "@/app/stub/categories";
import { Category } from "@/app/components/Category";
import { Text } from "../styles/components";
import { container, linkContainer } from "./page.css";

export default function Categories() {
	return (
		<PageTemplate>
			<TopBanner title="Categories" />
			<div className={container}>
				<Text kind="heading2" paddingY={"extraLoose"}>
					What’s on the menu?
				</Text>
				<Text paddingBottom={"normal"}>
					Feeling like having pizza? How about Sushi? Satisfy your
					cravings with a few quick clicks and enjoy the world of
					delivery! Check a great selection of restaurants by
					selecting a category below.
				</Text>
				<div className={linkContainer}>
					{categories.map((category) => (
						<Link
							key={category.id}
							href={`/categories/${category.id}`}
						>
							<Category {...category} title={category.title} />
						</Link>
					))}
				</div>
			</div>
		</PageTemplate>
	);
}
