import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '..';
import MenuItems from './MenuItem';
import Header from './Header';
import { useState } from 'react';

const cx = classNames.bind(styles);

const defaultF = () => {};

function Menu({ children, menuItems = [], onChange = defaultF, hideOnClick = false }) {
    const [history, setHistory] = useState([{ data: menuItems }]);
    const current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItems
                    data={item}
                    key={index}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    const handleBack = () => {
        setHistory((prev) => prev.slice(0, prev.length - 1));
    };

    const renderResult = (attrs) => (
        <div className={cx('more-menu')} tabIndex="-1" {...attrs}>
            <PopperWrapper>
                {history.length > 1 && <Header title={current.title} onBack={handleBack} />}
                <div className={cx('scroll-menu')}>{renderItems()}</div>
            </PopperWrapper>
        </div>
    );

    const handleResetToFirstPage = () => setHistory((prev) => prev.slice(0, 1));

    return (
        <Tippy
            delay={[0, 700]}
            hideOnClick={hideOnClick}
            interactive
            placement="bottom-end"
            offset={[12, 10]}
            render={renderResult}
            onHide={handleResetToFirstPage}
        >
            {children}
        </Tippy>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    menuItems: PropTypes.array,
    onChange: PropTypes.func,
    hideOnClick: PropTypes.bool,
    currentUser: PropTypes.bool,
};

export default Menu;
