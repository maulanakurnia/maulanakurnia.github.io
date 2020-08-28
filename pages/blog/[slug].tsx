import Header from "../../src/components/layout/Header";
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
