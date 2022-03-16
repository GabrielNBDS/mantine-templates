import { Title, Divider, Container, Box } from '@mantine/core'
import { GetStaticProps } from 'next'
import * as heroes from  '../../../../templates/heroes'
import ITemplate from '../../../../templates/Template'
import ShowTemplate from '../../../components/ShowComponent'
import { getAllComponents } from '../../../utils/getFiles'

export const getStaticProps: GetStaticProps = (
) => ({
	props: {
		templates: getAllComponents('heroes'),
	},
})

interface IProps {
	templates: ITemplate[]
}

function Hero({ templates }: IProps) {
	return (
		<>
			<Container sx={{ paddingTop: 16, paddingBottom: 16 }}>
				<Title>Heroes</Title>
			</Container>

			{templates.map((component, index) => (
				<Box key={component.title}>
					<ShowTemplate component={heroes[component.template]()} title={component.title} code={component.code} />

					{index !== (templates.length - 1) && (
						<Divider variant="dashed" sx={{ marginTop: 16, marginBottom: 16 }} />
					)}
				</Box>
			))}
		</>
	)
}

export default Hero
