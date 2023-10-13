import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
    const displayedValue = getDisplayedValue(value, children);

    return (
        <Container>
            <NativeSelect value={value} onChange={onChange}>
                {children}
            </NativeSelect>
            <Wrapper>
                <Span>{displayedValue}</Span>
                <Icon id="chevron-down" size="24" />
            </Wrapper>
        </Container>
    );
};

const Container = styled.div`
    position: relative;
    color: ${COLORS.gray700};
    width: max-content;
    border-radius: 8px;
    background: ${COLORS.transparentGray15};
`

// could have set top and left to 0, then set width and height to 100%
    const NativeSelect = styled.select`
position: absolute;
width: 100%;
padding: 12px 16px;
opacity: 0%;
`

// alternative to flex box would have been absolute icon positioning
const Wrapper = styled.div`
    width: auto;
    padding: 12px 16px;
    display: flex;
    align-items: center;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    
    ${NativeSelect}:focus + & {
        outline: 1px dotted black;
        outline: 5px auto -webkit-focus-ring-color;
    }
`

const Span = styled.span`
    margin-right: 24px;
`

export default Select;
