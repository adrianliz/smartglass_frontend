import * as dayjs from 'dayjs';
import { StatisticChartComponent } from '../components/statistic-chart/statistic-chart.component';
import { StatisticImageComponent } from '../components/statistic-image/statistic-image.component';
import { StatisticTableComponent } from '../components/statistic-table/statistic-table.component';
import { DateRange } from './date-range.model';
import { Period } from './period.model';
import { Statistic } from './statistic.model';

export const enum ErrorMessage {
	TWIN_NOT_FOUND = 'No existe el gemelo',
	TWIN_ERROR = 'No se ha podido recuperar el gemelo',
	TWINS_ERROR = 'No se han podido recuperar los gemelos disponibles',
	RATIOS_ERROR = 'No se han podido recuperar los ratios',
	STATISTIC_ERROR = 'No se ha podido recuperar la estadística',
}

export const enum TwinStateId {
	IN_STANDBY = 'IN_STANDBY',
	IN_BREAKDOWN = 'IN_BREAKDOWN',
	OFF = 'OFF',
	DOING_PROCESS = 'DOING_PROCESS',
}

export const STATE_NAMES = new Map<TwinStateId, string>([
	[TwinStateId.IN_STANDBY, 'En standby'],
	[TwinStateId.IN_BREAKDOWN, 'Parada'],
	[TwinStateId.OFF, 'Apagada'],
	[TwinStateId.DOING_PROCESS, 'Realizando un proceso'],
]);

export const enum RatioId {
	AVAILABILITY = 'AVAILABILITY',
	EFFICIENCY = 'EFFICIENCY',
	EFFECTIVENESS = 'EFFECTIVENESS',
}

export const RATIO_NAMES = new Map<RatioId, string>([
	[RatioId.AVAILABILITY, 'Disponibilidad'],
	[RatioId.EFFICIENCY, 'Eficiencia'],
	[RatioId.EFFECTIVENESS, 'Efectividad'],
]);

export const enum PeriodId {
	THIS_YEAR = 'THIS_YEAR',
	THIS_MONTH = 'THIS_MONTH',
	THIS_WEEK = 'THIS_WEEK',
}

export const ALLOWED_PERIODS: Period[] = [
	{ id: PeriodId.THIS_YEAR, name: 'Este año' },
	{ id: PeriodId.THIS_MONTH, name: 'Este mes' },
	{ id: PeriodId.THIS_WEEK, name: 'Esta semana' },
];

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
		name: 'Materiales procesados',
		component: StatisticChartComponent,
	},
	{
		id: StatisticId.MACHINE_USAGE,
		name: 'Uso de la máquina',
		component: StatisticChartComponent,
	},
	{
		id: StatisticId.OPTIMIZATIONS_PROCESSED,
		name: 'Optimizaciones realizadas',
		component: StatisticTableComponent,
	},
	{
		id: StatisticId.TOOLS_INFO,
		name: 'Información herramientas',
		component: StatisticImageComponent,
	},
	{
		id: StatisticId.TIME_DISTRIBUTION,
		name: 'Distribución del tiempo',
		component: StatisticChartComponent,
	},
	{
		id: StatisticId.ERRORS_PRODUCED,
		name: 'Paradas producidas',
		component: StatisticTableComponent,
	},
];
