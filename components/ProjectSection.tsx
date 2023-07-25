import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SlideUp from './SlideUp';
import { BsGithub, BsArrowUpLeftSquare } from 'react-icons/bs';

const projects = [
    {
        name: 'Thankful Thoughts',
        description:
            'ThankfulThoughts is a web app that generates an appreciative sentence of something or someone you are thankful for.',
        image: '/profile-picture.PNG',
        github: 'https://github.com/jay/thankful-thoughts',
        link: 'https://jay.io/',
    },
    {
        name: 'PlatoIO',
        description:
            'PlatoIO is a to do list app that built using the PERN stack.',
        image: '/profile-picture.PNG',
        github: 'https://github.com/jay/platoio',
        link: 'https://platoio.jay/register',
    },
    {
        name: 'Kator Family Photos',
        description:
            'Kator Family Photos is a photos and video digitization service in the LA area.',
        image: '/profile-picture.PNG',
        github: 'https://github.com/jay/katorfamilyphotos',
        link: 'https://jay.com/',
    },
];

function ProjectSection() {
    return (
        <section id="projects">
            <h1 className="text-center font-bold text-4xl">
                Projects
                <hr className="w-6 h-1 mx-auto my-12 bg-teal-500 border-0 rounded" />
            </h1>
            <div className="flex flex-col space-y-28">
                {projects.map((item, idx) => {
                    return (
                        <div key={idx}>
                            <SlideUp offset="-300px 0px -300px 0px">
                                <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                                    <div className="mt-8 md:w-1/2">
                                        <Link href={item.link} target="_blank">
                                            <Image
                                                className="rounded-xl shadow-xl hover:opacity-700"
                                                src={item.image}
                                                alt=""
                                                width={1000}
                                                height={1000}
                                            />
                                        </Link>
                                    </div>
                                    <div className="mt-12 md:w-1/2">
                                        <h1 className="text-4xl font-bold mb-6">
                                            {item.name}
                                        </h1>
                                        <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                                            {item.description}
                                        </p>
                                        <div className="flex flex-row align-bottom space-x-4">
                                            <Link
                                                href={item.github}
                                                target="_blank"
                                            >
                                                <BsGithub
                                                    size={30}
                                                    className="hover:-translate-y-1 transition-transform cursor-pointer"
                                                />
                                            </Link>
                                            <Link
                                                href={item.link}
                                                target="_blank"
                                            >
                                                <BsArrowUpLeftSquare
                                                    size={30}
                                                    className="hover:-translate-y-1 transition-transform cursor-pointer"
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </SlideUp>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default ProjectSection;
