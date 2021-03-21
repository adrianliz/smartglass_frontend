export enum PeriodId {
	ALL = 'ALL',
	THIS_YEAR = 'THIS_YEAR',
	THIS_MONTH = 'THIS_MONTH',
}

export interface Period {
	id: PeriodId;
	name: string;
}
