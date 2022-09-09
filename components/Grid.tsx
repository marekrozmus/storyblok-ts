import { storyblokEditable, StoryblokComponent, SbBlokData } from "@storyblok/react";
 
interface BlokProps extends SbBlokData {
  columns: Array<BlokProps>
}

interface GridProps {
  blok: BlokProps
}

const Grid = ({ blok }: GridProps) => {
  return (
    <div className="grid grid-cols-3" {...storyblokEditable(blok)}>
      {blok.columns.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
};
 
export default Grid;
