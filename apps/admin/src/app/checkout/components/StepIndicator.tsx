import { assignInlineVars } from "@vanilla-extract/dynamic";
import { Box, Text } from "@/app/styles/components";
import { innerbar, outerbar, progressVar } from "./MultiStepForm.css";

type StepIndicatorProps = {
	title: string;
	currentStep: number;
	amountOfSteps: number;
};

export const StepIndicator = ({
	title,
	currentStep,
	amountOfSteps,
}: StepIndicatorProps) => {
	const progress = `${(currentStep / amountOfSteps) * 100}%`;
	return (
		<div style={{ marginBottom: "2rem" }}>
			<Box
				display={"flex"}
				justifyContent={"space-between"}
				alignItems={"center"}
				paddingBottom={"normal"}
			>
				<Text>{title}</Text>
				<Text>
					Step {currentStep} of {amountOfSteps}
				</Text>
			</Box>
			<div className={outerbar}>
				<div
					className={innerbar}
					style={assignInlineVars({ [progressVar]: progress })}
				/>
			</div>
		</div>
	);
};
