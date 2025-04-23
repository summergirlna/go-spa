import {useEffect, useState} from "react";
import axios from "axios";
import keycloak from "./keycloak.ts";

type User = {
    id: number
    name: string
}

function App() {
    const [authenticated, setAuthenticated] = useState(false)
    const [users, setUsers] = useState<User[]>([])

    useEffect(() => {
        keycloak.init({ onLoad: 'login-required' }).then(auth => {
            setAuthenticated(auth)

            if (auth) {
                axios.get('/api/users', {
                    headers: {
                        Authorization: `Bearer ${keycloak.token}`,
                    }
                }).then(res => {
                    setUsers(res.data)
                }).catch(err => {
                    console.error('API error:', err)
                })
            }

        })

    }, [])

    if (!authenticated) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <h1>ユーザ一覧</h1>
            <ul>
                {users.map(user=> (
                    <li key={user.id}>{user.id}: {user.name}</li>
                ))}
            </ul>

            <button onClick={() => keycloak.logout()}>ログアウト</button>
        </div>
    )
}

export default App