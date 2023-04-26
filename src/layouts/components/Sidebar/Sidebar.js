import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';

import Menu, { MenuItem } from './Menu';
import RoutesConfig from '../../../routesConfig';
import {
    HomeIcon,
    HomeIconActive,
    FollowingIcon,
    FollowingIconActive,
    LiveIcon,
    LiveIconActive,
} from '../../../components/Icons';
import Suggested from '../../../components/SuggestedAccounts';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    title="For You"
                    to={RoutesConfig.home}
                    icon={<HomeIcon />}
                    activeIcon={<HomeIconActive />}
                ></MenuItem>
                <MenuItem
                    title="Following"
                    to={RoutesConfig.following}
                    icon={<FollowingIcon />}
                    activeIcon={<FollowingIconActive />}
                ></MenuItem>
                <MenuItem
                    title="LIVE"
                    to={RoutesConfig.live}
                    icon={<LiveIcon />}
                    activeIcon={<LiveIconActive />}
                ></MenuItem>
            </Menu>
            <Suggested label="Suggested accounts" />
            <Suggested label="Following accounts" />
        </aside>
    );
}

export default Sidebar;
