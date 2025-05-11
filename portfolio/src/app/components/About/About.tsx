import Image from 'next/image';
import AboutPic from '../../../../public/images/pic-background.jpg';

const About = () => {
    return (
        <section className="max-w-[85rem] px-4 py-36 sm:px-6 lg:px-8 mx-auto">
            <div className="h-40 w-full overflow-hidden relative">
                <Image
                    className="w-full object-cover rounded-xl absolute top-[200px] bottom-0 m-auto"
                    src={AboutPic}
                    alt="Jose Fuentes"
                    title="Jose Fuentes"
                    priority={true}
                />
            </div>

            <div className="mt-5 lg:mt-16 grid lg:grid-cols-3 gap-8 lg:gap-12">
                <div className="lg:col-span-1">
                    <h2 className="font-bold text-2xl md:text-3xl text-gray-800 dark:text-neutral-200">
                        Jose Fuentes
                    </h2>
                    <p className="mt-2 md:mt-4 text-gray-500 dark:text-neutral-500">
                        My passion is to create. Create something new that will bring a positive difference into this world.
                    </p>
                    <p className="mt-2 mb-6 md:mt-4 text-gray-500 dark:text-neutral-500">
                        When I&apos;m not coding, I love spending time with my wonderful family. I’m a big marvel fan. I love to play video games. I like to keep myself in shape by working out. I play basketball, soccer, and volleyball. I’m also a Christian, so I love to spread the love and word of God wherever I go.
                    </p>

                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-gold-500 text-woodsmoke-950 hover:bg-woodsmoke-950 hover:text-white disabled:opacity-50 disabled:pointer-events-none dark:hover:border dark:hover:border-gold-500"
                    >
                        Open Resume
                    </a>
                </div>

                <div className="lg:col-span-2">
                    <div className="grid sm:grid-cols-2 gap-8 md:gap-12">
                        <div className="flex gap-x-5">
                            <svg className="flex-shrink-0 mt-1 size-6 text-woodsmoke-950 dark:text-gold-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 448 512" fill="currentColor"><path d="M96 128a128 128 0 1 0 256 0A128 128 0 1 0 96 128zm94.5 200.2l18.6 31L175.8 483.1l-36-146.9c-2-8.1-9.8-13.4-17.9-11.3C51.9 342.4 0 405.8 0 481.3c0 17 13.8 30.7 30.7 30.7H162.5c0 0 0 0 .1 0H168 280h5.5c0 0 0 0 .1 0H417.3c17 0 30.7-13.8 30.7-30.7c0-75.5-51.9-138.9-121.9-156.4c-8.1-2-15.9 3.3-17.9 11.3l-36 146.9L238.9 359.2l18.6-31c6.4-10.7-1.3-24.2-13.7-24.2H224 204.3c-12.4 0-20.1 13.6-13.7 24.2z"/></svg>
                            <div className="grow">
                                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                                    Experienced Developer
                                </h3>
                                <p className="mt-1 text-gray-600 dark:text-neutral-400">
                                    Over 10 years of hands-on experience in crafting intuitive, responsive, and visually appealing user interfaces.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-x-5">
                            <svg className="flex-shrink-0 mt-1 size-6 text-woodsmoke-950 dark:text-gold-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 640 512" fill="currentColor"><path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"/></svg>
                            <div className="grow">
                                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                                    Tech-Savvy
                                </h3>
                                <p className="mt-1 text-gray-600 dark:text-neutral-400">
                                    Proficient in HTML, CSS, JavaScript, and modern frameworks like React, ensuring cutting-edge solutions for your projects.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-x-5">
                            <svg className="flex-shrink-0 mt-1 size-6 text-woodsmoke-950 dark:text-gold-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 640 512" fill="currentColor"><path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z"/></svg>
                            <div className="grow">
                                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                                    Client-Focused
                                </h3>
                                <p className="mt-1 text-gray-600 dark:text-neutral-400">
                                    Dedicated to understanding and exceeding client expectations with custom-tailored designs and seamless user experiences.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-x-5">
                            <svg className="flex-shrink-0 mt-1 size-6 text-woodsmoke-950 dark:text-gold-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 384 512" fill="currentColor"><path d="M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z"/></svg>
                            <div className="grow">
                                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                                    Problem Solver
                                </h3>
                                <p className="mt-1 text-gray-600 dark:text-neutral-400">
                                    Strong problem-solving skills and a keen eye for detail, ensuring high-quality code and smooth project execution.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;