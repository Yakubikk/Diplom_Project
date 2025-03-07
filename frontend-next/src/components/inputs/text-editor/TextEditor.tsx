'use client'

import React from 'react';
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
import History from '@tiptap/extension-history';
import {IconButton, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from '@/components';
import {cn} from '@/lib/utils';
import {useTranslations} from 'next-intl';
import { getTextEditorButtons } from './textEditor-buttons';

interface EditorProps {
    value: string;
    onChange: (value: string) => void;
}

const TextEditor: React.FC<EditorProps> = ({ value, onChange }) => {
    const t = useTranslations('TextEditor');

    const editor = useEditor({
        autofocus: true,
        immediatelyRender: true,
        editorProps: {
            attributes: {
                class: 'min-h-[100px] outline-none',
            },
        },
        extensions: [
            Document,
            History.configure({
                depth: 20,
            }),
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

    if (!editor) {
        return null;
    }

    const buttons = getTextEditorButtons(editor, t);

    return (
        <div className='flex flex-col border-b pb-1 rounded-t bg-gray-100 hover:bg-gray-200 hover:bg-opacity-55 border-gray-500'>
            <div className='text-editor p-4'>
                <EditorContent editor={editor} />
            </div>

            <div className='flex flex-wrap px-2'>
                <TooltipProvider disableHoverableContent>
                    {buttons.map((button, index) => (
                        <Tooltip key={index}>
                            <TooltipTrigger asChild ripple='dark' disabled={button.disabled}>
                                <IconButton
                                    onClick={button.onClick}
                                    disabled={button.disabled}
                                    variant='text'
                                    size='medium-small'
                                    className={cn(
                                        'p-2 rounded transition-colors',
                                        button.isActive
                                            ? 'bg-blue-500 text-white hover:bg-blue-600'
                                            : 'hover:bg-blue-100'
                                    )}
                                >
                                    {button.icon}
                                </IconButton>
                            </TooltipTrigger>
                            <TooltipContent>
                                {button.tooltip}
                            </TooltipContent>
                        </Tooltip>
                    ))}
                </TooltipProvider>
            </div>
        </div>
    );
};

export { TextEditor };
export default TextEditor;
