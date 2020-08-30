import {Fragment} from 'react'
import Main from 'src/containers/home/main'
import SEO from 'components/lib/seo'

const IndexPage = () => {
    return (
        <Fragment>
            <SEO title="Home" />
            <Main/>
        </Fragment>
    )
}
export default IndexPage
