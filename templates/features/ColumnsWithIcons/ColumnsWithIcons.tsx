import { Anchor, Box, Container, Group, SimpleGrid, Text, Title, useMantineTheme } from '@mantine/core'
import { IconType } from 'react-icons'
import { FiBarChart, FiCode, FiCoffee } from 'react-icons/fi'

interface CardProps {
	Icon: IconType
	title: string
	content: string
	href: string
	anchorText: string
}

function Card({ Icon, title, content, href, anchorText }: CardProps) {
	const theme = useMantineTheme()

	return (
		<Group direction="column">
			<Box sx={{ padding: 16, borderRadius: 4, maxWidth: 64, maxHeight: 64, background: theme.colors.blue[5] }}>
				<Icon color="white" fontSize={32} />
			</Box>

			<Group spacing={2}>
				<Title order={3}>{title}</Title>

				<Text color="dimmed">
					{content}
				</Text>
			</Group>
			<Anchor href={href}>{anchorText}</Anchor>
		</Group>
	)
}

export function ColumnsWithIcons() {

	return (
		<Container
			my={16}
			sx={{
				'@media (max-width: 992px)': {
					maxWidth: '420px'
				}
			}}
		>
			<SimpleGrid
				spacing="md"
				cols={3}
				breakpoints={[
					{ maxWidth: 992, cols: 1, spacing: 'md' },
					{ maxWidth: 576, cols: 1, spacing: 'sm' },
				]}
				sx={{ width: '100%'}}
			>
				<Card
					Icon={FiBarChart}
					title="Feature Title"
					content="Paragraph of text beneath the heading to explain the heading.
						We'll add onto it with another sentence and probably just keep going
						until we run out of words."
					anchorText="Call to action"
					href="#"
				/>

				<Card
					Icon={FiCode}
					title="Feature Title"
					content="Paragraph of text beneath the heading to explain the heading.
						We'll add onto it with another sentence and probably just keep going
						until we run out of words."
					anchorText="Call to action"
					href="#"
				/>

				<Card
					Icon={FiCoffee}
					title="Feature Title"
					content="Paragraph of text beneath the heading to explain the heading.
						We'll add onto it with another sentence and probably just keep going
						until we run out of words."
					anchorText="Call to action"
					href="#"
				/>
			</SimpleGrid>
		</Container>
	)
}
