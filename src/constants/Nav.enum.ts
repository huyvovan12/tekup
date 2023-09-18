export enum NavEnum {
  All = 'All',
  ManPower = 'ManPower',
  MobileApp = 'MobileApp',
  UIUX = 'UIUX',
}

export const mapper = {
  [NavEnum.All]: 'All',
  [NavEnum.ManPower]: 'Manpower Supply',
  [NavEnum.MobileApp]: 'Mobile App/ Websites',
  [NavEnum.UIUX]: 'UI/UX Design',
};
