import React from 'react'
import './home.css'
import Navbar from '../components/shared/Navbar'
import Header from '../components/Header'
import Special from '../components/Special'
import Service from '../components/Service'
import NewFoods from '../components/NewFoods'
import Service2 from '../components/Service2'
import TopRatedFood from '../components/TopRatedFood'
import RecommendateFoods from '../components/RecommendateFoods'
const Home = () => {
  return (
    <div className='home'>

      <Header />
      <RecommendateFoods />
      <Special />
      <Service />
      <NewFoods />
      <Service2 />
      <TopRatedFood />
    </div>
  )
}

export default Home