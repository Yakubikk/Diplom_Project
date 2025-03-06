export interface Schedule {
    id: string;
    classroomId: string; // ID курса
    eventName: string;
    eventDate: Date;
    description?: string;
    createdAt: Date;
}
