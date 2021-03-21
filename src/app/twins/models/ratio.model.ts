import { RatioId } from './backend-response.model';

export interface Ratio {
	definition: {
		id: RatioId;
		name: string;
	};
	value: number;
}
