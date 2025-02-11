import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import codeImg from "../assets/img_.png";
import { checklistItems } from '../constants';

function Workflow() {
	return (
		<section id='workflow'>
			<div className='mt-20'>
				<h2 className='text-3xl sm:text-5xl lg:text-6xl text-center mt-6'>Accelerate your <span className='bg-gradient-to-r from-purple-500 to-purple-900 text-transparent bg-clip-text'>{" "}Creative Workflow</span></h2>
				<div className='flex flex-wrap justify-center'>
					<div className='p-2 w-full lg:w-1/2 mt-7'>
						<img src={codeImg} alt='3-D Model'></img>
					</div>
					<div className='pt-12 w-full lg:w-1/2'>
						{checklistItems.map((item, index) => (
							<div key={index} className='flex mb-12'>
								<div className='text-green-400 mx-5 bg-neutral-900 h-10 w-10 p-3 justify-center items-center rounded-full'>
									<CheckCircle2></CheckCircle2>
								</div>
								<div>
								<h5 className='mt-1 mb-2 text-xl'>{item.title}</h5>
								<p className='text-md text-neutral-500'></p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default Workflow;