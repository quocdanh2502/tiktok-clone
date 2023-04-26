import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

function Debounce(value, time) {
    const [debounce, setDebounce] = useState(value);

    useEffect(() => {
        const debounced = setTimeout(() => {
            setDebounce(value);
        }, time);
        return () => clearTimeout(debounced);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    return debounce;
}

Debounce.propTypes = {
    value: PropTypes.string,
    time: PropTypes.number,
};

export default Debounce;
