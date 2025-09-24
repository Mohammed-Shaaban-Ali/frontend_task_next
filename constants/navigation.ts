import homeIcon from "@/public/icons/home.svg";
import categoryIcon from "@/public/icons/category.svg";
import aboutIcon from "@/public/icons/about.svg";
import contactIcon from "@/public/icons/contact.svg";
import faqsIcon from "@/public/icons/faqs.svg";
export const NavLinks: {
  href: string;
  icon: string;
  label: string;
}[] = [
  {
    label: "Home",
    href: "/",
    icon: homeIcon,
  },
  {
    label: "Our Category",
    href: "/category",
    icon: categoryIcon,
  },
  {
    label: "About Us",
    href: "/about",
    icon: aboutIcon,
  },
  {
    label: "Contact Us",
    href: "/contact",
    icon: contactIcon,
  },
  {
    label: "FAQs",
    href: "/faqs",
    icon: faqsIcon,
  },
];
