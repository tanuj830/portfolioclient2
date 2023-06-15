import React,{useEffect} from 'react'
import axios from 'axios'
import Link from 'next/link'
import { AiOutlineHeart } from 'react-icons/ai'

const FeatureBlog = () => {
  const months=[
    {
      id:"01",
      month:"Jan"
    },
    {
      id:"02",
      month:"Feb"
    },
    {
      id:"03",
      month:"Mar"
    },
    {
      id:"04",
      month:"Apr"
    },
    {
      id:"05",
      month:"May"
    },
    {
      id:"06",
      month:"Jun"
    },
    {
      id:"07",
      month:"Jul"
    },
    {
      id:"08",
      month:"Aug"
    },
    {
      id:"09",
      month:"Sept"
    },
    {
      id:"10",
      month:"Oct"
    },
    {
      id:"11",
      month:"Nov"
    },
    {
      id:"12",
      month:"Dec"
    },
  ]

  const [blogs, setBlogs] = React.useState([])
  const [count, setCount] = React.useState(3)
  
  useEffect(() => {
    axios.get("https://portfolio-38ir.onrender.com/blog").then(res=>setBlogs(res.data)).catch(err=>console.log(err))
  }, [])

  return (
    <section class="container text-gray-600 body-font">
    <div class=" md:px-5 py-24 mx-auto">
      <div class="flex flex-col">
       <div className='flex items-center justify-center'><h2 className='fontXl'>Featuring Most Viewed Blogs</h2></div>
        {/* <div class="flex flex-wrap sm:flex-row flex-col md:py-6 mb-12"> */}
          {/* <h1 class="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0"></h1> */}
          {/* <p class="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">Recommending the most viewed blogs by users, have a look</p> */}
        {/* </div> */}
      </div>
      <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
      {
       blogs.length == 0 ?
       <div className='w-full px-8'>
<div className="w-100 flex flex-column px-4 py-10  animate-pulse" style={{border:"solid 2px gainsboro", borderRadius:15}}>
      <div className="bg-slate-200 animate-pulse h-40 w-90 rounded-xl"></div>
      <div className="bg-slate-200 animate-pulse h-7 w-40 rounded-full mt-4"></div>
      <div className="bg-slate-200 animate-pulse h-8 w-100 rounded-full mt-5"></div>
      <div className="bg-slate-200 animate-pulse h-8 w-50 rounded-full mt-8"></div>
      <div className='flex justify-between items-center'>
      <div className="bg-slate-200 animate-pulse h-9 w-36 rounded-full mt-3"></div>
      <div className='flex gap-3 items-center'>
      <div className="bg-slate-200 animate-pulse h-9 w-14 rounded-full mt-3"></div>
      <div className="bg-slate-200 animate-pulse h-9 w-14 rounded-full mt-3"></div>
      </div>
      </div>
  </div>
</div>
       :<div className='Grid'>
        {
           blogs.map((p,ind)=>(
            <>
            {
              ind < count ? <Link className="" href={"/blog/" + p._id}>
              <div  className="   ">
                
               
              <div className="h-full  overflow-hidden  transition-all duration-700 cursor-pointer">
                <div className='relative'>
                <img className="lg:h-64 md:h-44 w-full  object-cover  rounded-3xl  " src="https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=600" alt="blog"/>
                <div className='absolute top-2 left-2 px-1'>
                <div className="w-12  flex-shrink-0 bg-white rounded-xl py-2 px-2  flex flex-col  text-center leading-none">
              {
                <div className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200 text-[12px]">{months[Math.floor( p.Date.slice(5, 7))].month}</div>
                }
               <div className="font-medium text-lg text-gray-800 title-font leading-none">{p.Date.slice(8, 10)}</div>
            </div>
                </div>
                </div>
                <div className="px-1 py-3">
                  <h2 className="tracking-widest text-sm title-font font-medium text-gray-400 mb-1 uppercase">TECH</h2>
                  <h1 className="title-font text-3xl font-medium text-gray-900 mb-3">{p.title}</h1>
                  <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                  <div className="flex items-center flex-wrap ">
                    <p className='text-xl text-gray-400'>8 minutes read</p>
                    <div className="text-gray-400 mr-3 inline-flex items-center border-r-2  lg:ml-auto md:ml-0 ml-auto leading-none text-xl pr-3 py-1 border-gray-300">
                      <svg className="w-8 h-8 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>{Math.floor(Math.random()*10)/2}K
                    </div>
                    {/* <div className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg className="w-8 h-8 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>6
                    </div> */}
                    <div className="text-gray-400 inline-flex items-center leading-none gap-1 text-xl">
                     <AiOutlineHeart size="2rem"/>{ Math.floor(Math.random()*10)/2 }K
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </Link>:null
            }
            </>
           ))
        }
        </div>
}
      </div>
    </div>
  </section>
  )
}

export default FeatureBlog