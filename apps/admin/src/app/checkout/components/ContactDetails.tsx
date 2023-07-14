import styled, { css } from "styled-components";

import { Button } from "@/app/components/Elements/Button";
import { Input } from "@/app/components/Elements/Input";
import { Typography } from "@/app/components/Elements/Typography";

const DisclaimerText = styled(Typography)(
	({ theme: { spacing } }) => css`
		margin-bottom: ${spacing.m};
	`
);

export const ContactDetails = ({ setForm, formData, navigation }: any) => {
	const { firstName, lastName, email, phone } = formData;

	const { next } = navigation;

	return (
		<div className="form">
			<Input
				label="First name"
				placeholder="John"
				name="firstName"
				value={firstName}
				onChange={setForm}
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
			<DisclaimerText>
				We’ll only use your phone to call you about your order
			</DisclaimerText>
			<div style={{ display: "flex", justifyContent: "flex-start" }}>
				<Button onClick={next}>Next</Button>
			</div>
		</div>
	);
};
