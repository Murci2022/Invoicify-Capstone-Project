import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import StyledButton from '../components/Button/styled';
import LandingPageBody from '../components/Positioning/LandingPageBody';
import LandingPageContainer from '../components/Positioning/LandingPageContainer';
import {imageLoader} from '../utils/ImageLoader';

export default function HomePage() {
	return (
		<>
			<Head>
				<title key="title">My Project</title>
				<meta key="description" name="description" content="This is my project" />
			</Head>
			<>
				<LandingPageBody>
					<LandingPageContainer>
						<h1>Welcome to Invoicify!!!!</h1>
						<p>Lorem ipsum</p>
						<StyledButton>
							<Link href="/createInvoice">
								<h4>Let``s Start</h4>
							</Link>
						</StyledButton>
					</LandingPageContainer>
					<LandingPageContainer>
						<Image
							src="/2.png"
							alt="mobile view"
							width={300}
							height={500}
							objectFit="cover"
							loader={imageLoader}
						/>
					</LandingPageContainer>
				</LandingPageBody>
			</>
		</>
	);
}
