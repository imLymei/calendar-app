'use client';

import Calendar from '@/components/Calendar';
import UserHeader from '@/components/user/UserHeader';
import { ThemeContext } from '@/providers/Contexts';
import { useContext } from 'react';

export default function Home() {
	const isDark = useContext(ThemeContext);

	return (
		<main className='flex flex-col gap-12 w-2/3 mx-auto'>
			<div className='w-fit'>
				<UserHeader />
			</div>
			<div className=''>
				<Calendar />
			</div>
		</main>
	);
}
