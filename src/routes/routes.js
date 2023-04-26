import Home from '../pages/Home';
import Following from '../pages/Following';
import Profile from '../pages/Profile';
import Upload from '../pages/Upload';
import HeaderOnly from '../layouts/HeaderOnly';
import RoutesConfig from '../routesConfig/routesConfig';
import Live from '../pages/Live';

const publicRoutes = [
    { path: RoutesConfig.home, component: Home },
    { path: RoutesConfig.following, component: Following },
    { path: RoutesConfig.profile, component: Profile },
    { path: RoutesConfig.upload, component: Upload, layout: HeaderOnly },
    { path: RoutesConfig.live, component: Live },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
