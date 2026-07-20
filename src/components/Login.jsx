import {useState} from 'react';
const Login = () => {
    let [form, setForm] = useState({
        username: '',
        password: ''
    });
    function handleChange(){

    }
    function handleSubmit(){

    }
    return (
        <form>
            <input type="text" placeholder="username" value="" name="" onChange={}/><br /><br />
            <input type="text" placeholder="password" value="" name="" onChange={}/><br /><br />
            <button>Submit</button>
        </form>
    )
}

export default Login;