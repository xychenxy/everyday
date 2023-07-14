import styled from "styled-components";

import { Typography } from "@/app/components/Elements/Typography";

export const CartItemContainer = styled.div`
	width: 100%;
	display: flex;
	margin-bottom: 1rem;
`;

export const Quantity = styled(Typography)`
	flex: 0.1;
`;

export const Name = styled(Typography)`
	flex: 0.6;
`;

export const Price = styled(Typography)`
	flex: 0.3;
	text-align: right;
`;
