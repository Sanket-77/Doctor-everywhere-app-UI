import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Grid } from '@mui/material';

class ErrorBoundries extends Component<any, any>{
    constructor(props: any) {
        super(props);
        this.state = { hasError: false }

    }
    static getDerivedStateFromError(error: any) {
        // Update state so the next render will show the fallback UI
        return { hasError: true }
    }
    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        //  You can also log the error to an error reporting service.
        console.log('error', error, errorInfo);
    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {
        if (this.state.hasError) {
            return (
                <>
                    <Grid
                        display='flex'
                        justifyContent='center'
                        alignItems='center'
                        style={{ width: '100vm', height: '100vh' }}
                    >
                        <Grid display='flex' spacing={3}>
                            <Grid item>
                                <h1>
                                    <b>Unexpected Error</b>
                                </h1>
                                <h3>
                                    <p>An Error Has Occured</p>
                                </h3>
                                <Grid
                                    display='flex'
                                    justifyContent='center'
                                    className='m-t-20'
                                >
                                    <Button
                                        onClick={() => window.location.reload()}
                                    >
                                        Reload
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </>
            );
        }
        return <>{this.props.children}</>
    }
}

export default ErrorBoundries;