import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './AccountPreview.module.scss';
import Button from '../../Button/Button';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBvXW3YOUwRk2cTb4_ZvjLRJbNwCrmcQhG9w&usqp=CAU"
                    alt=""
                />
                <Button primary id={cx('btn-follow')}>
                    Follow
                </Button>
            </div>
            <div className={cx('info')}>
                <div className={cx('check')}>
                    <strong className={cx('user-name')}>Nguyễn Quốc Danh</strong>
                    <FontAwesomeIcon icon={faCheckCircle} id={cx('check-icon')} />
                </div>
                <p className={cx('name')}>quocdanh25</p>
                <div className={cx('follow')}>
                    <span className={cx('value')}>500K</span>
                    <p className={cx('text')}>Follower</p>
                    <span className={cx('value')}>14M</span>
                    <p className={cx('text')}>Likes</p>
                </div>
            </div>
        </div>
    );
}

export default AccountPreview;
