import { storyblokEditable, SbBlokData } from "@storyblok/react";
 
interface BlokProps extends SbBlokData {
  headline: string
}

interface TeaserProps {
  blok: BlokProps
}


const Teaser = ({ blok }: TeaserProps) => {
  return <h2 className="text-2xl mb-10" {...storyblokEditable(blok)}>{blok.headline}</h2>;
};
 
export default Teaser;