import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faPlus } from '@fortawesome/free-solid-svg-icons';
import {} from '@fortawesome/fontawesome-svg-core';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import styles from './Header.module.scss';

import Button from '../../../components/Button';
import MoreMenu from '../../../components/Popper/Menu';
import Search from '../../../components/Search';
import {
    EmailIcon,
    FeedbackIcon,
    GetCoinIcon,
    KeyboardShortcutsIcon,
    LanguageIcon,
    Logo,
    LogoutIcon,
    MessageIcon,
    ProfileIcon,
    SettingIcon,
} from '../../../components/Icons';
import RoutesConfig from '../../../routesConfig/routesConfig';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <LanguageIcon />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vn',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FeedbackIcon />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <KeyboardShortcutsIcon />,
        title: 'Keyboard shortcuts',
    },
];

export default function Header() {
    const [currentUser, setCurrentUser] = useState(false);

    const handleMenuChange = () => {};

    const userMenu = [
        {
            icon: <ProfileIcon />,
            title: 'View profile',
            to: '/profile',
        },
        {
            icon: <GetCoinIcon />,
            title: 'Get coins',
            to: '/coins',
        },
        {
            icon: <SettingIcon />,
            title: 'Setting',
        },
        ...MENU_ITEMS,
        {
            icon: <LogoutIcon />,
            title: 'Log out',
            to: '/',
            separate: true,
        },
    ];

    const handleClick = () => {
        setCurrentUser(true);
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('contents')}>
                <Link to={RoutesConfig.home} className={cx('logo')}>
                    <Logo />
                </Link>
                <Search />
                <div className={cx('action')}>
                    <Button text iconLeft={<FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>}>
                        Upload
                    </Button>
                    {currentUser ? (
                        <>
                            <Tippy content="Message" placement="bottom" delay={200}>
                                <button id={cx('action-btn-message')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy content="Mail" placement="bottom" delay={200}>
                                <button id={cx('action-btn-mail')}>
                                    <EmailIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button primary onClick={handleClick}>
                                Log in
                            </Button>
                        </>
                    )}
                    <MoreMenu
                        menuItems={currentUser ? userMenu : MENU_ITEMS}
                        onChange={handleMenuChange}
                        key={currentUser}
                    >
                        {currentUser ? (
                            <img
                                className={cx('avatar')}
                                src="https://c4.wallpaperflare.com/wallpaper/916/699/661/anime-anime-girls-landscape-kimi-no-na-wa-wallpaper-preview.jpg"
                                alt=""
                            ></img>
                        ) : (
                            <button className={cx('menu')}>
                                <FontAwesomeIcon icon={faEllipsisVertical}></FontAwesomeIcon>
                            </button>
                        )}
                    </MoreMenu>
                </div>
            </div>
        </header>
    );
}
