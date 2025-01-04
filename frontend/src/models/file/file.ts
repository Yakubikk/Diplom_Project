export interface File {
    id: string;
    ownerId: string; // ID пользователя, загрузившего файл
    url: string; // URL файла
    fileName: string;
    fileType: string; // Тип файла (например, pdf, docx, jpg)
    createdAt: Date;
}
