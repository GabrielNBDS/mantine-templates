import { ActionIcon, useMantineColorScheme } from '@mantine/core'
import { FiSun, FiMoon } from 'react-icons/fi'

export default function ToggleThemeButton() {
	const { colorScheme, toggleColorScheme } = useMantineColorScheme()
	const dark = colorScheme === 'dark'

	return (
		<ActionIcon
			variant="outline"
			color={dark ? 'yellow' : 'blue'}
			onClick={() => toggleColorScheme()}
			title="Toggle color scheme"
		>
			{dark ? (
				<FiSun style={{ width: 18, height: 18 }} />
			) : (
				<FiMoon style={{ width: 18, height: 18 }} />
			)}
		</ActionIcon>
	)
}