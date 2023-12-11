import { ButtonPage } from ".";

export default {
  title: "Components/ButtonPage",
  component: ButtonPage,
  argTypes: {
    style: {
      options: ["active", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    style: "active",
    className: {},
    text: "1",
  },
};
