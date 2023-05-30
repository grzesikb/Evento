import fromExponential from 'from-exponential';

export const convert = (id: number): string => {
	return fromExponential(id);
};
