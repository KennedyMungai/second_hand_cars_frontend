import Link from 'next/link'
import React from 'react'

type Props = {}

const Header = (props: Props) => {
	return (
		<nav className='flex justify-between relative items-center font-mono h-16'>
			<Link href={'/'} className='pl-8 text-xl font-bold'>
				Second Hand Cars
			</Link>
		</nav>
	)
}

export default Header
