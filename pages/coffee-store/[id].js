import coffeeStoreData from '../../data/coffee-store.json';
import { useRouter } from 'next/router'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const Coffee = ({ card }) => {
    
    const router = useRouter();

    if (router.isFallback) {
        return (
            <div className="w-full min-h-screen flex items-center justify-center " >
                <Loader
                    type="Circles"
                    color="#00BFFF"
                    height={100}
                    width={100}
                    timeout={3000} //3 secs
                />
            </div>
        )
    }

    return (
        <div>
            {card?.name}
            <br />
            {card?.address}
        </div>
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
