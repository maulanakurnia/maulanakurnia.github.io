import {Fragment} from 'react'
import Main from 'organisms/home/main'
import SEO from 'src/components/atoms/seo'

const IndexPage = () => {
    return (
        <Fragment>
            <SEO title="Home" />
            <Main/>
        </Fragment>
    )
}
export default IndexPage
