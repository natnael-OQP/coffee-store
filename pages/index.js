import Head from 'next/head'
import Image from 'next/image'
import Card from '../components/card'
import coffeeStoreData from '../data/coffee-store.json'

function Home({coffeeStore}) {
  return (
    <div  className="" >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full text-white pl-4 sm:pl-10 md:pl-14 min-h-full  flex flex-col  " >
        <div className="mt-20   flex  flex-col" >
          <h1 className="text-4xl sm:text-6xl font-bold   ">
            Coffee <span className="text-purple-700">Store</span>
          </h1>
          <p className="text-md sm:text-lg md:text-xl mt-2 md:mt-3 font-semibold  " >Discover your local coffee shops!</p>
          <button
            className="text-white text-sm sm:text-base md:text-lg font-semibold py-2 px-4 rounded-md max-w-[160px] sm:max-w-[180px] md:max-w-[200px] shadow-sm shadow-purple-400 active:scale-90 transform ease-in-out transition duration-200  bg-purple-700 hover:bg-purple-600 mt-4 "
          >view stores nearby</button>
        </div>
        {/* section 1 */}
        <h1 className="max-w-6xl pt-20 pb-10 text-3xl md:text-4xl font-semibold " >Addise Abeba</h1>
        {/* card components */}
        <div className="max-w-6xl pl-5 sm:pl-0 mx-auto w-full  grid grid-cols-1 sm:grid-cols-2 overflow-hidden lg:grid-cols-3 gap-4 " >
          {
            coffeeStore.map((item) => (
              <Card
                id={item.id}
                key={item?.id}
                img={item?.imgUrl}
                title={item?.name}
              />
            ))
          }
        </div>
        {/* section 2 */}
        <h1 className="max-w-6xl pt-20 pb-10 text-3xl md:text-4xl font-semibold " >Addise Abeba</h1>
        {/* card components */}
        <div className="max-w-6xl pl-5 sm:pl-0 mx-auto w-full  grid grid-cols-1 sm:grid-cols-2 overflow-hidden lg:grid-cols-3 gap-4 " >
          {
            coffeeStore.map((item) => (
              <Card
                id={item.id}
                key={item?.id}
                img={item?.imgUrl}
                title={item?.name}
              />
            ))
          }
        </div>
        
      </main>
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {
      coffeeStore:coffeeStoreData,
    }
  }
} 

export default  Home;
