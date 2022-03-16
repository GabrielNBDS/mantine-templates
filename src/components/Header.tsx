import { Box, Container, Divider, Group, Image, Text, useMantineColorScheme, useMantineTheme } from '@mantine/core'
import Link from 'next/link'
import ToggleThemeButton from './ToggleThemeButton'

function Header() {
	const theme = useMantineTheme()
	const { colorScheme } = useMantineColorScheme()
	const dark = colorScheme === 'dark'

	return (
		<Box sx={{ position: 'fixed', width: '100%', background: dark ? theme.colors.dark[7] : '#fff', zIndex: 1000 }}>
			<Container>
				<Group direction="column" sx={{ padding: 8, width: '100%' }}>
					<Group sx={{ justifyContent: 'space-between', width: '100%' }}>
						<Link href="/">
							<Group sx={{ cursor: 'pointer' }}>
								<Image sx={{ width: 40 }} src="/assets/mantine-logo.svg" />

								<Text>Mantine Templates</Text>
							</Group>
						</Link>

						<ToggleThemeButton />
					</Group>
				</Group>
			</Container>
			<Divider />
		</Box>
	)
}

export default Header
