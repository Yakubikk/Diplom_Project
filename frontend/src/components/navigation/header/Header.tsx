'use client'

import React from 'react';
import {Avatar, LocaleSwitcher} from "@/components";
import {useAuth} from "@/context/AuthContext";

const Header: React.FC = () => {
  const {user} = useAuth();
  return (
    <div className={`${!user && 'hidden'} w-full h-16 flex justify-between items-center px-2 border-b border-gray-400`}>
      <div></div>
      <div className='flex gap-2 items-center'>
        <Avatar />
        <LocaleSwitcher />
      </div>
    </div>
  );
};

export default Header;
