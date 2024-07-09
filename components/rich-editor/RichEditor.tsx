"use client";

import Toolbar from "./Toolbar";
import StarterKit from "@tiptap/starter-kit";
import { useEditor, EditorContent } from "@tiptap/react";
import Underline from "@tiptap/extension-underline";
import Document from "@tiptap/extension-document"
import { Color } from "@tiptap/extension-color";
import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import Heading from "@tiptap/extension-heading";
import Blockquote from "@tiptap/extension-blockquote";
import BulletList from "@tiptap/extension-bullet-list";


const Tiptap = ({ onChange, content }: any) => {
  const handleChange = (newContent: string) => {
    onChange(newContent);
  };
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Blockquote,
      Document,
      ListItem,
      TextStyle,
      Paragraph,
      Text,
      BulletList,
      Heading.configure({
        levels: [1, 2, 3],
      }),
      Color
    ],
    editorProps: {
      attributes: {
        class:
          "flex flex-col w-full justify-start border-b border-r border-l border-gray-700 text-gray-800 dark:text-gray-200 items-start w-full gap-3 font-medium text-[16px] p-3 rounded-bl-md rounded-br-md outline-none min-h-[60vh] max-h-[70vh] overflow-x-hidden overflow-y-auto z-10",
      },
    },
    onUpdate: ({ editor }) => {
      handleChange(editor.getHTML());
    },
  });

  return (
    <div className="w-full">
      <Toolbar editor={editor} content={content} />
      <EditorContent style={{ whiteSpace: "pre-line" }} editor={editor} />
    </div>
  );
};

export default Tiptap;
