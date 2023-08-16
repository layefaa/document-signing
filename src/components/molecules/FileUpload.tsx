import React, { useState } from "react";

const FileUpload = ({ name, accept, max }) => {
    const [file, setFile] = useState(null);

    const handleChange = (event) => {
        setFile(event.target.files[0]);
    };

    return (
        <input
            type="file"
            name={name}
            accept={accept}
            max={max} // 5MB
            onChange={handleChange}
        />
    );
};

export default FileUpload;
