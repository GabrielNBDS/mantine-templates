import fs from 'fs'
import path from 'path'

function convertSlug(string: string) {
	const splitted = string
		.replace(/([a-z0-9])([A-Z])/g, '$1 $2')
		.toLowerCase()
		.split(' ')
	return splitted.join('-')
}

function convertName(string: string) {
	return string
		.replace(/([a-z0-9])([A-Z])/g, '$1 $2')
}

export function getAllComponents(...dir) {
	const rootFolder = path.join('templates', ...dir)
	const paths = fs.readdirSync(rootFolder)

	console.log(paths)

	return paths
		.map((componentName) => {
			const componentDirectory = path.join(rootFolder, componentName)
			const componentPath = path.join(componentDirectory, `${componentName}.tsx`)

			if (fs.lstatSync(componentDirectory).isDirectory()) {
				const code = fs.readFileSync(componentPath, 'utf8')
				return {
					title: convertName(componentName),
					template: componentName,
					code,

				}
			}

			return null
		}).filter(c => c)
}
