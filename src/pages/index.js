import Head from 'next/head';
import Link from 'next/link';

import BottomLine from '../components/Positioning/BottomLine';
import LandingPageBody from '../components/Positioning/LandingPageBody';
import LandingPageContainer from '../components/Positioning/LandingPageContainer';

export default function HomePage() {
	return (
		<LandingPageBody>
			<Head>
				<title key="title">My Project</title>
				<meta key="description" name="description" content="This is my project" />
			</Head>
			<LandingPageContainer>
				<p>
					Invoicify is an easy solution, to create your invoices in a simple way, even
					from your mobil-device. Print out, send it via email or save it in the local
					storage. If you Sign Up, you will have your own account, protected by a username
					& password then you can store all your created invoices in the database.
				</p>
				<BottomLine>
					<button>
						<Link href="/createInvoice">
							<h3>Cool, I want to try it!</h3>
						</Link>
					</button>
				</BottomLine>
			</LandingPageContainer>
		</LandingPageBody>
	);
}
