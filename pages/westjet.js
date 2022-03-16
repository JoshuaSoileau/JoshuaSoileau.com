import tw from "twin.macro";
import Layout from "@components/Layout/Layout";
import Button from "@components/Button/Button";

const About = ({ title, description, ...props }) => {
  return (
    <>
      <Layout pageTitle={`${title} | About`} description={description}>
        <h1 className="title">Westjet is a company.</h1>

        <p className="description">Talk to them by clicking this button:</p>

        <p css={[tw`mt-4`]}>
          <Button>WestJest Message Now</Button>
        </p>
      </Layout>
    </>
  );
};

export default About;

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`);

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description
    }
  };
}
