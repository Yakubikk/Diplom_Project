export interface Classroom {
    id: string;
    title: string;
    description?: string;
    // ID преподавателя
    teacherId: string;
    // Список ID студентов
    studentIds?: string[];
    createdAt: Date;
    updatedAt?: Date;
    background?: string;
}
