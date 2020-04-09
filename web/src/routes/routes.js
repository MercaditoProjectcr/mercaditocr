import SignIn from '../components/User/singin'; 
import Home from '../components/home'; 

import SigninIcon from '@material-ui/icons/ExitToApp';
import HomeIcon from '@material-ui/icons/Home';
const appRoutes = [
  {
    path: 'signin',
    name: 'Iniciar Sesión',
    icon: SigninIcon,
    component: SignIn,
    layout: '/',
  },
  {
    path: 'home',
    name: 'Home',
    icon: HomeIcon,
    component: Home,
    layout: '/',
  },
];
export default appRoutes; 