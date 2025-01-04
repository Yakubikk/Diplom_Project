export interface Comment {
    id: string;
    authorId: string; // ID автора комментария (преподаватель/студент)
    content: string;
    targetId: string; // ID задания, отправленной работы или другого комментария
    createdAt: Date;
}
