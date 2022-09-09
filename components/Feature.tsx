import { storyblokEditable, SbBlokData } from "@storyblok/react";

interface BlokProps extends SbBlokData {
  name: string
}

interface FeatureProps {
  blok: BlokProps
}

const Feature = ({ blok }: FeatureProps) => (
  <div className="column feature" {...storyblokEditable(blok)}>
    {blok.name}
  </div>
);
 
export default Feature;
