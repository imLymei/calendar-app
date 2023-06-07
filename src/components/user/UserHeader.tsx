function UserHeader() {
	return (
		<div className='flex justify-center items-center gap-4 h-fit w-fit'>
			<div className='flex justify-center items-center border border-black dark:border-white rounded-full h-28 aspect-square'>
				IMAGE
			</div>
			<div className='flex flex-col gap-2'>
				<p>Nome</p>
				<p>Anos</p>
				<button className='p-2 border border-black dark:border-white rounded-md text-sm'>
					Editar meu perfil
				</button>
			</div>
		</div>
	);
}

export default UserHeader;
