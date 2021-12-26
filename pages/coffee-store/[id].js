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
    StarIcon,
    UserIcon
} from '@heroicons/react/solid'
import {fetcher} from '../../lib/fetcher'


const Coffee = ({ photo: {alt_description, description, urls:{regular}, user:{username} } }) => {    
    
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
        <di>
            <Head>
                <title>{ alt_description || description }</title> 
            </Head>
            <div className="px-10 pb-5 justify-center sm:px-20 flex flex-col gap-y-3 w-full min-h-screen bg-gradient-to-bl from-green-600 via-slate-700 to-sky-900" >
                <Link href="/" >
                    <a className=" select-none text-sm hover:-translate-x-2 transform ease-in-out transition duration-200 font-bold space-x-2 flex " > <ChevronLeftIcon className="h-5 w-5 text-black" /> Back to home</a>
                </Link>
                <h1 className="select-none text-2xl text-white font-semibold font-mono " >{description || alt_description }</h1>
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 " >
                    {/*--------image ------------*/}
                    <div className="relative rounded-xl overflow-hidden w-full h-60 sm:w-96  sm:h-52 md:w-[700px] md:h-[400px]  " >
                        <Image objectFit="cover " layout="fill" src={regular} alt={alt_description} />
                    </div>
                    <div className=" px-4 py-2 bg-opacity-20 hover:bg-opacity-40  bg-clip-padding backdrop-filter backdrop-blur-sm cursor-pointer w-full sm:w-[300px] h-[150px]    rounded-xl bg-gray-200 " >
                        <div className="flex space-x-2 items-center truncate  ">
                            <UserIcon className=" shrink-0 h-5 w-5 text-white"/>
                            <h3 className="select-none text-gray-50 font-semibold text-xl" >{username}</h3>
                        </div>
                        <div className="flex space-x-2 items-center truncate  " >
                            <StarIcon className="h-5 w-5 text-white"/>
                            <h3 className="text-gray-50 py-3 sm:py-4 font-semibold text-xl" >10</h3>
                        </div>
                        <button className="py-1 px-4 text-indigo-100 transition-colors active:scale-95 duration-200 bg-gradient-to-bl hover:bg-gradient-to-tr font-bold text-base from-blue-700 via-purple-700 to-sky-900 transform ease-in-out  hover:to-purple-700 rounded-md focus:shadow-outline hover:bg-indigo-600">Up Vote</button>
                    </div>
                </div>
            </div>
        </di>
    )
}

export async function getStaticProps({ params: { id } }) {
    const photos = await fetcher(); 
    const photo = photos.find((items)=> (items.id === id) )
    return {
        props: {
            photo,
        }
    }
} 

export async function getStaticPaths() {
    const photos = await fetcher();
    const paths = photos.map((store) => ({
        params: { id: store.id.toString() }
    }))
    return { 
        paths,
        fallback: false      
    };
}

export default Coffee
