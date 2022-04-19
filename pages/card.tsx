import React from 'react'

const card = () => {
  return (
    <div className="container px-4 py-24 mx-auto">
      <header className="mb-16 text-center">
        <h1 className="mb-4 text-5xl">My Plans</h1>
        <p className="leading-normal text-grey-dark md:w-1/2 md:mx-auto">
          Follow you can see three types of plans that I am offering.Just click
          & hire me.{' '}
        </p>
      </header>

      <div className="lg:flex lg:items-center lg:-mx-2">
        <div className="mb-4 lg:mb-0 lg:w-1/3 lg:px-2 ">
          <div className="p-10 text-center rounded bg-lime-300 border-grey-light bg-gradient-to-r from-lime-500 to to-lime-300 ">
            <h2 className="mb-4 text-lg font-semibold">Basic</h2>
            <div className="mb-6">
              <span className="block pb-2 text-5xl">$29</span>
              <span className="text-sm text-grey">Basic items contains</span>
            </div>
            <ul className="mb-6 leading-loose text-grey list-reset">
              <li>Website Development</li>
              <li>1 page</li>
              <li>responsive</li>
              <li>5 revisions</li>
              <li>Ontime delivery</li>
            </ul>
            <a
              className="inline-block w-full p-3 text-sm font-bold tracking-wide no-underline uppercase rounded bg-lime-600 border-red text-red hover:bg-lime-900 hover:text-lime-50"
              href="#"
            >
              Get started
            </a>
          </div>
        </div>

        <div className="mb-4 lg:mb-0 lg:w-1/3 lg:px-2 animate-pulse">
          <div className="p-10 text-center rounded bg-lime-400 border-grey-light lg:py-16 lg:shadow-lg bg-gradient-to-r from-lime-500 to-lime-300">
            <h2 className="mb-4 text-lg font-semibold">Premium</h2>
            <div className="mb-6">
              <span className="block pb-2 text-5xl">$79</span>
              <span className="text-sm text-grey">Premium items contains</span>
            </div>
            <ul className="mb-6 leading-loose text-grey-dark list-reset">
              <li>Website Development</li>
              <li>10 page</li>
              <li>responsive</li>
              <li>unlimited revisions</li>
              <li>Ontime delivery</li>
            </ul>
            <a
              className="inline-block w-full p-3 text-sm font-bold tracking-wide no-underline uppercase rounded bg-lime-600 border-red text-red lg:border-none lg:bg-red lg:hover:bg-red-dark lg:text-white hover:bg-white hover:text-lime-900"
              href="#"
            >
              Get started
            </a>
          </div>
        </div>

        <div className="mb-4 lg:mb-0 lg:w-1/3 lg:px-2 ">
          <div className="p-10 text-center rounded bg-lime-300 border-grey-light bg-gradient-to-r from-lime-500 to-lime-300">
            <h2 className="mb-4 text-lg font-semibold">Standarded</h2>
            <div className="mb-6">
              <span className="block pb-2 text-5xl">$49</span>
              <span className="text-sm text-grey">
                Standared items contains
              </span>
            </div>
            <ul className="mb-6 leading-loose text-grey list-reset">
              <li>Website Development</li>
              <li>5 page</li>
              <li>responsive</li>
              <li>10 revisions</li>
              <li>Ontime delivery</li>
            </ul>
            <a
              className="inline-block w-full p-3 text-sm font-bold tracking-wide no-underline uppercase rounded bg-lime-600 border-red text-red hover:bg-lime-900 hover:text-lime-50"
              href="#"
            >
              Get started
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default card
