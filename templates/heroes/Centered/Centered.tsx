import {
	Button,
	Container,
	Group,
	Image,
	Text,
	Title,
} from '@mantine/core'

export function Centered() {
	return (
		<Container sx={{
			marginTop: 48,
			marginBottom: 48,
		}}>
			<Group direction="column" position="center">
				<Image src="/assets/mantine-logo.svg" width={80} />

				<Title
					sx={{
						fontSize: 48,
						'@media (max-width: 992px)': {
							fontSize: 36
						},
					}}
					align="center"
				>
					Centered Hero
				</Title>

				<Text
					weight={300}
					size="xl"
					align="center"
				>
					Quickly design and customize responsive mobile-first sites
					with Bootstrap, the world&apos;s most popular front-end open
					source toolkit, featuring Sass variables and mixins,
					responsive grid system, extensive prebuilt components, and
					powerful JavaScript plugins.
				</Text>

				<Group>
					<Button size="lg">
						Primary
					</Button>

					<Button size="lg" color="gray" variant="outline">
						Secondary
					</Button>
				</Group>
			</Group>
		</Container>
	)
}
