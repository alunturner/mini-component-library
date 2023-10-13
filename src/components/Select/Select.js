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
`

const Span = styled.span`
    margin-right: 24px;
`

const NativeSelect = styled.select`
    position: absolute;
    width: 100%;
    padding: 12px 16px;
    opacity: 0%;
`

export default Select;
