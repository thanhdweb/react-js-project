import React from 'react'

export const Newsletter = () => {
    return (
        <div className='px-4 lg:px-14 max-w-screen-xl mx-auto bg-neutralSilver py-16'>
            <div className='flex items-center justify-center lg:w-2/5 mx-auto'>
                <div className='text-center'>
                    <h2 className='lg:text-5xl text-3xl text-neutral-800 font-semibold mb-6 lg:leading-snug'>Pellentesque suscipit fringilla libero eu.</h2>
                    <div className='flex justify-center'>
                        <button className='btn-primary flex gap-4 items-center'>Get a Demo
                            <i class="fa-solid fa-arrow-right-long text-sm"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
