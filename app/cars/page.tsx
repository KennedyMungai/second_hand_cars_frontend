'use client'
import Card from '@/components/Card'
import { useEffect, useState } from 'react'

type Props = {}

const Cars = (props: Props) => {
	const [cars, setCars] = useState<any[]>([])
	const [brand, setBrand] = useState('')
	const [isPending, setIsPending] = useState(true)

	useEffect(() => {
		fetch(`https://localhost:8000/cars?brand=${brand}`)
			.then((res) => res.json())
			.then((json) => setcars(json))
	}, [brand])

	const handleChangeBrand = (e) => {
		setCars([])
		setBrand(e.target.value)
		setIsPending(true)
	}

	return (
		<div>
			<h2 className='font-bold font-mono text-lg text-center my-4'>
				Cars - {brand ? brand : 'All Brands'}
			</h2>
			<div className='mx-8'>
				<label htmlFor='cars'>Choose a brand:</label>
				<select name='cars' id='cars' onChange={handleChangeBrand}>
					<option value=''>All Cars</option>
					<option value='Fiat'>Fiat</option>
					<option value='Citroen'>Citroen</option>
					<option value='Renault'>Renault</option>
					<option value='Opel'>Opel</option>
				</select>
			</div>
		</div>
	)
}

export default Cars
