import React from 'react'

export const Blog = () => {

    const blogs = [
        { id: 1, title: "Creating Streamlined Safeguarding Processes with OneRen", image: "/src/assets/image 18.png" },
        { id: 2, title: "What are your safeguarding responsibilities and how can you manage them?", image: "/src/assets/image 19.png" },
        { id: 3, title: "Revamping the Membership Model with Triathlon Australia", image: "/src/assets/image 20.png" }
    ]

    return (
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto py-12'>
            <div className='text-center md:w-1/2 mx-auto'>
                <h2 className='text-4xl text-neutralDGrey font-semibold mb-4'>Caring is the new marketing</h2>
                <p className='text-sm text-neutralDGrey mb-8 md:w-3/4 mx-auto'>The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.</p>
            </div>

            {/*items blogs */}
            <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between'>
                {
                    blogs.map(blog => <div key={blog.id} className='mx-auto relative mb-12 cursor-pointer'>
                        <img src={blog.image} alt="" className='hover:scale-95 transition-all duration-300' />
                        <div className='text-center px-4 py-6 bg-white shadow-lg rounded-md md:w-3/4 mx-auto absolute left-0 right-0 -bottom-12'>
                            <h3 className='mb-3 text-neutralDGrey font-semibold line-clamp-2'>{blog.title}</h3>
                            <div className='flex justify-center gap-4'>
                                <a href="/" className='font-bold text-brandPrimary hover:text-neutral-700'>Readmore </a>
                                <img src="/src/assets/Right.png" alt="" className='cursor-pointer' />
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}
