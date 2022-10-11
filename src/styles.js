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
		
/* 	}
	.page {  
  width: 21cm;
  height: 29.7cm; 
} */

.A4view {
  display: block;
  width: 21cm;
  height: 29.7cm;
  margin: 1cm auto;
  padding: 20px;
  border: 1px #D3D3D3 solid;
  border-radius: 5px;
  background: whitesmoke;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

table {
  border-collapse: collapse;
  width: 100%;
}

th,
td {
  border: 1px solid #ffffff;
  text-align: left;
  padding: 8px;
  font-size: 32px;
}

th {
  background-color: rgb(117, 201, 250);
}

td {
  background-color: rgb(205, 235, 253);
}

	
`;
