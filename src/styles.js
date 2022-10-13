import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`

	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}

	html {
		font-family: 'Raleway', sans-serif;
		font-size: 16px;
	}

	body {
		margin: 0;
		font-size: 1rem;
	}

	a {
		list-style: none;
		color:white;
	}
	a:hover {
		
		color:red;
	}
	.my__link {
		background-color: red;
		list-style: none;
		color: white;
	}
		


.A4view {
  display: block;
  position: relative;
  width: 49.5rem;
  height: 68.5rem;
  margin: 2.3rem auto;
  border: 1px #D3D3D3 solid;
  border-radius: 5px;
  background: whitesmoke;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

.paper {
	background-color: #D3D3D3;
	height: 90vh;
}

table {
	table-layout: fixed;
  border-collapse: collapse;
  width: 100%;
  word-wrap: break-word;
}

th,
td {
  border: 1px solid #ffffff;
  text-align: center;
  padding: 8px;
  font-size: 1rem;
  word-wrap: break-word;
}

th {
  background-color: rgb(117, 201, 250);
}

td {
  background-color: rgb(205, 235, 253);
}

label {
	margin-bottom:2px;
	color:white;
	font-size: 12px;

}

select{
	padding: 5px;
	border-radius: 5px;
	background-color: #fae;;
	color: black;
	

}

.option {
	background-color: black;
	color: white;
	height: 40px;
}

.btn {
  width: 180px;
  height: 60px;
  cursor: pointer;
  background: transparent;
  border: 1px solid #91C9FF;
  outline: none;
  transition: 1s ease-in-out;
}

.invoice__btn {
	width: 180px;
  height: 60px;
  cursor: pointer;
  background: transparent;
  border: 1px solid #91C9FF;
  outline: none;
  transition: 1s ease-in-out;
  font-size: 24px;

}



h2 {
	font-family: rale;
}

.invoice__payment {
	position: absolute;
	bottom: 0;
	background-color: red;



	border: 1px dotted black;
}

.invoice__head{
	display:flex;
	justify-content: space-around;
	padding: 15px;
	border-top: 1px solid black;
	border-bottom: 1px solid black;
	font-size: 16px;
}

.invoice__payment-holder{
	
	border-top: 1px solid black;
	border-bottom: 1px solid black;
}
	
`;
