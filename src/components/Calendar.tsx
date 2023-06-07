'use client';

import EventsType from '@/types/events';
import { formData } from '@/utils/const';
import dayjs from 'dayjs';
import { useState, useRef } from 'react';
//@ts-ignore
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';

function Calendar() {
	let yearly = dayjs().subtract(365, 'days').format('YYYY-MM-DD');

	const initialDate: EventsType[] = [
		{ date: '2023-03-01', count: 12, data: { type: 'constante', location: 'queixo', medication: 'Nenhuma' } },
	];

	// TODO: Arrumar date input value e onChange rerender error

	const [events, setEvents] = useState<EventsType[]>(initialDate);
	const [isAddingEvent, setIsAddingEvent] = useState(false);
	const [locationSelected, setLocationSelected] = useState<string>();
	const dateSelected = useRef();

	const addingCancel = () => {
		setIsAddingEvent(false);
	};

	const addEvent = () => {
		if (locationSelected && dateSelected) {
			setEvents((data) => [
				...data,
				{
					date: '2023-05-01',
					count: 12,
					data: { type: 'constante', location: locationSelected, medication: 'Nenhuma' },
				},
			]);
			console.log(locationSelected);
			console.log(dateSelected);
			setIsAddingEvent(false);
		}
	};

	const AddMenu = () => (
		<div className='absolute flex justify-center items-center inset-0 backdrop-blur-sm'>
			<div className='w-1/3 h-2/3 flex flex-col items-center gap-8 border border-black bg-white dark:border-white dark:bg-black rounded-md p-4'>
				<p className='text-2xl'>Adicionar Evento</p>
				<div className='flex flex-col gap-8'>
					<div className='flex flex-col gap-2 justify-center'>
						<label>Data</label>
						<input
							className='p-2 border border-black text-black dark:bg-black dark:text-white dark:border-white rounded-md outline-none'
							type='date'
							name='date'
							autoComplete='off'
							ref={dateSelected}
						/>
					</div>
					<div className='flex flex-col items-center gap-4'>
						<p>Local</p>
						<div className='flex gap-4 w-4/5 flex-wrap'>
							{formData.location.map((data, index) => (
								<div key={data + index} className='flex justify-center items-center gap-2'>
									<label htmlFor={data + index}>{data}</label>
									<input
										id={data + index}
										value={data}
										name='location'
										checked={locationSelected == data ? true : false}
										onChange={() => setLocationSelected(data)}
										type='radio'
									/>
								</div>
							))}
						</div>
					</div>
				</div>
				<div className='flex gap-4'>
					<button
						onClick={() => {
							addEvent();
						}}
						className='p-2 border border-black dark:border-white rounded-md'>
						Adicionar
					</button>
					<button onClick={addingCancel} className='p-2 border border-black dark:border-white rounded-md'>
						Cancelar
					</button>
				</div>
			</div>
		</div>
	);

	return (
		<div className='flex flex-col gap-4 p-8 border border-neutral-600 rounded-md'>
			{isAddingEvent && <AddMenu />}
			<div className='flex justify-between'>
				<p className='text-2xl font-semibold'>Histórico</p>
				<button
					onClick={() => setIsAddingEvent((data) => !data)}
					className='p-2 border border-black dark:border-white rounded-md'>
					Adicionar evento
				</button>
			</div>
			<CalendarHeatmap
				onClick={(value: EventsType) => console.log(value)}
				startDate={yearly}
				values={events}
			/>
		</div>
	);
}

export default Calendar;
