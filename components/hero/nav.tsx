import { MobileNav } from "@/components/hero/mobile-nav";
import { DesktopNav } from "@/components/hero/desktop-nav";

const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Privacy Policy",
    href: "/privacy-policy",
  },
];

export function Nav() {
  return (
    <>
      <MobileNav className="flex md:hidden" items={navItems} />
      <DesktopNav className="hidden md:flex" items={navItems} />
    </>
  );
}
