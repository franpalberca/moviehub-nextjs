import Redirect from "../components/redirect/redirect";

const HomePage: React.FC = () => {

	return (
		<div>
			<div
		style={{
				backgroundImage: `url("https://i.postimg.cc/mrCcBc08/1366-2000.jpg")`,
				height: '100vh',
				width: '100%',
			}}></div>
			<Redirect to="/login" />
		</div>
	);
};

export default HomePage;

