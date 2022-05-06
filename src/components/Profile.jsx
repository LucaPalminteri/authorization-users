import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import LogoutButton from './LogoutButton'

export default function Profile() {

    const [menu,setMenu] = useState(false)
    const { user, isAuthenticated, isLoading} = useAuth0()

    if (isLoading) {
        return <div>Loading...</div>
    }

    function toggleMenu() {
        setMenu(prev => !prev)
    }

    return (
        isAuthenticated &&
        <div className="profile">
            <img onClick={toggleMenu} src={user.picture} alt={user.name} />
            {menu ?
            <div className="user-info">
                <img src={user.picture} alt={user.name}/>
                <h2>{user.name}</h2>
                <p>{user.email}</p>
                <hr />
                <LogoutButton/>
            </div> :
            <></>}
        </div>
    )
}