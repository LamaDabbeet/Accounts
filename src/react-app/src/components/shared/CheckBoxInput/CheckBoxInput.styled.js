import styled from "styled-components";
import {colors} from "../../../theme/colors"
import { typography } from "../../../theme/typography";


export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
`;

export const Label = styled.label`
  font-size: ${typography.medium};
  color: ${colors.lightGray};
  margin-right: 1rem
`;

export const CustomCheckBox = styled.input`
  appearance: none;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 30px;
  width: 30px;
  transition: all 0.15s ease-out 0s;
  background: ${colors.white};
  border: 1px solid ${colors.summerSky};
  border-radius: 30px;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  margin-right: 0.25rem;
  outline: none;
  position: relative;
  z-index: 1000;

  &:checked {
    background: ${colors.summerSky};
  }

  &:checked::before {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;

  }
`;
