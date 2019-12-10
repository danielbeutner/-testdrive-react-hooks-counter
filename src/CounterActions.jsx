import React from 'react'
import { useStore } from './store'
import * as actions from './store/actions'

export default function ButtonRow() {
	const [, dispatch] = useStore()

	return (
		<>
			<button
				onClick={() => {
					dispatch(actions.increment())
				}}
			>
				Add
			</button>
			<button
				onClick={() => {
					dispatch(actions.decrement())
				}}
			>
				Subtract
			</button>
			<button
				onClick={() => {
					dispatch(actions.reset())
				}}
			>
				Reset
			</button>
		</>
	)
}
