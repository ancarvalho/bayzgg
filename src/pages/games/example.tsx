import { ExternalLinkIcon, BookOpenIcon, GlobeAltIcon, NewspaperIcon } from "@heroicons/react/outline"
import { CourseCard } from "../../components/courses/CourseCard"

const GameExample = () => {


  return (
    <>
      <div className="BackgroundTheme">

        <div className="max-w-screen-lg mx-auto p-4">

          <div className="">

            <div className="flex gap-2 w-full ">
              {/* Logo + Button */}
              <div className="">
                <img
                  className="rounded-md "
                  src="https://dashboard-assets.dappradar.com/document/1549/thesandbox-dapp-games-eth-logo-166x166_bce1f6d54d7f38272dcd127f24e5cc82.png"
                  alt=""
                />
                <div className="hidden flex p-4 gap-1 btn bg-amber-500 rounded-md w-fit ">
                  <ExternalLinkIcon
                    className="h-5"
                  />
                  <div className="text-md font-semibold">
                    Open DAPP
                  </div>
                </div>
              </div>
              {/* Name + Desc + Tags */}
              <div className="">
                <div className="text-xl font-bold">
                  Splinterlands
                </div>
                <div className="pb-2">
                  Splinterlands is a collectible trading card game
                </div>
                <div className="flex gap-2">
                  <div className="p-1 CardBgTheme rounded-md w-fit">
                    NFT
                  </div>
                  <div className="p-1 CardBgTheme rounded-md w-fit">
                    Card Game
                  </div>
                </div>


                {/* Social Media + Whitepaper */}
                <div className="hidden flex-row pt-2 gap-2 mt-2 mx-2 xs:flex items-center justify-start">
                  <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <abbr title="Whitepaper">

                    <BookOpenIcon
                      className="w-6 h-6"
                    />
                  </abbr>

                </div>
              </div>
            </div>
            {/* <div className="h-[180px]  w-full md:w-1/2">
            </div> */}
          </div>
          {/* Social Media + Whitepaper */}
          <div className="flex xs:hidden flex-row gap-2 mt-2 mx-2 lg:mx-0 items-center justify-center">
            <abbr title="Website">
              <GlobeAltIcon
                className="w-6 h-6"
              />
            </abbr>
            <abbr title="Whitepaper">
              <BookOpenIcon
                className="w-6 h-6"
              />
            </abbr>
            <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
              <path
                fillRule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clipRule="evenodd"
              />
            </svg>
            <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
              <path
                fillRule="evenodd"
                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                clipRule="evenodd"
              />
            </svg>


          </div>

          <div className="">

            <div className="flex items-center font-bold text-xl pt-4">
              <NewspaperIcon
                className="h-5 w-5 mr-1"
              />
              Ultimas Postagens

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-[8px] gap-4">
              {/* Card */}

              <CourseCard card={{
                href: "",
                image_url: "https://bayz.gg/wp-content/uploads/2022/03/Thetan-Arena-torneio-1024x536.jpg",
                title: "Começa hoje mais um torneio com recompensas em $gTHG",
                description: "",
                tag: "Thetan Arena",
                type: ""
              }} />

              <CourseCard card={{
                href: "",
                image_url: "https://bayz.gg/wp-content/uploads/2022/03/Thetan-Arena-torneio-1024x536.jpg",
                title: "Começa hoje mais um torneio com recompensas em $gTHG",
                description: "",
                tag: "Thetan Arena",
                type: ""
              }} />

              <CourseCard card={{
                href: "",
                image_url: "https://bayz.gg/wp-content/uploads/2022/03/Thetan-Arena-torneio-1024x536.jpg",
                title: "Começa hoje mais um torneio com recompensas em $gTHG",
                description: "",
                tag: "Thetan Arena",
                type: ""
              }} />



            </div>
          </div>

        </div>
      </div>

    </>
  )

}

export default GameExample