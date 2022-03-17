

import { ReactNode } from 'react'
import { SWRConfig } from 'swr'
import api from '../lib/axios'

export const fetcher = async (url: string, override = false) => {
	if(override) {
		return (await api.get(url)).data
	}

	api.get(`${process.env.NEXT_PUBLIC_API_URL}${url}`).then(res => res.data)
}

interface Props {
  children: ReactNode
}

function SWRProvider({ children }: Props) {
	return (
		<SWRConfig
			value={{
				fetcher,
			}}
		>
			{children}
		</SWRConfig>
	)
}

export default SWRProvider
