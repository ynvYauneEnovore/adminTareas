import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';



export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">

          

<div class="py-16 bg-white">
    <div class="container m-auto px-6 space-y-8 md:px-12 lg:px-56">
        <div class="m-auto text-center lg:w-7/12">
            <h2 class="text-2xl text-gray-700 font-bold md:text-4xl">Integraciones disponibles.</h2>
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
            <div class="p-4">
                <img src="https://tailus.io/sources/blocks/company-site/preview/images/clients/airbnb.svg" class="" alt="" />
            </div>
            <div class="p-4">
                <img src="https://tailus.io/sources/blocks/company-site/preview/images/clients/client-8.png" class="w-32 " alt="" />
            </div>
            <div class="p-4">
                <img src="https://tailus.io/sources/blocks/company-site/preview/images/clients/client-3.png" class="w-32 " alt="" />
            </div>
            <div class="p-4">
                <img src="https://tailus.io/sources/blocks/company-site/preview/images/clients/client-1.png" class="w-32 " alt="" />
            </div>
            <div class="p-4">
                <img src="https://tailus.io/sources/blocks/company-site/preview/images/clients/tailus.svg" class="w-32" alt="" />
            </div>
            <div class="p-4">
                <img src="https://tailus.io/sources/blocks/company-site/preview/images/clients/microsoft.svg" class="w-32" alt="" />
            </div>
            <div class="p-4">
                <img src="https://tailus.io/sources/blocks/company-site/preview/images/clients/coty.svg" class="w-20" alt="" />
            </div>
            <div class="p-4">
                <img src="https://tailus.io/sources/blocks/company-site/preview/images/clients/client-4.png" class="w-24" alt="" />
            </div>
        </div>
    </div>
</div>



      
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
