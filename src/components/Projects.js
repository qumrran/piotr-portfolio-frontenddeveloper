import React from 'react';

function Projects({ projects }) {
	return (
		<section className='py-10 bg-gray-100 font-roboto-condensed'>
			<h2 className='text-center text-3xl font-bold mb-8 text-gray-600'>
				MY PROJECTS
			</h2>
			<div className='flex flex-wrap justify-center gap-8'>
				{projects.map((project) => (
					<div
						key={project.id}
						className='bg-white shadow-lg p-6 max-w-xs text-center'
					>
						<img
							src={project.imageUrl}
							alt={project.title}
							className='w-full h-40 object-cover mb-4'
						/>
						<h3 className='text-xl font-semibold mb-2'>{project.title}</h3>

						<div className='text-gray-600 mb-4 max-h-24 overflow-y-auto'>
							<p>{project.description}</p>
						</div>

						<div className='flex flex-wrap justify-center gap-2 mb-4'>
							{project.technologies.map((tech, index) => (
								<span
									key={index}
									className='text-sm text-white bg-black px-2 py-1'
								>
									{tech}
								</span>
							))}
						</div>

						<div className='flex justify-around mt-4'>
							<a
								href={project.link}
								target='_blank'
								rel='noopener noreferrer'
								className='text-gray-700 underline'
							>
								Live Demo
							</a>
							<a
								href={project.github}
								target='_blank'
								rel='noopener noreferrer'
								className='text-gray-700 underline'
							>
								GitHub
							</a>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

export default Projects;
