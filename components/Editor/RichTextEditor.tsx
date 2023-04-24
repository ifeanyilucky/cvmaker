import React from 'react';
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';

export default function RichTextEditor({ ...others }) {
  const { quill, quillRef, Quill } = useQuill();
  const counterRef = React.useRef<HTMLDivElement>();

  if (Quill && !quill) {
    Quill.register('modules/counter', function (quill, options) {
      quill.on('text-change', function () {
        const text = quill.getText();
        // There are a couple issues with counting words
        // this way but we'll fix these later
        counterRef.current.innerText = text.split(/\s+/).length;
      });
    });
  }

  React.useEffect(() => {
    if (quill) {
      quill.on('text-change', (delta, oldDelta, source) => {
        console.log('text change');
        console.log(quill.getText());
      });
    }
  }, [quill]);
  console.log(quill);

  return (
    <div>
      <textarea style={{ width: '100%' }} ref={quillRef} {...others} />
      <div ref={counterRef} />
    </div>
  );
}
