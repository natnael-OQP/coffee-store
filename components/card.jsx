import Image from "next/image"
import Link from "next/link"

const Card = ({img,name,id}) => {
    return (
        <Link  href={`/coffee-store/${id}`} passHref>
            <div className=" bg-opacity-20 hover:bg-opacity-40  bg-clip-padding backdrop-filter backdrop-blur-sm cursor-pointer w-[300px] h-[210px] md:w-[320px] md:h-[230px] flex flex-col items-center justify-center pb-2 rounded-xl bg-gray-200  ">
                
                <div className="relative rounded-xl w-[260px]  h-[150px] md:w-[280px] md:h-[170px] bg-slate-50  " >
                    <Image className="rounded-xl" objectFit="cover" layout="fill" src={img} alt={name}/>
                </div>
            </div>
        </Link>
    )
}

export default Card
