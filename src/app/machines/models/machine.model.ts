export enum MachineStatus {
  Activa = 'Activa',
  En_espera = 'En espera',
  Parada = 'Parada',
  Indefinido = 'Indefinido'
}

export interface Machine {
  id: number;
  name: string;
  serie: string;
  model: string;
  status: MachineStatus;
  img: string;
}
