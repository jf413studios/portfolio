import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "404 Page not Found",
    description: "404 page not found.",
};

const Custom404 = () => {
    return (
        <main className="py-36">
            <div className="text-center py-10 px-4 sm:px-6 lg:px-8">
                <h1 className="block text-7xl font-bold text-woodsmoke-950 sm:text-9xl dark:text-white">404</h1>
                <p className="mt-3 text-woodsmoke-950 dark:text-white">Oops, something went wrong.</p>
                <p className="text-woodsmoke-950 dark:text-white">Sorry, we couldn&apos;t find your page.</p>
            </div>
        </main>
    );
};

export default Custom404;