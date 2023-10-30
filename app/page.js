"use client"
import React, { useState, useEffect } from 'react';
import HomepageProfile from '@/components/homepageProfile'
import Navbar from '@/components/navbar'
import PublishJob from '@/components/publishJob'
import PublishJobCard from '@/components/publishJobCard'
import AlertBar from '@/components/alertBar';
import ChatSection from '@/components/chatSection';
import ChatPage from './(pages)/chat/page';


export default function Home() {

  const [productNames, setProductNames] = useState([]);

  // Fetch product names from the API
  useEffect(() => {
    const fetchProductNames = async () => {
      try {
        const response = await fetch('http://localhost:3001/blah/product');
        const data = await response.json();
        console.log(data)
        setProductNames(data.map(product => product.name));
      } catch (error) {
        console.error('Error fetching product names:', error);
      }
    };
    fetchProductNames();
  }, []);
  
  const texts = Array(10).fill('Lorem ipsum dolor sit amet, consectetur adipiscing dkhddkjch scjackjhcx sjahdkjhdakjc sjchadhkcjhakjcn cajshie eduywuqd wkjqwid dhque wjjw dkcjoijc Lorem ipsum dolor sit amet, consectetur adipiscing dkhddkjch scjackjhcx sjahdkjhdakjc sjchadhkcjhakjcn cajshie eduywuqd wkjqwid dhque wjjw dkcjoijc');

  return (
    <>
      <Navbar className="mt-0" />

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

      </section>
    </>
  )
}
