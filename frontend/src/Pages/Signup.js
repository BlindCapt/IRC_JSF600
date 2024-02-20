import {useState} from "react";
import { useSignup } from "../hooks/useSignup";

const Signup = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const {signup, error, isLoading} = useSignup();

    const handleSubmit = async (e) => {
        e.preventDefault()

        await signup(email,password);

    }

    return (
        <div>
            <h1>Signup</h1>
            <form onSubmit={handleSubmit} className="signup">
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                <button type="submit" disabled={isLoading}>Signup</button>
                {error && <p>{error}</p>}
            </form>
        </div>
    )
}


export default Signup;