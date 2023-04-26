import styles from './Suggested.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);

function Suggested({ label }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <button className={cx('more-account')}>See all</button>
        </div>
    );
}

Suggested.propTypes = {
    label: PropTypes.string,
};
export default Suggested;
