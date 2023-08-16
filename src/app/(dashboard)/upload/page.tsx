'use client'

import React, { useState } from 'react';

const DocumentUploadPage: React.FC = () => {
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
            // Here you can implement the upload logic
            console.log('Uploading:', selectedFile);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Upload a Document</h2>
                <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="mb-4"
                />
                {error && <p className="text-red-500 mb-4">{error}</p>}
                {selectedFile && <p className="mb-4">Selected file: {selectedFile.name}</p>}
                <button
                    onClick={handleUpload}
                    disabled={!selectedFile}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md disabled:bg-gray-400"
                >
                    Upload
                </button>
            </div>
        </div>
    );
};

export default DocumentUploadPage;
