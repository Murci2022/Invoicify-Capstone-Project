import styled from 'styled-components';

const InputCard = styled.div`
	display: flex;
	flex-direction: ${props => (props.row ? 'row' : 'column')};
	width: 300px;
	margin: ${props => (props.margin ? props.margin : '60px 20px 20px 20px')};
	padding: 10px;
	border: 1px dotted black;
	border-radius: 5px;
	background-color: rgba(27, 36, 57, 1);
	list-style: none;
	color: white;
`;

export default InputCard;
