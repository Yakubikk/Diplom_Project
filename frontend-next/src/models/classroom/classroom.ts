export interface Classroom {
    id: string;
    title: string;
    description?: string;
    // ID преподавателя
    creator: string;
    teacherIds: string[];
    // Список ID студентов
    studentIds?: string[];
    createdAt: Date;
    updatedAt?: Date;
    background?: string;
}
