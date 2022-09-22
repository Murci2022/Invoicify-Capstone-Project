import Link from 'next/link';

export default function Header() {
	return (
		<header>
			<nav>
				<Link href="/">Home</Link>
				<br />
				<Link href="/main">Form</Link>
				<br />

				<Link href="/about">About me</Link>
				<br />
			</nav>
		</header>
	);
}
