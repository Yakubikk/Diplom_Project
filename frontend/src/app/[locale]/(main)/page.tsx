'use client';

import React, { useEffect, useState } from "react";
import { Classroom } from "@/models/classroom/classroom";
import { ClassCard } from "@/components";
import { useBreadcrumbs } from "@/context/BreadcrumbContext";

export default function Home() {
    const allClasses: Classroom[] = [
        { id: '121212', title: 'Математика', description: 'dfsadasdsa sad sad', teacherId: 'q3231233', createdAt: new Date() },
        { id: '1212121', title: 'Физика', description: 'dfsadasdsa sad sad', teacherId: 'q3231233', createdAt: new Date() },
        { id: '1212122', title: 'Пастухов', description: 'dfsadasdsa sad sad', teacherId: 'q3231233', createdAt: new Date() },
        { id: '1212123', title: 'Веб', description: 'dfsadasdsa sad sad', teacherId: 'q3231233', createdAt: new Date() },
        { id: '1212124', title: 'ООП', description: 'dfsadasdsa sad sad', teacherId: 'q3231233', createdAt: new Date() },
        { id: '1212125', title: 'СПП', description: 'dfsadasdsa sad sad', teacherId: 'q3231233', createdAt: new Date() },
    ];

    const [classes, setClasses] = useState<Classroom[]>(() => {
        if (typeof window !== "undefined") {
            const savedClassIds = localStorage.getItem("classIds");
            if (savedClassIds) {
                const classIds = JSON.parse(savedClassIds);
                return classIds.map((id: string) => allClasses.find((classItem) => classItem.id === id));
            } else return allClasses;
        }
        return [];
    });

    const { setBreadcrumbs } = useBreadcrumbs();

    useEffect(() => {
        setBreadcrumbs([]);
    }, [setBreadcrumbs]);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const classIds = classes.map((classItem) => classItem.id);
            localStorage.setItem("classIds", JSON.stringify(classIds));
        }
    }, [classes]);

    const [draggedItemId, setDraggedItemId] = useState<string | null>(null);

    const handleDragStart = (e: React.DragEvent<HTMLDivElement>, id: string) => {
        setDraggedItemId(id);
        e.dataTransfer.effectAllowed = "move";

        const element = e.currentTarget;
        element.style.opacity = "0.8";
        element.style.background = "gray";
    };

    const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
        setDraggedItemId(null);

        const element = e.currentTarget;
        element.style.opacity = "1";
        element.style.background = "transparent";
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>, targetId: string) => {
        e.preventDefault();

        if (!draggedItemId) return;

        const draggedIndex = classes.findIndex((item) => item?.id === draggedItemId);
        const targetIndex = classes.findIndex((item) => item?.id === targetId);

        if (draggedIndex === targetIndex) return;

        const newClasses = [...classes];
        const [removed] = newClasses.splice(draggedIndex, 1);
        newClasses.splice(targetIndex, 0, removed);

        setClasses(newClasses);
    };

    return (
        <div className='h-full w-full grid p-4 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2'>
            {classes.map((classItem) => classItem && (
                <div
                    key={classItem.id}
                    draggable
                    onDragStart={(e) => handleDragStart(e, classItem.id)}
                    onDragEnd={handleDragEnd}
                    onDragOver={handleDragOver}
                    onDrop={(e) => handleDrop(e, classItem.id)}
                    className="h-fit rounded-lg"
                >
                    <ClassCard
                        id={classItem.id}
                        title={classItem.title}
                        description={classItem.description}
                        teacherId={classItem.teacherId}
                        createdAt={classItem.createdAt}
                    />
                </div>
            ))}
        </div>
    );
};
