import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useStoryblokState, getStoryblokApi, StoryblokComponent, StoryData  } from "@storyblok/react";
import Layout from "../components/Layout";

interface HomeProps {
  story?: StoryData,
  preview?: boolean
}

const Home: NextPage = (props: HomeProps) => {
  const story = useStoryblokState(props.story);

  return (
    // <div className={styles.container}>
    //   <Head>
    //     <title>{story ? story.name : "My Site"}</title>
    //     <link rel="icon" href="/favicon.ico" />
    //   </Head>
    //   <Layout>
        <StoryblokComponent blok={story.content} />
    //   </Layout>
    // </div>
  );
};

export async function getStaticProps() {
  // home is the default slug for the homepage in Storyblok
  let slug = "home";

  // load the draft version
  let sbParams = {
    version: "draft", // or 'published'
  };
 
  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);

  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
    },
    revalidate: 3600, // revalidate every hour
  };
}

export default Home;
