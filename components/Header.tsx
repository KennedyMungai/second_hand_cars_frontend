import Link from 'next/link'
import React from 'react'

type Props = {}

const Header = (props: Props) => {
	return (
		<nav className='flex justify-between relative items-center font-mono h-16'>
			<Link href={'/'} className='pl-8 text-xl font-bold'>
				Second Hand Cars
			</Link>
			<div className='pr-8 font-semibold'>
				<Link href='/'>Home</Link>
				<Link href='/cars'>Cars</Link>
				<Link href='/newcar'>New Car</Link>
			</div>
		</nav>
	)
}

export default Header
