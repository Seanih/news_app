import { useRouter } from 'next/router';
import styles from '../styles/Toolbar.module.scss';
import Link from 'next/link';

export const Toolbar = () => {
	const router = useRouter();

	return (
		<div className={styles.main}>
			<Link href='/'>
				<span className={styles.link}>Home</span>
			</Link>
			<Link href='/feed/1'>
				<span className={styles.link}>Feed</span>
			</Link>
			<Link href='/employee'>
				<span className={styles.link}>EOM</span>
			</Link>
			<a href='https://twitter.com' target='_blank' className={styles.link}>
				<span>Twitter</span>
			</a>
		</div>
	);
};
