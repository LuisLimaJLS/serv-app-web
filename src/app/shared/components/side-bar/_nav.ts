import { INavData } from '@coreui/angular';
//iconos https://iconscout.com/unicons/free-line-icons
export const navItems = [
  {
    name: 'Principal',
    icon: 'uil uil-estate',
    //router: ['/', 'home']
    url: ['/', 'home']
  },
  {
    name: 'Buscar',
    icon: 'uil uil-search',
    url: ['/', 'search']
  },
  {
    name: 'Historial',
    icon: 'uil uil-history',
    url: ['/', 'history']
  },
  {
    name: 'Alertas',
    icon: 'uil uil-bell',
    url: ['/', 'alerts']
  },
  {
    name: 'Contacto',
    icon: 'uil uil-envelope-add',
    url: ['/', 'contact']
  },

];



export const navItems2: INavData[] = [
  {
    name: 'Principal',
    url: '/home',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'info',
      text: 'NEW'
    }
  },
]
