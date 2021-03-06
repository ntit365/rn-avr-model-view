import { ViewPropTypes, ColorPropType } from "react-native";
import PropTypes from "prop-types";

export const DefaultPropTypes = {
  ...ViewPropTypes,
  source: PropTypes.object,
  scale: PropTypes.number,
  autoPlay: PropTypes.bool,
  onLoadModelStart: PropTypes.func,
  onLoadModelSuccess: PropTypes.func,
  onLoadModelError: PropTypes.func,
  onAnimationStart: PropTypes.func,
  onAnimationStop: PropTypes.func,
  onAnimationUpdate: PropTypes.func,
};

export const RCTPropTypes = {
  ...ViewPropTypes,
  modelSrc: PropTypes.string,
  textureSrc: PropTypes.string,
  scale: PropTypes.number,
  autoPlayAnimations: PropTypes.bool,
  backgroundColor: ColorPropType,
  onLoadModelSuccess: PropTypes.func,
  onLoadModelError: PropTypes.func,
  onAnimationStart: PropTypes.func,
  onAnimationStop: PropTypes.func,
  onAnimationUpdate: PropTypes.func,
};
