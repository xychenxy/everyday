import { Step, useForm, useStep } from "react-hooks-helper";

import { ContactDetails } from "./ContactDetails";
import { DeliveryDetails } from "./DeliveryDetails";
import { StepIndicator } from "./StepIndicator";
import { formContainer } from "./MultiStepForm.css";

const steps: Step[] = [{ id: "Contact details" }, { id: "Delivery details" }];

const defaultData = {
	firstName: "",
	lastName: "",
	address: "",
	city: "",
	postcode: "",
	email: "",
	phone: "",
};

const getCurrentStep = (step: string, props: any) => {
	switch (step) {
		case "Contact details":
			return <ContactDetails {...props} />;
		case "Delivery details":
			return <DeliveryDetails {...props} />;
		default:
			return null;
	}
};

export const MultiStepForm = () => {
	const [formData, setForm] = useForm(defaultData);
	const { step, navigation, index } = useStep({ initialStep: 0, steps });

	const currentStepId = (step as Step).id;
	const props = { formData, setForm, navigation };
	const currentIndex = index + 1;

	return (
		<div className={formContainer}>
			<StepIndicator
				title={currentStepId}
				currentStep={currentIndex}
				amountOfSteps={steps.length}
			/>
			{getCurrentStep(currentStepId, props)}
		</div>
	);
};
