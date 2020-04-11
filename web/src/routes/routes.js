import Home from '../components/home'; 
import SignIn from '../components/User/signin'; 
import SignUp from '../components/User/signup'; 
import Profile from '../components/User/profile'; 

import SignupIcon from '@material-ui/icons/ExitToApp';
import SigninIcon from '@material-ui/icons/EmojiPeople';
import HomeIcon from '@material-ui/icons/Home';
import ProfileIcon from '@material-ui/icons/AccountCircle';
const appRoutes = [
  {
    path: 'home',
    name: 'Home',
    icon: HomeIcon,
    component: Home,
    layout: '/',
  },
  {
    path: 'signin',
    name: 'Iniciar Sesión',
    icon: SigninIcon,
    component: SignIn,
    layout: '/',
  },
  {
    path: 'signup',
    name: 'Registrarse',
    icon: SignupIcon,
    component: SignUp,
    layout: '/',
  },
  {
    path: 'profile',
    name: 'Perfil',
    icon: ProfileIcon,
    component: Profile,
    layout: '/',
  },

];
export default appRoutes; 