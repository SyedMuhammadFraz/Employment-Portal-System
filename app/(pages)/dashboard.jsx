import React from 'react'
import HomepageProfile from './components/homepageProfile'
import Navbar from '@/components/navbar'
import PublishJob from './components/publishJob'
import PublishJobCard from './components/publishJobCard'
import AlertBar from './components/alertBar';
import ChatSection from './components/chatSection';

const dashboard = () => {
  return (
    <section className=" p-10 bg-[#F3F2EF]  w-full h-full ">

    <div className='flex justify-between pt-8'>

      <section className='fw-[225px] ml-[90px] '>
        <HomepageProfile />
        <AlertBar  />
      </section>

      <section className=' w-[543px] '>

        <PublishJob />
        <div className='mt-4'>
          {texts.map((text, index) => (
            <PublishJobCard key={index} username='Username' text={text} />
          ))}
        </div>
      </section>

      <section className=' w-[325px] mr-[60px] '>
        <ChatSection/>
      </section>

    </div>

  </section>  )
}

export default dashboard