import * as React from 'react';

export interface IProps {
    currentLayout: string
} 
 
class Container extends React.Component<IProps> {
    render() { 
        console.log( "currentLayout: ", this.props.currentLayout)
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