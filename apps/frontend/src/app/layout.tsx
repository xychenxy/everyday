"use client";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
	subsets: ["latin"],
	display: "swap",
	weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={montserrat.className}>
			<body>
				<div id="modal"></div>
				{children}
			</body>
		</html>
	);
}
