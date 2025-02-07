import React from 'react'

const SuccessPage = () => {

    const handleClick = () => {
        return window.location.href = "/"
    }

    return (
        <div>
            <div className="max-w-7xl mx-auto relative">
                <div className="relative py-16 flex justify-center px-4 sm:px-0">
                    <div className="max-w-3xl text-center">
                        <h1 className="text-4xl sm:text-5xl font-semibold text-gray-900 xl:text-6xl font-serif !leading-tight">
                            Congratulations, the transaction was completed successfully
                        </h1>
                        <div className="mt-8 flex w-full space-x-8 justify-center"><button className="inline-flex items-center justify-center px-4 py-2.5 border border-transparent text-sm font-medium rounded-md shadow-sm focus:outline-none
                            appearance-none text-white bg-blue-600 hover:bg-blue-700 !px-12 !shadow-lg !rounded-full !text-base cursor-pointer" onClick={handleClick}><p>Back to Home</p></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SuccessPage