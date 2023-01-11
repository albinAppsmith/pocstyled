import React from 'react';
import styled, { css } from 'styled-components';
import { Size, Category, IconPositions, IconNames } from './constants';
import { token } from '@atlaskit/tokens';

const typography = {
  btnLarge: {
    fontSize: 13,
    lineHeight: 15,
    letterSpacing: 0.6,
    fontWeight: 'normal'
  },
  btnMedium: {
    fontSize: 12,
    lineHeight: 14,
    letterSpacing: 0.6,
    fontWeight: 'normal'
  },
  btnSmall: {
    fontSize: 11,
    lineHeight: 12,
    letterSpacing: 0.4,
    fontWeight: 'normal'
  }
};

const smallButton = css`
  font-size: ${typography.btnSmall.fontSize}px;
  font-weight: ${typography.btnSmall.fontWeight};
  line-height: ${typography.btnSmall.lineHeight}px;
  letter-spacing: ${typography.btnSmall.letterSpacing}px;
`;

const mediumButton = css`
  font-size: ${typography.btnMedium.fontSize}px;
  font-weight: ${typography.btnMedium.fontWeight};
  line-height: ${typography.btnMedium.lineHeight}px;
  letter-spacing: ${typography.btnMedium.letterSpacing}px;
`;

const largeButton = css`
  font-size: ${typography.btnLarge.fontSize}px;
  font-weight: ${typography.btnLarge.fontWeight};
  line-height: ${typography.btnLarge.lineHeight}px;
  letter-spacing: ${typography.btnLarge.letterSpacing}px;
`;

const getButtonBackground = (category, isDisabled) => {
  if (isDisabled) {
    return token(color.text);
  }
  switch (category) {
    case Category.primary:
      return token(color.background.accent.orange.subtle);
    case Category.secondary:
      return 'var(--ads-color-black)';
    case Category.tertiary:
      return 'transparent';
    default:
      return token(color.background.accent.orange.subtle);
  }
};

const getButtonHoverBackground = (category, isDisabled) => {
  if (isDisabled) {
    return token('color.text');
  }
  switch (category) {
    case Category.primary:
      return token('color.border.accent.orange');
    case Category.secondary:
      return token(color.text);
    case Category.tertiary:
      return token(color.text);
    default:
      return token('color.border.accent.orange');
  }
};

const getButtonColor = (category, isDisabled) => {
  if (isDisabled) {
    return 'var(--ads-color-black)';
  }
  switch (category) {
    case Category.primary:
      return token(color.text.subtle);
    case Category.secondary:
      return token(color.text.subtle);
    case Category.tertiary:
      return 'var(--ads-color-black)';
    default:
      return token(color.text.subtle);
  }
};

const getButtonBorderRadius = size => {
  switch (size) {
    case Size.small:
      return '2px';
    case Size.medium:
      return '4px';
    case Size.large:
      return '8px';
    default:
      return '4px';
  }
};

const getButtonFontStyles = size => {
  switch (size) {
    case Size.small:
      return smallButton;
    case Size.medium:
      return mediumButton;
    case Size.large:
      return largeButton;
    default:
      return mediumButton;
  }
};

const getButtonPadding = size => {
  switch (size) {
    case Size.small:
      return '6px 8px';
    case Size.medium:
      return '10px 16px';
    case Size.large:
      return '14px 24px';
    default:
      return '10px 16px';
  }
};

const ButtonStyles = css`
  user-select: none;
  border: none;
  text-decoration: none;
  outline: none;
  text-transform: uppercase;
  background-color: ${props => getButtonBackground(props.category, props.isDisabled)};
  color: ${props => getButtonColor(props.category, props.isDisabled)};
  border: none;
  border-radius: ${props => getButtonBorderRadius(props.size)};
  padding: ${props => getButtonPadding(props.size)};
  ${props => getButtonFontStyles(props.size)};

  .cs-icon:not([name='no-response']) {
    svg {
      fill: ${props => getButtonColor(props.category, props.isDisabled)};
    }
  }
  &,
  & * {
    cursor: ${props => (props.isLoading || props.isDisabled ? `not-allowed` : `pointer`)};
  }
  &:hover,
  &:focus {
    text-decoration: none;
    background-color: ${props => getButtonHoverBackground(props.category, props.isDisabled)};
  }
  font-style: normal;
  &:active {
    background-color: ${props => getButtonHoverBackground(props.category, props.isDisabled)};
  }
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  .cs-spinner {
    position: absolute;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    circle {
      stroke: var(--ads-color-black-0);
    }
  }
  .t--right-icon {
    margin-left: 8px;
  }
  .t--left-icon {
    margin-right: 8px;
  }
`;

const StyledButton = styled('button')`
  ${ButtonStyles}
`;

const IconStyles = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    width: 16px;
    height: 16px;
  }
`;

const Icon = ({ name, position }) => {
  const getIcon = () => {
    switch (name) {
      case IconNames.home:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={16} height={16}>
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M21 20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.49a1 1 0 0 1 .386-.79l8-6.222a1 1 0 0 1 1.228 0l8 6.222a1 1 0 0 1 .386.79V20zm-2-1V9.978l-7-5.444-7 5.444V19h14z" />
          </svg>
        );
      case IconNames.airplane:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={16} height={16}>
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M14 8.947 22 14v2l-8-2.526v5.36l3 1.666V22l-4.5-1L8 22v-1.5l3-1.667v-5.36L3 16v-2l8-5.053V3.5a1.5 1.5 0 0 1 3 0v5.447z" />
          </svg>
        );
      default:
        return <></>;
    }
  };

  return <IconStyles className={`cs-icon t--${position}-icon`}>{getIcon()}</IconStyles>;
};

const ButtonTwo = props => {
  const { size, category, isDisabled, icon, iconPosition, isLoading, text } = props;

  return (
    <StyledButton size={size} category={category} isDisabled={isDisabled}>
      {isLoading ? (
        <svg
          className="cs-spinner"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="8" cy="8" r="7" stroke="var(--ads-color-black-0)" strokeWidth="2" />
        </svg>
      ) : (
        <>
          {icon && iconPosition === IconPositions.left && (
            <Icon name={icon} position={iconPosition} />
          )}

          {text}

          {icon && iconPosition === IconPositions.right && (
            <Icon name={icon} position={iconPosition} />
          )}
        </>
      )}
    </StyledButton>
  );
};

export default ButtonTwo;
