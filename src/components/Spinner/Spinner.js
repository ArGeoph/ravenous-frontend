import React from 'react';
import { FadeLoader } from 'react-spinners';
import './Spinner.css';

/**
 * Renders Spinner
 */
export const Spinner = (props) =>
    (<div className='spinner-container'>
        <FadeLoader
            css='margin-top: 10rem;'
            sizeUnit={ 'rem' }
            size={ 6 }
            color={ 'black' }
            loading={ props.isLoading }
        />
    </div>);
// End of Functional Component
// End of file
