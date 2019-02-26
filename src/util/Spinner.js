import React from 'react';
import { css } from '@emotion/core';
import { FadeLoader } from 'react-spinners';
import './Spinner.css';

const override = css`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 7% auto;
    text-align: center;
`;

export class Spinner extends React.Component {

    render() {
        return (
            <div class="sweet-loading">
                <FadeLoader 
                    css={override}
                    sizeUnit={"rem"}
                    size={6}
                    color={'black'}
                    loading={this.props.loading}
                />
            </div>
        );
    }
}