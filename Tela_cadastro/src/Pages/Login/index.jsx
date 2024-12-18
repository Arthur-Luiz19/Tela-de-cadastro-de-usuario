import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from '../../services/api';

function Login(){

    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();

    async function handleSubmit(event){
        event.preventDefault();

        try{
            const { data:token } = await api.post('/login', {
                email: emailRef.current.value,
                password: passwordRef.current.value
            })
            localStorage.setItem('token', token);
            console.log(token);

            navigate('/listar_usuarios');

        } catch(erro) {
            alert("Email ou senha inválido");
        }
    }

    return(
        <div className="max-w-lg mx-auto mt-10 bg-white p-8 border border-gray-300 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login</h2>
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                <input ref={emailRef} placeholder="Email" type="email" className="w-full px-4 py-2 border border-gray-300 focus:outline-none"/>
                <input ref={passwordRef} placeholder="Senha" type="password" className="w-full px-4 py-2 border border-gray-300 focus:outline-none"/>
                <button className="w-full bg-blue-700 text-white py-2 p4-4 rounded-md hover:bg-blue-500">Fazer Login</button>
            </form>
            <p className="text-blue-800 text-center block mt-4">Não possui conta? <Link to="/" className="underline underline-offset-2 hover:text-blue-500">Cadastre-se aqui</Link></p>

        </div>
    )

}

export default Login;