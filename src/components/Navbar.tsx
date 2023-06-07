'use client';

import { ThemeContext } from '@/providers/Contexts';
import { iconsSizeMedium } from '@/utils/const';
import { Dispatch, useContext } from 'react';
import { BsMoonFill, BsSun, BsCalendarCheck } from 'react-icons/bs';
import { FaUserCircle } from 'react-icons/fa';

function Navbar({
	setIsDark,
	setIsLogged,
}: {
	setIsDark: Dispatch<React.SetStateAction<boolean>>;
	setIsLogged: Dispatch<React.SetStateAction<boolean>>;
}) {
	const isDark = useContext(ThemeContext);

	return (
		<nav className='flex justify-between items-center p-4 border-b border-black/20 dark:border-white/20 mb-12'>
			<BsCalendarCheck size={iconsSizeMedium} />
			<div className='flex gap-4'>
				<button onClick={() => setIsDark((value) => !value)}>
					{isDark ? <BsMoonFill size={iconsSizeMedium} /> : <BsSun size={iconsSizeMedium} />}
				</button>
				<FaUserCircle onClick={() => setIsLogged((value) => !value)} size={iconsSizeMedium} />
			</div>
		</nav>
	);
}

export default Navbar;
