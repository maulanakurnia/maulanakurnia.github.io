import {Fragment} from 'react'
import Main from 'organisms/home/main'
import { DefaultSeo } from 'next-seo'
import defaultSeoConfig from 'src/data/next-seo.json'
const IndexPage = () => {
    return (
        <Fragment>
            <DefaultSeo title="mufradmabni"/>
            <Main/>
        </Fragment>
    )
}
export default IndexPage
