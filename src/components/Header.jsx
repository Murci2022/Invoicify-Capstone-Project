import Link from 'next/link';

import InvoiceHead from './Positioning/InvoiceHead';

export default function Header() {
	return (
		<header>
			<nav>
				<InvoiceHead>
					<Link href="/">Home</Link>

					<Link href="/createInvoice">Create Invoice</Link>

					<Link href="/about">About me</Link>
				</InvoiceHead>
			</nav>
		</header>
	);
}
