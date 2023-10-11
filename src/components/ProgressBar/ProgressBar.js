/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

const SIZES = {
    small: {
        "--height": 8,
        "--padding": 0,
        "--borderRadius": 4,
    },
    medium: {
        "--height": 12,
        "--padding": 0,
        "--borderRadius": 4,
    },
    large: {
        "--height": 16,
        "--padding": 4,
        "--borderRadius": 8,
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
    height: var(--height);
    overflow: hidden;
`

const ProgressContent = styled.div`
    background-color: ${COLORS.primary};
    width: ${p => `${p.value}%`};
    height: var(--height);
    margin: var(--padding);
`
export default ProgressBar;
