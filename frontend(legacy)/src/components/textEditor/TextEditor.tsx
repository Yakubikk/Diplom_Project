'use client'

import React, { useEffect } from "react";
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
} from "@tabler/icons-react";

interface EditorProps {
    value: string;
    onChange: (value: string) => void;
}

const TextEditor: React.FC<EditorProps> = ({ value, onChange }) => {
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
            Bold.configure({
                HTMLAttributes: {
                    class: 'font-bold',
                },
            }),
            Italic.configure({
                HTMLAttributes: {
                    class: 'italic',
                },
            }),
            Underline.configure({
                HTMLAttributes: {
                    class: 'underline',
                },
            }),
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

    return (
        <div className="flex flex-col border-b pb-1 rounded-t bg-gray-100 hover:bg-gray-200 hover:bg-opacity-55 border-gray-500">
            <div className="p-4">
                <EditorContent editor={editor}/>
                {value}
            </div>

            <div className="flex flex-wrap px-2">
                <button
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    disabled={!editor.can().chain().focus().toggleBold().run()}
                    className={`p-2 rounded ${
                        editor.isActive('bold')
                            ? 'bg-blue-500 text-white hover:bg-blue-600'
                            : 'text-gray-700 hover:bg-blue-100'
                    } transition-colors`}
                >
                    <IconBold />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    disabled={!editor.can().chain().focus().toggleItalic().run()}
                    className={`p-2 rounded ${
                        editor.isActive('italic')
                            ? 'bg-blue-500 text-white hover:bg-blue-600'
                            : 'text-gray-700 hover:bg-blue-100'
                    } transition-colors`}
                >
                    <IconItalic />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleUnderline().run()}
                    disabled={!editor.can().chain().focus().toggleUnderline().run()}
                    className={`p-2 rounded ${
                        editor.isActive('underline')
                            ? 'bg-blue-500 text-white hover:bg-blue-600'
                            : 'text-gray-700 hover:bg-blue-100'
                    } transition-colors`}
                >
                    <IconUnderline />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({level: 1}).run()}
                    className={`p-2 rounded ${
                        editor.isActive('heading', { level: 1 })
                            ? 'bg-blue-500 text-white hover:bg-blue-600'
                            : 'text-gray-700 hover:bg-blue-100'
                    } transition-colors`}
                >
                    <IconH1 />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({level: 2}).run()}
                    className={`p-2 rounded ${
                        editor.isActive('heading', { level: 2 })
                            ? 'bg-blue-500 text-white hover:bg-blue-600'
                            : 'text-gray-700 hover:bg-blue-100'
                    } transition-colors`}
                >
                    <IconH2 />
                </button>
                <button
                    onClick={() => editor.chain().focus().setParagraph().run()}
                    className={`p-2 rounded ${
                        editor.isActive('paragraph')
                            ? 'bg-blue-500 text-white hover:bg-blue-600'
                            : 'text-gray-700 hover:bg-blue-100'
                    } transition-colors`}
                >
                    <IconLetterPSmall />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleBulletList().run()}
                    className={`p-2 rounded ${
                        editor.isActive('bulletList')
                            ? 'bg-blue-500 text-white hover:bg-blue-600'
                            : 'text-gray-700 hover:bg-blue-100'
                    } transition-colors`}
                >
                    <IconList />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleOrderedList().run()}
                    className={`p-2 rounded ${
                        editor.isActive('orderedList')
                            ? 'bg-blue-500 text-white hover:bg-blue-600'
                            : 'text-gray-700 hover:bg-blue-100'
                    } transition-colors`}
                >
                    <IconListNumbers />
                </button>
                <button
                    onClick={() => editor.chain().focus().unsetAllMarks().clearNodes().run()}
                    className={`p-2 rounded text-gray-700 hover:bg-blue-100 transition-colors`}
                >
                    <IconClearFormatting />
                </button>
            </div>
        </div>
    );
};

export default TextEditor;
