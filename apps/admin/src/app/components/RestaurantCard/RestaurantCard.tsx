import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Review } from "../Review";
import { Badge, Box, Text } from "@/app/styles/components";
import {
	closeContainer,
	closeText,
	cardContainer,
	content,
	imageContainer,
	imageContent,
	newTag,
	cardWrap,
} from "./RestaurantCard.css";
import Image from "next/image";

type RestaurantCardProps = {
	name: string;
	rating?: number;
	specialty: string;
	photoUrl: string;
	isClosed?: boolean;
	categories?: string[];
	isLoading?: boolean;
	isNew?: boolean;
	onClick?: () => void;
};

export const RestaurantCardSkeleton = () => {
	return (
		<div className={cardWrap}>
			<SkeletonTheme baseColor={"#E9E9E9"} highlightColor={"#F5F6F7"}>
				<div>
					<Skeleton
						height={200}
						width="100%"
						style={{ borderRadius: "4px 4px 0 0" }}
					/>
					<div className={content}>
						<Text fontSize="heading2">
							<Skeleton width="50%" />
						</Text>
						<Text>
							<Skeleton width="35%" />
						</Text>
						<Box>
							<Skeleton />
						</Box>
						<Text>
							<Skeleton
								width="25%"
								height="23px"
								style={{ marginTop: 24 }}
							/>
						</Text>
					</div>
				</div>
			</SkeletonTheme>
		</div>
	);
};

export const RestaurantCard = ({
	photoUrl,
	name,
	specialty,
	rating,
	isClosed = false,
	isLoading = false,
	isNew = false,
	categories,
	onClick,
}: RestaurantCardProps) => {
	if (isLoading) {
		return <RestaurantCardSkeleton />;
	}

	return (
		<div className={cardContainer} onClick={isClosed ? undefined : onClick}>
			<div className={cardWrap}>
				{isNew && <div className={newTag}>new</div>}
				<div className={imageContainer}>
					{isClosed && (
						<div className={closeContainer}>
							<span className={closeText}>
								This restaurant is closed.
							</span>
						</div>
					)}
					<Image
						src={photoUrl}
						alt="restaurant"
						height={200}
						width={400}
						className={imageContent}
						priority
					/>
				</div>
				<div className={content}>
					<Text fontSize="heading2" paddingBottom={"loose"}>
						{name}
					</Text>
					<Review rating={rating} />
					<Text paddingY={"normal"}>{specialty}</Text>
					<Box display={"flex"} gap={"tight"}>
						{categories?.map((category) => (
							<Badge key={category}>{category}</Badge>
						))}
					</Box>
				</div>
			</div>
		</div>
	);
};
