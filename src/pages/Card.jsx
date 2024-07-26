import React from 'react'

const Card = ({card}) => {
  return (
    <div className='px-[100px] mx-auto '>
      {card.length === 0 ? <h1 className='text-center'>Card is Empty</h1> : ""}
      {card.map((item) => {
        return (
          <div className='flex flex-wrap px-[50px] justify-center'>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-[#303C30] dark:border-gray-700">
            <a href="#">
                <img className="rounded-t-lg" src={item.thumbnail} alt={item.title} />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.category}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.title}</p>
                <button className="bg-[#A2B88E] rounded-lg hover:bg-[#303C30] inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-[#A2B88E] dark:hover:bg-[#355335]  dark:focus:ring-blue-800">
                    Delet to Card
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </button>
            </div>
        </div>
      </div>
        )
      }
    )}
    </div>
  )
}

export default Card