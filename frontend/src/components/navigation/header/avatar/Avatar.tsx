'use client'

import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from "@/context/AuthContext";
import Image from "next/image";
import { IconPencil } from "@tabler/icons-react";
import { Link } from "@/i18n/routing";

const Avatar: React.FC = () => {
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null); // Указываем тип ссылки

  const toggleInfo = () => {
    setIsOpen(!isOpen);
  };

  // Закрыть окно при клике вне
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
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
    <div className="relative">
      {/* Аватар */}
      <Image
        src={user?.avatarUrl || 'https://i.gifer.com/PzNI.gif'}
        alt="avatar"
        width={48}
        height={48}
        className="rounded-full min-h-12 cursor-pointer"
        onClick={toggleInfo}
      />

      {/* Информация о пользователе */}
      {isOpen && user && (
        <div
          ref={dropdownRef} // Привязываем ссылку
          className="absolute top-16 -right-32 flex flex-col items-center w-[412px] bg-[#e9eef6] shadow-xl border border-gray-200 rounded-3xl p-3 z-10"
        >
          <span className="text-sm font-semibold mb-6">{user.email}</span>
          <div className="relative h-fit hover:cursor-pointer rounded-full mb-4">
            <Image
              src={user.avatarUrl || 'https://i.gifer.com/PzNI.gif'}
              alt="avatar"
              width={80}
              height={80}
              className="rounded-full min-h-20"
            />
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
  );
};

export default Avatar;
