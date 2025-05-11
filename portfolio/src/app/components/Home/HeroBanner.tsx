import Image from 'next/image';
import banner from '../../../../public/images/homepage-banner.png';
import Link from '../../../../node_modules/next/link';

const HeroBanner = () => {
  return (
    <section className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
            <div>
                <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white">Innovating the <span className="text-gold-500">Future</span>, One Product at a Time</h1>
                <p className="mt-3 text-lg text-gray-800 dark:text-neutral-400">Hi there! My name is Jose Fuentes, a front-end developer and entrepreneur with a passion for creating next-gen digital products. Focused on innovation, I combine sleek design and powerful code to build solutions that drive the future of technology.</p>
                <div className="mt-7 grid gap-3 w-full sm:inline-flex">
                    <Link className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-gold-500 text-woodsmoke-950 hover:bg-woodsmoke-950 hover:text-white disabled:opacity-50 disabled:pointer-events-none dark:hover:border dark:hover:border-gold-500" href="/work">
                        Discover My Work
                    <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                    </Link>
                    <a className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-white text-woodsmoke-950 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800" href="#home-contact">
                        Let&apos;s Build Together
                    </a>
                </div>
            </div>
            <div className="relative">
                <Image
                    className="w-full rounded-md border border-woodsmoke-100  dark:shadow-md dark:shadow-gold-500"
                    src={banner}
                    alt="Web Development Image"
                    title="Web Development Image"
                    priority={true}
                />
            </div>
        </div>
    </section>
  );
};

export default HeroBanner;
