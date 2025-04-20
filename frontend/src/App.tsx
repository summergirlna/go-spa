// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
//
// function App() {
//   const [count, setCount] = useState(0)
//
//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }
//
// export default App

import {useEffect, useState} from "react";
import axios from "axios";

type User = {
    id: number
    name: string
}

function App() {
    const [users, setUsers] = useState<User[]>([])

    useEffect(() => {
        axios.get<User[]>('http://localhost:8080/users')
            .then(res => setUsers(res.data))
            .catch(err => console.error('API error: ', err))
    }, [])

    return (
        <div>
            <h1>ユーザ一覧</h1>
            <ul>
                {users.map(user=> (
                    <li key={user.id}>{user.id}: {user.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default App