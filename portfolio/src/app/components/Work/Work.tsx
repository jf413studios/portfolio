import Image from 'next/image';
import Novo from '../../../../public/images/NovoMASH.png';
import Apellis from '../../../../public/images/Apellis.png';
import SoClean from '../../../../public/images/SoClean.png';
import ZiftrShop from '../../../../public/images/ZiftrShop.png';
import TruRed from '../../../../public/images/TruRed.png';
import NxtTechnologies from '../../../../public/images/NxtTechnologies.png';

const Work = () => {
    return (
        <section className="max-w-[85rem] px-4 py-32 sm:px-6 lg:px-8 mx-auto">
            <h1 className="text-3xl font-bold md:text-4xl md:leading-tight dark:text-white text-center mb-10">Portfolio</h1>
            <div className="grid lg:grid-cols-2 lg:gap-y-16 gap-10">
                <a className="group block rounded-xl overflow-hidden focus:outline-hidden" href="https://app.healthcasts.com/prg-asset/Novo-MASH-PP-9086" target="_blank">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
                        <div className="shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                            <Image
                                className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl"
                                src={Novo}
                                alt="Novo MASH Patient Profile"
                                title="Novo MASH Patient Profile"
                                priority={true}
                            />
                        </div>

                        <div className="grow">
                            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
                                Novo MASH Patient Profile
                            </h3>
                            <p className="mt-3 text-gray-600 dark:text-neutral-400">
                                Developed the Novo MASH patient profile landing page. This page includes a questionnare for our users. Healthcasts Media (2022).
                            </p>
                            <a className="mt-4 inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 group-hover:underline group-focus:underline font-medium dark:text-blue-500" href="https://app.healthcasts.com/prg-asset/Novo-MASH-PP-9086" target="_blank">
                                View here
                                <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                            </a>
                        </div>
                    </div>
                </a>

                <a className="group block rounded-xl overflow-hidden focus:outline-hidden" href="https://app.healthcasts.com/prg-asset/Apellis-CC-9438" target="_blank">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
                        <div className="shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                            <Image
                                className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl"
                                src={Apellis}
                                alt="Apellis"
                                title="Apellis"
                                priority={true}
                            />
                        </div>

                        <div className="grow">
                            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
                                Apellis Clinical Challenge
                            </h3>
                            <p className="mt-3 text-gray-600 dark:text-neutral-400">
                                Developed the Apellis Clinical Challenge landing page. This page includes 4 questions for each user to answer. Healthcasts Media (2022).
                            </p>
                            <a className="mt-4 inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 group-hover:underline group-focus:underline font-medium dark:text-blue-500" href="https://app.healthcasts.com/prg-asset/Apellis-CC-9438" target="_blank">
                                View here
                                <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
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
                                <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
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
                                <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
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
                                <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
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
                                <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                            </a>
                        </div>
                    </div>
                </a>
            </div>
        </section>
    );
};

export default Work;