import React, { FC, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export const DocumentationManager: FC = () => {
  const [value, setValue] = useState(`
  <h1>Welcome to Clickify's Documentation Manager</h1>
   <h2>Your first step</h2>
   <ul>
        <li>Click on the document you want to edit</li>
        <li>Make your changes</li>
        <li>Click Save</li>
    </ul>
    <h2>Need help?</h2>
    <p>Clickify's support team is here to help you. If you have any questions, please contact us at
    <a href="mailto:contact@clickify.agerard.dev"> contact@clickify.agerard.dev</a></p>
    
  `);

  return <ReactQuill theme="snow" value={value} onChange={setValue} style={{ height: "100%" }} />;
};
