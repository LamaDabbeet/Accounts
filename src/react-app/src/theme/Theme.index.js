import { spacing } from './spacing';
import { borderRadius } from './border-radius';
import { typography } from './typography';
import { border } from './border';
import { backgroundColor } from './background';
import { colors } from './colors';
import { height } from './height';
import { GlobalStyle } from './global';
import { button } from './button';

const Theme = {
  button,
  form: {
    select: {
      color: typography.colors.light.primary,
      placeHolderColor: colors.trolleyGrey,
      borderBottomColor: colors.sapphire,
      hoverBorderColor: colors.summerSky,
      optionColor: typography.colors.light.primary,
      optionSelectedColor: colors.white,
      optionSelectedBackgroundColor: colors.summerSky,
      optionHoverBackgroundColor: colors.lemonChiffon,
      singleValueColor: typography.colors.light.primary
    },
    datePicker: {
      inputColor: typography.colors.light.primary,
      placeHolderColor: colors.trolleyGrey,
      inputBorderBottomColor: colors.sapphire,
      dateRangeSelectedColor: typography.colors.light.primary,
      dateRangeSelectedBackgroundColor: colors.lemonChiffon,
      dateStartEndBackgroundColor: colors.summerSky,
      dateStartEndColor: typography.colors.light.primary,
      dateToDayColor: colors.summerSky,
      todayColor: colors.summerSky
    },
    numeric: {
      backgroundColor: colors.summerSky
    },
    input: {
      placeHolderColor: colors.mineShaft,
      borderColor: colors.alto
    }
  },
  offersDayNavigator: {
    color: colors.mineShaft,
    controlColor: colors.astral
  },
  flightOffer: {
    headColor: colors.doveGray,
    bodyColor: colors.doveGray,
    arrivalTimeColor: colors.dustyGray,
    detailColor: colors.mineShaft,
    standbyColor: colors.jaffa,
    splitColor: colors.mercury,
    seatsColor: colors.red,
    transferColor: colors.red,
    detailContainerColor: colors.astral
  },
  borderRadius,
  spacing,
  typography,
  border,
  backgroundColor,
  height
};

export default Theme;
export { GlobalStyle };