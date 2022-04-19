import { motion } from 'framer-motion'
import React from 'react'
import { fadeInUp, routeAnimation, stagger } from '../animations'
import ServiceCard from '../components/ServiceCard'
import { services } from '../data'

const index = ({ endpoint }) => {
  console.log(endpoint)
  return (
    <motion.div
      className="flex flex-col flex-grow px-6 pt-1"
      variants={routeAnimation}
    >
      <h5 className="my-3 font-medium text-justify">
        I am a highly motivated and hardworking individual currently followed
        the PLYMOUTH BSc (HONS) Software Engineering Degree in NSBM Green
        University Town; Final year completed with a First-Class Honors & hope
        to graduate at the end of 2021. Having a practical approach to
        problem-solving, and a great eye for detail, I am currently seeking an
        Job opportunity as a Software Engineer with the long-term aspiration of
        reaching the highest of ranks possible within the industry.
      </h5>

      <div
        className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100"
        style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}
      >
        <h6 className="flex-grow my-3 text-xl font-bold tracking-wide">
          What I offer
        </h6>

        {/* //child animation as slow than earliest one */}
        <motion.div
          className="grid gap-6 lg:grid-cols-2"
          variants={stagger}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {services.map((service) => (
            <motion.div
              variants={fadeInUp}
              className="bg-gray-200 rounded-lg dark:bg-dark-200 lg:col-span-1"
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}
export default index
