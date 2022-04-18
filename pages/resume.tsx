import React from 'react'
import Bar from '../components/Bar'
import { languages, tools } from '../data'

const resume = () => {
  return (
    <div  className='px-4 py-2'>
    {/* //  education */}
    <div className='grid gap-6 md:grid-cols-2 '>

<div>
    <h5  className='my-3 text-2xl font-bold'>Education</h5>
    <div>
        <h5 className='my-2 text-xl font-bold'>
          Software Engineering</h5>
        <p className='font-semibold'>NSBM green University</p>
        <p className='my-3 text-justify'>I am currently seeking a job as a Software Engineer with the long-term aspiration of reaching the highest of ranks possible within the industry. Eager to learn and overcome challenges,
        I have a genuine interest in Software Engineering.</p>
    </div>
</div>

<div>
    <h5 className='my-3 text-2xl font-bold'>Experiences</h5>
    <div>
        <h5 className='my-2 text-xl font-bold'>
          BSc(Hons)</h5>
        <p className='font-semibold'>2018-2021</p>
        <p className='my-3 text-justify'> Eager to learn and overcome challenges,I have a genuine interest in Software Engineering.</p>
    </div>
</div>
</div>
{/* //Languages & experiences */}

<div className="grid gap-6 md:grid-cols-2">
        <div>
  
       <h5 className="my-3 text-2xl font-bold">Languages & Frameworks</h5>
       <div className="my-2">
           {languages.map(language=>(
           <Bar data={language} key={language.name}/>
           ))}
           </div> 
        </div>

        <div>
  
  <h5 className="my-3 text-2xl font-bold">Tools and Software</h5>
  <div className="my-2">
      {tools.map(tool=>(
      <Bar data={tool} key={tool.name}/>
      ))}
      </div> 
   </div>


        
        </div>


      
    </div>

  )
}

export default resume