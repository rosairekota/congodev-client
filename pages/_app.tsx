import GlobalStyle from "../theme/globals.style";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
export const theme = {
	colors: {
		primary: "red",
	},
};

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
};

export default MyApp;
