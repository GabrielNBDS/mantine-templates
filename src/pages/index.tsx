import { Title } from '@mantine/core'
import useSWR from 'swr'
import ToggleThemeButton from '../components/ToggleThemeButton'
import { fetcher } from '../hooks/swr'

function Home() {
	const { error, data } = useSWR(['https://pokeapi.co/api/v2/pokemon/ditto', true], fetcher)

	return (
		<>
			<Title>Hello World</Title>
			<ToggleThemeButton />
			{!data && !error && <p>Loading</p>}
			{JSON.stringify(data)}
		</>
	)
}

export default Home 