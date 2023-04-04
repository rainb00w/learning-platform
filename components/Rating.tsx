import { IconSelector } from "../helpers/icon-selector";
import { RatingPropsTS } from "../helpers/types";

/* YES, THIS ONE CAN BE DRAMATICALLY IMPROVED :) */

export function Rating({ rating }: RatingPropsTS): JSX.Element {
  if (rating > 47) {
    return (
      <div className="flex items-center justify-center">
        <IconSelector id="starFull" />
        <IconSelector id="starFull" />
        <IconSelector id="starFull" />
        <IconSelector id="starFull" />
        <IconSelector id="starFull" />
      </div>
    );
  }
  if (rating > 41) {
    return (
      <div className="flex items-center justify-center ">
        <IconSelector id="starFull" />
        <IconSelector id="starFull" />
        <IconSelector id="starFull" />
        <IconSelector id="starFull" />
        <IconSelector id="starHalf" />
      </div>
    );
  }
  if (rating > 37) {
    return (
      <div className="flex items-center justify-center ">
        <IconSelector id="starFull" />
        <IconSelector id="starFull" />
        <IconSelector id="starFull" />
        <IconSelector id="starFull" />
        <IconSelector id="starEmpty" />
      </div>
    );
  } else {
    return (
      <div className="flex items-center justify-center">
        <IconSelector id="starFull" />
        <IconSelector id="starEmpty" />
        <IconSelector id="starEmpty" />
        <IconSelector id="starEmpty" />
        <IconSelector id="starEmpty" />
      </div>
    );
  }
}
