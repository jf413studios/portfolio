import Image from 'next/image';
import AboutPic from '../../../../public/images/pic-background.jpg';
import Link from '../../../../node_modules/next/link';

const About = () => {
    return (
        <section className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="md:grid md:grid-cols-2 md:gap-10 lg:gap-16 md:items-center">
            <div className="block mb-24 md:mb-0 sm:px-6">
              <div className="relative">
                <Image
                    className="rounded-xl"
                    src={AboutPic}
                    alt="Jose Fuentes"
                    title="Jose Fuentes"
                />
        
                <div className="absolute bottom-0 start-0 -z-[1] translate-y-10 -translate-x-14">
                  <svg className="max-w-40 h-auto text-gray-400 dark:text-neutral-700" width="696" height="653" viewBox="0 0 696 653" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="72.5" cy="29.5" r="29.5" fill="currentColor"/>
                    <circle cx="171.5" cy="29.5" r="29.5" fill="currentColor"/>
                    <circle cx="270.5" cy="29.5" r="29.5" fill="currentColor"/>
                    <circle cx="369.5" cy="29.5" r="29.5" fill="currentColor"/>
                    <circle cx="468.5" cy="29.5" r="29.5" fill="currentColor"/>
                    <circle cx="567.5" cy="29.5" r="29.5" fill="currentColor"/>
                    <circle cx="666.5" cy="29.5" r="29.5" fill="currentColor"/>
                    <circle cx="29.5" cy="128.5" r="29.5" fill="currentColor"/>
                    <circle cx="128.5" cy="128.5" r="29.5" fill="currentColor"/>
                    <circle cx="227.5" cy="128.5" r="29.5" fill="currentColor"/>
                    <circle cx="326.5" cy="128.5" r="29.5" fill="currentColor"/>
                    <circle cx="425.5" cy="128.5" r="29.5" fill="currentColor"/>
                    <circle cx="524.5" cy="128.5" r="29.5" fill="currentColor"/>
                    <circle cx="623.5" cy="128.5" r="29.5" fill="currentColor"/>
                    <circle cx="72.5" cy="227.5" r="29.5" fill="currentColor"/>
                    <circle cx="171.5" cy="227.5" r="29.5" fill="currentColor"/>
                    <circle cx="270.5" cy="227.5" r="29.5" fill="currentColor"/>
                    <circle cx="369.5" cy="227.5" r="29.5" fill="currentColor"/>
                    <circle cx="468.5" cy="227.5" r="29.5" fill="currentColor"/>
                    <circle cx="567.5" cy="227.5" r="29.5" fill="currentColor"/>
                    <circle cx="666.5" cy="227.5" r="29.5" fill="currentColor"/>
                    <circle cx="29.5" cy="326.5" r="29.5" fill="currentColor"/>
                    <circle cx="128.5" cy="326.5" r="29.5" fill="currentColor"/>
                    <circle cx="227.5" cy="326.5" r="29.5" fill="currentColor"/>
                    <circle cx="326.5" cy="326.5" r="29.5" fill="currentColor"/>
                    <circle cx="425.5" cy="326.5" r="29.5" fill="currentColor"/>
                    <circle cx="524.5" cy="326.5" r="29.5" fill="currentColor"/>
                    <circle cx="623.5" cy="326.5" r="29.5" fill="currentColor"/>
                    <circle cx="72.5" cy="425.5" r="29.5" fill="currentColor"/>
                    <circle cx="171.5" cy="425.5" r="29.5" fill="currentColor"/>
                    <circle cx="270.5" cy="425.5" r="29.5" fill="currentColor"/>
                    <circle cx="369.5" cy="425.5" r="29.5" fill="currentColor"/>
                    <circle cx="468.5" cy="425.5" r="29.5" fill="currentColor"/>
                    <circle cx="567.5" cy="425.5" r="29.5" fill="currentColor"/>
                    <circle cx="666.5" cy="425.5" r="29.5" fill="currentColor"/>
                    <circle cx="29.5" cy="524.5" r="29.5" fill="currentColor"/>
                    <circle cx="128.5" cy="524.5" r="29.5" fill="currentColor"/>
                    <circle cx="227.5" cy="524.5" r="29.5" fill="currentColor"/>
                    <circle cx="326.5" cy="524.5" r="29.5" fill="currentColor"/>
                    <circle cx="425.5" cy="524.5" r="29.5" fill="currentColor"/>
                    <circle cx="524.5" cy="524.5" r="29.5" fill="currentColor"/>
                    <circle cx="623.5" cy="524.5" r="29.5" fill="currentColor"/>
                    <circle cx="72.5" cy="623.5" r="29.5" fill="currentColor"/>
                    <circle cx="171.5" cy="623.5" r="29.5" fill="currentColor"/>
                    <circle cx="270.5" cy="623.5" r="29.5" fill="currentColor"/>
                    <circle cx="369.5" cy="623.5" r="29.5" fill="currentColor"/>
                    <circle cx="468.5" cy="623.5" r="29.5" fill="currentColor"/>
                    <circle cx="567.5" cy="623.5" r="29.5" fill="currentColor"/>
                    <circle cx="666.5" cy="623.5" r="29.5" fill="currentColor"/>
                  </svg>
                </div>
              </div>
            </div>
        
            <div>
              <blockquote className="relative">
                <svg className="absolute top-0 start-0 transform -translate-x-8 -translate-y-4 size-24 text-gray-200 dark:text-neutral-700" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z" fill="currentColor"/>
                </svg>
        
                <div className="relative z-10">
                  <p className="text-xl font-medium italic text-gray-800 md:text-2xl md:leading-normal xl:text-3xl xl:leading-normal dark:text-neutral-200">
                    I can do all things through Christ who strengthens me. Phil 4:13 NKJV
                  </p>
                </div>
        
                <footer className="mt-6">
                  <div className="flex items-center">
                    <div>
                      <div className="text-base font-semibold text-gray-800 dark:text-neutral-200">Jose Fuentes</div>
                      <div className="text-xs text-gray-500 dark:text-neutral-400">Senior Front End Developer | Entrepreneur </div>
                    </div>
                  </div>
                </footer>
        
                <div className="mt-8 lg:mt-14">
                  <Link className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-gold-500 text-woodsmoke-950 hover:bg-woodsmoke-950 hover:text-white disabled:opacity-50 disabled:pointer-events-none dark:bg-gold-500 dark:text-woodsmoke-950 dark:hover:text-white dark:hover:border dark:hover:border-gold-500" href="/about">
                    Read my story
                  </Link>
                </div>
              </blockquote>
            </div>
          </div>
        </section>
    );
};

export default About;