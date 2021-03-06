import Head from "next/head";
import safeJsonStringify from "safe-json-stringify";
import Image from "next/image";
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
// import { BLOCKS } from "@contentful/rich-text-types";
//  {documentToReactComponents(bio)}

import { createClientFunc } from "./api/contentful";

const Series = ({ series: { items } }) => {
  return (
    <div>
      <Head>
        <title>Pixelformers - Series</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <div>
          <div>
            {items.map((s) => {
              const {
                seriesName,
                seriesImage: {
                  fields: {
                    file: {
                      details: {
                        image: { height, width },
                      },
                      url,
                    },
                  },
                },
              } = s.fields;

              return (
                <>
                  {url && (
                    <div>
                      <Image
                        src={`https:${url}`}
                        width={width}
                        height={height}
                      />
                    </div>
                  )}
                  <h2>{seriesName}</h2>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Series;

export const getStaticProps = async () => {
  const contentfulClient = createClientFunc();

  const seriesRes = await contentfulClient.getEntries({
    content_type: "series",
  });

  return {
    props: {
      series: JSON.parse(safeJsonStringify(seriesRes)),
    },
  };
};
