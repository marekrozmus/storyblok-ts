import { storyblokEditable, StoryblokComponent, SbBlokData } from "@storyblok/react";
 
interface BlokProps extends SbBlokData {
  body: Array<BlokProps>
}

interface PageProps {
  blok: BlokProps
}

const Page = ({ blok }: PageProps) => (
  <main {...storyblokEditable(blok)}>
    {blok.body.map((nestedBlok: SbBlokData) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </main>
);
 
export default Page;
