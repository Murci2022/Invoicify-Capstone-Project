import Head from 'next/head';

import Layout from '../components/Layout';

export default function HomePage() {
	return (
		<>
			<Head>
				<title key="title">My Project</title>
				<meta key="description" name="description" content="This is my project" />
			</Head>
			<Layout>
				<h1>Welcome to Invoicify!!!!</h1>
			</Layout>
		</>
	);
}
