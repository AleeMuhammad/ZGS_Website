import { FooterBlur } from "@/components/footer/footer-blur";
import { XIcon, LinkedInIcon, GithubIcon } from "@/components/footer/icons";
import Link from "next/link";

const links = [
  {
    title: "Zain General Store",
    links: [
      {
        label: "Download App",
        href: "https://apps.apple.com/",
        title: "Download the app from the App Store",
      },
      {
        label: "Home",
        href: "/",
        title: "See our home",
      },
      {
        label: "Contact",
        href: "/contact",
        title: "Contact us if you have any inquiry",
      },
    ],
  },
  {
    title: "Products",
    links: [
      {
        label: "For Android",
        href: "https://play.google.com/store/apps/details?id=com.zain.generalstore",
        title: "Download on Android",
      },
      {
        label: "For iPhone",
        href: "https://apps.apple.com/",
        title: "Download on iOS",
      },
    ],
  },
  {
    title: "Company",
    links: [
      {
        label: "Privacy Policy",
        href: "/privacy-policy",
        title: "Read our Privacy Policy",
      },
     
    ],
  },
 
];

export function Footer() {
  return (
    <footer className="relative -mt-25 overflow-hidden py-12 pt-37 md:py-25 md:pt-37">
      <FooterBlur />
      <div className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-8 px-6 tracking-tight md:grid-cols-3">
        {links.map((link) => (
          <div key={link.title} className="mb-10 text-center">
            <h3 className="text-muted-foreground mb-8">{link.title}</h3>
            <ul className="flex flex-col items-center gap-8">
              {link.links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    title={link.title}
                    target={link.href.startsWith("https://") ? "_blank" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}
