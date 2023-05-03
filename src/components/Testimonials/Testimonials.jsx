import React from 'react'
import Link from 'next/link'
const Testimonials = () => {
  return (
    <section id='testimonials' class="container text-gray-600 body-font">
  <div class="container md:px-5 py-24 mx-auto">
    <div className='flex items-center justify-center'>
    <h2 className=' fontXl'>Testimonials</h2>
    </div>
    <div class="flex flex-wrap -m-4">
      <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
        <div class="h-full text-center">
          <img alt="testimonial" class="w-36 h-36 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://dummyimage.com/302x302"/>
          <p class="leading-relaxed text-justify">I highly recommend the web developer I worked with. They were attentive, creative, and professional throughout the entire process. Their technical skills and attention to detail were exceptional, and they consistently exceeded my expectations. I am thrilled with the final result and grateful for their expertise and dedication.</p>
          <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <h2 class="text-gray-900 font-medium title-font tracking-wider text-2xl uppercase">Ashish Garg</h2>
          <p class="text-gray-500">Senior Prof. at GEU</p>
        </div>
      </div>
      <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
        <div class="h-full text-center">
          <img alt="testimonial" class="w-36 h-36 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://dummyimage.com/300x300"/>
          <p class="leading-relaxed text-justify">I highly recommend the web developer I worked with. They were attentive, creative, and professional throughout the entire process. Their technical skills and attention to detail were exceptional, and they consistently exceeded my expectations. I am thrilled with the final result and grateful for their expertise and dedication.</p>
          <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <h2 class="text-gray-900 font-medium title-font tracking-wider text-2xl uppercase">sanju gaira</h2>
          <p class="text-gray-500">Founder of Dose of Bhabhar</p>
        </div>
      </div>
      <div class="lg:w-1/3 lg:mb-0 p-4">
        <div class="h-full text-center">
          <img alt="testimonial" class="w-36 h-36 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://dummyimage.com/305x305"/>
          <p class="leading-relaxed text-justify">I highly recommend the web developer I worked with. They were attentive, creative, and professional throughout the entire process. Their technical skills and attention to detail were exceptional, and they consistently exceeded my expectations. I am thrilled with the final result and grateful for their expertise and dedication.</p>
          <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <h2 class="text-gray-900 font-medium title-font tracking-wider text-2xl">Dr. Satvik Vats</h2>
          <p class="text-gray-500">Prof. at GEHU</p>
        </div>
      </div>
    </div>
  </div>
 <div className='hidden md:block'>
 <div className='absolute bottom-0 right-0'>
    <div className=''>
    <Link href="#home" className="" ><p className='uppercase tracking-wider border rounded-full px-3 py-2 cursor-pointer gap-2 flex items-center justify-center'><img className='w-12 rounded-full' src="https://firebasestorage.googleapis.com/v0/b/portfolio-e0b16.appspot.com/o/upgrade.gif?alt=media&token=6cfa1874-8610-4cc4-8d3e-d1241c397add"/> Scroll to top</p></Link>
    </div>
  </div>
 </div>
</section>
  )
}

export default Testimonials