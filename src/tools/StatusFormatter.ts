export const statusFormatter = (statusNumber: number) => {
	switch (statusNumber) {
		case 1:
			return 'inProgress';

		case 2:
			return 'Verification';
	}
};
