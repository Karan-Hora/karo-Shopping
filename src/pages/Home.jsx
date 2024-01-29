import React, { useEffect, useState } from "react";
import Spinner from "../componenets/Spinner";
import Product from "../componenets/Product";


const Home = () => {

    const API_URL = "https://fakestoreapi.com/products";

    // first we have to fetch data.
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);

    async function fetchProductData() {
        setLoading(true);

        try {
            const res = await fetch(API_URL);
            const data = await res.json();

            setPosts(data);
        }
        catch (error) {
            console.log("Error aagya ji");
            setPosts([]);
        }
        setLoading(false);

    }

    useEffect(() => {
        fetchProductData();
    }, [])


    return (
        <div className="   w-full h-full flex justify-center items-center">
            <div className=" w-[1000px]  flex flex-wrap justify-center items-center">


                {

                    loading ? (<Spinner />) :
                        (posts.map((post) => (
                            <Product post={post} />
                        )))

                }
            </div>
        </div>
    )
}
export default Home;

