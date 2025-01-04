export interface Submission {
    id: string;
    assignmentId: string; // ID задания
    studentId: string; // ID студента
    fileUrl: string; // URL отправленного файла
    grade?: number; // Оценка
    feedback?: string; // Комментарии преподавателя
    submittedAt: Date;
    gradedAt?: Date;
}
