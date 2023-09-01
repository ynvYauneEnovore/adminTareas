import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function SettingsView({ auth }) {
    // Supongamos que tienes opciones de configuración para los usuarios
    const [userSettings, setUserSettings] = useState({
        name: auth.user.name,
        email: auth.user.email,
        notifications: true,
    });

    // Función para guardar cambios en la configuración del usuario
    const handleSaveSettings = () => {
        // Aquí debes implementar la lógica para guardar la configuración del usuario, por ejemplo, mediante una API o almacenamiento en el servidor
        // Una vez guardada, puedes mostrar un mensaje de éxito o actualizar el estado si es necesario
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Configuración</h2>}
        >
            <Head title="Configuración" />

            <div className="flex py-12">
                <div className="w-1/4">
                    {/* Agrega un panel lateral izquierdo si es necesario */}
                </div>
                <div className="w-3/4">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <h3 className="text-lg font-semibold mb-4">Configuración de la Cuenta</h3>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Nombre
                                </label>
                                <input
                                    type="text"
                                    className="mt-1 p-2 border rounded w-full"
                                    value={userSettings.name}
                                    onChange={(e) => setUserSettings({ ...userSettings, name: e.target.value })}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Correo Electrónico
                                </label>
                                <input
                                    type="email"
                                    className="mt-1 p-2 border rounded w-full"
                                    value={userSettings.email}
                                    onChange={(e) => setUserSettings({ ...userSettings, email: e.target.value })}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Notificaciones
                                </label>
                                <input
                                    type="checkbox"
                                    className="mt-1 p-2 border rounded"
                                    checked={userSettings.notifications}
                                    onChange={(e) => setUserSettings({ ...userSettings, notifications: e.target.checked })}
                                />
                            </div>
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                                onClick={handleSaveSettings}
                            >
                                Guardar Configuración
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
