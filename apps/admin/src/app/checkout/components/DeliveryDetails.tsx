import { saveOrderAction } from "@/app/app-state/order";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/app/app-state";
import { clearCartAction, selectCartItems } from "@/app/app-state/cart";
import { Button } from "@/app/components/Elements/Button";
import { Input } from "@/app/components/Elements/Input";

type DeliveryDetailsProps = {
	setForm: () => {};
	formData: {
		address: string;
		city: string;
		postcode: string;
	};
	navigation: any;
};

export const DeliveryDetails = ({
	setForm,
	formData,
	navigation,
}: DeliveryDetailsProps) => {
	const router = useRouter();
	const dispatch = useAppDispatch();
	const cartItems = useAppSelector(selectCartItems);

	const { address, city, postcode } = formData;

	const { previous } = navigation;

	const onCompleteOrder = () => {
		dispatch(saveOrderAction(cartItems));
		dispatch(clearCartAction());
		router.push("/success");
	};

	return (
		<div className="form">
			<Input
				label="Streetname and housenumber"
				placeholder="Some street, 13"
				name="address"
				value={address}
				onChange={setForm}
			/>
			<Input
				label="Postcode"
				placeholder="AAAAXX"
				name="postcode"
				value={postcode}
				onChange={setForm}
			/>
			<Input
				label="City"
				placeholder="Amsterdam"
				name="city"
				value={city}
				onChange={setForm}
			/>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
				}}
			>
				<Button clear onClick={previous}>
					Previous
				</Button>
				<Button onClick={onCompleteOrder}>Complete order</Button>
			</div>
		</div>
	);
};
