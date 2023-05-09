import Link from 'next/link'

interface Placeholder {
	brand: string
	price: number
	make: string
	year: number
	km: number
	cm3: number
	_id: string
}

const Card = ({ brand, price, make, year, km, cm3, _id }: Placeholder) => {
	return (
		<Link href={`/cars/${_id}`}>
			<div className='shadow-lg p-5 flex flex-col bg-FarmWhite rounded-lg transition ease-in-out hover:scale-105 duration-300 font-mono'>
				<div className='font-bold text-center text-lg text-FarmNavy'>
					<span className='text-FarmLime'>{brand}</span> {make}
				</div>

				<div>Year: {year}</div>
				<div>
					Price:{' '}
					<span className='font-semibold text-orange-600'>
						{price}
					</span>
				</div>
				<div>Km: {km}</div>
				<div>Engine: {cm3}cm3</div>
			</div>
		</Link>
	)
}
export default Card
