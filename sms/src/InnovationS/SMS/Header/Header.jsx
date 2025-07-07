// src/components/Header.jsx
import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const nav = [
  { name: "Home", href: "/home" },
  { name: "Solutions", href: "/solutions" },
  {
    name: "Services",
    children: [
      { name: "UI / UX Designing", href: "#uiux" },
      { name: "Web Designing", href: "#webdesign" },
      { name: "Mobile Applications", href: "#mobile" },
    ],
  },
  { name: "Why Choose Us", href: "/why-choose-us" },
  { name: "Pricing", href: "/pricing" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggle = () => setMobileOpen(!mobileOpen);

  return (
    <header className="fixed inset-x-0 top-0 z-40 backdrop-blur-md bg-white/60 shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        {/* Logo / Brand */}
        <a href="/" className="text-xl font-bold text-indigo-600">
          Innovation'S
        </a>

        {/* Hamburger (mobile) */}
        <button
          onClick={toggle}
          className="text-2xl text-gray-700 lg:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>

        {/* Desktop links */}
        <ul className="hidden items-center gap-6 lg:flex">
          {nav.map((item) =>
            item.children ? (
              <li key={item.name} className="relative group">
                <button className="flex items-center gap-1 font-medium text-gray-800 transition-colors hover:text-indigo-600">
                  {item.name}
                  <svg
                    className="h-4 w-4 transition-transform group-hover:rotate-180"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 10.9l3.7-3.67a.75.75 0 111.06 1.06l-4.24 4.2a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                {/* Dropdown */}
                <ul
                  className="invisible absolute left-1/2 top-full z-10
                             w-56 -translate-x-1/2 origin-top scale-95
                             rounded-xl bg-white/60 p-2 shadow-lg opacity-0
                             backdrop-blur-md transition-all duration-200
                             group-hover:visible group-hover:scale-100 group-hover:opacity-100"
                >
                  {item.children.map((child) => (
                    <li key={child.name}>
                      <a
                        href={child.href}
                        className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-indigo-50 hover:text-indigo-600"
                      >
                        {child.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="font-medium text-gray-800 transition-colors hover:text-indigo-600"
                >
                  {item.name}
                </a>
              </li>
            )
          )}

          {/* Request Demo Button */}
          <li>
            <a
              href="/request-demo"
              className="inline-block rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 px-5 py-2 text-sm font-semibold text-white shadow-md transition-transform hover:scale-105 hover:shadow-lg focus:outline-none"
            >
              Request Demo
            </a>
          </li>
        </ul>
      </nav>

      {/* Mobile panel */}
      {mobileOpen && (
        <div className="lg:hidden">
          <ul className="space-y-1 border-t border-gray-200 bg-white/90 px-4 pb-4 pt-3 backdrop-blur-md">
            {nav.map((item) =>
              item.children ? (
                <details key={item.name} className="group">
                  <summary className="flex cursor-pointer items-center justify-between rounded-lg px-2 py-2 text-gray-800 hover:bg-indigo-50">
                    {item.name}
                    <svg
                      className="h-4 w-4 transform transition-transform group-open:rotate-180"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 10.9l3.7-3.67a.75.75 0 111.06 1.06l-4.24 4.2a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </summary>
                  <ul className="mt-1 space-y-1 pl-4">
                    {item.children.map((child) => (
                      <li key={child.name}>
                        <a
                          href={child.href}
                          className="block rounded-lg px-2 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
                        >
                          {child.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </details>
              ) : (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="block rounded-lg px-2 py-2 text-gray-800 hover:bg-indigo-50"
                  >
                    {item.name}
                  </a>
                </li>
              )
            )}

            {/* Mobile Request Demo */}
            <li>
              <a
                href="/request-demo"
                className="mt-2 block rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 px-4 py-2 text-center text-sm font-semibold text-white shadow-md"
              >
                Request Demo
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
