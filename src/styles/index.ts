import styled from 'styled-components'

export const Page = styled.div`
	display: flex;
	height: 100%;
	width: 100%;
	flex-direction: column;
	background-color: #eee;
	justify-content: center;
	align-items: center;
`

export const Title = styled.h1`
	color: #333;
	text-align: center;
	font-size: 36px;
`
export const SubTitle = styled.h1`
	font-size: 10px;
	color: #777;
	height: 30px;
`
export const PesquisaInput = styled.input`
	border-radius: 100px;
	border: 1px solid #777;
	height: 2em;
	padding-left: 10px;
	padding-right: 10px;
	text-align: center;
`
export const Spacer = styled.div<{ height?: string }>`
	height: ${props => props?.height || '2em'};
`
export const Button = styled.button`
	background-color: #09446E;
  color: white;
  border: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
	border-radius: 1000px;
`

export const Results = styled.ul`

`

export const Forecast = styled.li`
	list-style-type: none;
`