import React from 'react';
interface Props {
    api: string;
    children: React.Component;
}
export declare class index extends React.Component<Props> {
    constructor(props: any);
    componentDidCatch(_error: Error): Promise<void>;
    render(): JSX.Element;
}
export default index;
