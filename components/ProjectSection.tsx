import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SlideUp from './SlideUp';
import { BsGithub, BsArrowUpLeftSquare } from 'react-icons/bs';

const projects = [
	{
		name: 'Web Store App',
		description:
			'A web store app with register, login, home page, about section, products page, cart function add toggle-theme function, etc.',
		image: '/2025-09-13 214134.png',
		github: 'https://github.com/wongyunlam/12-comfy-store',
		link: 'https://jb-store-git-main-wongyunlams-projects.vercel.app/',
	},
	{
		name: 'Car showcase',
		description:
			'Carhub is a web app which is a car renting company website to provide car booking and renting service.',
		image: '/carhub.png',
		github: 'https://github.com/wongyunlam/car-showcase',
		link: 'https://car-showcase-nine-alpha.vercel.app/',
	},
	{
		name: 'Social Media App',
		description: 'A facebook-like social app with register, login, add friends function, etc.',
		image: '/2023-09-20 202338.png',
		github: 'https://github.com/wongyunlam/mern-social-media__frontend',
		link: 'https://mern-social-media-frontend-murex.vercel.app/',
	},
	{
		name: 'Tailwindcss And Nextjs Portfolio',
		description: 'A portfolio page built with tailwindcss and Nextjs v13.4.',
		image: '/2025-09-13 214134.png',
		github: 'https://github.com/wongyunlam/12-comfy-store',
		link: 'https://jb-store-git-main-wongyunlams-projects.vercel.app/',
	},
	{
		name: 'Projects updating...',
		description: 'More projects are coming soon!',
		image: '/profile-picture.PNG',
		github: 'https://github.com/wongyunlam',
		link: 'https://jaybwong.vercel.app/',
	},
];

function ProjectSection() {
	return (
		<section id='projects'>
			<h1 className='text-center font-bold text-4xl'>
				Projects
				<hr className='w-6 h-1 mx-auto my-12 bg-teal-500 border-0 rounded' />
			</h1>
			<div className='flex flex-col space-y-28'>
				{projects.map((item, idx) => {
					return (
						<div key={idx}>
							<SlideUp offset='-300px 0px -300px 0px'>
								<div className='flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12'>
									<div className='mt-8 md:w-1/2'>
										<Link
											href={item.link}
											target='_blank'
										>
											<Image
												className='rounded-xl shadow-xl hover:opacity-700'
												src={item.image}
												alt=''
												width={1000}
												height={1000}
											/>
										</Link>
									</div>
									<div className='mt-12 md:w-1/2'>
										<h1 className='text-4xl font-bold mb-6'>{item.name}</h1>
										<p className='text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400'>
											{item.description}
										</p>
										<div className='flex flex-row align-bottom space-x-4'>
											<Link
												href={item.github}
												target='_blank'
											>
												<BsGithub
													size={30}
													className='hover:-translate-y-1 transition-transform cursor-pointer'
												/>
											</Link>
											<Link
												href={item.link}
												target='_blank'
											>
												<BsArrowUpLeftSquare
													size={30}
													className='hover:-translate-y-1 transition-transform cursor-pointer'
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
