import PropTypes from 'prop-types';
import Button from '../../Button';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItems({ data, onClick }) {
    const classes = cx('menuItems', {
        separate: data.separate,
    });
    return (
        <Button className={classes} iconLeft={data.icon} to={data.to} onClick={onClick}>
            {data.title}
        </Button>
    );
}

MenuItems.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};

export default MenuItems;
