import React from 'react'

const Checkout = () => {

    const handleClick = () => {
        return window.location.href = "/"
    }

    const createOrder = () => {
        fetch(`${import.meta.env.VITE_SERVER_URL}/create-checkout-session`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                items: [
                    { id: 1, quantity: 3 },
                    { id: 2, quantity: 1 }
                ]
            })
        }).then(res => {
            if (res.ok) return res.json()
            return res.json().then(json => Promise.reject(json))
        }).then(({ url }) => {
            window.location = url
        }).catch(e => {
            console.log(e.error)
        })
    }

    return (
        <div>
            <div className="max-w-7xl mx-auto relative">
                <div className="relative py-16 flex justify-center px-4 sm:px-0">
                    <div className="max-w-3xl text-center">
                        <h1 className="text-4xl sm:text-5xl font-semibold text-gray-900 xl:text-6xl font-serif !leading-tight">
                            Best item
                        </h1>
                        <p className="mt-4 text-lg sm:text-xl leading-8 text-gray-800 sm:px-16" >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, rerum nihil natus quasi quidem tenetur eaque ducimus ullam distinctio hic aliquid numquam maiores ad eveniet odit quos aperiam saepe architecto.</p>
                        <div className="mt-8 flex w-full space-x-8 justify-center"><button className="inline-flex items-center justify-center px-4 py-2.5 border border-transparent text-sm font-medium rounded-md shadow-sm focus:outline-none
                            appearance-none text-white bg-lime-600 hover:bg-lime-700 !px-12 !shadow-lg !rounded-full !text-base cursor-pointer" onClick={createOrder}><p>Buy Now</p></button>
                        </div>
                        <div className="mt-8 flex w-full space-x-8 justify-center"><button className="inline-flex items-center justify-center justify-center px-4 py-2.5 border border-transparent text-sm font-medium rounded-md shadow-sm focus:outline-none
                            appearance-none text-white bg-blue-600 hover:bg-blue-700 !px-12 !shadow-lg !rounded-full !text-base cursor-pointer" onClick={handleClick}><p>Home Page</p></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout