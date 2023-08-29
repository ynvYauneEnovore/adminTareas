import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    const tasks = [
        { id: 1, title: 'Hacer compras', status: 'Pendiente' },
        { id: 2, title: 'Terminar informe', status: 'En progreso' },
        { id: 3, title: 'Ejercicio diario', status: 'Completada' },
    ];

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="flex py-12">
                <div className="w-1/4">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-4 text-gray-900 dark:text-gray-100">
                            <h3 className="text-lg font-semibold mb-4">Menú</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#" className="text-blue-500 hover:underline">Mis Tareas</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-500 hover:underline">Nueva Tarea</a>
                                </li>
                                <li>
                                    <a href="#" className="text-blue-500 hover:underline">Estadísticas</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="w-3/4">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <h3 className="text-lg font-semibold mb-4">Lista de Tareas</h3>
                            <table className="w-full border">
                                <thead>
                                    <tr className="bg-gray-100 dark:bg-gray-700">
                                        <th className="px-4 py-2">ID</th>
                                        <th className="px-4 py-2">Título</th>
                                        <th className="px-4 py-2">Estado</th>
                                        <th className="px-4 py-2">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tasks.map(task => (
                                        <tr key={task.id}>
                                            <td className="border px-4 py-2">{task.id}</td>
                                            <td className="border px-4 py-2">{task.title}</td>
                                            <td className="border px-4 py-2">{task.status}</td>
                                            <td className="border px-4 py-2">
                                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-2">Editar</button>
                                                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">Eliminar</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>


        
        </AuthenticatedLayout>
    );
}
