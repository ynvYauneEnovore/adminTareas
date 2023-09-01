<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\UserController;



/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/inicio', function () {
    return Inertia::render('Inicio');
})->middleware(['auth', 'verified'])->name('inicio');

Route::get('/tareas', function () {
    return Inertia::render('Tareas');
})->middleware(['auth', 'verified'])->name('tareas');

Route::get('/calendario', function () {
    return Inertia::render('Calendario');
})->middleware(['auth', 'verified'])->name('calendario');

Route::get('/tareas', function () {
    return Inertia::render('Tareas');
})->middleware(['auth', 'verified'])->name('tareas');

Route::get('/notas', function () {
    return Inertia::render('Notas');
})->middleware(['auth', 'verified'])->name('notas');

Route::get('/proyectos', function () {
    return Inertia::render('Proyectos');
})->middleware(['auth', 'verified'])->name('proyectos');

Route::get('/configuracion', function () {
    return Inertia::render('Configuracion');
})->middleware(['auth', 'verified'])->name('configuracion');



Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::group(['middleware' => ['auth']], function() {
    Route::resource('roles', RoleController::class);
    Route::resource('users', UserController::class);
    Route::resource('products', ProductController::class);
});

require __DIR__.'/auth.php';
