export default interface EventsType {
	date: string;
	count: number;
	data: {
		type: string;
		location: string;
		medication: string;
	};
}
