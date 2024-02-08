import React from 'react';

const TestLinks = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="container mx-auto">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Test Links</h1>
                {/* First Container */}
                <div className="bg-white w-[70%] m-auto p-8 my-8 rounded-md shadow-lg border-2 border-rgb-94-246-246 hover:shadow-xl hover:transform hover:scale-105 transition-transform duration-300">
                    <h2 className="text-3xl font-bold mb-4 text-gray-800">DBMS</h2>
                    <ul className="list-disc pl-6">
                        <li className="text-blue-500 hover:underline">
                            <a target="_blank"  href="https://docs.google.com/forms/d/e/1FAIpQLSeQBLpC0lbeCg8F2f0rOfKy0h2WNyhyljO_TZUGgXDkuRF0tQ/viewform?usp=sf_link">Test Link 1</a>
                        </li>
                        <li className="text-blue-500 hover:underline">
                            <a target="_blank"  href="https://docs.google.com/forms/d/e/1FAIpQLSeQBLpC0lbeCg8F2f0rOfKy0h2WNyhyljO_TZUGgXDkuRF0tQ/viewform?usp=sf_link">Test Link 2</a>
                        </li>
                        <li className="text-blue-500 hover:underline">
                            <a target="_blank"  href="https://docs.google.com/forms/d/e/1FAIpQLSeQBLpC0lbeCg8F2f0rOfKy0h2WNyhyljO_TZUGgXDkuRF0tQ/viewform?usp=sf_link">Test Link 3</a>
                        </li>
                    </ul>
                </div>

                {/* Second Container */}
                <div className="bg-white w-[70%] m-auto p-8 my-8 rounded-md shadow-lg border-2 border-rgb-94-246-246 hover:shadow-xl hover:transform hover:scale-105 transition-transform duration-300">
                    <h2 className="text-3xl font-bold mb-4 text-gray-800">Container 2</h2>
                    <ul className="list-disc pl-6">
                        <li className="text-blue-500 hover:underline">
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeQBLpC0lbeCg8F2f0rOfKy0h2WNyhyljO_TZUGgXDkuRF0tQ/viewform?usp=sf_link">Test Link 4</a>
                        </li>
                        <li className="text-blue-500 hover:underline">
                            <a href="#">Test Link 5</a>
                        </li>
                        <li className="text-blue-500 hover:underline">
                            <a href="#">Test Link 6</a>
                        </li>
                    </ul>
                </div>

                {/* Add more containers as needed */}
            </div>
        </div>
    );
};

export default TestLinks;
