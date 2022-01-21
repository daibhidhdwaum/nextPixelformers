import Head from "next/head";
import safeJsonStringify from "safe-json-stringify";

import { createClientFunc } from "./api/contentful";

const About = ({ about }) => {
  console.log(about);
  return (
    <div>
      <Head>
        <title>Pixelformers</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
};

export default About;

export const getStaticProps = async () => {
  const contentfulClient = createClientFunc();

  const aboutRes = await contentfulClient.getEntries({
    content_type: "about",
  });
  const about = JSON.parse(safeJsonStringify(aboutRes));

  return {
    props: {
      about,
    },
  };
};
