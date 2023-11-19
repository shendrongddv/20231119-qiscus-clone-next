import { Facebook, Instagram, Linkedin, Mail, Twitter } from "lucide-react";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Next.js",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
};

// siteNavHeader

// siteNavFoooter
export const siteNavFoooter = [
  {
    id: 1,
    title: "Produk",
    links: [
      {
        id: 1,
        label: "Qiscus Omnichannel Chat",
        url: "/",
      },
      {
        id: 2,
        label: "Qiscus Omnichannel CRM",
        url: "/",
      },
      {
        id: 3,
        label: "Qiscus Ticketing",
        url: "/",
      },
      {
        id: 4,
        label: "Qiscus App Center",
        url: "/",
      },
      {
        id: 5,
        label: "WhatsApp Business API",
        url: "/",
      },
      {
        id: 6,
        label: "Instagram Messenger API",
        url: "/",
      },
      {
        id: 7,
        label: "In-App Chat SDK",
        url: "/",
      },
      {
        id: 8,
        label: "Chatbot and Robolabs",
        url: "/",
      },
      {
        id: 9,
        label: "Qiscus Call Centre",
        url: "/",
      },
      {
        id: 10,
        label: "Qiscus AI Assistant",
        url: "/",
      },
      {
        id: 11,
        label: "Qiscus CDP",
        url: "/",
      },
      {
        id: 12,
        label: "Qiscus Shop",
        url: "/",
      },
      {
        id: 13,
        label: "Qiscus Survey",
        url: "/",
      },
    ],
  },
  {
    id: 2,
    title: "Bantuan",
    links: [
      {
        id: 1,
        label: "Kontak Sales",
        url: "/",
      },
      {
        id: 2,
        label: "Pusat Bantuan",
        url: "/",
      },
      {
        id: 3,
        label: "White Paper",
        url: "/",
      },
      {
        id: 4,
        label: "Blog",
        url: "/",
      },
      {
        id: 5,
        label: "Documentation",
        url: "/",
      },
    ],
  },
  {
    id: 3,
    title: "Perusahaan",
    links: [
      {
        id: 1,
        label: "Tentang Kami",
        url: "/",
      },
      {
        id: 2,
        label: "Pers & Media",
        url: "/",
      },
      {
        id: 3,
        label: "Kebijakan Privasi",
        url: "/",
      },
      {
        id: 4,
        label: "Persyaratan Layanan",
        url: "/",
      },
      {
        id: 5,
        label: "Karir",
        url: "/",
      },
    ],
  },
];

// siteSocials
export const siteSocials = [
  {
    id: 1,
    label: "LABELXXX",
    icon: Linkedin,
    url: "/",
  },
  {
    id: 2,
    label: "LABELXXX",
    icon: Facebook,
    url: "/",
  },
  {
    id: 3,
    label: "LABELXXX",
    icon: Twitter,
    url: "/",
  },
  {
    id: 4,
    label: "LABELXXX",
    icon: Instagram,
    url: "/",
  },
  {
    id: 5,
    label: "LABELXXX",
    icon: Mail,
    url: "/",
  },
];

// siteLegals
export const siteLegals = [
  {
    id: 1,
    label: "BSI",
    media: "bsi.svg",
  },
  {
    id: 2,
    label: "Kominfo",
    media: "kominfo.svg",
  },
  {
    id: 3,
    label: "Meta",
    media: "meta-bussiness-partner_h40.webp",
  },
];
