import React from 'react';

const Stats = () => {
    return (
        <div>
            <div className="col-span-3 md:col-span-2 flex flex-col items-center md:items-start gap-4 pt-16 px-2">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-8 pt-4 mx-auto">
                    <div
                        title="All countributed components"
                        className="flex flex-col justify-center items-center gap-2 border-2 border-dashed border-gray-500/50 p-4 rounded-md h-32 dark:text-gray-200">
                        <div className="flex gap-2 items-center">
                            <span className="font-bold text-3xl md:text-4xl">
                                100+
                            </span>
                        </div>
                        <span className="font-semibold text-sm text-center">
                            Satisfied Clients
                        </span>
                    </div>

                    <div
                        title="Users got help"
                        className="flex flex-col justify-center items-center gap-2 border-2 border-dashed border-gray-500/50 p-4 rounded-md h-32 dark:text-gray-200">
                        <div className="flex gap-2 items-center">
                            <span className="font-bold text-3xl md:text-4xl">
                                3.3k
                            </span>
                        </div>
                        <span className="font-semibold text-sm text-center">
                            Projects Completed
                        </span>
                    </div>

                    <div
                        title="Total favorites received on components"
                        className="flex flex-col justify-center items-center gap-2 border-2 border-dashed border-gray-500/50 p-4 rounded-md h-32 dark:text-gray-200">
                        <div className="flex gap-2 items-center">
                            <span className="font-bold text-3xl md:text-4xl">
                                60
                            </span>
                            <svg
                                className="w-8 h-8"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"></path>
                            </svg>
                        </div>
                        <span className="font-semibold text-sm text-center">
                            Favorites received
                        </span>
                    </div>

                    <div
                        title="component views"
                        className="md:col-start-2 lg:col-auto flex flex-col justify-center items-center gap-2 border-2 border-dashed border-gray-500/50 p-4 rounded-md h-32 dark:text-gray-200">
                        <div className="flex gap-2 items-center">
                            <span className="font-bold text-3xl md:text-4xl">
                                3.3k
                            </span>
                            <svg
                                className="w-8 h-8"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"></path>
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            </svg>
                        </div>
                        <span className="font-semibold text-sm text-center">
                            Views in last 30 days
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stats;
