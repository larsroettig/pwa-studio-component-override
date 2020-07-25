import React from 'react';
import {mergeClasses} from '@magento/venia-ui/lib/classify';
import Button from '@magento/venia-ui/lib/components/Button/button';
import defaultClasses from './topbar.css';

const TopBar = () => {
    const classes = mergeClasses(defaultClasses);

    return (
        <div className={classes.root}>
            <div className={classes.moreText}> Your first custom react component</div>
            <div>
                <Button className={classes.moreButton}>
                    {'More'}
                </Button>
            </div>
        </div>
    )
};

export default TopBar;