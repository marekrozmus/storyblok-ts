import { filter } from 'lodash';
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
 
import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
  StoryData
} from "@storyblok/react";

export default function Page({ story }: { story: StoryData }) {
  story = useStoryblokState(story);
 
  return (
    <div className={styles.container}>
        <Head>
        <title>{story ? story.name : "My Site"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <StoryblokComponent blok={story.content} />
        </Layout>
    </div>
  );
}
 
export async function getStaticProps({ params }: { params: { slug: string[] } }) {
  let slug = params.slug ? params.slug.join("/") : "home";
 
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
    revalidate: 3600,
  };
}

export async function getStaticPaths() {
  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get("cdn/links/");

  // console.log(data.links)

  // const pageToBeBuildId = process.env.pageToBeBuildId

  // if (pageToBeBuildId) {
  //   data.links = filter(data.links, { id: pageToBeBuildId })
  // }
 
  let paths: { params: { slug: string } }[] = [];
  Object.keys(data.links).forEach((linkKey) => {
    if (data.links[linkKey].is_folder || data.links[linkKey].slug === "home") {
      return;
    }
 
    const slug = data.links[linkKey].slug;
    let splittedSlug = slug.split("/");
 
    paths.push({ params: { slug: splittedSlug } });
  });
 
  return {
    paths: paths,
    fallback: false,
  };
}
