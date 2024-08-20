import React from "react";

// Componentes funcionais
const Header = (props: React.HTMLProps<HTMLHeadingElement>) => (
  <h1 {...props} />
);
const Paragraph = (props: React.HTMLProps<HTMLParagraphElement>) => (
  <p {...props} />
);
const List = (props: React.HTMLProps<HTMLUListElement>) => <ul {...props} />;
const ListItem = (props: React.HTMLProps<HTMLLIElement>) => <li {...props} />;
const Link = (props: React.HTMLProps<HTMLAnchorElement>) => <a {...props} />;
const Code = (props: React.HTMLProps<HTMLElement>) => <code {...props} />;
const Blockquote = (props: React.HTMLProps<HTMLQuoteElement>) => (
  <blockquote {...props} />
);
const Summary = (props: React.HTMLProps<HTMLElement>) => <summary {...props} />;
const Table = (props: React.HTMLProps<HTMLTableElement>) => (
  <table {...props} />
);
const TableHeader = (props: React.HTMLProps<HTMLTableHeaderCellElement>) => (
  <th {...props} />
);
const TableCell = (props: React.HTMLProps<HTMLTableCellElement>) => (
  <td {...props} />
);

export {
  Header,
  Paragraph,
  List,
  ListItem,
  Link,
  Code,
  Blockquote,
  Summary,
  Table,
  TableHeader,
  TableCell,
};
