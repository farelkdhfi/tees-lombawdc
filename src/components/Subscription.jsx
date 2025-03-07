import React from 'react'

const Subscription = () => {
    return (
        <div className="w-full bg-[#fafafa] text-black/70 py-10 text-sm px-6 sm:px-10 md:px-15 flex flex-wrap items-center justify-between gap-y-6">
            <div className="flex flex-col gap-y-3 w-full sm:w-auto">
                <p className="text-lg font-semibold">Join Our Newsletter</p>
                <p>We love to surprise our subscribers with occasional gifts.</p>
            </div>
            <div className="flex flex-wrap gap-3 w-full sm:w-auto">
                <input
                    type="text"
                    placeholder="Your email address"
                    className="px-4 py-2 rounded-md border placeholder:text-black/70 border-black/70 focus:outline-none text-black/70 w-full sm:w-64"
                />
                <button className="border-b-2 border-b-green-700 text-black/70 shadow px-4 py-2 rounded-md font-semibold w-full sm:w-auto">
                    Subscribe
                </button>
            </div>
        </div>
    )
}

export default Subscription