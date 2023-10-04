import {getSession} from '@auth0/nextjs-auth0';
// import Login from '../login/login';
import LoginPage from '@/app/login/page';
import Logic from '../logic/logic';


// type Props = {
//     children: React.ReactNode
// };

const AuthProvider = async () => {
    // const session = await getSession();
    // if (!session) {
        
    // }
    // return (
        return <Logic/>
    // );
};
export default AuthProvider;