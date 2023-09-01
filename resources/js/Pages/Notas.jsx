import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function NoteView({ auth }) {
    // Supongamos que tienes notas almacenadas en un arreglo
    const initialNotes = [
        { id: 1, title: 'Lista de compras', content: 'Leche, huevos, pan, frutas', edited: false },
        { id: 2, title: 'Ideas para el proyecto', content: 'Revisar la documentación, crear prototipos', edited: false },
        // Agrega más notas según tus necesidades
    ];

    // Estado para mantener las notas
    const [notes, setNotes] = useState(initialNotes);

    // Estado para la nota actualmente seleccionada para edición
    const [selectedNote, setSelectedNote] = useState(null);

    // Función para guardar cambios en una nota editada
    const handleSaveNote = () => {
        // Aquí debes implementar la lógica para guardar la nota editada, por ejemplo, mediante una API o almacenamiento en el servidor
        // Una vez guardada, puedes actualizar el estado y marcar la nota como no editada
        // Ejemplo de actualización del estado:
        // const updatedNotes = [...notes];
        // updatedNotes[selectedNoteIndex] = { ...selectedNote, edited: false };
        // setNotes(updatedNotes);
    };

    // Función para cancelar la edición de una nota
    const handleCancelEdit = () => {
        // Simplemente restablece el estado de la nota seleccionada a null
        setSelectedNote(null);
    };

    // Función para renderizar notas
    const renderNotes = () => {
        return notes.map(note => (
            <div key={note.id} className="mb-4 border p-4 rounded">
                {selectedNote?.id === note.id ? (
                    <div>
                        <input
                            type="text"
                            className="w-full mb-2 border rounded p-2"
                            value={selectedNote.title}
                            onChange={(e) => setSelectedNote({ ...selectedNote, title: e.target.value, edited: true })}
                        />
                        <textarea
                            className="w-full mb-2 border rounded p-2"
                            value={selectedNote.content}
                            onChange={(e) => setSelectedNote({ ...selectedNote, content: e.target.value, edited: true })}
                        />
                        <button
                            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full mr-2"
                            onClick={handleSaveNote}
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
                        <h3 className="text-lg font-semibold">{note.title}</h3>
                        <p>{note.content}</p>
                        {note.edited && <span className="text-xs text-gray-500">Editado</span>}
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-2"
                            onClick={() => setSelectedNote({ ...note })}
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
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Notas</h2>}
        >
            <Head title="Notas" />

            <div className="flex py-12">
                <div className="w-1/4">
                    {/* Agrega un panel lateral izquierdo si es necesario */}
                </div>
                <div className="w-3/4">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <h3 className="text-lg font-semibold mb-4">Lista de Notas</h3>
                            {/* Renderiza las notas aquí */}
                            {renderNotes()}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
