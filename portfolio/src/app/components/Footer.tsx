import Link from '../../../node_modules/next/link';

const Footer = () => {
    return (
        <footer className="mt-auto w-full py-10 px-4 sm:px-6 lg:px-8 mx-auto bg-woodsmoke-950 dark:bg-gold-500">
            <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-5 max-w-[85rem] m-auto lg:px-8">
                <div>
                    <Link
                        className="flex-none text-xl font-semibold text-white dark:text-woodsmoke-950"
                        href="/"
                        aria-label="JF 4:13 STUDIOS"
                    >
                        Jose Fuentes
                    </Link>
                </div>

                <ul className="text-left md:text-center">
                    <li className="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:content-['/'] before:text-white dark:before:text-neutral-600">
                        <Link
                            className="inline-flex gap-x-2 text-sm text-white hover:text-gray-400 dark:text-woodsmoke-950 dark:hover:text-woodsmoke-500 font-semibold"
                            href="/about"
                        >
                            About
                        </Link>
                    </li>
                    <li className="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:content-['/'] before:text-white dark:before:text-neutral-600">
                        <Link
                            className="inline-flex gap-x-2 text-sm text-white hover:text-gray-400 dark:text-woodsmoke-950 dark:hover:text-woodsmoke-500 font-semibold"
                            href="/services"
                        >
                            Services
                        </Link>
                    </li>
                    <li className="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:content-['/'] before:text-white dark:before:text-neutral-600">
                        <Link
                            className="inline-flex gap-x-2 text-sm text-white hover:text-gray-400 dark:text-woodsmoke-950 dark:hover:text-woodsmoke-500 font-semibold"
                            href="/contact"
                        >
                            Contact
                        </Link>
                    </li>
                </ul>

                <div className="md:text-end space-x-2">
                    <a
                        className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-white hover:bg-white hover:text-woodsmoke-950 disabled:opacity-50 disabled:pointer-events-none dark:text-woodsmoke-950 dark:hover:bg-woodsmoke-950 dark:hover:text-gold-500"
                        href="https://www.linkedin.com/in/jose-fuentes-17316b52/"
                        target="_blank"
                    >
                        <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 448 512"><path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"/></svg>
                    </a> 
                </div>
            </div>
        </footer>
    );
};

export default Footer;
