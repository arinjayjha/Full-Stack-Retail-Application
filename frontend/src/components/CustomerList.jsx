import { useEffect, useState } from "react";
import axios from "axios";

export default function CustomerList() {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        axios.get("/api/customers")
            .then(res => setCustomers(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <ul>
            {customers.map(c => (
                <li key={c.id}>{c.name} - {c.email}</li>
            ))}
        </ul>
    );
}
