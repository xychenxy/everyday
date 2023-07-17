"use client";
import "@/app/styles/theme/reset.css";
import { Provider as StoreProvider } from "react-redux";
import { store } from "@/app/app-state";
import { Montserrat } from "next/font/google";

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
				<StoreProvider store={store}>{children}</StoreProvider>
			</body>
		</html>
	);
}
