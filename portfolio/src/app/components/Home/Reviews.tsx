const Reviews = () => {
  return (
    <section className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="flex flex-col bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700">
          <div className="flex-auto p-4 md:p-6">
            <p className="mt-3 sm:mt-6 text-base text-gray-800 md:text-xl dark:text-white">
              <em>
                &ldquo;Working with Jose was a great experience. His professionalism and reliability made a complex project manageable, and he tackled each task with persistence and skill. Highly recommend Jose for any development work!&rdquo;
              </em>
            </p>
          </div>

          <div className="p-4 rounded-b-xl md:px-6">
            <h3 className="text-sm font-semibold text-gray-800 sm:text-base dark:text-neutral-200">
                Cristian V.
            </h3>
            <p className="text-sm text-gray-500 dark:text-neutral-500">
                <a href="https://typozon.com/" target="_blank">Typozon</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
