import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    primary,
    outline = false,
    text = false,
    rounded = false,
    small = false,
    large = false,
    iconLeft,
    iconRight,
    onClick,
    children,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    const classes = cx('wrapper', {
        primary,
        outline,
        small,
        large,
        text,
        rounded,
        iconLeft,
        iconRight,
    });

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    return (
        <Comp className={classes} {...props}>
            {iconLeft && <span className={cx('icon')}>{iconLeft}</span>}
            <span className={cx('title')}>{children}</span>
        </Comp>
    );
}

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    text: PropTypes.bool,
    rounded: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    iconLeft: PropTypes.node,
    iconRight: PropTypes.node,
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired,
};

export default Button;
