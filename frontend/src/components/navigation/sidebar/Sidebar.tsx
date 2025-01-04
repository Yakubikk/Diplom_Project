'use client'

import React from 'react';
import {useAuth} from "@/context/AuthContext";

const Sidebar: React.FC = () => {
    const {user} = useAuth();

    return (
        <aside className={`${!user && 'hidden'} flex flex-col w-64 border-r border-gray-400 text-white h-full shadow-md`}>

        </aside>
    );
};

export default Sidebar;
