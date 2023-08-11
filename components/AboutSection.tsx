import React from 'react';
import Image from 'next/image';

const skills = [
    { skill: 'HTML' },
    { skill: 'CSS' },
    { skill: 'Javascript' },
    { skill: 'TypeScript' },
    { skill: 'React' },
    { skill: 'Next.js' },
    { skill: 'Tailwind CSS' },
    { skill: 'bootstrap/react-bootstrap' },
    { skill: 'styled-components' },
    { skill: 'CSS Modules' },
    { skill: 'Git' },
    { skill: 'Github' },
];

function AboutSection() {
    return (
        <section id="about">
            <div className="my-12 pb-12 md:pt-16 md:pb-48">
                <h1 className="text-center font-bold text-4xl">
                    About Me
                    <hr className="w-6 h-1 mx-auto my-12 bg-teal-500 border-0 rounded" />
                </h1>
                <div className="flex flex-col space-y-10 item-stretch justify-center align-top md:flex-row md:text-left md:p-4 md:space-y-0 md:space-x-10">
                    <div className="md:w-1/2">
                        <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
                            Get to know me!
                        </h1>
                        <p>
                            Hi, my name is Jay and I am a{' '}
                            <span className="font-bold">highly ambigious</span>,{' '}
                            <span className="font-bold">self-motivated</span>,
                            and <span className="font-bold">driven</span>{' '}
                            Frontend web developer based in Taiwan.
                        </p>
                        <br />
                        <p>
                            I graduated from National Taiwan University, Taipei
                            Taiwan in 2021 with a BS in Life Science and have
                            been working in software development field ever
                            since.
                        </p>
                        <br />
                        <p>
                            I have a wide range of hobbies and passions that
                            keep me energetic. From reading, playing basketball,
                            watching NBA games and animes on the internet. I am
                            always seeking new experiences and learning new
                            things to keep myself engaged.
                        </p>
                        <br />
                        <p>
                            I believe that we should{' '}
                            <span className="font-bold text-teal-500">
                                never stop exploring the world
                            </span>
                            , I have a passion for technology and a desire to
                            try interesting technology. I am excited to see
                            where my career takes me and I am always open to new
                            opportunities.
                        </p>
                        <br />
                    </div>
                    <div className="md:w-1/2">
                        <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
                            My Skills
                        </h1>
                        <div className="flex flex-wrap flex-row justify-center md:justify-start">
                            {skills.map((item, idx) => {
                                return (
                                    <p
                                        key={idx}
                                        className="bg-gray-200 px-4 py-2 mt-2 mr-2 text-gray-500 rounded font-semibold"
                                    >
                                        {item.skill}
                                    </p>
                                );
                            })}
                        </div>
                        <Image
                            className="hidden md:block md:relative mt-12 md:bottom-4 md:left-72 md:z-0"
                            src="/bbbb.png"
                            alt=""
                            width={200}
                            height={100}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;
