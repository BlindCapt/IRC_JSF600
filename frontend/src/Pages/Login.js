import {useState} from "react";
import {useLogin} from "../hooks/useLogin";

const Login = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const {login, error, isLoading} = useLogin();

    const handleSubmit = async  (e) => {
        e.preventDefault();
        await login(email, password);
    }

    return (
        <div>
            <h1>Signup</h1>
            <form onSubmit={handleSubmit} className="login">
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                <button disabled={isLoading} type="submit">Login</button>
                {error && <p>{error}</p>}
            </form>
        </div>
    )
}


export default Login;