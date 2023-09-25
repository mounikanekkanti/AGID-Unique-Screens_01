import { LogoBlock } from ".";

export default {
  title: "Components/LogoBlock",
  component: LogoBlock,
  argTypes: {
    size: {
      options: ["desktop"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    size: "desktop",
    header: true,
    footer: true,
    className: {},
    text: "Aging, Independence, and Disability (AGID) Program Data Portal",
  },
};
