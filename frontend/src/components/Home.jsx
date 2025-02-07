import React from 'react'

const Home = () => {

    const handleClick = () => {
        return window.location.href = "/checkout"
    }

    return (
        <div>
            <div className="mx-auto max-w-screen-xl px-6 relative">
                <div className="relative flex h-16 space-x-10 w-full">
                    <div className="flex-shrink-0 flex px-2 py-3 items-center space-x-8 flex-1 justify-end justify-self-end "><a
                        className="text-gray-700 hover:text-lime-700 text-sm font-medium" href="/">Login</a>
                        <a className="text-white bg-gray-800 hover:bg-gray-900 inline-flex items-center justify-center px-3 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm "
                            href="/">Sign up</a>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto relative">
                <div className="relative py-16 flex justify-center px-4 sm:px-0">
                    <div className="max-w-3xl text-center">
                        <div className="pb-4">
                            <span className="inline-flex items-center rounded-2xl bg-lime-100 px-4 py-1.5 text-xs sm:text-sm font-serif font-medium text-lime-700">Unlock the potential Stripe</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-semibold text-gray-900 xl:text-6xl font-serif !leading-tight">
                            Buy something Using Stripe
                        </h1>
                        <p className="mt-4 text-lg sm:text-xl leading-8 text-gray-800 sm:px-16" >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, rerum nihil natus quasi quidem tenetur eaque ducimus ullam distinctio hic aliquid numquam maiores ad eveniet odit quos aperiam saepe architecto.</p>
                        <div className="mt-8 flex w-full space-x-8 justify-center"><button className="inline-flex items-center justify-center px-4 py-2.5 border border-transparent text-sm font-medium rounded-md shadow-sm focus:outline-none
                            appearance-none text-white bg-lime-600 hover:bg-lime-700 !px-12 !shadow-lg !rounded-full !text-base cursor-pointer" onClick={handleClick}><p>Go to Checkout Page</p></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home