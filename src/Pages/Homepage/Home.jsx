import React from 'react'
import Brands from '../../Components/Brands/Brands'
import Carousel from '../../Components/Carousel/Carousel'
import DayDeals from '../../Components/DayDeals/DayDeals'
import Categories from '../../Components/Categories/Categories'
import HealthArticles from '../../Components/HealthArticles/HealthArticles'
import LabTests from '../../Components/LabTests/LabTests'
import Offers from '../../Components/Offers/Offers'
import Reviews from '../../Components/Reviews/Reviews'

const Home = () => {
  return (
    <div style={{width:"95%", margin:"auto"}}>
        <Offers/>
        <Carousel/>
        <Categories/>
        <LabTests/>
        <Brands/>
        <DayDeals/>
        <HealthArticles/>
        <Reviews/>
    </div>
  )
}

export default Home