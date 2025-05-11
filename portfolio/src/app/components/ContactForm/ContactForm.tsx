"use client";

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
    const [state, handleSubmit] = useForm("xpzvvjoa");
    if (state.succeeded) {
        alert('Message sent successfully');
    }

    return (
        <section className="max-w-[85rem] px-4 sm:px-6 lg:px-8 py-32 mx-auto">
            <a id="home-contact"></a>
            <div className="max-w-2xl lg:max-w-6xl mx-auto">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
                        Contact Me
                    </h1>
                    <p className="mt-1 text-woodsmoke-600 dark:text-neutral-400">
                        I&apos;d love to talk about how I can help you.
                    </p>
                </div>

                <div className="mt-12 grid items-center lg:grid-cols-2 gap-6 lg:gap-16">
                    <div className="flex flex-col border-2 rounded-xl p-4 sm:p-6 lg:p-8 dark:border-neutral-700">
                        <h2 className="mb-8 text-xl font-semibold text-gray-800 dark:text-neutral-200">
                            Fill in the form
                        </h2>

                        <form onSubmit={handleSubmit}>
                            <div className="grid gap-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="hs-firstname-contacts-1" className="sr-only">First Name</label>
                                        <input type="text" name="firstName" id="firstName" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm bg-neutral-200 focus:border-gold-500 focus:ring-gold-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-gold-600" placeholder="First Name" required />
                                    </div>

                                    <div>
                                        <label htmlFor="hs-lastname-contacts-1" className="sr-only">Last Name</label>
                                        <input type="text" name="lastName" id="lastName" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm bg-neutral-200 focus:border-gold-500 focus:ring-gold-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-gold-600" placeholder="Last Name" required />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="hs-email-contacts-1" className="sr-only">Email</label>
                                    <input type="email" name="email" id="email" autoComplete="email" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm bg-neutral-200 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Email" required />
                                </div>

                                <div>
                                    <label htmlFor="hs-phone-number-1" className="sr-only">Phone Number</label>
                                    <input type="text" name="phone" id="phone" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm bg-neutral-200 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Phone Number" />
                                </div>

                                <div>
                                    <label htmlFor="hs-about-contacts-1" className="sr-only">Details</label>
                                    <textarea
                                    id="hs-about-contacts-1"
                                    name="hs-about-contacts-1"
                                    rows={4} // Ensure this is a number
                                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm bg-neutral-200 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                    placeholder="Details"
                                    ></textarea>
                                </div>
                            </div>

                            <div className="mt-4 grid">
                                <button type="submit" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-gold-500 text-woodsmoke-950 hover:bg-woodsmoke-950 hover:text-white hover:border-gold-500 disabled:opacity-50 disabled:pointer-events-none">Send inquiry</button>
                            </div>

                            <div className="mt-3 text-center">
                                <p className="text-sm text-gray-500 dark:text-neutral-500">
                                    I&apos;ll get back to you in 1-2 business days.
                                </p>
                            </div>
                        </form>
                    </div>

                    <div className="divide-y divide-woodsmoke-950 dark:divide-neutral-800">
                        <div className="flex gap-x-7 py-6">
                            <svg className="flex-shrink-0 size-6 mt-1.5 text-woodsmoke-950 dark:text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" /><path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" /></svg>
                            <div className="grow">
                                <h3 className="font-semibold text-gray-800 dark:text-white">Contact me by email</h3>
                                <p className="mt-1 text-sm text-woodsmoke-500 dark:text-neutral-500">If you wish to write me an email instead please use</p>
                                <a className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-woodsmoke-600 hover:text-woodsmoke-950 dark:text-neutral-400 dark:hover:text-white" href="mailto:jf413studios@gmail.com" target="_blank">
                                    jf413studios@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className=" flex gap-x-7 py-6">
                            <svg className="flex-shrink-0 size-6 mt-1.5 text-woodsmoke-950 dark:text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                            <div className="grow">
                                <h3 className="font-semibold text-gray-800 dark:text-white">Contact me by phone</h3>
                                <p className="mt-1 text-sm text-woodsmoke-500 dark:text-neutral-500">If you wish to speak to me directly instead please use</p>
                                <a className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-woodsmoke-600 hover:text-woodsmoke-950 dark:text-neutral-400 dark:hover:text-white" href="tel:4014190189" target="_blank">
                                    (401)-419-0189
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;