export interface User {
    id: string;
    name: string;
    email: string;
    role: 'teacher' | 'student';
    avatarUrl?: string;
    createdAt: string;
    updatedAt?: string;
}
