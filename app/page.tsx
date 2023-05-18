import Image from 'next/image'


export default function Home() {
  return (
    <main className="flex min-h-screen  items-center justify-center p-4 bg-slate-200">
     <div className='flex flex-col sm:flex-row  w-[40rem] '>
      <div className='basis-1/2 flex flex-col p-4 rounded-2xl bg-gradient-to-b from-violet-500 to-indigo-600 shadow-xl text-center items-center'>
        <div className='text-indigo-200 text-2xl mb-4'>Your result</div>
        
            <div className='bg-gradient-to-t from-violet-500 to-indigo-600 p-10 rounded-full my-4'>
              <div className='text-6xl'>76</div>
              <div className='text-xl text-indigo-200 mt-2'>of 100</div>
            </div>
            
          
         
        <div className='text-3xl mb-4'>Great</div>
        <div className='block mb-4 ps-2 text-lg'>You scored higher than 65% of the people who have taken these tests.</div>
      </div>


      <div className='basis-1/2 flex flex-col p-4 rounded-2xl bg-slate-100 shadow-xl text-black font-bold'>
        <div className='self-start p-3 text-2xl'>Summary</div>
        <div className=''>
          <div className='bg-rose-100 flex flex-row justify-between p-5 m-3 rounded-3xl'>
            <div className='text-rose-600 flex flex-row'>
              <img src='https://pavlonatorpl.github.io/assets/images/icon-reaction.svg'/>
              Reaction</div>
            <div className='flex flex-row'>
              <div>81</div>
              <div className='text-slate-600'>/100</div>
            </div>
          </div>
          <div className='bg-yellow-50 flex flex-row justify-between p-5 m-3 rounded-3xl'>
            <div className='text-amber-400 flex flex-row'>
              <img src='https://pavlonatorpl.github.io/assets/images/icon-memory.svg'/>
              Memory</div>
            <div className='flex flex-row'>
              <div>92</div>
              <div className='text-slate-600'>/100</div>
            </div>
          </div>
          <div className='bg-emerald-50 flex flex-row justify-between p-5 m-3 rounded-3xl'>
            <div className='text-emerald-500 flex flex-row'>
              <img src='https://pavlonatorpl.github.io/assets/images/icon-verbal.svg'/>
              Verbal</div>
            <div className='flex flex-row'>
              <div>61</div>
              <div className='text-slate-600'>/100</div>
            </div>
          </div>
          <div className='bg-violet-100 flex flex-row justify-between p-5 m-3 rounded-3xl'>
            <div className='text-blue-700 flex flex-row'>
              <img src='https://pavlonatorpl.github.io/assets/images/icon-visual.svg'/>
              Visual</div>
            <div className='flex flex-row'>
              <div>72</div>
              <div className='text-slate-600'>/100</div>
            </div>
          </div>
        </div>
        <div className='self-center text-2xl bg-slate-700 text-slate-100 px-10 py-4 rounded-full font-light hover:bg-gradient-to-t from-violet-500 to-indigo-600 transition-all duration-800'>Continue</div>
      </div>
     </div>
</main>
  )
}
