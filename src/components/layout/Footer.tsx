const navigation = {
  solutions: [
    { name: 'COMEÇANDO DO ZERO', href: '#' },
    { name: 'BÁSICO DE FINANÇAS', href: '#' },
    { name: 'TUDO SOBRE AXIE INFINITY', href: '#' },

  ],

  company: [
    { name: 'AXIE INFINITY', href: '#' },
    { name: 'THETAN ARENA', href: '#' },
    { name: 'GUNFIRE HERO', href: '#' },

  ],

  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },

  ],
}

export function Footer() {
  return (
    <footer className="FooterBgTheme" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="group flex flex-col justify-center pt-4 overflow-hidden">

        <svg
          className="h-8 w-auto sm:h-10 SvgTheme group-hover:fill-[url(#grad1)] transition ease-out group-hover:scale-125 duration-30"
          id="SVGRoot"
          version="1.1"
          viewBox="0 0 80 25"
          xmlns="http://www.w3.org/2000/svg"
        >
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%" gradientTransform="rotate(90)">
            <stop offset="50%" style={{ stopColor: "#0057b7", stopOpacity: "1" }} />
            <stop offset="1%" style={{ stopColor: "#ffd700", stopOpacity: "1" }} />

            <stop offset="100%" style={{ stopColor: "#ffd700", stopOpacity: "1" }} />
          </linearGradient>
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
        <p className="invisible group-hover:visible font-semibold text-xl text-center text-blue-600">
          #freeukraine
        </p>
      </div>
      <div className="max-w-7xl mx-auto max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:py-8 lg:px-8">
        <div className="flex justify-center">
          <div className="grid grid-cols-2 gap-8 md:gap-20 lg:gap-30 xl:gap-40 ">

            <div>
              <h3 className="text-sm font-semibold CardTextTheme tracking-wider uppercase">Como começar com zero risco</h3>
              <ul role="list" className="mt-4 space-y-4">
                {navigation.solutions.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-base CardTextThemeAlternative">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold CardTextTheme tracking-wider uppercase">Nossos portais</h3>
              <ul role="list" className="mt-4 space-y-4">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-base CardTextThemeAlternative">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>
        <div className="mt-8 border-t border-gray-700 dark:border-gray-200 pt-8 flex items-center justify-between">
          <div className="flex space-x-6 md:order-2 order-1">
            {navigation.social.map((item) => (
              <a key={item.name} href={item.href} className="CardTextThemeAlternative">
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
          <p className="text-base CardTextTheme mt-0 order-2 md:order-1">
            &copy; {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}