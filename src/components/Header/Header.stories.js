import { Header } from ".";

export default {
  title: "Components/Header",
  component: Header,
  argTypes: {
    breadcrumbs: {
      options: ["off", "on"],
      control: { type: "select" },
    },
    version: {
      options: ["v-2", "MVP"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    breadcrumbs: "off",
    version: "v-2",
    className: {},
    quickSearchSearchGroupClassName: {},
    quickSearchSearchOverlapClassName: {},
    quickSearchSearchVector: "/img/vector-27.svg",
    line: "/img/line-2.svg",
    img: "/img/line-7.svg",
    line1: "/img/line-8.svg",
    line2: "/img/line-15.svg",
    line3: "/img/line-16.svg",
    line4: "/img/line-15.svg",
    text: "Home&nbsp;&nbsp;&gt;&nbsp;&nbsp;Programs&nbsp;&nbsp; &gt;&nbsp;&nbsp;Center for Independent Living",
    topBannerUsFlagSmall: "/img/us-flag-small.png",
    hasFrame: true,
    frameClassName: {},
    navLinkText: "Contact",
  },
};
