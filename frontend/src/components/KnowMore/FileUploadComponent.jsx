import React, { useState } from 'react';
import axios from 'axios';
import { FaUpload } from 'react-icons/fa';
import Popup from './Popup'; // Adjust the import path

const FileUploadComponent = ({ onFileUpload }) => {
    const [file, setFile] = useState(null);
    const [isPopupOpen, setPopupOpen] = useState(false);

    const handleFileUpload = async () => {
        try {
            if (!file) {
                console.error('No file selected.');
                return;
            }

            const formData = new FormData();
            formData.append('resume', file);
            setPopupOpen(true);
            const response = await axios.post('http://127.0.0.1:80/upload_resume', formData);

            console.log(response.data);

            setFile(null);


            onFileUpload(response.data); // You can handle the response data as needed in your React component
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    };

    const handleClosePopup = () => {
        setPopupOpen(false);
    };

    return (
        <>
            <div className='text-center '>
                <div className='px-2 text-lg font-semibold'> Upload Resume <br /> </div>
                <div className='px-2 text-sm '>Scan</div>
            </div>

            <div className='flex m-2 p-4 cursor-pointer bg-white border border-gray-300 rounded-lg shadow-md'>
                <label htmlFor='fileInput' className='w-[100%] cursor-pointer'>
                    <input
                        id='fileInput'
                        type='file'
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                    <FaUpload className='text-green-500 text-2xl' />
                    <p className='ml-2 text-gray-600'>Choose a file</p>
                </label>

                <div className='flex justify-center'>
                    <button
                        onClick={handleFileUpload}
                        className='bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600'
                    >
                        Upload
                    </button>
                </div>
            </div>

            {isPopupOpen && (
                <Popup isOpen={isPopupOpen} onClose={handleClosePopup}>
                    <h2>File Uploaded Successfully!</h2>
                    <p>Your file has been successfully uploaded.</p>
                </Popup>
            )}
        </>
    );
};

export default FileUploadComponent;
