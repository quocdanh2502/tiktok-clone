import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Styles from './AccountItems.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const cx = classNames.bind(Styles);

function AccountItems({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <img className={cx('avatar')} src={data.avatar} alt="avatar" />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{data.full_name}</span>
                    {data.tick && <FontAwesomeIcon icon={faCheckCircle} id={cx('check-icon')}></FontAwesomeIcon>}
                </h4>
                <span className={cx('username')}>{data.nickname}</span>
            </div>
        </Link>
    );
}

AccountItems.propTypes = {
    data: PropTypes.object,
};

export default AccountItems;
