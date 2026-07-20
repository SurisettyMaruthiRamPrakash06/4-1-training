import { useEffect, useState } from "react";
import axios from "axios";

const LearnUseEffect = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    async function getData() {
        let res = await axios("https://fakestoreapi.com/products");
        setProduct(res.data);
    }

    return (
        <>
            <h1>Product List</h1>

            <div>
                {product.map((product) => {
                    return (
                        <div key={product.id}>
                            <h3>{product.title}</h3>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default LearnUseEffect;