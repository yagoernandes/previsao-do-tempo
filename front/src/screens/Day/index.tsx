import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Line } from 'react-chartjs-2'

import { loadingSelector } from '../../store/ducks/ui/selectors'
import { goBack } from '../../store/ducks/ui/actions'
import { SubTitle, Page, Title, Button } from '../../styles'

import { daySelector } from '../../store/ducks/ui/selectors'
import { Forecast } from '../../store/ducks/forecast/types'

interface StateProps {
	name: string
	dt_txt: string
	icon: string
	max: number
	min: number
	humidity: number
	speed: number
	deg: number
	chart_data: number[]
	chart_info: Forecast[]
	labels: string[]
}

const Day: React.FC = () => {
	const dispatch = useDispatch()
	const loading = useSelector(loadingSelector)
	const dia = useSelector(daySelector)
	const [state, setState] = React.useState<StateProps>({
		name: '',
		dt_txt: '',
		icon: '',
		max: 0,
		min: 0,
		humidity: 0,
		speed: 0,
		deg: 0,
		chart_data: [],
		chart_info: [],
		labels: []
	})

	const goBackAction = () => {
		dispatch(goBack())
	}

	React.useEffect(() => {
		if (!!dia) {
			var max = -1
			var min = 1000
			var labels: string[] = []
			var chart_data: number[] = []
			var chart_info: Forecast[] = []

			dia?.forEach((previsao: Forecast) => {
				if (previsao.temp_max > max) {
					max = previsao.temp_max
				}
				if (previsao.temp_min < min) {
					min = previsao.temp_min
				}
				labels.push(previsao.dt_txt.substring(11,16))
				chart_data.push(previsao.temp)
				chart_info.push(previsao)
			})

			setState({
				name: dia[0].name,
				dt_txt: dia[0].dt_txt,
				icon: `http://openweathermap.org/img/wn/${dia[0].icon}@2x.png`,
				max,
				min,
				deg: dia[0].deg,
				humidity: dia[0].humidity,
				speed: dia[0].speed,
				chart_data,
				chart_info,
				labels
			})
		}
	}, [dia])

	return (
		<Page>
			{loading ? (
				<SubTitle>Carregando...</SubTitle>
			) : (
				<div>
					<div
						style={{
							width: '80%',
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'space-between',
							marginTop: '2em'
						}}
					>
						<div>
							<Title>
								{state.name}{' '}
								{state.dt_txt.substring(8, 10) +
									'/' +
									state.dt_txt.substring(5, 7) +
									'/' +
									state.dt_txt.substring(0, 4)}
							</Title>
							<SubTitle>Máxima: {state.max}ºC</SubTitle>
							<SubTitle>Mínima: {state.min}ºC</SubTitle>
							<SubTitle>Umidade: {state.humidity}%</SubTitle>
							<SubTitle>
								Vento: {state.speed}m/s ({state.deg}º)
							</SubTitle>
						</div>
						<img
							src={state.icon}
							style={{ width: '5em', height: '5em' }}
							alt={'img-weather'}
						/>
					</div>
					<Line
						width={30}
						height={15}
						options={{
				tooltips: {
					cornerRadius: 4,
					callbacks: {
						label: (tooltipItems:any, data:any) => {
							return '';
						},
						title: (tooltipItems:any, data:any) => {
							const value = data.datasets[0].additionalInfo[tooltipItems[0].index]
							return `Temperatura: ${tooltipItems[0].yLabel} ºC\nSensação: ${value.feels_like} ºC\nMáxima: ${value.temp_max} ºC\nMínima: ${value.temp_min} ºC\nVento: ${value.speed} m/s ${value.deg}º\nUmidade: ${value.humidity}%\n${value.description}
							`;
						},
					}
				},
				legend: {
					display: false
				},
				maintainAspectRatio: true
			}}
						data={{
							labels: state.labels,
							datasets: [
								{
									label: 'Temperatura',
									fill: false,
									lineTension: 0.1,
									backgroundColor: 'rgba(153,0,0,0.4)',
									borderColor: '#900',
									borderCapStyle: 'butt',
									borderDash: [],
									borderDashOffset: 0.0,
									borderJoinStyle: 'round',
									pointBorderColor: '#fff',
									pointBackgroundColor: '#900',
									pointBorderWidth: 1,
									pointHoverRadius: 10,
									pointHoverBackgroundColor: '#900',
									pointHoverBorderColor: 'rgba(220,220,220,1)',
									pointHoverBorderWidth: 2,
									pointRadius: 1,
									pointHitRadius: 10,
									data: state.chart_data,
									additionalInfo: state.chart_info
								}
							]
						}}
					/>
					<Button onClick={goBackAction}>Voltar</Button>
				</div>
			)}
		</Page>
	)
}

export default Day
