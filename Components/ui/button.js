import Link from "next/link";
import classess from "./button.module.css";

export default function Button(props){
    return <Link href={props.link}>
        <button className={classess.btn}>{props.children}</button>
    </Link>
}