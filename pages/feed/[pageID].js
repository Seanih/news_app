import styles from '../../styles/Feed.module.scss';
import Link from 'next/link';

const Feed = ({ pageNumber, articles }) => {
	return (
		<div className='page-container'>
			<div className={styles.main}>
				{/* display all articles */}
				{articles.map((article, index) => (
					<div key={index} className={styles.post}>
						<a href={article.url} target='_blank'>
							<h1>{article.title}</h1>
						</a>
						<p>{article.description}</p>
						{article.urlToImage && <img src={article.urlToImage} />}
					</div>
				))}
			</div>

			{/* determine if 'Previous' button will be active based on current page */}
			<div className={styles.paginator}>
				<Link
					href={
						pageNumber > 1 ? `/feed/${pageNumber - 1}` : `/feed/${pageNumber}`
					}
				>
					<span className={pageNumber === 1 ? styles.disabled : styles.active}>
						Previous Page
					</span>
				</Link>

				<div className={styles.current_page}>#{pageNumber}</div>

				<Link
					href={
						pageNumber < 5 ? `/feed/${pageNumber + 1}` : `/feed/${pageNumber}`
					}
				>
					<span className={pageNumber === 5 ? styles.disabled : styles.active}>
						Next Page
					</span>
				</Link>
			</div>
		</div>
	);
};

export const getServerSideProps = async pageContext => {
	const pageNumber = pageContext.query.pageID;

	if (!pageNumber || pageNumber < 1 || pageNumber > 5) {
		return {
			props: {
				articles: [],
				pageNumber: 1,
			},
		};
	}

	const apiResponse = await fetch(
		`https://newsapi.org/v2/top-headlines?country=us&pageSize=5&page=${pageNumber}`,
		{
			headers: {
				Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`,
			},
		}
	);

	const apiJson = await apiResponse.json();

	const { articles } = apiJson;

	return {
		props: {
			articles,
			pageNumber: Number.parseInt(pageNumber),
		},
	};
};

export default Feed;
