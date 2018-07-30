/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Prism from 'prismjs';
import { PrismCode } from 'react-prism';
import Icon from './Icon';

const Wrapper = styled.pre`
  position: relative;
  border-radius: 8px;
  margin-bottom: 40px;
  background-color: ${({ theme }) => theme.black};
`;

const Handlers = styled.div`
  top: 10px;
  right: 10px;
  position: absolute;
`;

const Handler = styled(Icon)`
  color: white;
  opacity: 0.5;
  font-size: 16px;
  margin-right: 15px;

  :last-child {
    margin-right: 0px;
  }
`;

const Code = styled(PrismCode).attrs({
  className: 'language-js',
})`
  color: #d8dee9;
`;

const CodeBlock = props => (
  <Wrapper>
    <Handlers>
      {props.isPlayable && <Handler type="eye" />}
      <Handler type="files-o" />
    </Handlers>
    <Code>{props.children}</Code>
  </Wrapper>
);

CodeBlock.propTypes = {
  isPlayable: PropTypes.bool,
  children: PropTypes.string.isRequired,
};

CodeBlock.defaultProps = {
  isPlayable: false,
};

export default CodeBlock;