// Example from https://beta.reactjs.org/learn
import { Card, Cards } from "nextra/components";

type TTableOfContentsItem = {
  title: string;
  href: string;
};

type TProps = {
  contents: TTableOfContentsItem[];
};

export function TableOfContents({ contents }: TProps) {
  if (!contents) {
    return null;
  }

  return (
    <Cards>
      {contents.map((item) => (
        <Card children icon="" title={item.title} href={item.href} />
      ))}
    </Cards>
  );
}