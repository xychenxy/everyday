"use client";
import * as React from "react";
import { container } from "./PageTemplate.css";
import { Header } from "@/app/components/PageLayout/Header";
import { Box } from "@/app/styles/components";

type PageTemplateProps = {
	children: React.ReactNode;
};

export const PageTemplate: React.FC<PageTemplateProps> = ({ children }) => {
	return (
		<>
			<Header />
			<div className={container}>{children}</div>
			<Box padding={"extraLoose"} />
		</>
	);
};
