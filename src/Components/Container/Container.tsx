import * as React from 'react';

export interface IProps {
    currentLayout: string
}

interface IState {
    layouts: JSX.Element[]
}

class Container extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            layouts: []
        }
    }
    componentDidUpdate(prevProps: IProps) {
        if (prevProps.currentLayout !== this.props.currentLayout) {
            const newLayouts: JSX.Element[] = []
            const layouts = this.props.currentLayout.split("/");
            //loop in layout array after split it
            if(layouts[0] !== ""){
                layouts.forEach((targetLayout) => {
                    //search for charcters in target string
                    const layoutType = /[a-z]/i.exec(targetLayout)
    
                    //check if it has amount or not
                    const hasAmount = targetLayout.search(/[0-9]/)
    
                    //minium amont for rendering the new layout
                    let amount = 1;
    
                    // intial layout style class after pars string
                    const layoutClass: string = `layout ${targetLayout.slice(layoutType.index, targetLayout.length)}`;
    
                    // calculate for Repeating the element
                    if (hasAmount === 0) {
                        amount = parseInt(targetLayout.slice(0, layoutType.index))
                    }
    
                    //push new layouts in array
                    for (let i = 0; i < amount; i++) {
                        newLayouts.push(
                            <div key={layoutClass + i} className={layoutClass}> {layoutClass}</div>
                        )
                    }
    
                });
            }
            //change state after initial new layout
            this.setState({ layouts: newLayouts })
        }
    }
    render() {
        if(this.state.layouts.length === 0 ) {
            return <p className="noLayout">please choose a layout </p>
        }
        return (
            <div className="container">
                {this.state.layouts.map(l => l)}
            </div>
        );
    }

}

export default Container;