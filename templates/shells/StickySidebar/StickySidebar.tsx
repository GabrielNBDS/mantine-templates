import React, { useState } from 'react'
import { Navbar, Group, useMantineTheme, Anchor, Container, Image, Box, Text, Divider, Burger, useMantineColorScheme, Menu, Avatar } from '@mantine/core'
import { FiBell, FiDatabase, FiDollarSign, FiKey, FiLogOut, FiSettings, FiShield, FiUser } from 'react-icons/fi'
import Link from 'next/link'
import { IconType } from 'react-icons'

interface HeaderProps {
	showBurger: boolean
	setShowNavbar: React.Dispatch<React.SetStateAction<boolean>>
}

function CustomHeader({ showBurger, setShowNavbar }: HeaderProps) {
	const theme = useMantineTheme()
	const { colorScheme } = useMantineColorScheme()
	const dark = colorScheme === 'dark'


	return (
		<Box sx={{ position: 'sticky', top: '0px', width: '100%', zIndex: 999, background: dark ? theme.colors.dark[7] : '#FFFFF' }}>
			<Container size="lg">
				<Group direction="column" sx={{ padding: 8, width: '100%' }}>
					<Group sx={{ width: '100%', justifyContent: 'space-between' }}>
						<Group>
							<Burger
								sx={{
									display: 'none',

									'@media (max-width: 1145px)': {
										display: 'block'
									}
								}}
								size="sm"
								color={theme.colors.gray[6]}
								opened={showBurger}
								onClick={() => setShowNavbar(current => !current)}
							/>

							<Link href="/">
								<Group sx={{ cursor: 'pointer' }}>
									<Image sx={{ width: 40 }} src="/assets/mantine-logo.svg" />

									<Text
										sx={{
											'@media (max-width: 576px)': {
												display: 'none'
											}
										}}
									>
										Mantine Templates
									</Text>
								</Group>
							</Link>
						</Group>

						<Menu
							control={
								<Avatar
									size="md"
									radius="xl"
									sx={{
										cursor: 'pointer',
									}}
								/>
							}

							placement="end"
							zIndex={1000}
						>
							<Menu.Item icon={<FiSettings size={14} />}>Settings</Menu.Item>
							<Menu.Item icon={<FiLogOut size={14} />}>Logout</Menu.Item>
						</Menu>
					</Group>
				</Group>
			</Container>
			<Divider />
		</Box>
	)
}

const data = [
	{ link: '#', label: 'Notifications', Icon: FiBell },
	{ link: '#', label: 'Billing', Icon: FiDollarSign },
	{ link: '#', label: 'Security', Icon: FiShield },
	{ link: '#', label: 'SSH Keys', Icon: FiKey },
	{ link: '#', label: 'Databases', Icon: FiDatabase },
	{ link: '#', label: 'Authentication', Icon: FiUser },
	{ link: '#', label: 'Other Settings', Icon: FiSettings },
]

interface CustomAnchorProps {
	link: string
	label: string
	Icon?: IconType
}

function CustomAnchor({ link, label, Icon }: CustomAnchorProps) {
	const theme = useMantineTheme()

	return (
		<Link href={link} passHref>
			<Anchor
				sx={{
					...theme.fn.focusStyles(),
					textDecoration: 'none',
					display: 'flex',
					alignItems: 'center',
					fontSize: theme.fontSizes.sm,
					color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7],
					padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
					borderRadius: theme.radius.sm,
					fontWeight: 500,

					'&:hover': {
						backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
						color: theme.colorScheme === 'dark' ? theme.white : theme.black,
					},
				}}
			>
				<Group>
					{Icon && <Icon />}

					{label}
				</Group>
			</Anchor>
		</Link>
	)
}

interface CustomNavbarProps {
	showNavbar: boolean

}

function CustomNavbar({ showNavbar }: CustomNavbarProps) {
	const theme = useMantineTheme()

	return (
		<Navbar
			p="xs"
			sx={{
				position: 'sticky',
				overflow: 'auto',
				height: 'calc(100vh - 57px)',
				top: '57px',
				width: 250,
				'@media (max-width: 1145px)': {
					minWidth: '100vw',
					display: showNavbar ? 'block' : 'none'
				}
			}}
		>
			<Navbar.Section>
				{data.map(link => (
					<CustomAnchor key={link.label} {...link} />
				))}
			</Navbar.Section>

			<Navbar.Section
				sx={{
					paddingTop: theme.spacing.md,
					marginTop: theme.spacing.md,
				}}
			>
				<CustomAnchor link="#" label='Change account'  />

				<CustomAnchor link="#" label='Go Back'  />
			</Navbar.Section>
		</Navbar>
	)
}

export function StickySidebar() {
	const [showNavbar, setShowNavbar] = useState(false)

	return (
		<Box>
			<CustomHeader showBurger={showNavbar} setShowNavbar={setShowNavbar} />

			<Container px="0" size="lg">
				<Box sx={{ position: 'relative', display: 'flex', flexWrap: 'nowrap' }}>
					<CustomNavbar showNavbar={showNavbar} />
					{/* children here */}
				</Box>
			</Container>
		</Box>
	)
}
