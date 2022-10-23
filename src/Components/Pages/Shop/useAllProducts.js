import { useEffect, useState } from "react";

const useAllProducts = () => {
    const [allProduct, setAllProduct] = useState([]);

    useEffect(() => {
        fetch(`http://crossfitassemble.xyz/api/products`)
            .then(res => res.json())
            .then(data => {
                setAllProduct(data.data)
            })
    }, [])
    return { allProduct }
};

export default useAllProducts;