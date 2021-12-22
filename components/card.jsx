import Image from "next/image"
import Link from "next/link"

const Card = ({img,title,}) => {
    return (
        <Link  href="/coffee-store/ioeio" passHref>
            <div className="cursor-pointer w-[300px] h-[210px] md:w-[320px] md:h-[230px] flex flex-col items-center justify-center pb-2 rounded-xl bg-slate-50">
                <h3 className=" w-full flex py-1 text-base  font-semibold justify-start pl-5 truncate  ">coffee app for all </h3>
                <div className="relative w-[260px]  h-[150px] md:w-[280px] md:h-[170px] bg-slate-50  " >
                    <Image className="rounded-xl" objectFit="cover" layout="fill" src={img} alt={title}/>
                </div>
            </div>
        </Link>
    )
}

export default Card
