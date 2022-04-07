import { Fragment, useEffect, useState } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, MoonIcon, SunIcon, XIcon } from '@heroicons/react/outline'
import Link from 'next/link';
import { useTheme } from 'next-themes';


const navigation = [
  // { name: 'Home', href: '/' },
  { name: 'Notícias', href: '/news' },
  { name: 'Cursos', href: '/courses' },
  { name: 'Jogos', href: '/games' },
  { name: 'Calendário', href: '/calendar' },
  { name: 'Whitelist', href: '/whitelists' },
  { name: 'Airdrops', href: '/airdrops' },
  // { name: 'Escola', href: '/schoalrship' },
  // { name: 'Contato', href: '/contact' },

]

export function Header() {
  const { systemTheme, theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState<boolean>(false)


  useEffect(() => {
    setMounted(true)
  }, [])

  const ChangeTheme = () => {
    const currentTheme = theme === "system" ? systemTheme : theme
    if (!mounted) return null

    if (currentTheme === "dark") {
      return <SunIcon
        className="w-5 h-5"
        color='#ffffff'
        role="button"
        onClick={() => setTheme("light")}
      />
    } else {
      return <MoonIcon
        className="w-5 h-5"
        color='#ffffff'
        role="button"
        onClick={() => setTheme("dark")}
      />
    }
  }

  return (
    <div className="relative bg-blue-800 ">
      <div className="relative pt-6 pb-6">
        <Popover>
          <div className=" max-w-7xl mx-auto px-4 sm:px-6">
            <nav className="relative  flex items-center justify-between sm:h-10 lg:justify-center" aria-label="Global">
              <div className="flex items-center flex-1 lg:absolute lg:inset-y-0 lg:left-0">
                <div className="flex items-center justify-between w-full lg:w-auto">
                  <Link
                    href="/"
                    passHref
                  >
                    <div >
                      <span className="sr-only">Bayz</span>
                      {/* Bayz Logo */}
                      <svg
                        className="h-8 w-auto sm:h-10 fill-white transition ease-out hover:scale-125 duration-30"
                        id="SVGRoot"
                        version="1.1"
                        viewBox="0 0 80 25"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g
                          transform="matrix(.61356 0 0 .61356 2.5628 26.102)"
                          fontStyle="shape-inside:url(#rect3359);white-space:pre"
                          aria-label="BAZY">
                          <path
                            transform="matrix(.43123 0 0 .43123 -4.1769 -42.541)"
                            d="m110.72 14.57c-2.0014 0-3.8282 1.1306-4.6113 3.0449l-26.627 62.303h10.703l20.449-47.684 20.188 47.684h10.703l-26.367-62.303c-0.78314-1.9143-2.4361-3.0449-4.4375-3.0449zm-95.805 0.95703c-2.7845 0-5.1328 2.2624-5.1328 5.0469v54.211c0 2.7845 2.3483 5.1328 5.1328 5.1328h28.717c10.181 0 18.447-8.3532 18.447-18.621 0-6.5262-3.3943-11.572-8.6152-14.27 4.0027-2.9585 6.4395-7.3967 6.4395-13.053 0-10.181-8.2673-18.447-18.535-18.447h-26.453zm145.14 0v9.5703h39.332l-39.332 46.814c-0.69613 0.87016-1.1309 1.9157-1.1309 3.0469 0 2.7845 2.1745 4.959 4.959 4.959h48.729v-9.5703h-38.721l39.33-46.814c0.69612-0.87016 1.0449-1.9146 1.0449-3.1328 0-2.6975-2.1756-4.873-4.873-4.873h-49.338zm70.744 0 26.104 43.855v20.535h9.5723v-20.535l26.105-43.855h-11.312l-19.578 33.24-19.58-33.24h-11.311zm-211.45 9.5703h22.014c4.9599 0 8.9629 4.0041 8.9629 8.877 0 4.9599-4.003 8.9629-8.9629 8.9629h-22.014v-17.84zm0 27.41h24.277c4.8729 0 8.875 3.9162 8.875 8.7891 0 4.9599-4.0021 9.0508-8.875 9.0508h-24.277v-17.84z"
                            strokeWidth="2.319" />
                        </g>
                      </svg>
                    </div>
                  </Link>

                  <div className="-mr-2 flex items-center lg:hidden">
                    <Popover.Button className="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Open main menu</span>
                      <MenuIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
              </div>
              <div className="hidden lg:flex lg:space-x-10">
                {navigation.map((item) => (
                  <Link href={item.href} key={item.href}>
                    <a key={item.name} className="font-medium text-white hover:text-gray-900">
                      {item.name}
                    </a>
                  </Link>
                ))}
              </div>
              <div className="absolute right-16 lg:right-4">

                {
                  ChangeTheme()
                }
              </div>
            </nav>

          </div>

          <Transition
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden"
            >
              <div className="rounded-lg shadow-md bg-blue-900 ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="px-5 pt-4 flex items-center justify-between">
                  <Link
                    href="/"
                    passHref
                  >
                    <div>
                      <span className="sr-only">Bayz</span>
                      <svg
                        className="h-8 w-auto fill-white fill-white transition ease-out hover:scale-125 duration-30"
                        id="SVGRoot"
                        version="1.1"
                        viewBox="0 0 80 25"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g
                          transform="matrix(.61356 0 0 .61356 2.5628 26.102)"
                          fontStyle="shape-inside:url(#rect3359);white-space:pre"
                          aria-label="BAZY">
                          <path
                            transform="matrix(.43123 0 0 .43123 -4.1769 -42.541)"
                            d="m110.72 14.57c-2.0014 0-3.8282 1.1306-4.6113 3.0449l-26.627 62.303h10.703l20.449-47.684 20.188 47.684h10.703l-26.367-62.303c-0.78314-1.9143-2.4361-3.0449-4.4375-3.0449zm-95.805 0.95703c-2.7845 0-5.1328 2.2624-5.1328 5.0469v54.211c0 2.7845 2.3483 5.1328 5.1328 5.1328h28.717c10.181 0 18.447-8.3532 18.447-18.621 0-6.5262-3.3943-11.572-8.6152-14.27 4.0027-2.9585 6.4395-7.3967 6.4395-13.053 0-10.181-8.2673-18.447-18.535-18.447h-26.453zm145.14 0v9.5703h39.332l-39.332 46.814c-0.69613 0.87016-1.1309 1.9157-1.1309 3.0469 0 2.7845 2.1745 4.959 4.959 4.959h48.729v-9.5703h-38.721l39.33-46.814c0.69612-0.87016 1.0449-1.9146 1.0449-3.1328 0-2.6975-2.1756-4.873-4.873-4.873h-49.338zm70.744 0 26.104 43.855v20.535h9.5723v-20.535l26.105-43.855h-11.312l-19.578 33.24-19.58-33.24h-11.311zm-211.45 9.5703h22.014c4.9599 0 8.9629 4.0041 8.9629 8.877 0 4.9599-4.003 8.9629-8.9629 8.9629h-22.014v-17.84zm0 27.41h24.277c4.8729 0 8.875 3.9162 8.875 8.7891 0 4.9599-4.0021 9.0508-8.875 9.0508h-24.277v-17.84z"
                            strokeWidth="2.319" />
                        </g>
                      </svg>
                    </div>
                  </Link>
                  <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="px-2 pt-2 pb-3">
                  {navigation.map((item) => (
                    <Link
                      href={item.href}
                      key={item.href}
                      passHref
                    >
                      <a key={item.name} className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-900 hover:bg-blue-800">
                        {item.name}
                      </a>
                    </Link>
                  ))}
                </div>

              </div>
            </Popover.Panel>

          </Transition>

        </Popover>
      </div>
    </div>
  )
}