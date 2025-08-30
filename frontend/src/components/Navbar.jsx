import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav style={{ padding: "1rem", background: "#333", color: "white" }}>
            <Link to="/" style={{ margin: "0 1rem", color: "white" }}>Home</Link>
            <Link to="/customers" style={{ margin: "0 1rem", color: "white" }}>Customers</Link>
            <Link to="/products" style={{ margin: "0 1rem", color: "white" }}>Products</Link>
            <Link to="/sales" style={{ margin: "0 1rem", color: "white" }}>Sales</Link>
        </nav>
    );
}
