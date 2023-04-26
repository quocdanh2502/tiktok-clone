//import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Suggested.module.scss';
import { Wrapper as PopperWrapper } from '../Popper';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);

function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div className={cx('preview')} tabIndex="-1" {...props}>
                <PopperWrapper id={cx('popper-wrapper')}>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };
    return (
        //Fix warning Tippy library
        <>
            <Tippy interactive delay={[1000, 0]} placement="bottom" render={renderPreview}>
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBvXW3YOUwRk2cTb4_ZvjLRJbNwCrmcQhG9w&usqp=CAU"
                        alt=""
                    />
                    <button className={cx('info')}>
                        <div className={cx('header')}>
                            <strong className={cx('user-name')}>Nguyễn Quốc Danh</strong>
                            <FontAwesomeIcon icon={faCheckCircle} id={cx('check-icon')} />
                        </div>
                        <p className={cx('name')}>quocdanh25</p>
                    </button>
                </div>
            </Tippy>
        </>
    );
}

AccountItem.propTypes = {};

export default AccountItem;
