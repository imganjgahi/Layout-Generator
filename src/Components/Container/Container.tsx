import * as React from 'react';

export interface IProps {
    currentLayout: string
} 
 
class Container extends React.Component<IProps> {

    componentDidUpdate(prevProps: IProps){
        if(prevProps.currentLayout !== this.props.currentLayout){
            console.log( "currentLayout: ", this.props.currentLayout)
        }
    }
    render() { 
        return ( 

            <div className="container">
                <div className="layout XL"> layout XL </div>
                <div className="layout XL"> layout XL </div>
                <div className="layout L"> layout L </div>
                <div className="layout SM"> layout SM </div>
                <div className="layout SM"> layout SM </div>
            </div>
         );
    }
}
 
export default Container;