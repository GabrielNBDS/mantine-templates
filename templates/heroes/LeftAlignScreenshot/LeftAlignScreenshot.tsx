import {
	Button,
	Container,
	Group,
	Image,
	Text,
	Title,
} from '@mantine/core'

export function LeftAlignScreenshot() {
	return (
		<Container
			sx={{
				marginTop: 48,
				marginBottom: 48,
			}}
			size="xl"
		>
			<Group>
				<Group direction="column" sx={{ flex: 1 }}>
					<Image src="/assets/mantine-logo.svg" width={80} />

					<Title
						sx={{
							fontSize: 48,
							'@media (max-width: 992px)': {
								fontSize: 36
							},
						}}
					>
					Left align screenshot
					</Title>

					<Text
						weight={300}
						size="xl"
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

				<Image src="/assets/mantine-homepage-screenshot.png"
					sx={{
						flex: 1,
						boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
						maxWidth: '1000px',
						'@media (max-width: 992px)': {
							display: 'none'
						},
					}}
				/>
			</Group>
		</Container>
	)
}
