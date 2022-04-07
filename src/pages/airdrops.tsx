import { GetStaticProps } from "next"
import { useState } from "react"
import { DefaultCards } from "../components/shared/DefaultCards"
import { Table } from "../components/shared/Table"
import { airdropsData } from "../data"
import { DefaultModel } from "../models/DefaultModel"
import { ViewListIcon, ViewGridIcon } from '@heroicons/react/outline';
import Head from "next/head"


type AirdropsProps = {
  airdrops: DefaultModel[]
}

const Airdrops = ({ airdrops }: AirdropsProps) => {

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
        <title>Airdrops - Portal BAZY</title>
        <meta
          name="description"
          content="Meta description for the Airdrops page"
        />
      </Head>
      <div className="BackgroundTheme">

        <div className="px-4 py-4 max-w-[1136px] mx-auto">
          <div className="flex justify-between items-center">
            <div className="flex flex-rows items-center py-4 ">
              <div className="AirdropBgTheme rounded-md p-1">

                <svg
                  className="h-8 w-auto SvgTheme m-2"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"

                  viewBox="0 0 1000 1000"
                  enableBackground="new 0 0 1000 1000"
                  xmlSpace="preserve">

                  <g>
                    <g transform="translate(0.000000,511.000000) scale(0.100000,-0.100000)">
                      <path d="M4789.7,4976.2c-488-161.3-855.5-922.9-1065.8-2203.1c-79.6-490-153.1-1245.5-153.1-1590.5v-149h632.9h632.9V145.4v-888.2h214.4h214.4v888.2v888.2h647.2h645.2l-12.2,343c-8.2,187.8-32.7,520.6-55.1,739.1c-118.4,1153.6-334.9,1945.8-663.6,2441.9c-128.6,191.9-255.2,312.4-406.3,385.9C5271.6,5015,4959.2,5033.4,4789.7,4976.2z" />
                      <path d="M3744.3,4761.8c-914.7-377.7-1651.8-1074-2113.2-1996.8c-216.4-436.9-324.6-814.7-369.6-1280.2c-20.4-210.3-18.4-249.1,10.2-310.4c57.2-120.5,85.8-128.6,492.1-140.9l369.6-10.2l841.2-888.2l841.2-888.2l-326.7-10.2c-322.6-10.2-326.7-10.2-381.8-67.4l-57.2-55.1l-6.1-1858c-6.1-2043.8-10.2-1943.8,118.4-2011.1c89.8-47,3687.4-47,3777.2,0c130.7,67.4,122.5-63.3,122.5,1976.4c0,1978.5,2,1939.7-96,1986.6c-20.4,10.2-171.5,22.5-336.9,28.6l-300.1,10.2l867.8,888.2l869.8,888.2l267.5,10.2c298.1,12.3,341,26.5,394.1,140.9c28.6,61.3,30.6,100,10.2,314.4c-42.9,457.4-145,812.6-357.3,1249.6C7966.7,3593.9,7292.9,4269.8,6459.9,4672c-112.3,53.1-210.3,98-220.5,98c-8.2,0,10.2-38.8,40.8-85.8c145-230.7,322.6-698.3,430.8-1139.3c159.3-641.1,240.9-1253.6,302.2-2290.9l12.3-218.5l210.3-6.1l212.3-6.1l-869.8-888.2c-716.6-733-877.9-890.2-929-894.3l-61.3-6.1l44.9-32.7c98-69.4,102.1-104.1,102.1-1078c0-976-4.1-1008.6-104.1-1080.1c-40.8-28.6-122.5-32.7-586-32.7h-539l-59.2,59.2l-59.2,59.2v994.4v994.3l59.2,57.2c53.1,55.1,55.1,59.2,18.4,65.3c-22.5,4.1-420.6,406.3-882,894.3l-843.3,888.2l185.8,10.2l185.8,10.2l14.3,347.1c42.9,1049.5,226.6,2113.2,475.7,2768.6c75.5,198,234.8,524.7,300.1,614.6c20.4,32.7,32.7,57.2,22.5,57.2C3915.8,4829.2,3834.2,4798.6,3744.3,4761.8z" />
                    </g>
                  </g>
                </svg>
              </div>

              <p className="text-xl CardTextTheme font-bold ml-2 AirdropBgTheme rounded-md p-2">
                Airdrops
              </p>

            </div>
            <div className="mr-2 mt-4 ChangeViewBg w-fit p-1">

              {ChangeViewMode()}
            </div>
          </div>

          {
            isList ? <Table items={airdrops} /> : <DefaultCards cards={airdrops} />
          }

        </div>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const airdrops: DefaultModel[] = airdropsData


  return {
    props: {
      airdrops
    }
  }
}

export default Airdrops