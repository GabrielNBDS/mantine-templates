import { Title, Divider, Container, Box } from '@mantine/core'
import { GetStaticProps } from 'next'
import * as shells from  'templates/shells'
import ITemplate from 'templates/Template'
import ShowTemplate from 'src/components/ShowComponent'
import { getAllComponents } from 'src/utils/getFiles'

export const getStaticProps: GetStaticProps = (
) => ({
	props: {
		templates: getAllComponents('shells'),
	},
})

interface IProps {
	templates: ITemplate[]
}

function Shells({ templates }: IProps) {
	return (
		<>
			<Container sx={{ paddingTop: 16, paddingBottom: 16 }}>
				<Title>Shells</Title>
			</Container>

			{templates.map((component, index) => (
				<Box key={component.title}>
					<ShowTemplate component={shells[component.template]()} title={component.title} code={component.code} />

					{index !== (templates.length - 1) && (
						<Divider variant="dashed" sx={{ marginTop: 16, marginBottom: 16 }} />
					)}
				</Box>
			))}
		</>
	)
}

export default Shells
