

export const openImage = async (image: string | null) => {
    if (image) try {
        const response = await fetch(image);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        console.log(response);
        const blob = await response.blob();

        const objectUrl = URL.createObjectURL(blob);

        window.open(objectUrl, '_blank');

        setTimeout(() => {
            URL.revokeObjectURL(objectUrl);
        }, 100);
    } catch (error) {
        console.error('Ошибка при открытии изображения:', error);
    }
};
