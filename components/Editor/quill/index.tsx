import React from "react";

interface QuillEditorProps {
  id: string;
  value: string;
  onChange: Function;
  error: boolean;
  simple: boolean;
  sx: object;
}
export default function QuillEditor({
  id,
  error,
  value,
  onChange,
  simple = false,
  sx,
  ...other
}) {
  const modules = {
    toolbar: {
      container: `#${id}`,
      handlers: {
        undo: undoChange,
        redo: redoChange,
      },
    },
    history: {
      delay: 500,
      maxStack: 100,
      userOnly: true,
    },
    syntax: true,
    clipboard: {
      matchVisual: false,
    },
  };

  return (
    <>
      <EditorToolbar id={id} isSimple={simple} />
      <ReactQuill
        value={value}
        onChange={onChange}
        modules={modules}
        formats={formats}
        placeholder='Write something awesome...'
        {...other}
      />
    </>
  );
}
