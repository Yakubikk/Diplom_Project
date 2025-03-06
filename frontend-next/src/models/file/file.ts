export interface File {
    id: string;
    ownerId: string; // ID пользователя, загрузившего файл
    url: string; // URL файла
    createdAt: Date;
}
