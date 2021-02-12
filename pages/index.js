import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<div className='page-container'>
			<div className={styles.main}>
				<h1>Next JS News App</h1>
				<h3>Here is where you can find all of the latest articles</h3>
			</div>
		</div>
	);
}
