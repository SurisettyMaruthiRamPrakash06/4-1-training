import {useState} from 'react';
const Login = () => {
    let [form, setForm] = useState({
        username: '',
        password: ''
    });
    function handleChange(e){
        setForm({...form, [e.target.name]: e.target.value});
    }
    function handleSubmit(e){
        e.preventDefault();
        console.log(form);
        // Handle form submission logic here
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="username" value={form.username} name="username" onChange={handleChange}/><br /><br />
            <input type="text" placeholder="password" value={form.password} name="password" onChange={handleChange}/><br /><br />
            <button onClick={handleSubmit}>Submit</button>
        </form>
    )
}

export default Login;