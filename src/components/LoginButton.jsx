import { useAuth0 } from "@auth0/auth0-react";
import { BiLogIn } from 'react-icons/bi'

export default function LoginButton() {
    

    const {loginWithRedirect} = useAuth0()

    return (
        <button onClick={() => loginWithRedirect()}>Sing In</button>
    )
}