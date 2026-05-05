import {
  Building2,
  CreditCard,
  HelpCircleIcon,
  LineChartIcon,
  Link2Icon,
  LockIcon,
  NewspaperIcon,
  QrCodeIcon,
  Users,
  Wallet,
} from "lucide-react";

export const NAV_LINKS = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Features",
    href: "/features",
    menu: [
      {
        title: "Property Management",
        tagline: "Manage properties, tenants, and leases in one place",
        href: "/features/property-management",
        icon: Building2,
      },
      {
        title: "Accounting",
        tagline: "Track income, expenses, and financial performance",
        href: "/features/accounting",
        icon: Wallet,
      },
      {
        title: "Rent Collection",
        tagline: "Automate rent payments and stay on track",
        href: "/features/rent-collection",
        icon: CreditCard,
      },
      {
        title: "Tenant Access",
        tagline: "Give tenants a dashboard for payments and leases",
        href: "/features/tenant-access",
        icon: Users,
      },
    ],
  },
  {
    title: "Pricing",
    href: "/pricing",
  },
  {
    title: "Resources",
    href: "/resources",
    menu: [
      {
        title: "Tutorials",
        tagline: "Read articles on the latest trends in tech.",
        href: "/resources/blog",
        icon: NewspaperIcon,
      },
      {
        title: "Help",
        tagline: "Get answers to your questions.",
        href: "/resources/help",
        icon: HelpCircleIcon,
      },
    ],
  },
];
