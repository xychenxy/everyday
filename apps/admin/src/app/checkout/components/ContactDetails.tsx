import { Box, Button, Text, Input } from "@/app/styles/components";

export const ContactDetails = ({ setForm, formData, navigation }: any) => {
	const { firstName, lastName, email, phone } = formData;
	const { next } = navigation;

	const hanldeNext = () => {
		// todo: do some validation here
		if (firstName != null && firstName.trim() != "") {
			next();
		}
	};

	return (
		<div className="form">
			<Input
				label="First name"
				placeholder="John"
				name="firstName"
				value={firstName}
				onChange={setForm}
				required
			/>
			<Input
				label="Last name"
				placeholder="Doe"
				name="lastName"
				value={lastName}
				onChange={setForm}
			/>
			<Input
				label="Email"
				name="email"
				type="email"
				placeholder="email address"
				value={email}
				onChange={setForm}
			/>
			<Input
				label="Phone number"
				placeholder="phone number"
				name="phone"
				type="tel"
				value={phone}
				onChange={setForm}
			/>
			<Text paddingTop={"normal"}>
				We’ll only use your phone to call you about your order
			</Text>
			<Box
				display={"flex"}
				justifyContent={"flex-start"}
				paddingTop={"extraLoose"}
			>
				<Button $appearance="filled" onClick={hanldeNext}>
					Next
				</Button>
			</Box>
		</div>
	);
};
