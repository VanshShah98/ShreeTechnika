import Link from "next/link";
import { JSX, SVGProps } from "react";

export default function About() {
    return (
        <section id="about">
        <div className="flex flex-col min-h-[100dvh]">
            <main className="flex-1">
                <section className="w-full py-8 md:py-16 lg:py-24">
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                            <div className="flex flex-col justify-center space-y-4">
                                <div className="space-y-2">
                                    <h6 className="text-xl font-bold tracking-tighter sm:text-2xl md:text-3xl lg:text-lg xl:text-3xl">
                                        About Shree Technika
                                    </h6>
                                    <p className="text-gray-500 sm:text-base md:text-lg lg:text-xl dark:text-gray-400">

                                    Shree Technika, established in January 2020, is a leading ISO 9001:2015 certified manufacturer of stainless steel hygiene process equipment, including SS Storage Tanks, Process Tanks, and Bag Filters. Located in Jhagadia, Gujarat, our state-of-the-art facility spans 7,000 square meters. We serve the dairy, pharma, food, breweries, and chemical industries with precision-engineered products and a commitment to quality and customer satisfaction.
                                    </p>
                                </div>
                            </div>
                            <img
                                src="/ShreeTechnika.svg"
                                alt="About"
                                className="mx-auto max-w-full aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                            />
                        </div>
                    </div>
                </section>
                <section className="w-full py-8 md:py-16 lg:py-24 bg-gray-100 dark:bg-gray-800">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-3xl">
                                    Our Mission and Values
                                </h2>
                                <p className="max-w-[900px] text-gray-500 sm:text-base md:text-lg lg:text-xl dark:text-gray-400">
                                At Shree Technika, our mission is to become a world-class manufacturer of engineering products, creating value for society through continuous improvement and excellence in all we do. We strive to enhance productivity by standardizing systems and work procedures, ensuring a safe and healthy workplace for our employees. Our core values include:
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-5xl items-center gap-6 py-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:gap-12">
                            <div className="flex flex-col justify-center space-y-4">
                                <ul className="grid gap-6">
                                    <li>
                                        <div className="grid gap-1">
                                            <h3 className="text-xl font-bold">Innovation</h3>
                                            <p className="text-gray-500 dark:text-gray-400">
                                            Continuously advancing our processes and products to stay at the forefront of the industry.
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="grid gap-1">
                                            <h3 className="text-xl font-bold">Integrity</h3>
                                            <p className="text-gray-500 dark:text-gray-400">
                                            Upholding the highest ethical standards in all business practices.
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="grid gap-1">
                                            <h3 className="text-xl font-bold">Quality</h3>
                                            <p className="text-gray-500 dark:text-gray-400">
                                            Committed to delivering superior products and services that meet international standards.
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="grid gap-1">
                                            <h3 className="text-xl font-bold">Customer Focus</h3>
                                            <p className="text-gray-500 dark:text-gray-400">
                                                Our clients&#39; success is our top priority. We strive to provide exceptional service and tailored
                                                solutions to meet their unique needs.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <img
                                src="/MV.svg"
                                alt="Mission and Values"
                                className="mx-auto max-w-full aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                            />
                        </div>
                    </div>
                </section>

            </main>
        </div>
        </section>
    );
}