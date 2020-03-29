import React, { Fragment } from 'react';
import styles from './message.module.scss';

const Message = ({message}) => {
    return  (
        <Fragment>
            <div className={`${styles.messages__item} list__item`}>
                {message}
            </div>
        </Fragment>
    );
};

export default Message;