import Head from "next/head";
import { useRouter } from 'next/router'
import Image from 'next/image';
import coffeeStoreData from '../../data/coffee-store.json';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import Link from 'next/link'
// icons
import {
    ChevronLeftIcon,
    LocationMarkerIcon,
    StarIcon
} from '@heroicons/react/solid'

const Coffee = ({ card:{name,imgUrl,address} }) => {    
    const router = useRouter();
    // if page is not yet generated
    if (router.isFallback) {
        return (
            <>
                <Head>
                    <title>loading...</title> 
                </Head>
                <div className="w-full min-h-screen flex items-center justify-center " >
                    <Loader
                        type="Circles"
                        color="#00BFFF"
                        height={100}
                        width={100}
                        timeout={3000} //3 secs
                    />
                </div>
            </>
        )
    }

    return (
        <>
            <Head>
                <title>{name}</title> 
            </Head>
            <div className="px-10 pb-28 justify-center sm:px-20 flex flex-col gap-y-3 w-full min-h-screen bg-gradient-to-bl from-green-600 via-slate-700 to-sky-900" >
                <Link href="/" >
                    <a className="text-sm hover:-translate-x-2 transform ease-in-out transition duration-200 font-bold space-x-2 flex " > <ChevronLeftIcon className="h-5 w-5 text-black" /> Back to home</a>
                </Link>
                <h1 className="text-3xl text-white font-semibold font-mono " >{name}</h1>
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 " >
                    {/*--------image ------------*/}
                    <div className="relative rounded-xl overflow-hidden w-full h-60 sm:w-96  sm:h-52 md:w-[600px] md:h-[300px]  " >
                        <Image objectFit="cover " layout="fill" src={imgUrl} alt={name} />
                    </div>
                    <div className=" px-4 py-2 bg-opacity-20 hover:bg-opacity-40  bg-clip-padding backdrop-filter backdrop-blur-sm cursor-pointer w-full sm:w-[300px] h-[150px]    rounded-xl bg-gray-200 " >
                        <div className="flex space-x-2 items-center truncate  ">
                            <LocationMarkerIcon className=" shrink-0 h-5 w-5 text-white"/>
                            <h3 className=" text-gray-50 font-semibold text-xl" >{address}</h3>
                        </div>
                        <div className="flex space-x-2 items-center truncate  " >
                            <StarIcon className="h-5 w-5 text-white"/>
                            <h3 className="text-gray-50 py-3 sm:py-4 font-semibold text-xl" >10</h3>
                        </div>
                        <button className="py-1 px-4 text-indigo-100 transition-colors active:scale-95 duration-200 bg-gradient-to-bl hover:bg-gradient-to-tr font-bold text-base from-blue-700 via-purple-700 to-sky-900 transform ease-in-out  hover:to-purple-700 rounded-md focus:shadow-outline hover:bg-indigo-600">Up Vote</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export async function getStaticProps({ params: { id } }) {
    const card = coffeeStoreData.find((items)=> (items.id === Number(id)) )
    return {
        props: {
            card,
        }
    }
} 

export async function getStaticPaths() {
    const paths = coffeeStoreData.map((store) => ({
        params: { id: store.id.toString() }
    }))
    return { 
        paths,
        fallback: true      
    };
}

export default Coffee
