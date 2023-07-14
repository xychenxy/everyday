import { Badge } from "@/app/components/Elements/Badge";
import { Review } from "../../Review";
import { Typography } from "@/app/components/Elements/Typography";

type RestaurantCardProps = {
	name: string;
	rating?: number;
	specialty: string;
	photoUrl: string;
	isClosed?: boolean;
	categories?: string[];
	isLoading?: boolean;
	isNew?: boolean;
	onClick: () => void;
	className?: string;
};

export const RestaurantCard = ({
	photoUrl,
	name,
	specialty,
	rating,
	isClosed = false,
	isLoading = false,
	categories,
	isNew = false,
	className,
	onClick,
}: RestaurantCardProps) => {
	if (isLoading) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			{isNew && <div>new</div>}
			<div>
				{isClosed && (
					<Typography>This restaurant is closed.</Typography>
				)}
				<img src={photoUrl} alt="restaurant" />
			</div>
			<div>
				<Typography fontSize="heading2">{name} </Typography>
				<Review rating={rating} />
				<Typography fontWeight="regular">{specialty}</Typography>
				{categories?.map((category) => (
					<Badge key={category} text={category} />
				))}
			</div>
		</div>
	);
};
