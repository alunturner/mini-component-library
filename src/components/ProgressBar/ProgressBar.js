/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

const SIZES = {
    small: {
        "--height": "8px",
        "--borderRadius": "4px",
    },
    medium: {
        "--height": "12px",
        "--borderRadius": "4px",
    },
    large: {
        "--height": "24px",
        "--borderRadius": "8px",
        "--padding": "4px",
    }
}
const ProgressBar = ({ value, size }) => {
    return (
        <ProgressWrapper
            style={SIZES[size]}
            role="progressbar"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-valuenow={value}
        >
            <ProgressContent value={value} />
        </ProgressWrapper>);
};

const ProgressWrapper = styled.div`
    border-radius: var(--borderRadius);
    background: ${COLORS.transparentGray15};
    box-shadow: 0px 2px 4px 0px rgba(128, 128, 128, 0.35) inset;
    width: 370px;
    height: var(--height);
    padding: var(--padding);
`

const ProgressContent = styled.div`
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    border-top-right-radius: ${p => p.value === 100 && "4px"};
    border-bottom-right-radius: ${p => p.value === 100 && "4px"};
    background-color: ${COLORS.primary};
    width: ${p => `${p.value}%`};
    height: 100%;
`
export default ProgressBar;
