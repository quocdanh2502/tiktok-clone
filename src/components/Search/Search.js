import { useEffect, useState, useRef } from 'react';

import classNames from 'classnames/bind';
import HandlessTippy from '@tippyjs/react/headless';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import AccountItems from '../AccountItems';
import styles from './Search.module.scss';
import { ClearIcon, SearchIcon } from '../Icons';
import { Wrapper as PopperWrapper } from '../Popper';
import Debounce from '../../hooks/Debounce';
import * as searchService from '../../services/searchService';

const cx = classNames.bind(styles);

export default function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [isFocus, setIsFocus] = useState(false);
    const [loading, setLoading] = useState(false);

    const debounceValue = Debounce(searchValue, 500);

    const focusRef = useRef();

    useEffect(() => {
        if (!debounceValue.trim()) {
            setSearchResult([]);
            return;
        }

        const fetchApi = async () => {
            setLoading(true);
            const result = await searchService.search(debounceValue);
            setSearchResult(result);
            setLoading(false);
        };

        fetchApi();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debounceValue]);

    const handleChange = (e) => {
        const regex = /^\S/;
        if (regex.test(e.target.value)) {
            setSearchValue(e.target.value);
        } else {
            setSearchValue('');
        }
    };

    const handleFocus = () => {
        setIsFocus(false);
    };

    return (
        //Use tag div to fix Tippy warning
        <div>
            {' '}
            <HandlessTippy
                interactive
                visible={isFocus && searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h3 className={cx('search-title')}>Accounts</h3>
                            {searchResult.map((user) => (
                                <AccountItems key={user.id} data={user} />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleFocus}
            >
                <div className={cx('search')}>
                    <input
                        ref={focusRef}
                        value={searchValue}
                        className={cx('search-input')}
                        placeholder="Search accounts and videos"
                        spellCheck={false}
                        onChange={handleChange}
                        onFocus={() => setIsFocus(true)}
                    />
                    {!!searchValue && !loading && (
                        <button
                            className={cx('btn-clear')}
                            onClick={() => {
                                setSearchValue('');
                                focusRef.current.focus();
                            }}
                        >
                            <ClearIcon />
                        </button>
                    )}
                    {loading && <FontAwesomeIcon icon={faSpinner} id={cx('loading-icon')}></FontAwesomeIcon>}
                    <span className={cx('search-bulkhead')}></span>
                    <button className={cx('btn-search')} onMouseDown={(e) => e.preventDefault()}>
                        <SearchIcon />
                    </button>
                </div>
            </HandlessTippy>
        </div>
    );
}
