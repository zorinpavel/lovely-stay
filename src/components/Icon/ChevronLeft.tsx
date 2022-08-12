import React, { ComponentProps } from 'react';
import { Icon } from './Icon';


export const ChevronLeft = (props: ComponentProps<any>) => {
    return <Icon  id="ChevronLeft" {...props}>
        <path d="M15.5926 20.4977C15.8839 20.2032 15.8813 19.7283 15.5868 19.4371L8.12134 12.0534L15.5049 4.58803C15.7962 4.29353 15.7936 3.81866 15.4991 3.52739C15.2046 3.23611 14.7297 3.23873 14.4385 3.53323L6.52746 11.5319C6.23618 11.8264 6.2388 12.3013 6.5333 12.5925L14.532 20.5035C14.8265 20.7948 15.3013 20.7922 15.5926 20.4977Z"/>
    </Icon>;
};
