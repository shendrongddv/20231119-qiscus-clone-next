import {
  Facebook,
  Instagram,
  Layout,
  Linkedin,
  Mail,
  Twitter,
} from "lucide-react";

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
export const siteNavHeader = [
  {
    id: 1,
    title: "TITLE",
    desc: "DESCXXX",
    icon: Layout,
    subLink: true,
    links: [
      {
        id: 1,
        label: "Qiscus Omnichannel Chat",
        desc: "DESCXXX",
        icon: Layout,
        url: "/",
      },
    ],
  },
  {
    id: 2,
    title: "Harga",
    desc: "DESCXXX",
    icon: Layout,
    subLink: false,
    links: [
      {
        id: 1,
        label: "LABELXXX",
        desc: "DESCXXX",
        icon: Layout,
        url: "/",
      },
    ],
  },
];

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

// TEST
export const testMenuMain = [
  {
    id: 1,
    label: "Mengapa Qiscus",
    url: "/",
    isGroup: true,
    links: [
      {
        id: 1,
        label: "Customer Success Story",
        desc: "Temukan kisah sukses dari pengguna Qiscus.",
        icon: Layout,
        url: "/",
      },
      {
        id: 2,
        label: "Layanan Purna Jual",
        desc: "Dukungan training dan account manager handal.",
        icon: Layout,
        url: "/",
      },
      {
        id: 3,
        label: "20+ Kanal Komunikasi",
        desc: "Jangkau pelanggan lewat aplikasi favorit mereka.",
        icon: Layout,
        url: "/",
      },
      {
        id: 4,
        label: "Dukungan Integrasi",
        desc: "Tersedia app connectors siap pakai dan layanan integrasi. ",
        icon: Layout,
        url: "/",
      },
      {
        id: 5,
        label: "Sales & Marketing",
        desc: "Permudah terjadinya penjualan lewat berbagai kanal online.",
        icon: Layout,
        url: "/",
      },
      {
        id: 6,
        label: "Customer Service",
        desc: "Tangani lebih banyak pelanggan dari berbagai kanal dengan efisien.",
        icon: Layout,
        url: "/",
      },
      {
        id: 7,
        label: "Developer & IT",
        desc: "Hadirkan fitur chat dan video call ke dalam aplikasi dengan cepat.",
        icon: Layout,
        url: "/",
      },
      {
        id: 8,
        label: "Operation Team",
        desc: "Operasional bisnis lebih efektif dengan komunikasi yang lancar.",
        icon: Layout,
        url: "/",
      },
    ],
  },
  {
    id: 2,
    label: "Solusi",
    url: "/",
    isGroup: true,
    links: [
      {
        id: 1,
        label: "Lead Generation",
        desc: "Hadirkan seamless customer experience dalam proses lead capture menggunakan WhatsApp dan channel komunikasi lainnya.",
        icon: Layout,
        url: "/",
      },
      {
        id: 2,
        label: "Engagement and Conversion",
        desc: "Lakukan follow-up atau kirim pesan promo ke pelanggan secara sistematis untuk hasilkan lebih banyak penjualan.",
        icon: Layout,
        url: "/",
      },
      {
        id: 3,
        label: "Support and Service",
        desc: "Memungkinkan tim customer service hadirkan customer experience terbaik melalui beragam channel dengan efisien.",
        icon: Layout,
        url: "/",
      },
      {
        id: 4,
        label: "Customer Marketing",
        desc: "Lakukan promo up-selling dan cross-selling dengan kirimkan pesan terpersonalisasi kepada pelanggan yang tepat.",
        icon: Layout,
        url: "/",
      },
    ],
  },
  {
    id: 3,
    label: "Produk",
    url: "/",
    isGroup: false,
    links: [
      {
        id: 1,
        label: "LABELXXX",
        desc: "",
        icon: Layout,
        url: "/",
      },
    ],
  },
  {
    id: 4,
    label: "Harga",
    url: "/",
    isGroup: false,
    links: [
      {
        id: 1,
        label: "Qiscus Omnichannel Chat",
        desc: "",
        icon: Layout,
        url: "/",
      },
    ],
  },
  {
    id: 5,
    label: "Perusahaan",
    url: "/",
    isGroup: true,
    links: [
      {
        id: 1,
        label: "Tentang Kami",
        desc: "",
        icon: Layout,
        url: "/",
      },
      {
        id: 2,
        label: "Pers & Media",
        desc: "",
        icon: Layout,
        url: "/",
      },
      {
        id: 3,
        label: "Kebijakan Privasi",
        desc: "",
        icon: Layout,
        url: "/",
      },
      {
        id: 4,
        label: "Persyaratan Layanan",
        desc: "",
        icon: Layout,
        url: "/",
      },
      {
        id: 5,
        label: "Karir",
        desc: "",
        icon: Layout,
        url: "/",
      },
    ],
  },
  {
    id: 6,
    label: "Bantuan",
    url: "/",
    isGroup: true,
    links: [
      {
        id: 1,
        label: "Kontak Sales",
        desc: "",
        icon: Layout,
        url: "/",
      },
      {
        id: 2,
        label: "Pusat Bantuan",
        desc: "",
        icon: Layout,
        url: "/",
      },
      {
        id: 3,
        label: "White Paper",
        desc: "",
        icon: Layout,
        url: "/",
      },
      {
        id: 4,
        label: "Blog",
        desc: "",
        icon: Layout,
        url: "/",
      },
      {
        id: 5,
        label: "Documentation",
        desc: "",
        icon: Layout,
        url: "/",
      },
    ],
  },
];
