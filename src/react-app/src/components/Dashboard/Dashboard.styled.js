import styled from "styled-components";
import {colors} from "../../theme/colors"
import { typography } from "../../theme/typography";


export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;


export const CardsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;


export const Card = styled.div`
  width:10rem;
  height:10rem;
  background-color:${colors.white};
  border-radius: 5px;
  display:flex;
  justify-content: space-evenly;
  align-items:center;
  flex-direction:column;
  margin:1rem;
  padding:1rem;
  box-shadow: 0 2px 5px 0 ${colors.silver};
`;

export const Heading =styled.h2`
  text-align:left;
  width:100%;
  margin:0
`;
export const SubHeading =styled.h4`
  text-align:left;
  width:100%;  
  margin:0
`;


export const Text =styled.p`
  text-align:left;
  width:100%;
  color: ${colors.lightGray}
`;

export const Span =styled.span`
  text-align:left;
  width:100%;
  color: ${colors.lightGray};
  fontSize: ${typography.medium};
  fontWeight: ${typography.weight.medium}
`;