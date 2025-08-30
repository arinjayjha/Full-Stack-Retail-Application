import { useEffect, useState } from "react";
import axios from "axios";

export default function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("/api/products")
            .then(res => setProducts(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <ul>
            {products.map(p => (
                <li key={p.id}>{p.name} - ${p.price}</li>
            ))}
        </ul>
    );
}
