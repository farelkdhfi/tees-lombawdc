import React from 'react'
import LogoCarousel from '../homepages/LogoCarousel'
import DealsMonth from '../homepages/DealsMonth'
import RecentlyUploaded from '../homepages/RecentlyUploaded'
import CustomerSay from '../homepages/CustomerSay'
import Hero2 from '../homepages/Hero2'
import DiscountBanner from '../components/DiscountBanner'


const HomePage = () => {
  return (
    <>
        <Hero2 />
        <LogoCarousel />
        <DealsMonth />
        <div className='md:hidden'>
        <DiscountBanner />
        </div>
        <RecentlyUploaded />
        <div className='hidden md:block'>
        <CustomerSay />
        </div>
    </>
  )
}

export default HomePage