'use client'

import React, {useState} from 'react';
import {FileInputField} from "@/components/molecules";
import {Button} from "@/components/atoms";
import {uploadDocument} from "@/api";

const UploadForm = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [error, setError] = useState<string | null>(null);

    const allowedFileTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files && event.target.files[0];

        if (file && allowedFileTypes.includes(file.type)) {
            setSelectedFile(file);
            setError(null);
        } else {
            setSelectedFile(null);
            setError('Please select a valid document file (PDF, DOC, DOCX)');
        }
    };

    const handleUpload = () => {
        if (selectedFile) {
            const formData = new FormData();
            formData.append('title', selectedFile.name);
            // @ts-ignore
            formData.append('files', [selectedFile]);
            uploadDocument(formData).then((res)=>
            console.log(res)).catch((err)=> console.log(err))
            // Here you can implement the upload logic
            console.log('Uploading:', selectedFile);
        }
    };

    //TODO : Implement File Size Restriction

    return (
        <div className="min-h-full flex flex-col  bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Upload a Document</h2>
            <div className="bg-white p-8 rounded-lg shadow-md">
                {!selectedFile &&
                    <FileInputField label={'Upload File'} handleChange={handleFileChange} accept={allowedFileTypes}
                                    max={5000}/>}
                {error && <p className="text-red-500 mb-4">{error}</p>}
                {selectedFile && <p className="mb-4 text-2xl">Selected file: <span className={'font-bold'}>{selectedFile.name} </span></p>}
                <Button
                    handleClick={handleUpload}
                    loading={!selectedFile}
                    disabled={!selectedFile}
                >
                    Upload
                </Button>
            </div>
        </div>
    );
};

export default UploadForm;
