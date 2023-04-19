import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ClassCOmpoLifeCycleEx extends Component {
    constructor(props:any) {
        super(props); // It will utilized a property about inherited component or class. Direct access ther methiosd and variabale 
        console.log('Constructor get called'); 
        this.state={
            name:"UserName",
            useList:[],
            AddessDetail: {}

        }
        // Class component are working with this keyword. for scope this keyword will help to access class component properties.
    }

    //  3 phase of class compo 

    //  1 phase => Mounting => componentWillMount, componentDidMount, setState, render

    // 2 phase => Update => componentWillUpdate, componentDidUpdate, setState, render.

    // 3 phase => UnMount => COnponentWillUnmount 

    static propTypes: {};

    componentWillMount() {
        console.log('Componenet method check for Will mount');
    }

    componentDidMount() {
        console.log('Componenet method check for did mount');
        this.setState({name: "Change in Mounting phase"})
    } // Did mount will execute after rendering. if any changes in did mount then it will render again.


    componentWillReceiveProps(nextProps:any) {
        //  While props get updated then this methos will call 
        //  letest value of props update here.
    }

    // shouldComponentUpdate(nextProps, nextState) {

    // }

    componentWillUpdate(nextProps:any, nextState:any) {
        console.log('Componenet willupdate will executed');
    }

    componentDidUpdate(prevProps:any, prevState:any) {
        console.log('Componenet didupdate will executed');


    }

    componentWillUnmount() {
        console.log('Unmounting Update');
    }

    render() {
        console.log('render get called');
        return (
            <div>

            </div>
        );
    }
}

ClassCOmpoLifeCycleEx.propTypes = {

};

export default ClassCOmpoLifeCycleEx;


