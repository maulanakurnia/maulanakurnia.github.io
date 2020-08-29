import {Fragment} from 'react'
import Header from '../src/components/layout/Header';
import Main from 'components/sections/main'
import SEO from 'components/utils/seo'

const IndexPage = () => {
    return (
        <Fragment>
            <SEO title="Home" />
            <Main/>
        </Fragment>
    )
}
export default IndexPage
