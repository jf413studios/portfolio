import Image from 'next/image';
import GileadTrodelvy from '../../../../public/images/GileadTrodelvy.png';
import NovartisPluvicto from '../../../../public/images/NovartisPluvicto.png';
import SoClean from '../../../../public/images/SoClean.png';
import ZiftrShop from '../../../../public/images/ZiftrShop.png';
import TruRed from '../../../../public/images/TruRed.png';
import NxtTechnologies from '../../../../public/images/NxtTechnologies.png';
import SharedStageCollective from '../../../../public/images/SharedStageCollective.png';

const Work = () => {
    return (
        <section className="max-w-[85rem] px-4 py-32 sm:px-6 lg:px-8 mx-auto">
            <h1 className="text-3xl font-bold md:text-4xl md:leading-tight dark:text-white text-center mb-10">Portfolio</h1>
            <nav className="mx-auto flex flex-col sm:flex-row gap-y-px sm:gap-y-0 sm:gap-x-4 mb-10" aria-label="Tabs" role="tablist" aria-orientation="horizontal">
                <button type="button" className="hs-tab-active:text-gold-500 hs-tab-active:bg-gold-500 hs-tab-active:hover:border-transparent w-full flex flex-col text-start hover:bg-gray-100 focus:outline-hidden focus:text-gold-500 p-3 md:p-5 rounded-xl dark:hs-tab-active:bg-neutral-800 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 active" id="tabs-with-card-item-1" aria-selected="true" data-hs-tab="#tabs-with-card-1" aria-controls="tabs-with-card-1" role="tab">
                    <svg className="shrink-0 hidden sm:block size-7 hs-tab-active:text-woodsmoke-950 text-woodsmoke-950 dark:hs-tab-active:text-gold-500 dark:text-white" fill="currentColor" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M264 112L376 112C380.4 112 384 115.6 384 120L384 160L256 160L256 120C256 115.6 259.6 112 264 112zM208 120L208 160L128 160C92.7 160 64 188.7 64 224L64 320L576 320L576 224C576 188.7 547.3 160 512 160L432 160L432 120C432 89.1 406.9 64 376 64L264 64C233.1 64 208 89.1 208 120zM576 368L384 368L384 384C384 401.7 369.7 416 352 416L288 416C270.3 416 256 401.7 256 384L256 368L64 368L64 480C64 515.3 92.7 544 128 544L512 544C547.3 544 576 515.3 576 480L576 368z"/></svg>
                    <span className="sm:mt-5">
                        <span className="hs-tab-active:text-woodsmoke-950 block font-semibold text-woodsmoke-950 dark:hs-tab-active:text-gold-500 dark:text-white">Full-Time</span>
                        <span className="hidden lg:block mt-2 text-woodsmoke-950 dark:text-neutral-200"></span>
                    </span>
                </button>

                <button type="button" className="hs-tab-active:text-gold-500 hs-tab-active:bg-gold-500 hs-tab-active:hover:border-transparent w-full flex flex-col text-start hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 p-3 md:p-5 rounded-xl dark:hs-tab-active:bg-neutral-800 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" id="tabs-with-card-item-2" aria-selected="false" data-hs-tab="#tabs-with-card-2" aria-controls="tabs-with-card-2" role="tab">
                <svg className="shrink-0 hidden sm:block size-7 hs-tab-active:text-woodsmoke-950 text-woodsmoke-950 dark:hs-tab-active:text-gold-500 dark:text-white" fill="currentColor" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg>
                <span className="sm:mt-5">
                    <span className="hs-tab-active:text-woodsmoke-950 block font-semibold text-woodsmoke-950 dark:hs-tab-active:text-gold-500 dark:text-white">Freelance</span>
                    <span className="hidden lg:block mt-2 text-woodsmoke-950 dark:text-neutral-200"></span>
                </span>
                </button>
            </nav>
            <div id="tabs-with-card-1" role="tabpanel" aria-labelledby="tabs-with-card-item-1">
                <div className="grid lg:grid-cols-2 lg:gap-y-16 gap-10">
                    <a className="group block rounded-xl overflow-hidden focus:outline-hidden" href="https://app.healthcasts.com/prg-asset/Gilead-Trodelvy-CC-9712" target="_blank">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
                            <div className="shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                                <Image
                                    className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl"
                                    src={GileadTrodelvy}
                                    alt="Gilead Trodelvy Clinical Challenge"
                                    title="Gilead Trodelvy Clinical Challenge"
                                    priority={true}
                                />
                            </div>

                            <div className="grow">
                                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
                                    Gilead Trodelvy Clinical Challenge
                                </h3>
                                <p className="mt-3 text-gray-600 dark:text-neutral-400">
                                    Developed the Gilead Trodelvy Clinical Challenge landing page. This page includes a questionnare for our users. Healthcasts (2025).
                                </p>
                                <a className="mt-4 inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 group-hover:underline group-focus:underline font-medium dark:text-blue-500" href="https://app.healthcasts.com/prg-asset/Gilead-Trodelvy-CC-9712" target="_blank">
                                    View here
                                    <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                                </a>
                            </div>
                        </div>
                    </a>

                    <a className="group block rounded-xl overflow-hidden focus:outline-hidden" href="https://app.healthcasts.com/prg-asset/Novartis-Pluvicto-PP-9526" target="_blank">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
                            <div className="shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                                <Image
                                    className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl"
                                    src={NovartisPluvicto}
                                    alt="Novartis Pluvicto Patient Profile"
                                    title="Novartis Pluvicto Patient Profile"
                                    priority={true}
                                />
                            </div>

                            <div className="grow">
                                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
                                    Novartis Pluvicto Patient Profile
                                </h3>
                                <p className="mt-3 text-gray-600 dark:text-neutral-400">
                                    Developed the Novartis Pluvicto Patient Profile landing page. This page includes 4 questions for each user to answer. Healthcasts (2025).
                                </p>
                                <a className="mt-4 inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 group-hover:underline group-focus:underline font-medium dark:text-blue-500" href="https://app.healthcasts.com/prg-asset/Novartis-Pluvicto-PP-9526" target="_blank">
                                    View here
                                    <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                                </a>
                            </div>
                        </div>
                    </a>

                    <a className="group block rounded-xl overflow-hidden focus:outline-hidden" href="https://www.soclean.com/" target="_blank">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
                            <div className="shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                                <Image
                                    className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl"
                                    src={SoClean}
                                    alt="SoClean"
                                    title="SoClean"
                                    priority={true}
                                />
                            </div>

                            <div className="grow">
                                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
                                    SoClean<sup>&reg;</sup> Website Redesign
                                </h3>
                                <p className="mt-3 text-gray-600 dark:text-neutral-400">
                                    Along with two developers, helped developed the entire SoClean<sup>&reg;</sup> website redesign. Airtank (2021).
                                </p>
                                <a className="mt-4 inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 group-hover:underline group-focus:underline font-medium dark:text-blue-500" href="https://www.soclean.com/" target="_blank">
                                    View here
                                    <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                                </a>
                            </div>
                        </div>
                    </a>

                    <a className="group block rounded-xl overflow-hidden focus:outline-hidden" href="https://www.ziftrshop.com/" target="_blank">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
                            <div className="shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                                <Image
                                    className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl"
                                    src={ZiftrShop}
                                    alt="ZiftrShop"
                                    title="ZiftrShop"
                                    priority={true}
                                />
                            </div>

                            <div className="grow">
                                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
                                    Ziftrshop<sup>&trade;</sup> Landing Page
                                </h3>
                                <p className="mt-3 text-gray-600 dark:text-neutral-400">
                                    Developed the new look and feel for the Ziftrshop<sup>&trade;</sup> homepage. Airtank (2021).
                                </p>
                                <a className="mt-4 inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 group-hover:underline group-focus:underline font-medium dark:text-blue-500" href="https://www.ziftrshop.com/" target="_blank">
                                    View here
                                    <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                                </a>
                            </div>
                        </div>
                    </a>

                    <a className="group block rounded-xl overflow-hidden focus:outline-hidden" href="https://www.staples.com/tru-red/cat_SC350051" target="_blank">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
                            <div className="shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                                <Image
                                    className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl"
                                    src={TruRed}
                                    alt="TruRed"
                                    title="TruRed"
                                    priority={true}
                                />
                            </div>

                            <div className="grow">
                                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
                                TRU RED<sup>&trade;</sup> Landing Page
                                </h3>
                                <p className="mt-3 text-gray-600 dark:text-neutral-400">
                                    Developed the new look and feel for the TRU RED<sup>&trade;</sup> Business Landing Page. Craft Studios Boston LLC (2019)
                                </p>
                                <a className="mt-4 inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 group-hover:underline group-focus:underline font-medium dark:text-blue-500" href="https://www.staples.com/tru-red/cat_SC350051" target="_blank">
                                    View here
                                    <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                                </a>
                            </div>
                        </div>
                    </a>

                    <a className="group block rounded-xl overflow-hidden focus:outline-hidden" href="https://www.staples.com/nxt-technologies/cat_SC350050" target="_blank">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
                            <div className="shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                                <Image
                                    className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl"
                                    src={NxtTechnologies}
                                    alt="NxtTechnologies"
                                    title="NxtTechnologies"
                                    priority={true}
                                />
                            </div>

                            <div className="grow">
                                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
                                NXT Technologies<sup>&trade;</sup> Landing Page
                                </h3>
                                <p className="mt-3 text-gray-600 dark:text-neutral-400">
                                    Developed the new look and feel for the NXT Technologies<sup>&trade;</sup> Business Landing Page. Craft Studios Boston LLC (2019)
                                </p>
                                <a className="mt-4 inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 group-hover:underline group-focus:underline font-medium dark:text-blue-500" href="https://www.staples.com/nxt-technologies/cat_SC350050" target="_blank">
                                    View here
                                    <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                                </a>
                            </div>
                        </div>
                    </a>
                </div>
            </div>

            <div id="tabs-with-card-2" className="hidden" role="tabpanel" aria-labelledby="tabs-with-card-item-2">
              <div className="grid lg:grid-cols-2 lg:gap-y-16 gap-10">
                    <a className="group block rounded-xl overflow-hidden focus:outline-hidden" href="https://sharedstagecollective.org/" target="_blank">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
                            <div className="shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                                <Image
                                    className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl"
                                    src={SharedStageCollective}
                                    alt="Shared Stage Collective"
                                    title="Shared Stage Collective"
                                    priority={true}
                                />
                            </div>

                            <div className="grow">
                                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
                                    Shared Stage Collective
                                </h3>
                                <p className="mt-3 text-gray-600 dark:text-neutral-400">
                                    Added a header navigation (ex: desktop, mobile), updated colors, and added new pages to the site. Shared Stage Collective (2025).
                                </p>
                                <a className="mt-4 inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 group-hover:underline group-focus:underline font-medium dark:text-blue-500" href="https://sharedstagecollective.org/" target="_blank">
                                    View here
                                    <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                                </a>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            
        </section>
    );
};

export default Work;