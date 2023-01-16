
import ServersList from "../components/ServersList/ServersList";
import NotFound from "../pages/NotFound";

export default function Servers( {isAuthorized }) {
    return isAuthorized ? <ServersList /> : <NotFound />
}
