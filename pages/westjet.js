import "twin.macro";
import Layout from "@components/Layout/Layout";
import Button from "@components/Button/Button";

const WestJet = ({ title, description, ...props }) => {
  return (
    <>
      <Layout pageTitle={`${title} | WestJet`} description={description}>
        <h1 className="title">Westjet is a company.</h1>

        <p className="description">Talk to them by clicking this button:</p>

        <p tw="mt-12">
          <Button as="a" href="https://m.me/westjet">
            WestJest m.me button
          </Button>
        </p>
      </Layout>
    </>
  );
};

export default WestJet;

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`);

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description
    }
  };
}
