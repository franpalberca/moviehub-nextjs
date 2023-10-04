import LoginPage from "@/app/login/page"
import Private from "@/app/private/page"
import { getSession } from "@auth0/nextjs-auth0"

type Props = {}

const Logic = async (props: Props) => {
    const session = await getSession()
    return (
    <div>
        { !session ? <LoginPage /> : <Private />}
    </div>
  )
}

export default Logic