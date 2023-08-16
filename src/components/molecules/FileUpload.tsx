import React, {useState} from "react";

const FileUpload = ({name, accept, max}: { name: string, accept: string, max: number }) => {
    const [file, setFile] = useState(null);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        // @ts-ignore
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
