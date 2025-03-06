export interface GradeBook {
    id: string;
    classroomId: string; // ID курса
    studentId: string; // ID студента
    assignmentId: string; // ID задания
    grade: number;
    feedback?: string;
    gradedAt: Date;
}
