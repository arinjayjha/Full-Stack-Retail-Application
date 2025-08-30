import { useEffect, useState } from "react";
import axios from "axios";

export default function SalesList() {
    const [sales, setSales] = useState([]);

    useEffect(() => {
        axios.get("/api/sales")
            .then(res => setSales(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <ul>
            {sales.map(s => (
                <li key={s.id}>
                    Sale #{s.id} - Amount: ${s.amount}
                    {s.Customer ? ` (Customer: ${s.Customer.name})` : ""}
                    {s.Product ? ` (Product: ${s.Product.name})` : ""}
                </li>
            ))}
        </ul>
    );
}
