import React from 'react';

const ContactUs = () => {
    return (
        <div className=''>
            <div className=" text-center mx-auto  py-[20vh]" style={{
                backgroundImage: "url(https://i.ibb.co/g7dkMMR/pexels-negative-space-33999.jpg)",
                backgroundColor: 'rgba(0,0,0, .5)',
                backgroundBlendMode: 'overlay',
                backgroundPosition: 'center',
                backgroundSize: 'cover',

            }}>
                <h2 className=' font-bold text-white  text-2xl p-5 lg:text-6xl'>Contact</h2>
                <p className='text-white mx-auto max-w-2xl px-5'>At Event Management, we value open communication and are here to assist you in any way we can. Whether you have questions, feedback, or need assistance with our products or services, our dedicated team is ready to support you.</p>
            </div>
            <div className='container mx-auto my-5 px-5 lg:flex gap-5 lg:gap-10'>
                <div className='lg:w-1/4 text-center lg:text-left space-y-2'>
                    <h2 className='text-5xl font-bold '>Get in touch</h2>
                    <p className='py-5'>We are waiting for you on our office in Feni or in other way, you can contact us via the contact form below to discuss your project, your idea.</p>
                    <div className='py-5 space-y-2 '>
                        <h2 className='text-xl  font-semibold mx-auto lg:mx-0   border-b-2 w-fit '>Visit Our Office</h2>
                        <p className=''>Feni, Chittagong,<br /> Mahipal plaza.</p>
                    </div>
                    <div className=''>
                        <h2><span className='text-lg font-semibold'>Email:</span> <span className='text-base'>jahidhossen02@gmail.com</span></h2>
                        <h2><span className='text-lg font-semibold'>Phone:</span> +88 1627095969</h2>
                        <h2><span className='text-lg font-semibold'>Phone:</span> +966 538171094</h2>
                    </div>
                    <div className='py-10 space-y-3 '>
                        <h2 className='text-lg font-semibold'>Connect on Social Media</h2>
                        <div className="flex  gap-4  justify-center lg:justify-start ">

                            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
                            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                        </div>
                    </div>

                </div>
                <form className=' space-y-5 md:space-y-0 my-5 md:grid  md:grid-cols-2 lg:w-3/4 gap-5'>
                    <div className='space-y-2 w-full'>
                        <h5 className='text-lg font-semibold'>Your Name (required)</h5>
                        <input className='border-2 border-gray-400 my-2.5 w-full py-2.5 px-5 ' type="text" />
                    </div>
                    <div className='space-y-2 w-full'>
                        <h5 className='text-lg font-semibold'>Your Email (required)</h5>
                        <input className='border-2 border-gray-400 my-2.5 w-full py-2.5 px-5 ' type="text" />
                    </div>
                    <div className='space-y-2 w-full'>
                        <h5 className='text-lg font-semibold'>Your Contact Number (required)</h5>
                        <input className='border-2 border-gray-400 my-2.5 w-full py-2.5 px-5 ' type="text" />
                    </div>
                    <div className='space-y-2 w-full'>
                        <h5 className='text-lg font-semibold'>Subject</h5>
                        <input className='border-2 border-gray-400 my-2.5 w-full py-2.5 px-5 ' type="text" />
                    </div>
                    <div className='space-y-2 col-span-2 w-full'>
                        <h5 className='text-lg font-semibold'>Your Message</h5>
                        <textarea className=' border-2 border-gray-400 my-2.5 w-full py-2.5 px-5 ' name="" id="" cols="30" rows="5"></textarea>
                    </div>
                    <button className='btn w-fit text-white  bg-pink-500'>SEND EMAIL</button>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;