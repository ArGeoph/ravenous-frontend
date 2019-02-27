import React from 'react';
import { FadeLoader } from 'react-spinners';
import './Spinner.css';

// CSS for Spinner component
const override = `
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10rem auto;
    width: 100%;
    height: 100%;
`;

export class Spinner extends React.Component {

    render() {
        return (
            <div className="spinner">
                <FadeLoader 
                    css={override}
                    sizeUnit={"rem"}
                    size={6}
                    color={'black'}
                    loading={this.props.loading}
                    margin={'10%'}
                />
            </div>
        );
    }
}