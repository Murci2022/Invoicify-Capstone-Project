import Link from 'next/link';

import Nav from './Positioning/Nav';

export default function Header() {
	return (
		<header>
			<Nav>
				<Link href="/">
					<li>Home</li>
				</Link>

				<Link style={{textDecoration: 'none'}} href="/createInvoice">
					<li>Create Invoice</li>
				</Link>

				<Link href="/about">
					<li>About me</li>
				</Link>
			</Nav>
		</header>
	);
}
