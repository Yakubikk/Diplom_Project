'use client'

import React, {useEffect, useRef, useState} from 'react';
import {Avatar, Breadcrumbs, LocaleSwitcher} from "@/components";
import {useAuth} from "@/context/AuthContext";
import {IconPencil} from "@tabler/icons-react";
import {Link} from "@/i18n/routing";

const Header: React.FC = () => {
  const {user} = useAuth();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);
    const avatarRef = useRef<HTMLDivElement | null>(null);

    const toggleInfo = () => {
        setIsOpen(p => !p);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !avatarRef.current!.contains(event.target as Node) && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

  return (
    <div className='w-full min-h-16 flex justify-between items-center px-2 border-b border-gray-300'>
      <div>
          <Breadcrumbs />
      </div>
      <div className='flex gap-2 items-center'>
          <div className="relative">
              <span onClick={toggleInfo} ref={avatarRef} className='hover:cursor-pointer'>
                  <Avatar src='https://i.gifer.com/PE61.gif' size='small' username='Egor'/>
              </span>
              {isOpen && user && (
                  <div
                      ref={dropdownRef}
                      className="absolute top-16 -right-32 flex flex-col items-center w-[412px] bg-[#e9eef6] shadow-xl border border-gray-200 rounded-3xl p-3 z-10"
                  >
                      <span className="text-sm font-semibold mb-6">{user.email}</span>
                      <div className="relative h-fit hover:cursor-pointer rounded-full mb-4">
                          <Avatar src='https://i.gifer.com/PE61.gif' size='huge' username='Egor'/>
                          <div className="absolute w-6 h-6 flex items-center justify-center rounded-full bg-white right-0 top-14">
                              <IconPencil width={20} height={20} />
                          </div>
                      </div>
                      <span className="text-xl mb-2">{`Здравствуйте, ${user.name}!`}</span>
                      <Link
                          href="/account"
                          className="py-2 px-4 bg-transparent border border-gray-600 font-semibold text-sm text-blue-600 rounded-full"
                      >
                          Управление аккаунтом
                      </Link>
                  </div>
              )}
          </div>
        <LocaleSwitcher />
      </div>
    </div>
  );
};

export default Header;
