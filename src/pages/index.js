import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import BigLetter from '../components/Positioning/BigLetter';
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
						<p>
							<BigLetter>Invoicify</BigLetter> is an easy solution, to create your
							invoices in a simple way, even from your mobil-device. Print out, send
							it via email or save it in the local storage. If you Sign Up, you will
							have your own account, protected by a username & password then you can
							store all your created invoices in the database.
						</p>
						<button>
							<Link href="/createInvoice">
								<h3>Cool, I want to try it!</h3>
							</Link>
						</button>
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
