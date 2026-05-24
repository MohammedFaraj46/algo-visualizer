import {Link} from "react-router";

interface NavBarButtonProps {
    text: string;
    link: string;
}

export default function NavBarButton({ text, link } : NavBarButtonProps) {
    return <Link to={link}>
        <button className="btn-ghost">{text}</button>
    </Link>
}