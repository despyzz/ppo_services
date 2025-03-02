export enum AppRoutes {
  Home = '/',
  Contacts = '/contacts',
  Dictionary = '/dictionary',
  Documents = '/documents',
  Join = '/join',
  News = '/news',
  Projects = '/projects',
  Team = '/team',
}

export const NAVIGATION_CONFIG = {
  [AppRoutes.Home]: 'Главная',
  [AppRoutes.Documents]: 'Документы',
  [AppRoutes.Dictionary]: 'Справочник',
  [AppRoutes.Projects]: 'Проекты',
  [AppRoutes.Contacts]: 'Контакты',
};
