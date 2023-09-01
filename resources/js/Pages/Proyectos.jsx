import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function ProjectView({ auth }) {
    // Supongamos que tienes proyectos almacenados en un arreglo
    const initialProjects = [
        { id: 1, name: 'Proyecto de Desarrollo Web', description: 'Crear una aplicación web de productividad', edited: false },
        { id: 2, name: 'Proyecto de Marketing', description: 'Lanzamiento de una nueva campaña de marketing', edited: false },
        // Agrega más proyectos según tus necesidades
    ];

    // Estado para mantener los proyectos
    const [projects, setProjects] = useState(initialProjects);

    // Estado para el proyecto actualmente seleccionado para edición
    const [selectedProject, setSelectedProject] = useState(null);

    // Función para guardar cambios en un proyecto editado
    const handleSaveProject = () => {
        // Aquí debes implementar la lógica para guardar el proyecto editado, por ejemplo, mediante una API o almacenamiento en el servidor
        // Una vez guardado, puedes actualizar el estado y marcar el proyecto como no editado
        // Ejemplo de actualización del estado:
        // const updatedProjects = [...projects];
        // updatedProjects[selectedProjectIndex] = { ...selectedProject, edited: false };
        // setProjects(updatedProjects);
    };

    // Función para cancelar la edición de un proyecto
    const handleCancelEdit = () => {
        // Simplemente restablece el estado del proyecto seleccionado a null
        setSelectedProject(null);
    };

    // Función para renderizar proyectos
    const renderProjects = () => {
        return projects.map(project => (
            <div key={project.id} className="mb-4 border p-4 rounded">
                {selectedProject?.id === project.id ? (
                    <div>
                        <input
                            type="text"
                            className="w-full mb-2 border rounded p-2"
                            value={selectedProject.name}
                            onChange={(e) => setSelectedProject({ ...selectedProject, name: e.target.value, edited: true })}
                        />
                        <textarea
                            className="w-full mb-2 border rounded p-2"
                            value={selectedProject.description}
                            onChange={(e) => setSelectedProject({ ...selectedProject, description: e.target.value, edited: true })}
                        />
                        <button
                            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full mr-2"
                            onClick={handleSaveProject}
                        >
                            Guardar
                        </button>
                        <button
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
                            onClick={handleCancelEdit}
                        >
                            Cancelar
                        </button>
                    </div>
                ) : (
                    <div>
                        <h3 className="text-lg font-semibold">{project.name}</h3>
                        <p>{project.description}</p>
                        {project.edited && <span className="text-xs text-gray-500">Editado</span>}
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-2"
                            onClick={() => setSelectedProject({ ...project })}
                        >
                            Editar
                        </button>
                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">Eliminar</button>
                    </div>
                )}
            </div>
        ));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Proyectos</h2>}
        >
            <Head title="Proyectos" />

            <div className="flex py-12">
                <div className="w-1/4">
                    {/* Agrega un panel lateral izquierdo si es necesario */}
                </div>
                <div className="w-3/4">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <h3 className="text-lg font-semibold mb-4">Lista de Proyectos</h3>
                            {/* Renderiza los proyectos aquí */}
                            {renderProjects()}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
