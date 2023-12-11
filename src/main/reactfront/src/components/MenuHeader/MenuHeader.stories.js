import { MenuHeader } from ".";

export default {
  title: "Components/MenuHeader",
  component: MenuHeader,
  argTypes: {
    property1: {
      options: ["white", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "white",
    className: {},
    text: "About",
    text1: "Features",
    text2: "Pricing",
    text3: "Gallery",
    text4: "Team",
  },
};
