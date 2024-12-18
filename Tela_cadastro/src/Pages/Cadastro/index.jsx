import { useRef } from 'react';
import { Link } from "react-router-dom";
import api from '../../services/api';

function Cadastro() {

    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    async function handleSubmit(event){
        event.preventDefault();

        try{
            await api.post('/cadastro', {
                name: nameRef.current.value,
                email: emailRef.current.value,
                password: passwordRef.current.value
            })
            alert("Usuário cadastrado com sucesso");

        } catch(err) {
            alert("Erro ao cadastrar o usuário");
        }


        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
    }

    return (

        <div className="max-w-lg mx-auto mt-10 bg-white p-8 border border-grey-300 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-center text-grey-800">Cadastro</h2>
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                <input ref={nameRef} placeholder="Nome" type="text" className="w-full px-3 py-2 border border-gray-300 focus:outline-none"/>
                <input ref={emailRef} placeholder="Email" type="email" className="w-full px-3 py-2 border border-gray-300 focus:outline-none"/>
                <input ref={passwordRef} placeholder="Password" type="password" className="w-full px-3 py-2 border border-gray-300 focus:outline-none"/>
                <button className="w-full bg-blue-700 text-white py-2 px-4 rounded-md hover:bg-blue-500">Cadastrar</button>
            </form>
            <p className="text-blue-700 mt-4 block text-center">Já tem uma conta? <Link to="/login" className="underline underline-offset-3 hover:text-blue-500">Faça login</Link></p>
        </div>
    )
}

export default Cadastro;