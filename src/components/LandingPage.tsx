import Image from 'next/image';

function LandingPage() {
	return (
		<div className='flex flex-col justify-center items-center gap-4'>
			<h1 className='text-3xl font-bold'>Acompanhe suas enxaquecas, ajude os médicos a ajudar você</h1>
			<p className='w-1/2 text-center'>
				Nosso aplicativo te ajuda a acompanhar suas enxaquecas, e te da a oportunidade de ajudar seus médicos
				no seu tratamento.
			</p>
			<div className='flex gap-2 text-sm'>
				<input
					type='email'
					className='p-2 rounded-md dark:bg-black border dark:border-white border-black outline-none'
					placeholder='me@contact.com'
				/>
				<button className='bg-emerald-500 p-2 rounded-md border border-green-500 text-white'>
					Inscrever-se
				</button>
			</div>
			<div className='relative w-[50vw] h-[50vh]'>
				<Image src={'/images/doctor.svg'} alt='Doctor Image' fill className='object-contain' />
			</div>
		</div>
	);
}

export default LandingPage;
