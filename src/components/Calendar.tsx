'use client';

import EventsType from '@/types/events';
import Inputs from '@/types/inputs';
import { formData } from '@/utils/const';
import dayjs from 'dayjs';
import { useState, useRef, useMemo } from 'react';
//@ts-ignore
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import { useForm, SubmitHandler } from 'react-hook-form';

function Calendar() {
	let yearly = dayjs().subtract(365, 'days').format('YYYY-MM-DD');

	const initialDate: EventsType[] = [
		{
			date: '2023-03-01',
			count: 12,
			data: [{ type: 'constante', location: 'queixo', medication: 'Nenhuma' }],
		},
	];

	const [events, setEvents] = useState<EventsType[]>(initialDate);
	const [isAddingEvent, setIsAddingEvent] = useState(false);
	const [locationSelected, setLocationSelected] = useState<string>();
	const [dateSelected, setDateSelected] = useState<string>();

	const getTodayDate = () => {
		const date = new Date();
		return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date
			.getDate()
			.toString()
			.padStart(2, '0')}`;
	};

	const {
		register,
		handleSubmit,
		setValue,
		formState: { errors },
	} = useForm<EventsType>({ defaultValues: { date: getTodayDate() } });
	const onSubmit: SubmitHandler<EventsType> = (data) => addEvent(data);

	const addingEventFinish = () => {
		setIsAddingEvent(false);
		setValue('date', getTodayDate());
	};

	const addEvent = (data: EventsType) => {
		data.count = 1;
		console.log(data);
		if (events.find((event) => event.date == data.date)) {
			setEvents((events) => [
				...events.map((event) => {
					if (event.date == data.date) {
						event.count++;
						event.data.push(...data.data);
					}
					return event;
				}),
			]);
		} else setEvents((events) => [...events, data]);
		addingEventFinish();
	};

	const AddMenu = () => (
		<div className='absolute flex justify-center items-center inset-0 backdrop-blur-sm'>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='w-1/3 h-2/3 flex flex-col items-center gap-8 border border-black bg-white dark:border-white dark:bg-black rounded-md p-4'>
				<p className='text-2xl'>Adicionar Evento</p>
				<div className='flex flex-col gap-8'>
					<div className='flex flex-col gap-2 justify-center'>
						<label>Data</label>
						<input
							className='p-2 border border-black text-black dark:bg-black dark:text-white dark:border-white rounded-md outline-none'
							type='date'
							autoComplete='off'
							{...register('date', { required: true })}
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
										type='radio'
										{...register('data.0.location', { required: true })}
									/>
								</div>
							))}
						</div>
					</div>
				</div>
				<div className='flex gap-4'>
					<button className='p-2 border border-black dark:border-white rounded-md' type='submit'>
						Adicionar
					</button>
					<button
						onClick={addingEventFinish}
						className='p-2 border border-black dark:border-white rounded-md'
						type='button'>
						Cancelar
					</button>
				</div>
			</form>
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
