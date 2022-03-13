import React, {Fragment } from "react";
import { Link } from "react-router-dom";
import {Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon} from '@heroicons/react/outline';
import NavIcon from './icon';
import MenuItem from "./menuItem";


const Navbar = () => {
    return (
        <Popover className="relative" >
            <div className="max-w-full mt-6" >
                <div className="max-w-7xl mx-auto px-4 sm:px-6"  > 
                    <div className="flex justify-between items-center border-b-2 border-b-red-500/50 py-3 md:justify-start md:space-x-10">
                        <NavIcon/>
                        <div className="-my-2 md:hidden">
                            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-red-200 hover:text-red-500 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500">
                            <span className="sr-only">Open menu</span>
                            <MenuIcon className="h-6 w-6" aria-hidden="true" />
                            </Popover.Button>
                        </div>
                        <Popover.Group as="nav" className="hidden md:flex space-x-10">

                        <MenuItem text={'Campeonato'} linkTo={'/auth'}/>
                        <MenuItem text={'Carreras'} linkTo={'/auth'}/>
                        <MenuItem text={'Pilotos'} linkTo={'/auth'}/>
                            
                        </Popover.Group>
                        <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                            <Link to="/auth" className="whitespace-nowrap text-lg font-medium text-gray-500 hover:text-gray-900 hover:border-t-2 hover:border-t-red-200">
                                Acceder
                            </Link>
                            <Link to="/auth"
                            className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-1 border border-transparent shadow-sm text-lg font-medium text-white bg-red-600 hover:bg-red-700">
                            Registrarse
                            </Link>
                        </div>

                    </div>
                </div>
            </div>

        <Transition
        as={Fragment}
        enter="duration-200 ease-out" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">

            <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
            <div className="rounded-md shadow-md ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-red-50">
                <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                    <NavIcon/>
                    <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                    </div>
                </div>
                </div>
                <div className="py-6 px-5 space-y-6">
                <div className="grid grid-cols-2 gap-y-4 gap-x-8">                    
                        <MenuItem text={'Campeonato'}  linkTo={'/auth'}/>
                        <MenuItem text={'Carreras'} linkTo={'/auth'}/>
                </div>
                <div>
                    <Link to="/auth"
                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent shadow-sm text-base font-medium text-white bg-red-600 hover:bg-red-700">
                       Registrarse
                    </Link>
                    <p className="mt-6 text-center text-base font-medium text-gray-500">
                        Ya estás registrado?{' '}
                        <Link to="/auth" className="text-red-600 hover:text-red-500">
                            Acceder
                        </Link>
                    </p>
                </div>
                </div>
            </div>
            </Popover.Panel>
        </Transition>
        </Popover>
    );
}

export default Navbar