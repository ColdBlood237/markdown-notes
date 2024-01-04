/* eslint-disable react/prop-types */
import { useState } from "react";
import MDEditor from "@uiw/react-md-editor";

export default function Editor({ currentNote, updateNote }) {
  console.log(currentNote.body);

  return (
    <section data-color-mode="light" className="pane editor">
      <MDEditor height="100%" value={currentNote.body} onChange={updateNote} />
    </section>
  );
}
