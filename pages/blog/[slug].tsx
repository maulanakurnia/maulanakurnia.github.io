import Header from "../../src/components/Header";
import { Fragment } from "react";
import {useRouter} from 'next/router';

export default function Vehicle(){
    const router = useRouter();
    return(
        <Fragment>
            <Header/>

        </Fragment>
    );
}
