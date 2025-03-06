export interface Assignment {
    id: string;
    classroomId: string; // ID курса
    title: string;
    description?: string;
    dueDate: Date; // Срок сдачи
    attachments?: string[]; // URL вложений
    createdAt: Date;
    updatedAt: Date;
}
