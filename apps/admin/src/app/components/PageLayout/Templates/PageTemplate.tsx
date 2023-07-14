"use client";
import * as React from "react";
import styled from "styled-components";

import { Header, HeaderComponent } from "@/app/components/PageLayout/Header";

const Container = styled.div`
	min-height: calc(100vh - 200px);
`;

type PageTemplateProps = {
	type?: "default" | "sticky-header" | "basic";
	children: React.ReactNode;
};

export const PageTemplate: React.FC<PageTemplateProps> = ({
	type = "default",
	children,
}) => {
	// if (type === "basic") {
	// 	return (
	// 		<>
	// 			<HeaderComponent logoOnly />
	// 			<Container>{children}</Container>
	// 		</>
	// 	);
	// }

	// if (type === "sticky-header") {
	// 	return (
	// 		<>
	// 			<Header sticky />
	// 			<Container>{children}</Container>
	// 		</>
	// 	);
	// }

	return (
		<>
			<Header />
			<Container>{children}</Container>
		</>
	);
};
