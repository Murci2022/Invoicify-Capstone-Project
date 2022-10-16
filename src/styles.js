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
		color:white;
		list-style: none;
		
	}
	a:hover {
		color:red;
	}
	.my__link {
		background-color: red;
		color: white;
		list-style: none;
		
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
	height: 90vh;
	background-color: #D3D3D3;
	
}

table {
	width: 100%;
	table-layout: fixed;
    border-collapse: collapse;
    word-wrap: break-word;
}

th,
td {
   padding: 8px;
   border: 1px solid #fff;
  font-size: 1rem;
  text-align: center;
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
	height: 40px;
	background-color: black;
	color: white;
	
}

.invoice__btn-print {
	width: 180px;
  height: 60px;
  transition: 1s ease-in-out;
  border: 1px solid #91C9FF;
  border-radius: 5px;
  outline: none;
  background: #fae;
  color: #000;
  font-size: 24px; 
  cursor: pointer;

}

.invoice__btn {
	width: 180px;
  height: 60px;
  transition: 1s ease-in-out;
  border: 1px solid #91C9FF;
  border-radius: 5px;
  outline: none;
  background: white;
  color: #000;
  font-size: 24px; 
  cursor: pointer;

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
