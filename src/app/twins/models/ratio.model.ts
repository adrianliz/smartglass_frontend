import { RatioId } from './consts';

export interface Ratio {
	definition: {
		id: RatioId;
		name: string;
	};
	value: number;
}
