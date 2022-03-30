import { Title, Divider, Container, Box } from '@mantine/core'
import { GetStaticProps } from 'next'
import * as authentication from  'templates/authentication'
import ITemplate from 'templates/Template'
import ShowTemplate from 'src/components/ShowComponent'
import { getAllComponents } from 'src/utils/getFiles'

export const getStaticProps: GetStaticProps = (
) => ({
	props: {
		templates: getAllComponents('authentication'),
	},
})

interface IProps {
	templates: ITemplate[]
}

function Authentication({ templates }: IProps) {
	return (
		<>
			<Container sx={{ paddingTop: 16, paddingBottom: 16 }}>
				<Title>Erro</Title>
			</Container>

			{templates.map((component, index) => (
				<Box key={component.title}>
					<ShowTemplate component={authentication[component.template]()} title={component.title} code={component.code} />

					{index !== (templates.length - 1) && (
						<Divider variant="dashed" sx={{ marginTop: 16, marginBottom: 16 }} />
					)}
				</Box>
			))}
		</>
	)
}

export default Authentication
