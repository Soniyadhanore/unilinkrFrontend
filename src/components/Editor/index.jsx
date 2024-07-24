import React from "react";
import PropTypes from "prop-types";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
const EditorComponent = ({ className, value, onChange, error }) => {
  const handleEditorDataChange = (event, editor) => {
    const data = editor.getData();
    // console.log("textLength", data);
    onChange(data);
  };

  return (
    <div className={className}>
      <CKEditor
        className="h-[80px]"
        editor={ClassicEditor}
        data={value}
        onChange={handleEditorDataChange}
      />
       {error && (
        <span className="text-sm text-red-700 font-normal absolute left-0">
          {error}
        </span>
      )}
    </div>
  );
};
export default EditorComponent;

EditorComponent.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func,
};
