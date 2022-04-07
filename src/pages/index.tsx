import type { GetStaticProps } from 'next'

import { Courses, Games, Highlights, News, Partners } from '../components/home'
import { coursesHighlightsData, gamesData, highlightsData, newsData, partnersData } from '../data'

import { HighlightModel } from '../models/HighlightModel'
import { CourseModel } from '../models/CourseModel'
import { NewsModel } from '../models/NewsModel'
import { PartnerModel } from '../models/PartnerModel'
import { GameModel } from '../models/GameModel'
import Head from 'next/head'

type HomeProps = {
  highlights: HighlightModel[];
  coursesHighlights: CourseModel[];
  news: NewsModel[];
  partners: PartnerModel[];
  games: GameModel[];
}

const Home = ({ highlights, news, partners, games, coursesHighlights }: HomeProps) => {


  return (
    <>
      <Head>
        <title>Início - Portal BAZY</title>
        <meta
          name="description"
          content="Meta description for the home page"
        />
      </Head>
      <div className="BackgroundTheme">
        <div className="relative pt-5 pb-20 px-4 max-w-screen-2xl mx-auto">
          {/* Banner */}
          <div className="h-[160px] mt-[20px]">
            <div
              className="h-[140px] bg-grey-dark bg-no-repeat bg-center bg-cover rounded-md
              bg-[url('https://bayz.gg/wp-content/themes/soma/img/360x140b.png')]
              xs:bg-[url('https://bayz.gg/wp-content/themes/soma/img/530x140b.png')]
              md:bg-[url('https://bayz.gg/wp-content/themes/soma/img/720x140b.png')]
              lg:bg-[url('https://bayz.gg/wp-content/themes/soma/img/980x140b.png')]
              xl:bg-[url('https://bayz.gg/wp-content/themes/soma/img/1100x140b.png')]
              2xl:bg-[url('https://bayz.gg/wp-content/themes/soma/img/1470x140b.png')]
              "
            >
            </div>
          </div>

          <div className="xl:grid  xl:grid-cols-3 xl:gap-5">
            <Highlights highlights={highlights} />
            <Courses courses={coursesHighlights} />
          </div>
          <News news={news} />
          <Partners partners={partners} />
          <Games games={games} />
        </div>
      </div>
    </>
  )
}


export const getStaticProps: GetStaticProps = async () => {
  const highlightsD: HighlightModel[] = highlightsData
  const coursesHighlightsD: CourseModel[] = coursesHighlightsData
  const newsD: NewsModel[] = newsData
  const partnersD: PartnerModel[] = partnersData
  const games: GameModel[] = gamesData

  const news = newsD.slice(0, 5)
  const highlights = highlightsD.slice(0, 3)
  const partners = partnersD.slice(0, 5)
  const coursesHighlights = coursesHighlightsD.slice(0, 2)


  return {
    props: {
      highlights,
      coursesHighlights,
      news,
      partners,
      games
    }
  }
}

export default Home
