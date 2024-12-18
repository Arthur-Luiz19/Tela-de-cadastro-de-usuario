import { useEffect, useState } from 'react';
import api from '../../services/api'

function listarUsuario() {
    const [allUsers, setAllUsers] = useState()

    useEffect(() => {
        async function loadUsers() {
            const token = localStorage.getItem('token')
            const { data: { users } } = await api.get('/listar_usuarios', {
                headers: { Authorization: `Bearer ${token}` }
            })

            setAllUsers(users);
        }
        loadUsers();
    }, [])

    return (
        <div className='max-w-2xl mx-auto mt-10 bg-white p-8 border border-gray-300 rounded-md shadow-lg'>
            <h2 className='text-2xl font-bold mb-6 text-center text-gray-800'>Lista de usuários</h2>
            <ul className='spacey-y-2'>
                {allUsers && allUsers.length > 0 && allUsers.map(user => (
                    <li className='bg-gray-100 rounded-md p-4' key={user.id}>
                        <p className='font-semibold'>ID: {user.id}</p>
                        <p className='font-semibold'>NOME: {user.name}</p>
                        <p className='font-semibold'>EMAIL: {user.email}</p>
                    </li>
                ))}
            </ul>
        </div>
    )

}
export default listarUsuario;