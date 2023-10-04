import { getSession } from "@auth0/nextjs-auth0";
import Redirect from "../components/redirect/redirect";

const HomePage: React.FC = () => {
	const session = getSession()
	return (
		<div>
			<div
			style={{
				backgroundImage: `url("https://i.postimg.cc/mrCcBc08/1366-2000.jpg")`,
				height: '100vh',
				width: '100%',
			}}></div>
			{!session ? <Redirect to="/login" /> : <Redirect to="/private" />}
		</div>
	);
};

export default HomePage;

