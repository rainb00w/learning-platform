import React from "react";
import { Rating } from "../components/Rating";

export default {
  title: "Rating",
  component: Rating,
};

const Template = (args) => <Rating {...args} />;

export const RatingFourAndHalf = Template.bind({});
RatingFourAndHalf.args = {
  rating: 45,
};

export const RatingFour = Template.bind({});
RatingFour.args = {
  rating: 40,
};
