import Link from 'next/link';

import Nav from './Positioning/Nav';

export default function Header() {
	return (
		<header>
			<Nav>
				<Link href="/">Home</Link>

				<Link href="/createInvoice">Create Invoice</Link>

				<Link href="/about">About me</Link>
			</Nav>
		</header>
	);
}
