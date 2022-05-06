import { useAuth0 } from "@auth0/auth0-react";
import { BiLogOut } from 'react-icons/bi'

export default function LogoutButton() {

    const {logout} = useAuth0()

    return (
        <button onClick={() => logout()}>Sing Out</button>
    )
}