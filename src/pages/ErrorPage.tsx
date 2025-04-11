import React from 'react';

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center p-4">
            <div className="mb-8">
                <div className="animate-spin text-6xl mb-6">⚙️</div>
            </div>
            <h1 className="text-4xl font-bold mb-4 font-['The_Seasons']">Page Under Construction</h1>
            <p className="text-xl mb-6">We're working hard to bring you something amazing. Please check back soon!</p>
            <a href="/" className="px-6 py-2 border border-current hover:bg-[#ffcc99] hover:text-[#330000] transition-colors">
                Return to Home
            </a>
        </div>
    );
};

export default ErrorPage; 