import React, { useEffect, useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import axios from 'axios';

export default function Dashboard({ auth }) {
    const [users, setUsers] = useState([]);
    const [newUser, setNewUser] = useState({
        name: '',
        email: '',
        password: '',
        roles: [] // Agrega los roles aquí
    });

    useEffect(() => {
        // Realiza la petición HTTP a la API de usuarios
        axios.get('users')
            .then(response => {
                setUsers(response.data.data); // Suponiendo que la respuesta está paginada
            })
            .catch(error => {
                console.error('Error fetching users:', error);
            });
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

       
            const response = await axios.post('users', newUser);
            // Actualiza la lista de usuarios con el nuevo usuario creado
            setUsers(...prevUsers, {response:newUser});

            // Limpia el formulario después de la creación exitosa
            setNewUser({
                name: '',
                email: '',
                password: '',
                roles: [] // Asegúrate de borrar los roles después de la creación
                
            });
            showNotification('Successfully registered!');

      
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-dark dark:text-gray-100">
                            You're logged in!

                         
                            <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Name"
                value={newUser.name}
                onChange={e => setNewUser({ ...newUser, name: e.target.value })}
            />
            <input
                type="email"
                placeholder="Email"
                value={newUser.email}
                onChange={e => setNewUser({ ...newUser, email: e.target.value })}
            />
            <input
                type="password"
                placeholder="Password"
                value={newUser.password}
                onChange={e => setNewUser({ ...newUser, password: e.target.value })}
            />
            <input
                type="password"
                placeholder="Confirm Password"
                value={newUser.password_confirmation}
                onChange={e => setNewUser({ ...newUser, password_confirmation: e.target.value })}
            />
            {/* Agrega los campos de roles aquí */}
            <label>
                Roles:
                <input
                    type="checkbox"
                    value="admin"
                    checked={newUser.roles.includes('admin')}
                    onChange={e => {
                        const isChecked = e.target.checked;
                        setNewUser(prevUser => {
                            if (isChecked) {
                                return { ...prevUser, roles: [...prevUser.roles, 'admin'] };
                            } else {
                                return { ...prevUser, roles: prevUser.roles.filter(role => role !== 'admin') };
                            }
                        });
                    }}
                /> Admin
                <input
                    type="checkbox"
                    value="user"
                    checked={newUser.roles.includes('user')}
                    onChange={e => {
                        const isChecked = e.target.checked;
                        setNewUser(prevUser => {
                            if (isChecked) {
                                return { ...prevUser, roles: [...prevUser.roles, 'user'] };
                            } else {
                                return { ...prevUser, roles: prevUser.roles.filter(role => role !== 'user') };
                            }
                        });
                    }}
                /> User
            </label>
            <button type="submit">Create User</button>
        </form>
        
                            <ul>
                                {users.map(user => (
                                    <li key={user.id}>{user.email}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
