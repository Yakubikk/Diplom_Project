'use client'

import {useBreadcrumbs} from "@/context/BreadcrumbContext";
import {useEffect, useState} from "react";
import {Modal} from "@/components";

export default function Calendar() {
    const { setBreadcrumbs } = useBreadcrumbs();

    useEffect(() => {
        setBreadcrumbs([
            {name: 'Calendar', href: '/calendar'},
        ]);
    }, [setBreadcrumbs]);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="p-4">
            <button
                onClick={openModal}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                Открыть модальное окно
            </button>

            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <h2 className="text-xl font-bold mb-4">Заголовок модального окна</h2>
                <p className="mb-4">Это контент модального окна. Вы можете добавить сюда что угодно.</p>
                <button
                    onClick={closeModal}
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                    Закрыть
                </button>
            </Modal>
        </div>
    );
}