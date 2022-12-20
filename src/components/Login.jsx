import React from 'react'

const USERNAME = "username";
const PASSWORD = "password";


export default function Login({ setUser }) {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleSubmit = () => {
        const user = { username, password };

        if (user.username === USERNAME && user.password === PASSWORD) {
            setUser(user);
        }
        else {
            alert("Chala ja bhosdike");
        }
    }


    return (
        <>
            <>
                <h1>Login</h1>

                <input type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <input type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button onClick={handleSubmit}>Login</button>


            </>
        </>
    )
}
