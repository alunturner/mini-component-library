/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

const SIZES = {
    small: {
        "--height": "8px",
        "--padding": "0px",
        "--borderRadius": "4px",
    },
    medium: {
        "--height": "12px",
        "--padding": "0px",
        "--borderRadius": "4px",
    },
    large: {
        "--height": "16px",
        "--padding": "4px",
        "--borderRadius": "8px",
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
    background-color: ${COLORS.transparentGray15};
    box-shadow: 0px 2px 4px 0px ${COLORS.transparentGray15} inset;
    width: 370px;
    overflow: hidden;
    padding: var(--padding);
`

const ProgressContent = styled.div`
    background-color: ${COLORS.primary};
    width: ${p => `${p.value}%`};
    height: var(--height);
`
export default ProgressBar;
