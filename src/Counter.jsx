import React from 'react'
import { useStore } from './store'

export default function Counter() {
	const [state] = useStore()

	return (
		<section className="counter">
			<div className="value">{state.counter}</div>
		</section>
	)
}
