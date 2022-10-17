import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import {useState} from 'react';
import styled from 'styled-components';
import {ThemeProvider} from 'styled-components';

import LandingPageBody from '../components/Positioning/LandingPageBody';
import LandingPageContainer from '../components/Positioning/LandingPageContainer';
import LandingPageSwitchHolder from '../components/Positioning/LandingPageSwitchHolder';
import {imageLoader} from '../utils/ImageLoader';

const StyledApp = styled.div`
	background-color: ${props => props.theme.body};
	color: ${props => props.theme.color};
`;
const StyledText = styled.p`
	color: ${props => props.theme.color};
`;
const LandingButton = styled.button`
	padding: 0 10px;
	margin: 10px 0;
	background-color: ${props => props.theme.buttoncolor};
	color: ${props => props.theme.buttontext};
`;
const ChangeThemeButton = styled.button`
	background-color: ${props => props.theme.buttontext};
	color: ${props => props.theme.buttoncolor};
`;

const WhiteLine = styled.div`
	padding: 20px 0 0 0;
	border-top: ${props => props.theme.bordertop};
`;

const darkTheme = {
	body: '#141A29',
	color: 'white',
	bordertop: '1px solid white',
	buttoncolor: 'white',
	buttontext: 'black',
};
const lightTheme = {
	body: '#C1D4F0',
	color: '#141A29',
	bordertop: '1px solid #141A29',
	buttoncolor: '#141A29',
	buttontext: '#CDE1FF',
};

export default function HomePage() {
	const [theme, setTheme] = useState('dark');
	const isMyTheme = theme === 'dark';

	const toggleTheme = () => {
		setTheme(isMyTheme ? 'light' : 'dark');
		console.log(isMyTheme);
	};

	return (
		<ThemeProvider theme={isMyTheme ? darkTheme : lightTheme}>
			<StyledApp>
				<LandingPageBody>
					<Head>
						<title key="title">My Project</title>
						<meta key="description" name="description" content="This is my project" />
					</Head>
					<LandingPageSwitchHolder>
						<button className="mode__btn" onClick={toggleTheme}>
							{isMyTheme === true ? (
								<ChangeThemeButton>dark mode</ChangeThemeButton>
							) : (
								<ChangeThemeButton>light mode</ChangeThemeButton>
							)}
						</button>
					</LandingPageSwitchHolder>{' '}
					<LandingPageContainer>
						<WhiteLine>
							{isMyTheme === true ? (
								<Image
									src="/my-Logo.png"
									alt="mobile view"
									width={300}
									height={70}
									objectFit="cover"
									loader={imageLoader}
								/>
							) : (
								<Image
									src="/Union.png"
									alt="mobile view"
									width={300}
									height={70}
									objectFit="cover"
									loader={imageLoader}
								/>
							)}
						</WhiteLine>

						<StyledText>
							Invoicify is an easy solution, to create your invoices in a simple way,
							even from your mobil-device. Print out, send it via email or save it in
							the local storage. If you Sign Up, you will have your own account,
							protected by a username & password then you can store all your created
							invoices in the database.
						</StyledText>

						<WhiteLine>
							<LandingButton>
								<Link href="/createInvoice">
									<h3>Cool, I want to try it!</h3>
								</Link>
							</LandingButton>
						</WhiteLine>
					</LandingPageContainer>
				</LandingPageBody>
			</StyledApp>
		</ThemeProvider>
	);
}
