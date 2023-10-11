/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size }) => {
    return <Progress role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow={value}>{value}</Progress>;
};

const Progress = styled.div`
    height: auto;
`
export default ProgressBar;
