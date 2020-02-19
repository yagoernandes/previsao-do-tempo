import styled from 'styled-components'

export const Page = styled.div`
	display: flex;
	height: 100%;
	width: 100%;
	flex-direction: column;
	background-color: #ddd;
	justify-content: center;
	align-items: center;
`

export const Title = styled.h1`
	color: #333;
	/* text-align: center; */
	font-size: 2em;
`
export const SubTitle = styled.h1`
	font-size: 1em;
	/* text-align: center; */
	color: #777;
`
export const Error = styled.span`
	font-size: 1em;
	/* text-align: center; */
	color: #900;
`

export const Spacer = styled.div<{ height?: string }>`
	height: ${props => props?.height || '2em'};
`

export const Button = styled.button`
	background-color: #09446e;
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

export const Link = styled.h1`
	font-size: 1em;
	color: #777;
	text-decoration: underline;
	cursor: pointer;
`
