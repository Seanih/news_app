import styles from '../styles/employee.module.scss';

const employee = ({ employee }) => {
	return (
		<div className='page-container'>
			<div className={styles.main}>
				<h1>Employee of the month</h1>
				<div className={styles.employeeOfTheMonth}>
					<h3>{employee.name}</h3>
					<h6>{employee.position}</h6>
					<img src={employee.image} alt='' />
					<p>{employee.description}</p>
				</div>
			</div>
		</div>
	);
};

export const getServerSideProps = async pageContext => {
	const apiResponse = await fetch(
		'https://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth'
	);

	const employee = await apiResponse.json();

	return {
		props: {
			employee,
		},
	};
};

export default employee;
