import Link from 'next/link';

import Wrapper from './Positioning/Wrapper';

export default function Header() {
	return (
		<header>
			<nav>
				<Wrapper>
					<Link href="/">Home</Link>

					<Link href="/createInvoice">Create Invoice</Link>

					<Link href="/about">About me</Link>
				</Wrapper>
			</nav>
		</header>
	);
}
