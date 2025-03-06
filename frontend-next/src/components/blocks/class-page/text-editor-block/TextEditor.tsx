'use client'

import React, { useEffect } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import Document from '@tiptap/extension-document';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';
import Bold from '@tiptap/extension-bold';
import Italic from '@tiptap/extension-italic';
import Underline from '@tiptap/extension-underline';
import Heading from '@tiptap/extension-heading';
import BulletList from '@tiptap/extension-bullet-list';
import OrderedList from '@tiptap/extension-ordered-list';
import ListItem from '@tiptap/extension-list-item';
import {
    IconBold,
    IconH1,
    IconH2,
    IconItalic,
    IconLetterPSmall,
    IconList,
    IconListNumbers,
    IconUnderline,
    IconClearFormatting
} from '@tabler/icons-react';
import {IconButton, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from '@/components';
import {cn} from '@/lib/utils';
import {useTranslations} from 'next-intl';

interface EditorProps {
    value: string;
    onChange: (value: string) => void;
}

const TextEditor: React.FC<EditorProps> = ({ value, onChange }) => {
    const t = useTranslations('TextEditor');

    const editor = useEditor({
        autofocus: true,
        editorProps: {
            attributes: {
                class: 'min-h-[100px] outline-none',
            },
        },
        extensions: [
            Document,
            Paragraph.configure({
                HTMLAttributes: {
                    class: 'leading-relaxed',
                },
            }),
            Text,
            Bold,
            Italic,
            Underline,
            Heading.configure({
                levels: [1, 2],
            }),
            BulletList.configure({
                HTMLAttributes: {
                    class: 'list-disc',
                },
            }),
            OrderedList.configure({
                HTMLAttributes: {
                    class: 'list-decimal',
                },
            }),
            ListItem.configure({
                HTMLAttributes: {
                    class: 'ml-4',
                },
            }),
        ],
        content: value,
        onUpdate: ({ editor }) => {
            const html = editor.getHTML();
            if (editor.isEmpty) onChange('');
            else onChange(html);
        },
    });

    useEffect(() => {
        if (editor && value !== editor.getHTML()) {
            editor.commands.setContent(value);
        }
    }, [value, editor]);

    if (!editor) {
        return null;
    }

    const buttons = [
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
            tooltip: t('clearFormatting'),
            onClick: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
            disabled: false,
            isActive: editor.isActive('heading', { level: 1 }),
        },
        {
            icon: <IconH2 />,
            tooltip: t('clearFormatting'),
            onClick: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
            disabled: false,
            isActive: editor.isActive('heading', { level: 2 }),
        },
        {
            icon: <IconLetterPSmall />,
            tooltip: t('clearFormatting'),
            onClick: () => editor.chain().focus().setParagraph().run(),
            disabled: false,
            isActive: editor.isActive('paragraph'),
        },
        {
            icon: <IconList />,
            tooltip: t('clearFormatting'),
            onClick: () => editor.chain().focus().toggleBulletList().run(),
            disabled: false,
            isActive: editor.isActive('bulletList'),
        },
        {
            icon: <IconListNumbers />,
            tooltip: t('clearFormatting'),
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
    ];

    return (
        <div className='flex flex-col border-b pb-1 rounded-t bg-gray-100 hover:bg-gray-200 hover:bg-opacity-55 border-gray-500'>
            <div className='p-4'>
                <EditorContent editor={editor} />
            </div>

            <div className='flex flex-wrap px-2'>
                <TooltipProvider disableHoverableContent>
                    {buttons.map((button, index) => (
                        <React.Fragment key={index}>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <IconButton 
                                        onClick={button.onClick} 
                                        disabled={button.disabled} 
                                        ripple 
                                        variant='text' 
                                        size='medium-small' 
                                        className={cn(
                                            'p-2 rounded transition-colors', 
                                            button.isActive 
                                                ? 'bg-blue-500 text-white hover:bg-blue-600' 
                                                : 'text-gray-700 hover:bg-blue-100'
                                        )}
                                    >
                                        {button.icon}
                                    </IconButton>
                                </TooltipTrigger>
                                <TooltipContent>
                                    {button.tooltip}
                                </TooltipContent>
                            </Tooltip>
                        </React.Fragment>
                    ))}
                </TooltipProvider>
            </div>
        </div>
    );
};

export { TextEditor };
export default TextEditor;
