import React from 'react'

export default function ButtonLog({ onClick }) {
    return (
        <button
            className="text-lg font-semibold text-white bg-[#4f46e5] py-2 px-6 rounded-md hover:bg-[#3d388d]"
            onClick={onClick}
        >
            <LordIcon
                src="https://cdn.lordicon.com/hbvyhtse.json"
                trigger="hover"
                colors="primary:#ffffff"
                style={{ width: '20px', height: '20px' }} 
            />
            Login255
        </button>
    );

}
