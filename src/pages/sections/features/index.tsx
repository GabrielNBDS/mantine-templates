import { Title, Divider, Container, Box } from '@mantine/core'
import { GetStaticProps } from 'next'
import * as features from  '../../../../templates/features'
import ITemplate from '../../../../templates/Template'
import ShowTemplate from '../../../components/ShowComponent'
import { getAllComponents } from '../../../utils/getFiles'

export const getStaticProps: GetStaticProps = (
) => ({
	props: {
		templates: getAllComponents('features'),
	},
})

interface IProps {
	templates: ITemplate[]
}

function Features({ templates }: IProps) {
	return (
		<>
			<Container sx={{ paddingTop: 16, paddingBottom: 16 }}>
				<Title>Features</Title>
			</Container>

			{templates.map((component, index) => (
				<Box key={component.title}>
					<ShowTemplate component={features[component.template]()} title={component.title} code={component.code} />

					{index !== (templates.length - 1) && (
						<Divider variant="dashed" sx={{ marginTop: 16, marginBottom: 16 }} />
					)}
				</Box>
			))}
		</>
	)
}

export default Features
