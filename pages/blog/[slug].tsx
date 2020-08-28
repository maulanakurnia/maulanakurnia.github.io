<<<<<<< HEAD
import Header from "../../src/components/layout/Header";
=======
import Header from "../../src/components/Header";
>>>>>>> 1988e8ea2c246c5e5770bac08638483b5173bceb
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
