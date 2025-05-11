import Image from 'next/image';
import background1 from '../../../../public/images/web-design-background.jpg';
import background2 from '../../../../public/images/business-background.jpg';
import background3 from '../../../../public/images/teamwork-background.jpg';

const Features = () => {
    return (
        <section className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <h1 className="text-3xl font-bold md:text-4xl md:leading-tight dark:text-white text-center mb-10">Services</h1>
            <div className="relative p-6 md:p-16">
                <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
                    <div className="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2">
                        <h2 className="text-2xl text-gray-800 font-bold sm:text-3xl dark:text-white">
                            Unlock Your Website&apos;s Full Potential
                        </h2>

                        <nav className="grid gap-4 mt-5 md:mt-10" aria-label="Tabs" role="tablist">
                            <button type="button" className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-neutral-700 dark:hover:bg-neutral-700 active" id="tabs-with-card-item-1" data-hs-tab="#tabs-with-card-1" aria-controls="tabs-with-card-1" role="tab">
                                <span className="flex">
                                    <svg className="flex-shrink-0 mt-2 size-6 md:size-7 hs-tab-active:text-gold-600 text-gray-800 dark:hs-tab-active:text-gold-500 dark:text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="10" height="14" x="3" y="8" rx="2"/><path d="M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4"/><path d="M8 18h.01"/></svg>
                                    <span className="grow ms-6">
                                        <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-gold-500 dark:text-white">Responsive</span>
                                        <span className="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-white">Enjoy expert responsive development for seamless, user-friendly websites that look stunning on any device. I will ensure your site adapts flawlessly to all screen sizes, delivering an optimal browsing experience to every user.</span>
                                    </span>
                                </span>
                            </button>

                            <button type="button" className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-neutral-700 dark:hover:bg-neutral-700" id="tabs-with-card-item-2" data-hs-tab="#tabs-with-card-2" aria-controls="tabs-with-card-2" role="tab">
                                <span className="flex">
                                    <svg className="flex-shrink-0 mt-2 size-6 md:size-7 hs-tab-active:text-gold-600 text-gray-800 dark:hs-tab-active:text-gold-500 dark:text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 10v12"/><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"/></svg>
                                    <span className="grow ms-6">
                                        <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-gold-500 dark:text-white">Affordable</span>
                                        <span className="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-white">Elevate your web projects without breaking the bank. I offer affordable development support and consulting services, providing top-notch solutions that fit your budget and exceed your expectations.</span>
                                    </span>
                                </span>
                            </button>

                            <button type="button" className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-neutral-700 dark:hover:bg-neutral-700" id="tabs-with-card-item-3" data-hs-tab="#tabs-with-card-3" aria-controls="tabs-with-card-3" role="tab">
                                <span className="flex">
                                    <svg className="flex-shrink-0 mt-2 size-6 md:size-7 hs-tab-active:text-gold-600 text-gray-800 dark:hs-tab-active:text-gold-500 dark:text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"/><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"/></svg>
                                    <span className="grow ms-6">
                                        <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-gold-500 dark:text-white">24/7 Support</span>
                                        <span className="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-white">Keep your website running smoothly anytime, anywhere with my 24/7 development support. I&apos;m always on standby to address any issues, ensuring your site remains functional and reliable around the clock.</span>
                                    </span>
                                </span>
                            </button>
                        </nav>
                    </div>

                    <div className="lg:col-span-6">
                        <div className="relative">
                            <div>
                                <div id="tabs-with-card-1" role="tabpanel" aria-labelledby="tabs-with-card-item-1">
                                    <Image
                                        className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/20"
                                        src={background1}
                                        alt="Web Design"
                                        title="Web Design"
                                    />
                                </div>

                                <div id="tabs-with-card-2" className="hidden" role="tabpanel" aria-labelledby="tabs-with-card-item-2">
                                    <Image
                                        className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/20"
                                        src={background2}
                                        alt="Business Background"
                                        title="Business Background"
                                    />
                                </div>

                                <div id="tabs-with-card-3" className="hidden" role="tabpanel" aria-labelledby="tabs-with-card-item-3">
                                    <Image
                                        className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/20"
                                        src={background3}
                                        alt="Teamwork Background"
                                        title="Teamwork Background"
                                    />
                                </div>
                            </div>

                            <div className="hidden absolute top-0 end-0 translate-x-20 md:block lg:translate-x-20">
                                <svg className="w-16 h-auto text-woodsmoke-950 dark:text-gold-500" width="121" height="135" viewBox="0 0 121 135" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
                                    <path d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
                                    <path d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute inset-0 grid grid-cols-12 size-full">
                    <div className="col-span-full lg:col-span-7 lg:col-start-6 bg-gray-100 w-full h-5/6 rounded-xl sm:h-3/4 lg:h-full dark:bg-neutral-800"></div>
                </div>
            </div>
        </section>
    );
};

export default Features;