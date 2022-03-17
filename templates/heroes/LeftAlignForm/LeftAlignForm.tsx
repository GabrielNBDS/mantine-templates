import {
	Box,
	Button,
	Card,
	Checkbox,
	Container,
	Group,
	Image,
	Text,
	TextInput,
	Title,
} from '@mantine/core'
import { useForm } from '@mantine/hooks'

export function LeftAlignForm() {
	const form = useForm({
		initialValues: {
			email: '',
			termsOfService: false,
		},

		validationRules: {
			email: (value) => /^\S+@\S+$/.test(value),
		},
	})

	return (
		<Container
			sx={{
				marginTop: 48,
				marginBottom: 48,
			}}
			size="xl"
		>
			<Group
				sx={{
					'@media (max-width: 992px)': {
						flexDirection: 'column',
					},
					'@media (min-width: 992px)': {
						justifyContent: 'center',
					},
				}}
			>
				<Group
					direction="column"
					sx={{
						maxWidth: 'max-content',
						flex: 1,
						'@media (max-width: 992px)': {
							alignItems: 'center',
							paddingBottom: 16
						},
					}}
				>
					<Image src="/assets/mantine-logo.svg" width={80} />

					<Title
						sx={{
							fontSize: 48,
							'@media (max-width: 992px)': {
								fontSize: 36
							},
						}}
					>
					Left align form
					</Title>

					<Text
						weight={300}
						size="xl"
						sx={{
							maxWidth: 636,
							'@media (max-width: 992px)': {
								textAlign: 'center'
							},
						}}
					>
						Quickly design and customize responsive mobile-first sites
						with Bootstrap, the world&apos;s most popular front-end open
						source toolkit, featuring Sass variables and mixins,
						responsive grid system, extensive prebuilt components, and
						powerful JavaScript plugins.
					</Text>
				</Group>

				<Box
					component="form"
					// eslint-disable-next-line no-console
					onSubmit={form.onSubmit((values) => console.log(values))}
				>
					<Card
						sx={{
							padding: '32px 48px',
							borderRadius: '4px',
							display: 'flex',
							flexDirection: 'column'
						}}
					>
						<TextInput
							required
							size="md"
							label="Email"
							placeholder="your@email.com"
							sx={{ width: '100%' }}
							{...form.getInputProps('email')}
						/>

						<Checkbox
							mt="md"
							size="md"
							label="I agree to sell my privacy to this corporation"
							{...form.getInputProps(
								'termsOfService',
								{ type: 'checkbox' }
							)}
						/>

						<Button
							mt="md"
							size="md"
							sx={{ width: '100%' }}
							type="submit"
						>
              Start Now
						</Button>
					</Card>
				</Box>
			</Group>
		</Container>
	)
}
