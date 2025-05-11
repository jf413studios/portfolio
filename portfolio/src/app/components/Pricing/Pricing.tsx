const Pricing = () => {
    return(
        <section className="max-w-[85rem] px-4 sm:px-6 lg:px-8 py-32 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-10 lg:mb-14">
            <h2 className="text-2xl font-bold md:text-5xl md:leading-tight text-woodsmoke-950 dark:text-white">Find the right plan for your team</h2>
            <p className="mt-1 text-woodsmoke-950 dark:text-neutral-400">You can make payments to me conveniently through payroll, Zelle, or Stripe.</p>
          </div>
          <h1 className="text-3xl font-bold md:text-4xl md:leading-tight text-woodsmoke-950 dark:text-white text-center mb-10">Pricing</h1>
          <div className="relative before:absolute before:inset-0 before:-z-[1] before:bg-[radial-gradient(closest-side,#cbd5e1,transparent)] dark:before:bg-[radial-gradient(closest-side,#525252,transparent)] mt-12">
            <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-4 lg:items-center">
              <div className="flex flex-col h-full text-center">
                <div className="bg-white pt-8 pb-5 px-8 dark:bg-neutral-800">
                  <h4 className="font-medium text-lg text-woodsmoke-950 dark:text-white">Mentoring</h4>
                </div>
        
                <div className="h-full bg-white lg:mt-px lg:py-5 px-8 dark:bg-neutral-800">
                  <span className="mt-7 font-bold text-5xl text-woodsmoke-950 dark:text-white">
                    Free
                  </span>
                </div>
        
                <div className="bg-white flex justify-center lg:mt-px pt-7 px-8 dark:bg-neutral-800">
                  <ul className="space-y-2.5 text-center text-sm">
                    <li className="text-woodsmoke-950 dark:text-neutral-400">
                      Mentoring developers
                    </li>
                  </ul>
                </div>
        
                <div className="bg-white py-8 px-8 dark:bg-neutral-800">
                </div>
              </div>

              <div className="flex flex-col h-full text-center">
                <div className="bg-white pt-8 pb-5 px-8 dark:bg-neutral-800">
                  <h4 className="font-medium text-lg text-woodsmoke-950 dark:text-white">Project Based</h4>
                </div>
        
                <div className="h-full bg-white lg:mt-px lg:py-5 px-8 dark:bg-neutral-800">
                  <span className="mt-7 font-bold text-5xl text-woodsmoke-950 dark:text-white">
                    Custom
                  </span>
                </div>
        
                <div className="bg-white flex justify-center lg:mt-px pt-7 px-8 dark:bg-neutral-800">
                  <ul className="space-y-2.5 text-center text-sm">
                    <li className="text-woodsmoke-950 dark:text-neutral-400">
                      Per project&apos;s requirements
                    </li>
                  </ul>
                </div>
        
                <div className="bg-white py-8 px-8 dark:bg-neutral-800">
                </div>
              </div>

              <div className="flex flex-col h-full text-center">
                <div className="bg-white pt-8 pb-5 px-8 dark:bg-neutral-800">
                  <h4 className="font-medium text-lg text-woodsmoke-950 dark:text-white">Contract/Freelance</h4>
                </div>
        
                <div className="h-full bg-white lg:mt-px lg:py-5 px-8 dark:bg-neutral-800">
                  <span className="mt-7 font-bold text-5xl text-woodsmoke-950 dark:text-white">
                    <span className="font-bold text-2xl -me-2">$ </span>
                    60
                  </span>
                </div>
        
                <div className="bg-white flex justify-center lg:mt-px pt-7 px-8 dark:bg-neutral-800">
                  <ul className="space-y-2.5 text-center text-sm">
                    <li className="text-woodsmoke-950 dark:text-neutral-400">
                      Per hour
                    </li>
                  </ul>
                </div>
        
                <div className="bg-white py-8 px-8 dark:bg-neutral-800">
                </div>
              </div>

              <div className="flex flex-col h-full text-center">
                <div className="bg-white pt-8 pb-5 px-8 dark:bg-neutral-800">
                  <h4 className="font-medium text-lg text-woodsmoke-950 dark:text-white">Full-Time</h4>
                </div>
        
                <div className="h-full bg-white lg:mt-px lg:py-5 px-8 dark:bg-neutral-800">
                  <span className="mt-7 font-bold text-4xl text-woodsmoke-950 dark:text-white">
                    <span className="font-bold text-2xl -me-2">$ </span>
                    120,000
                  </span>
                </div>
        
                <div className="bg-white flex justify-center lg:mt-px pt-7 px-8 dark:bg-neutral-800">
                  <ul className="space-y-2.5 text-center text-sm">
                    <li className="text-woodsmoke-950 dark:text-neutral-400">
                      Per year salary
                    </li>
                  </ul>
                </div>
        
                <div className="bg-white py-8 px-8 dark:bg-neutral-800">
                </div>
              </div>
            </div>
          </div>
        </section>
    );
};

export default Pricing;