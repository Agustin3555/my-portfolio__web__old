import {
  BGC_BRIGHT_A,
  BGC_DARK_A,
  COLOR,
  MICROINTERACTION,
  NOT_FONT_SIZE,
  Value,
} from '@/styles'
import styled from '@emotion/styled'

const SIZE = NOT_FONT_SIZE.m
const GAP = NOT_FONT_SIZE['5xs']

interface ConstProvider {
  width: Value
  height: Value
  padding: Value
  backgroundColor: Value

  fakeButton: {
    width: Value
    height: Value
    backgroundColor: Value
  }

  DARK_MODE: {
    backgroundColor: Value

    fakeButton: {
      backgroundColor: Value
    }
  }
}

const buttonDimension = `calc(${SIZE} - ${GAP} * 2)`

const cp: ConstProvider = {
  width: SIZE,
  height: SIZE,
  padding: GAP,
  backgroundColor: COLOR.g_8,

  fakeButton: {
    width: buttonDimension,
    height: buttonDimension,
    backgroundColor: BGC_BRIGHT_A,
  },

  DARK_MODE: {
    backgroundColor: COLOR.g_18,

    fakeButton: {
      backgroundColor: BGC_DARK_A,
    },
  },
}

export const Component = styled.div`
  position: relative;
  width: ${cp.width};
  height: ${cp.height};
  padding: ${cp.padding};
  border-radius: ${NOT_FONT_SIZE['6xl']};
  background-color: ${cp.backgroundColor};
  overflow: hidden;
  transition: background-color ${MICROINTERACTION.s} ease-out,
    transform ${MICROINTERACTION.m} ease-out;

  :hover {
    transform: rotate(-22.5deg);
  }

  :active .fake-button {
    transform: scale(87.5%);
  }

  .fake-button {
    position: absolute;
    width: ${cp.fakeButton.width};
    height: ${cp.fakeButton.height};
    border-radius: ${NOT_FONT_SIZE['6xl']};
    background-color: ${cp.fakeButton.backgroundColor};
    transition: background-color ${MICROINTERACTION.s} ease-out,
      transform ${MICROINTERACTION.xs} ease-out;

    .sun,
    .moon {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      transition: opacity ${MICROINTERACTION.m} ease-out,
        transform ${MICROINTERACTION.m} ease-out;
    }

    .sun {
      color: ${COLOR.g_4};
      opacity: 0;
      transform: scale(0) rotate(135deg);
    }

    .moon {
      color: ${COLOR.g_12};
      opacity: 1;
      transform: initial;
    }
  }

  .input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    appearance: none;
    cursor: pointer;
  }

  .app[data-dark-mode='true'] & {
    background-color: ${cp.DARK_MODE.backgroundColor};

    .fake-button {
      background-color: ${cp.DARK_MODE.fakeButton.backgroundColor};

      .sun {
        opacity: 1;
        transform: initial;
      }

      .moon {
        opacity: 0;
        transform: scale(0) rotate(135deg);
      }
    }
  }
`
