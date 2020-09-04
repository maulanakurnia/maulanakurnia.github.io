import { Fragment } from "react";
import Main from "organisms/home/main";
import { DefaultSeo } from "next-seo";
const IndexPage = () => {
  return (
    <Fragment>
      <DefaultSeo nofollow={true} noindex={true} title="mufradmabni" />
      <Main />
    </Fragment>
  );
};
export default IndexPage;
