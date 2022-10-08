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
						<h1> INVOICIFY</h1>
						<p>
							you can create your invoices in a simple way, on your lap-top or from
							your mobil-device == print out, send it or save it in your local
							storage.
						</p>
						<StyledButton>
							<Link href="/createInvoice">
								<h3>Let``s Start</h3>
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
