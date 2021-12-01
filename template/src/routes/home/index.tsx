import { Link } from "react-router-dom";
import { getHomeRoute, getSubPageRoute } from "../routes";

export default function HomePage() {
    return <>
        <h1>Home</h1>
        <Link to={getHomeRoute()}>Home</Link><br />
        <Link to={getSubPageRoute()}>Subpage</Link>
    </>
}
