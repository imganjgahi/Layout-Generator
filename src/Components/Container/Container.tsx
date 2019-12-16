import * as React from 'react';

export interface IProps {
    
}
 
export interface IState {
    
}
 
class Container extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {  };
    }
    render() { 
        return ( 

            <div className="container">
                <div className="testLayout"> Container works </div>
                <div className="testLayout"> Container works </div>
                <div className="testLayout"> Container works </div>
                <div className="testLayout"> Container works </div>
            </div>
         );
    }
}
 
export default Container;