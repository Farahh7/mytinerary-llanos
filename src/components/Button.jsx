import React from 'react';

export default function ButtonLog({ onClick }) {
    return (
        <button
            className="flex items-center text-lg font-semibold text-white bg-[#4f46e5] py-2 px-2 rounded-md hover:bg-[#3d388d]"
            onClick={onClick}
        >
            <svg className="h-8 w-8 text-white mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            Login
        </button>
    );
}
