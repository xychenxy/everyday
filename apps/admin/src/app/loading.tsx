import { RestaurantCardSkeleton } from "@/app/components/RestaurantCard";

export default function Loading() {
	return (
		<>
			{Array.from(Array(10)).map((_, index) => (
				<RestaurantCardSkeleton key={index} />
			))}
		</>
	);
}
