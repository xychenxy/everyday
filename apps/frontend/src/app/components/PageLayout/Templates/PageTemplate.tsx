"use client";
import * as React from "react";
import { container, pageContainer } from "./PageTemplate.css";
import { Header } from "@/app/components/PageLayout/Header";

type PageTemplateProps = {
	children: React.ReactNode;
};

export const PageTemplate: React.FC<PageTemplateProps> = ({ children }) => {
	return (
		<div className={pageContainer}>
			<Header />
			<div className={container}>{children}</div>
		</div>
	);
};
