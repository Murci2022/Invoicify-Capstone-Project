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
`;
