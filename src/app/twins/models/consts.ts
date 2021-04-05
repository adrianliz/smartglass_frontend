import { StatisticChartComponent } from '../components/statistic-chart/statistic-chart.component';
import { StatisticImageComponent } from '../components/statistic-image/statistic-image.component';
import { StatisticTableComponent } from '../components/statistic-table/statistic-table.component';
import { RatioId } from './backend-response.model';
import { Period, PeriodId } from './period.model';
import { Statistic, StatisticId } from './statistic.model';
import { TwinStateId } from './twin.model';

export const stateNames = new Map<TwinStateId, string>([
	[TwinStateId.IN_STANDBY, 'En standby'],
	[TwinStateId.IN_BREAKDOWN, 'Parada'],
	[TwinStateId.OFF, 'Apagada'],
	[TwinStateId.DOING_PROCESS, 'Realizando un proceso'],
]);

export const ratioNames = new Map<RatioId, string>([
	[RatioId.AVAILABILITY, 'Disponibilidad'],
	[RatioId.EFFICIENCY, 'Eficiencia'],
	[RatioId.EFFECTIVENESS, 'Efectividad'],
]);

export const periods: Period[] = [
	{ id: PeriodId.ALL, name: 'Desde siempre' },
	{ id: PeriodId.THIS_YEAR, name: 'Este año' },
	{ id: PeriodId.THIS_MONTH, name: 'Este mes' },
];

export const statistics: Statistic[] = [
	{
		id: StatisticId.MATERIALS_USED,
		name: 'Materiales procesados',
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
