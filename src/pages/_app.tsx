import { AppProps } from 'next/app'
import {
	Box,
	ColorScheme,
	ColorSchemeProvider,
	MantineProvider
} from '@mantine/core'
import SWRProvider from '../hooks/swr'
import { useLocalStorageValue } from '@mantine/hooks'
import Header from '../components/Header'

export default function App({ Component, pageProps}: AppProps) {
	const [colorScheme, setColorScheme] = useLocalStorageValue<ColorScheme>({
		key: 'mantine-color-scheme',
		defaultValue: 'light',
	})

	const toggleColorScheme = (value?: ColorScheme) =>
		setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))

	return (
		<ColorSchemeProvider
			colorScheme={colorScheme}
			toggleColorScheme={toggleColorScheme}
		>
			<SWRProvider>
				<MantineProvider
					withGlobalStyles
					withNormalizeCSS
					theme={{
						colorScheme,
					}}
				>
					<Header />
					<Box sx={{ paddingTop: 57 }}>
						<Component {...pageProps} />
					</Box>
				</MantineProvider>
			</SWRProvider>
		</ColorSchemeProvider>
	)
}
