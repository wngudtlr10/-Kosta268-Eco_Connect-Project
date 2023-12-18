import { Button } from ".";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    property1: {
      options: ["contactus", "thirty", "twenty", "ten", "fifty", "five"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "contactus",
    className: {},
    divClassName: {},
    text: "Contact Us",
  },
};
