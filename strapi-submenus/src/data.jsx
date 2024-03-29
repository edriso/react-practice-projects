import {
  Fa500Px,
  FaAccusoft,
  FaAdversal,
  FaAvianex,
  FaBitcoin,
  FaBtc,
  FaCodiepie,
  FaDocker,
  FaGithubSquare,
} from "react-icons/fa";
import { nanoid } from "nanoid";

export const sublinks = [
  {
    pageId: nanoid(),
    page: "products",
    links: [
      {
        id: nanoid(),
        label: "community",
        icon: <Fa500Px />,
        url: "/products/community",
      },
      {
        id: nanoid(),
        label: "content",
        icon: <FaAccusoft />,
        url: "/products/content",
      },
      {
        id: nanoid(),
        label: "roles",
        icon: <FaAdversal />,
        url: "/products/roles",
      },
    ],
  },
  {
    pageId: nanoid(),
    page: "solutions",
    links: [
      {
        id: nanoid(),
        label: "developers",
        icon: <FaAvianex />,
        url: "/solutions/developers",
      },
      {
        id: nanoid(),
        label: "content managers",
        icon: <FaBitcoin />,
        url: "/solutions/content-managers",
      },
      {
        id: nanoid(),
        label: "business teams",
        icon: <FaBtc />,
        url: "/solutions/business teams",
      },
      {
        id: nanoid(),
        label: "ecommerce",
        icon: <FaCodiepie />,
        url: "/solutions/ecommerce",
      },
    ],
  },
  {
    page: "resources",
    pageId: nanoid(),
    links: [
      {
        id: nanoid(),
        label: "starters",
        icon: <FaDocker />,
        url: "/resources/starters",
      },
      {
        id: nanoid(),
        label: "showcase",
        icon: <FaGithubSquare />,
        url: "/resources/showcase",
      },
    ],
  },
];
