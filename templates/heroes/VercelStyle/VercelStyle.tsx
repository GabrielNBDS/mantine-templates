import {
	Box,
	Container,
	Group,
	Text,
	Title,
} from '@mantine/core'

export function VercelStyle() {
	return (
		<Box sx={{
			backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'6 0 120 120\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%235c5f66\' fill-opacity=\'0.4\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'3\'/%3E%3Ccircle cx=\'13\' cy=\'13\' r=\'3\'/%3E%3C/g%3E%3C/svg%3E");'
		}}>
			<Container sx={{
				paddingTop: 48,
				paddingBottom: 48,
				maxWidth: 800
			}}>
				<Group direction="column" position="center">
					<Group spacing={1} direction="column" position="center">
						<Title
							sx={{
								fontSize: 48,
								'@media (max-width: 992px)': {
									fontSize: 36
								},
							}}
							align="center"
						>
              SWC
						</Title>
						<Text color="dimmed" sx={{ fontSize: 24, textAlign: 'center' }}>
              Rust-based platform for the Web
						</Text>

					</Group>

					<Text>
            SWC is an extensible Rust-based platform for the next generation of
            fast developer tools. It&apos;s used by tools like Next.js, Parcel,
            and Deno, as well as companies like Vercel, ByteDance, Tencent,
            Shopify, and more.
					</Text>

					<Text>
            SWC can be used for both compilation and bundling. For compilation,
            it takes JavaScript / TypeScript files using modern JavaScript
            features and outputs valid code that is supported by all major
            browsers.
					</Text>
				</Group>
			</Container>
		</Box>
	)
}
