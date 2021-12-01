import { Link } from "react-router-dom";
import { getHomeRoute, getSubPageRoute } from "../routes";

export default function SubPage() {
    return <>
        <h1>To jest podstrona</h1>
        <Link to={getHomeRoute()}>Home</Link><br />
        <Link to={getSubPageRoute()}>Subpage</Link>
    </>
}
