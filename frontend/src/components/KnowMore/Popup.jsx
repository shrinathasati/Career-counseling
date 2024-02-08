import React from 'react';

const Popup = ({ isOpen, onClose, children }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={onClose}>
            <div className="bg-white p-8 rounded absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" onClick={(e) => e.stopPropagation()}>
                <button onClick={onClose} className="float-right text-gray-500 hover:text-gray-700 focus:outline-none">
                    &times;
                </button>
                {children}
            </div>
        </div>
    );
};

export default Popup;
