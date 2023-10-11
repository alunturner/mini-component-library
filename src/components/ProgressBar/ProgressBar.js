/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
    small: {
        "--height": "8px",
    },
    medium: {
        "--height": "12px",
    },
    large: {
        "--height": "24px",
    }
}
const ProgressBar = ({ value, size }) => {
    return <Progress style={SIZES[size]}role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow={value}>{value}</Progress>;
};

const Progress = styled.div`
    width: 370px;
    height: var(--height);
`
export default ProgressBar;
