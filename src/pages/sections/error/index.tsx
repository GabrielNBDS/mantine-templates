import { Title, Divider, Container, Box } from '@mantine/core'
import { GetStaticProps } from 'next'
import * as errors from  'templates/error'
import ITemplate from 'templates/Template'
import ShowTemplate from 'src/components/ShowComponent'
import { getAllComponents } from 'src/utils/getFiles'

export const getStaticProps: GetStaticProps = (
) => ({
	props: {
		templates: getAllComponents('error'),
	},
})

interface IProps {
	templates: ITemplate[]
}

function ErrorPage({ templates }: IProps) {
	return (
		<>
			<Container sx={{ paddingTop: 16, paddingBottom: 16 }}>
				<Title>Erro</Title>
			</Container>

			{templates.map((component, index) => (
				<Box key={component.title}>
					<ShowTemplate component={errors[component.template]()} title={component.title} code={component.code} />

					{index !== (templates.length - 1) && (
						<Divider variant="dashed" sx={{ marginTop: 16, marginBottom: 16 }} />
					)}
				</Box>
			))}
		</>
	)
}

export default ErrorPage
