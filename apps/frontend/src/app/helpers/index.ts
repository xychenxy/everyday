export const toAud = (number: number) =>
	number.toLocaleString(undefined, {
		style: "currency",
		currency: "AUD",
	});
