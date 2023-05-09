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

	return <div>Cars</div>
}

export default Cars
