/* eslint-disable react/prop-types */
import MDEditor from "@uiw/react-md-editor";

export default function Editor({ tempNoteText, setTempNoteText }) {
  return (
    <section data-color-mode="light" className="pane editor">
      <MDEditor height="100%" value={tempNoteText} onChange={setTempNoteText} />
    </section>
  );
}
