import React from 'react'
import { useDispatch } from 'react-redux'

import { selectDay } from '../../../../store/ducks/ui/actions'
import { SubTitle } from '../../../../styles'

const Dia: React.FC = () => {
	const dispatch = useDispatch()

	const selectDiaHandler = () => {
		console.log('funcionou')
		dispatch(selectDay(undefined))
	}

	return (
		<div
			id="resultados"
			style={{
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'center',
				alignItems: 'center',
				width: '100%',
				cursor: 'pointer'
			}}
			onClick={selectDiaHandler}
		>
			<img
				src={require('../../../../assets/imgs/logo.png')}
				style={{ width: 30, height: 30, marginRight: '1em' }}
			/>
			<div style={{ display: 'flex', flexDirection: 'column' }}>
				<SubTitle>18/02/2020</SubTitle>
				<span>Maxima: 35º</span>
				<span>Minima: 35º</span>
			</div>
		</div>
	)
}

export default Dia
