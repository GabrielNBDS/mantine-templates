import { ReactNode, useState } from 'react'
import { Box, Center, Container, Group, SegmentedControl, Title } from '@mantine/core'
import { FiCode, FiEye } from 'react-icons/fi'
import { PrismAsync as SyntaxHighlighter } from 'react-syntax-highlighter'
import theme from 'react-syntax-highlighter/dist/cjs/styles/prism/vsc-dark-plus'

interface Props {
	title: string
	component: ReactNode
  code: string
}

function Highlighter({ code }: { code: string }) {
	return (
		<Container>
			<SyntaxHighlighter language="jsx" style={theme}>
				{code}
			</SyntaxHighlighter>
		</Container>
	)
}

function ShowTemplate({ title, component, code }: Props) {
	const [selected, setSelected] = useState('preview')

	return(
		<>
			<Container>
				<Group direction="column">
					<Title order={2}>{title}</Title>
					<SegmentedControl
						sx={{ marginBottom: 16 }}
						value={selected}
						onChange={setSelected}
						data={[
							{
								value: 'preview',
								label: (
									<Center>
										<FiEye />
										<Box ml={10}>Preview</Box>
									</Center>
								),
							},
							{
								value: 'code',
								label: (
									<Center>
										<FiCode />
										<Box ml={10}>Code</Box>
									</Center>
								),
							},
						]}
					/>
				</Group>
			</Container>

			{selected === 'preview' && component}

			{selected === 'code' && <Highlighter code={code} />}
		</>
	)
}

export default ShowTemplate
