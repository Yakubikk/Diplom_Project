export const openPrivacyPolicyPdf = async () => {
    try {
        const response = await fetch('./Якубович Егор.pdf');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const blob = await response.blob();

        const objectUrl = URL.createObjectURL(blob);

        window.open(objectUrl, '_blank');

        setTimeout(() => {
            URL.revokeObjectURL(objectUrl);
        }, 100);
    } catch (error) {
        console.error('Ошибка при открытии PDF:', error);
    }
};
