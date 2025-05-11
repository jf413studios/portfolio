import Link from '../../../../node_modules/next/link';

const IconsRow = () => {
    return(
        <section className="max-w-[85rem] px-4 sm:px-6 lg:px-8 py-32 mx-auto">
            <div className="grid sm:grid-cols-1 lg:grid-cols-3 items-center gap-2">
                <Link className="group flex flex-col justify-center rounded-xl p-4 md:p-7 dark:hover:bg-gold-500 hover:bg-woodsmoke-950" href="/services">
                    <div className="flex justify-center items-center size-12 bg-woodsmoke-950 group-hover:bg-gold-500 dark:bg-gold-500 rounded-xl dark:group-hover:bg-woodsmoke-950">
                        <svg className="flex-shrink-0 size-6 text-white group-hover:text-woodsmoke-950 dark:text-woodsmoke-950 dark:group-hover:text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 640 512" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M64 96c0-35.3 28.7-64 64-64l384 0c35.3 0 64 28.7 64 64l0 256-64 0 0-256L128 96l0 256-64 0L64 96zM0 403.2C0 392.6 8.6 384 19.2 384l601.6 0c10.6 0 19.2 8.6 19.2 19.2c0 42.4-34.4 76.8-76.8 76.8L76.8 480C34.4 480 0 445.6 0 403.2zM281 209l-31 31 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-48-48c-9.4-9.4-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM393 175l48 48c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"/></svg>
                    </div>
                    <div className="mt-5">
                        <h3 className="text-lg font-semibold text-woodsmoke-950 dark:text-white dark:group-hover:text-woodsmoke-950 group-hover:text-white">Front-End Development</h3>
                        <p className="mt-1 text-gray-600 dark:text-white dark:group-hover:text-woodsmoke-950 font-normal group-hover:text-white">I specialize in creating visually stunning and highly responsive web interfaces using the latest technologies to deliver seamless user experiences.</p>
                        <span className="mt-2 inline-flex items-center gap-x-1.5 text-sm dark:text-gold-500 decoration-2 group-hover:underline font-bold dark:group-hover:text-woodsmoke-950 group-hover:text-white">
                        Learn more
                        <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                        </span>
                    </div>
                </Link>

                <Link className="group flex flex-col justify-center rounded-xl p-4 md:p-7 dark:hover:bg-gold-500 hover:bg-woodsmoke-950" href="/services">
                    <div className="flex justify-center items-center size-12 bg-woodsmoke-950 group-hover:bg-gold-500 dark:bg-gold-500 rounded-xl dark:group-hover:bg-woodsmoke-950">
                        <svg className="flex-shrink-0 size-6 text-white group-hover:text-woodsmoke-950 dark:text-woodsmoke-950 dark:group-hover:text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 576 512" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M413.5 237.5c-28.2 4.8-58.2-3.6-80-25.4l-38.1-38.1C280.4 159 272 138.8 272 117.6l0-12.1L192.3 62c-5.3-2.9-8.6-8.6-8.3-14.7s3.9-11.5 9.5-14l47.2-21C259.1 4.2 279 0 299.2 0l18.1 0c36.7 0 72 14 98.7 39.1l44.6 42c24.2 22.8 33.2 55.7 26.6 86L503 183l8-8c9.4-9.4 24.6-9.4 33.9 0l24 24c9.4 9.4 9.4 24.6 0 33.9l-88 88c-9.4 9.4-24.6 9.4-33.9 0l-24-24c-9.4-9.4-9.4-24.6 0-33.9l8-8-17.5-17.5zM27.4 377.1L260.9 182.6c3.5 4.9 7.5 9.6 11.8 14l38.1 38.1c6 6 12.4 11.2 19.2 15.7L134.9 484.6c-14.5 17.4-36 27.4-58.6 27.4C34.1 512 0 477.8 0 435.7c0-22.6 10.1-44.1 27.4-58.6z"/></svg>
                    </div>
                    <div className="mt-5">
                        <h3 className="text-lg font-semibold text-woodsmoke-950 dark:text-white dark:group-hover:text-woodsmoke-950 group-hover:text-white">Innovative Product Building</h3>
                        <p className="mt-1 text-gray-600 dark:text-white dark:group-hover:text-woodsmoke-950 font-normal group-hover:text-white">Solving real-world problems and helping businesses scale. Focusing on future-proof solutions and cutting-edge technologies.</p>
                        <span className="mt-2 inline-flex items-center gap-x-1.5 text-sm dark:text-gold-500 decoration-2 group-hover:underline font-bold dark:group-hover:text-woodsmoke-950 group-hover:text-white">
                        Learn more
                        <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                        </span>
                    </div>
                </Link>

                <Link className="group flex flex-col justify-center rounded-xl p-4 md:p-7 dark:hover:bg-gold-500 hover:bg-woodsmoke-950" href="/services">
                    <div className="flex justify-center items-center size-12 bg-woodsmoke-950 group-hover:bg-gold-500 dark:bg-gold-500 rounded-xl dark:group-hover:bg-woodsmoke-950">
                        <svg className="flex-shrink-0 size-6 text-white group-hover:text-woodsmoke-950 dark:text-woodsmoke-950 dark:group-hover:text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 640 512" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M72 88a56 56 0 1 1 112 0A56 56 0 1 1 72 88zM64 245.7C54 256.9 48 271.8 48 288s6 31.1 16 42.3l0-84.7zm144.4-49.3C178.7 222.7 160 261.2 160 304c0 34.3 12 65.8 32 90.5l0 21.5c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-26.8C26.2 371.2 0 332.7 0 288c0-61.9 50.1-112 112-112l32 0c24 0 46.2 7.5 64.4 20.3zM448 416l0-21.5c20-24.7 32-56.2 32-90.5c0-42.8-18.7-81.3-48.4-107.7C449.8 183.5 472 176 496 176l32 0c61.9 0 112 50.1 112 112c0 44.7-26.2 83.2-64 101.2l0 26.8c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32zm8-328a56 56 0 1 1 112 0A56 56 0 1 1 456 88zM576 245.7l0 84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM320 32a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM240 304c0 16.2 6 31 16 42.3l0-84.7c-10 11.3-16 26.1-16 42.3zm144-42.3l0 84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM448 304c0 44.7-26.2 83.2-64 101.2l0 42.8c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-42.8c-37.8-18-64-56.5-64-101.2c0-61.9 50.1-112 112-112l32 0c61.9 0 112 50.1 112 112z"/></svg>
                    </div>
                    <div className="mt-5">
                        <h3 className="text-lg font-semibold text-woodsmoke-950 dark:text-white dark:group-hover:text-woodsmoke-950 group-hover:text-white">Collaboration &amp; Growth</h3>
                        <p className="mt-1 text-gray-600 dark:text-white dark:group-hover:text-woodsmoke-950 font-normal group-hover:text-white">Working with like-minded individuals and teams to turn ideas into reality. Let&apos;s collaborate and create something impactful together.</p>
                        <span className="mt-2 inline-flex items-center gap-x-1.5 text-sm dark:text-gold-500 decoration-2 group-hover:underline font-bold dark:group-hover:text-woodsmoke-950 group-hover:text-white">
                        Learn more
                        <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                        </span>
                    </div>
                </Link>
            </div>
        </section>
    );
};

export default IconsRow;