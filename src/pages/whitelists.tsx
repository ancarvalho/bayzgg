import { ViewGridIcon, ViewListIcon } from "@heroicons/react/outline"
import { GetStaticProps } from "next"
import Head from "next/head"
import { useState } from "react"
import { DefaultCards } from "../components/shared/DefaultCards"
import { Table } from "../components/shared/Table"
import { whitelistsData } from "../data"
import { DefaultModel } from "../models/DefaultModel"

type WhitelistsProps = {
  whitelists: DefaultModel[]
}

const Whitelists = ({ whitelists }: WhitelistsProps) => {

  const [isList, setIsList] = useState<boolean>(false)

  const ChangeViewMode = () => {

    if (isList === false) {
      return <ViewListIcon
        className="w-5 h-5 SvgTheme"
        role="button"
        onClick={() => setIsList(true)}
      />
    } else {
      return <ViewGridIcon
        className="w-5 h-5 SvgTheme"
        role="button"
        onClick={() => setIsList(false)}
      />
    }
  }


  return (
    <>
     <Head>
        <title>Whitelists - Portal BAZY</title>
        <meta
          name="description"
          content="Meta description for the Whitelists page"
        />
      </Head>
      <div className="BackgroundTheme">

        <div className="py-4 max-w-[1136px] mx-auto">
          <div className="px-4">
            <div className="flex justify-between items-center">

              <div className="flex flex-rows items-center py-4">
                <div className="bg-red-600 rounded-md p-1">

                  <svg
                    className="h-8 w-auto m-2 fill-white"
                    width="765.6"
                    height="875"
                    version="1.1"
                    viewBox="0 0 765.5 875"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m710.9 0h-656.2c-30.2 0-54.7 24.5-54.7 54.7v765.6c0 30.3 24.5 54.7 54.7 54.7h656.2c30.2 0 54.7-24.5 54.7-54.7v-765.6c0-30.2-24.5-54.7-54.7-54.7zm-188.2 89.6h158.5v55.1h-158.5zm-440.9 0h158.5v55.1h-158.5zm621.2 724.7h-640.4v-587h640.3v587zm-552.1-434.1h468.1c15.3 0 27.8-12.6 27.8-28.2s-12.4-28.2-27.8-28.2h-468.1c-15.3 0-27.7 12.6-27.7 28.2s12.3 28.2 27.7 28.2zm0 116.7h468.1c15.3 0 27.8-12.6 27.8-28.2s-12.4-28.2-27.8-28.2h-468.1c-15.3 0-27.7 12.6-27.7 28.2s12.3 28.2 27.7 28.2zm0 116.6h468.1c15.3 0 27.8-12.6 27.8-28.2s-12.4-28.2-27.8-28.2h-468.1c-15.3 0-27.7 12.6-27.7 28.2s12.3 28.2 27.7 28.2zm0 116.8h468.1c15.3 0 27.8-12.6 27.8-28.2s-12.4-28.2-27.8-28.2h-468.1c-15.3 0-27.7 12.6-27.7 28.2s12.3 28.2 27.7 28.2z" />
                  </svg>
                </div>
                <p className="text-xl text-white font-bold ml-2 bg-red-600 rounded-md p-2">Whitelists</p>
              </div>
              <div className="mr-2 mt-4 ChangeViewBg w-fit p-1">
                {ChangeViewMode()}
              </div>
            </div>


            {
              isList ? <Table items={whitelists} /> : <DefaultCards cards={whitelists} />
            }


          </div>
        </div>

      </div>

    </>
  )

}

export const getStaticProps: GetStaticProps = async () => {
  const whitelists: DefaultModel[] = whitelistsData


  return {
    props: {
      whitelists
    }
  }
}

export default Whitelists