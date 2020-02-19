import React from 'react'
import { useDispatch } from 'react-redux'

import { selectDay } from '../../../../store/ducks/ui/actions'
import { Forecast } from '../../../../store/ducks/forecast/types'
import { SubTitle } from '../../../../styles'

import {DiaIcon} from '../../styles'

interface Props {
	title?: string
	dia?: Forecast[]
}

const Dia: React.FC<Props> = ({ title = 'Não identificado', dia }: Props) => {
	const dispatch = useDispatch()
	const [state, setState] = React.useState({
		max: 0,
		min: 0,
		icon: ''
	})

	React.useEffect(() => {
		var max = -1
		var min = 1000
		var icon = !!dia ? `http://openweathermap.org/img/wn/${dia[0].icon}@2x.png` : 'http://openweathermap.org/img/wn/10d@2x.png'


		dia?.forEach((previsao: Forecast) => {
			if (previsao.temp_max > max) {
				max = previsao.temp_max
			}
			if (previsao.temp_min < min) {
				min = previsao.temp_min
			}
		})
		setState({ max, min, icon })
	}, [dia])

	const selectDiaHandler = () => {
		console.log('funcionou')
		dispatch(selectDay(dia))
	}

	const titleDia =
		title != 'Não identificado'
			? title.substring(8, 10) +
			  '/' +
			  title.substring(5, 7) +
			  '/' +
			  title.substring(0, 4)
			: 'Não identificado'

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
			<DiaIcon
				src={state.icon}
				alt={'img-weather'}
			/>
			<div style={{ display: 'flex', flexDirection: 'column' }}>
		<SubTitle>{titleDia}</SubTitle>
				<span>Máxima: {state.max.toFixed(1)}º</span>
				<span>Minima: {state.min.toFixed(1)}º</span>
			</div>
		</div>
	)
}

export default Dia
