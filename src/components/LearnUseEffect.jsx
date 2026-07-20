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
                            <img
                                src={product.image}
                                alt={product.title}
                                width="150"
                                height="150"
                            />
                            <h3>{product.title}</h3>
                            <h4>Price: ${product.price}</h4>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default LearnUseEffect;