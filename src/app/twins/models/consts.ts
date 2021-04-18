import * as dayjs from 'dayjs';
import { Label } from 'ng2-charts';
import { StatisticChartComponent } from '../components/statistic-chart/statistic-chart.component';
import { StatisticImageComponent } from '../components/statistic-image/statistic-image.component';
import { StatisticTableComponent } from '../components/statistic-table/statistic-table.component';
import { DateRange } from './date-range.model';
import { Statistic, TableColumn } from './statistic.model';

export const enum ErrorMessage {
	TWIN_NOT_FOUND = 'TWIN_NOT_FOUND',
	TWIN_ERROR = 'TWIN_ERROR',
	TWINS_ERROR = 'TWINS_ERROR',
	RATIOS_ERROR = 'RATIOS_ERROR',
	STATISTIC_ERROR = 'STATISTIC_ERROR',
}

export const enum PeriodId {
	THIS_YEAR = 'THIS_YEAR',
	THIS_MONTH = 'THIS_MONTH',
	THIS_WEEK = 'THIS_WEEK',
}

export const ALLOWED_PERIODS: PeriodId[] = [PeriodId.THIS_YEAR, PeriodId.THIS_MONTH, PeriodId.THIS_WEEK];

export const DATE_RANGES = new Map<PeriodId, DateRange>([
	[PeriodId.THIS_YEAR, { startDate: dayjs().startOf('year'), endDate: dayjs().endOf('year') }],
	[PeriodId.THIS_MONTH, { startDate: dayjs().startOf('month'), endDate: dayjs().endOf('month') }],
	[PeriodId.THIS_WEEK, { startDate: dayjs().startOf('week'), endDate: dayjs().endOf('week') }],
]);

export const API_DATE_FORMAT = 'YYYY-MM-DD HH:mm:ss';

export const enum StatisticId {
	MATERIALS_USED = 'MATERIALS_USED',
	MACHINE_USAGE = 'MACHINE_USAGE',
	OPTIMIZATIONS_PROCESSED = 'OPTIMIZATIONS_PROCESSED',
	TOOLS_INFO = 'TOOLS_INFO',
	TIME_DISTRIBUTION = 'TIME_DISTRIBUTION',
	ERRORS_PRODUCED = 'ERRORS_PRODUCED',
}

export const ALLOWED_STATISTICS: Statistic[] = [
	{
		id: StatisticId.MATERIALS_USED,
		component: StatisticChartComponent,
	},
	{
		id: StatisticId.MACHINE_USAGE,
		component: StatisticChartComponent,
	},
	{
		id: StatisticId.OPTIMIZATIONS_PROCESSED,
		component: StatisticTableComponent,
	},
	{
		id: StatisticId.TOOLS_INFO,
		component: StatisticImageComponent,
	},
	{
		id: StatisticId.TIME_DISTRIBUTION,
		component: StatisticChartComponent,
	},
	{
		id: StatisticId.ERRORS_PRODUCED,
		component: StatisticTableComponent,
	},
];

export const enum MACHINE_USAGE_DATASETS {
	WORKING_HOURS = 'WORKING_HOURS',
	ON_HOURS = 'ON_HOURS',
}

export const OPTIMIZATIONS_PROCESSED_COLUMNS: TableColumn[] = [
	{ id: 'name', header: 'OPTIMIZATION_NAME' },
	{ id: 'material', header: 'OPTIMIZATION_MATERIAL' },
	{ id: 'piecesProcessed', header: 'OPTIMIZATION_PIECES_PROCESSED' },
];

export const enum TOOLS_INFO_DESCRIPTION {
	TOOL_DISTANCE_KM = 'TOOL_DISTANCE_KM',
	TOOL_ANGLE_MM = 'TOOL_ANGLE_MM',
	WHEEL_DIAMETER_MM = 'WHEEL_DIAMETER_MM',
}

export const TIME_DISTRIBUTION_LABELS: Label[] = ['PROCESSING_GLASS_HOURS', 'LOADING_GLASS_HOURS', 'STANDBY_HOURS'];

export const ERRORS_PRODUCED_COLUMNS: TableColumn[] = [
	{ id: 'cause', header: 'ERROR_CAUSE' },
	{ id: 'timesOccurred', header: 'ERROR_TIMES_OCCURRED' },
];
