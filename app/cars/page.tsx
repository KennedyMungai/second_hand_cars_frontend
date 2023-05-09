'use client'
import Card from '@/components/Card'
import { useEffect, useState } from 'react'

type Props = {}

const Cars = (props: Props) => {
	const [cars, setcars] = useState<any[]>([])
	const [brand, setBrand] = useState('')
	const [isPending, setIsPending] = useState(true)

	return <div>Cars</div>
}

export default Cars
