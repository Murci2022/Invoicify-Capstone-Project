import styled from 'styled-components';

const InputCard = styled.div`
	display: flex;
	flex-direction: ${props => (props.row ? 'row' : 'column')};
	width: 300px;
	margin: ${props => (props.margin ? props.margin : '60px 20px 20px 20px')};
	padding: 5px;
	border: 1px black;
	list-style: none;
	border: 1px dotted black;
`;

export default InputCard;
