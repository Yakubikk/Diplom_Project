import {
    IconBold,
    IconItalic,
    IconUnderline,
    IconH1,
    IconH2,
    IconLetterPSmall,
    IconList,
    IconListNumbers,
    IconClearFormatting,
    IconArrowBackUp,
    IconArrowForwardUp,
} from '@tabler/icons-react';
import {Editor} from "@tiptap/core";

export const getTextEditorButtons = (editor: Editor, t: (key: string) => string) => {
    return [
        {
            icon: <IconBold />,
            tooltip: t('bold'),
            onClick: () => editor.chain().focus().toggleBold().run(),
            disabled: !editor.can().chain().focus().toggleBold().run(),
            isActive: editor.isActive('bold'),
        },
        {
            icon: <IconItalic />,
            tooltip: t('italics'),
            onClick: () => editor.chain().focus().toggleItalic().run(),
            disabled: !editor.can().chain().focus().toggleItalic().run(),
            isActive: editor.isActive('italic'),
        },
        {
            icon: <IconUnderline />,
            tooltip: t('underlined'),
            onClick: () => editor.chain().focus().toggleUnderline().run(),
            disabled: !editor.can().chain().focus().toggleUnderline().run(),
            isActive: editor.isActive('underline'),
        },
        {
            icon: <IconH1 />,
            tooltip: t('heading1'),
            onClick: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
            disabled: false,
            isActive: editor.isActive('heading', { level: 1 }),
        },
        {
            icon: <IconH2 />,
            tooltip: t('heading2'),
            onClick: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
            disabled: false,
            isActive: editor.isActive('heading', { level: 2 }),
        },
        {
            icon: <IconLetterPSmall />,
            tooltip: t('paragraph'),
            onClick: () => editor.chain().focus().setParagraph().run(),
            disabled: false,
            isActive: editor.isActive('paragraph'),
        },
        {
            icon: <IconList />,
            tooltip: t('list'),
            onClick: () => editor.chain().focus().toggleBulletList().run(),
            disabled: false,
            isActive: editor.isActive('bulletList'),
        },
        {
            icon: <IconListNumbers />,
            tooltip: t('orderedList'),
            onClick: () => editor.chain().focus().toggleOrderedList().run(),
            disabled: false,
            isActive: editor.isActive('orderedList'),
        },
        {
            icon: <IconClearFormatting />,
            tooltip: t('clearFormatting'),
            onClick: () => editor.chain().focus().unsetAllMarks().clearNodes().run(),
            disabled: false,
            isActive: false,
        },
        {
            icon: <IconArrowBackUp />,
            tooltip: t('undo'),
            onClick: () => editor.chain().focus().undo().run(),
            disabled: !editor.can().undo(),
            isActive: false,
        },
        {
            icon: <IconArrowForwardUp />,
            tooltip: t('redo'),
            onClick: () => editor.chain().focus().redo().run(),
            disabled: !editor.can().redo(),
            isActive: false,
        },
    ];
};