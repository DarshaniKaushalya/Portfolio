import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { fadeInUp, stagger } from '../animations'
import ProjectCards from '../components/ProjectCards'
import ProjectNavbar from '../components/ProjectNavbar'
import { projects as projectsData } from '../data'
import { Category } from '../type'


//renaming ->project as projectData
const Projects = () => {
  
   const[projects,setProjects] = useState(projectsData);
   const[active,setActive] = useState("all");

   const[showDetail,setShowDetail] = useState<number | null>(null);

   
   const handlerFliterCategory = (category:Category | "all")=>{
       if(category === "all"){
           setProjects(projectsData);
           setActive(category)
           return;
       }

const newArray = projectsData.filter((project)=>project.category.includes(category));
 setProjects(newArray);
 setActive(category);
   };
    
    return (
        <motion.div 
                className="px-5 py-2 overflow-y-scroll "
                style={{height:"65vh"}} 
                // variants={routeAnimation} 
                initial="initial" 
                animate="animate"
                exit="exit"
                
                >
      
         <ProjectNavbar handlerFliterCategory={handlerFliterCategory}   active={active}/> 

          <motion.div className="relative grid grid-cols-12 gap-4 my-3"
             variants={stagger} 
             initial="initial" 
             animate="animate"
          >
              {
                  projects.map((project) =>(
                      <motion.div 
                          className="col-span-12 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200"  
                          variants={fadeInUp}
                          key={project.name}
                        
                          >
                <ProjectCards project={project} />
                          
                      </motion.div>
                  ))
              }
          </motion.div>
        </motion.div>

     
    )
}

export default Projects
