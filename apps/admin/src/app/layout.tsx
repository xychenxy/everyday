"use client";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./styles/theme";
import { GlobalStyle } from "./styles/GlobalStyle";
import { Provider as StoreProvider } from "react-redux";
import { store } from "@/app/app-state";

import StyledComponentsRegistry from "./lib/registry";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<div id="modal" />
				<StoreProvider store={store}>
					<StyledComponentsRegistry>
						<ThemeProvider theme={lightTheme}>
							<GlobalStyle />
							{children}
						</ThemeProvider>
					</StyledComponentsRegistry>
				</StoreProvider>
			</body>
		</html>
	);
}
