import React from 'react';
import { FadeLoader } from 'react-spinners';
import './Spinner.css';

/**
 * Renders Spinner
 */
export class Spinner extends React.Component {

    render() {
        return (
            <div className='spinner-container'>
                <FadeLoader
                    css='margin-top: 10rem;'
                    sizeUnit={ 'rem' }
                    size={ 6 }
                    color={ 'black' }
                    loading={ this.props.isLoading }
                />
            </div>
        );
    }
} // End of Class
// End of file
