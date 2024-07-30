// pages/index.tsx
import Head from "next/head";

const Home: React.FC = () => {
	return (
		<div>
			<Head>
				<title>My Blog</title>
				<meta name="description" content="A Next.js blog" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<h1>Welcome to My Blog</h1>
				<p>This is the home page of my Next.js blog.</p>
			</main>
		</div>
	);
};

export default Home;
