export const convertType = (id: number) => {
	switch (id) {
		case 1:
			return 'Public';

		case 2:
			return 'Occasional';

		case 3:
			return 'Private';
	}
};
