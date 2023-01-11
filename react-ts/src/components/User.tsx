import { useState } from "react"

interface User {
    id: string
    name: string
}

const User = () => {
    const [user, setUser] = useState < User > ();

    return (
        <div className="border mt-5 p-3">
            <h1>User</h1>
            <button className="btn btn-outline-primary"
                onClick={() => {
                    const newUser = {
                        id: '123',
                        name: 'John'
                    }
                    setUser(newUser)
                }}
            >Add user</button>
            <button className="btn btn-outline-danger"
                onClick={() => setUser(undefined)}
            >Remove user</button>
            {
                (!user) ?
                    <pre>No user</pre> :
                    <pre>{JSON.stringify(user, null, 2)}</pre>
            }
        </div>

    )
}

export default User