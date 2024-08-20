import styled from "styled-components"

import {
  Header as DefaultHeader,
  Paragraph as DefaultParagraph,
  List as DefaultList,
  ListItem as DefaultListItem,
  Link as DefaultLink,
  Code as DefaultCode,
  Blockquote as DefaultBlockquote,
  Summary as DefaultSummary,
  Table as DefaultTable,
  TableHeader as DefaultTableHeader,
  TableCell as DefaultTableCell,
} from "../components/MaskComp"

export const PostContentCardContainer = styled.section`
  display: flex;
`

export const PostDetailsContainer = styled.div`
  width: 86.4rem;
  height: fit-content;
  /* max-height: 45.6rem; */
  padding: 0 3.2rem;

  margin-bottom: 5rem;

  border-top: 4rem solid transparent;
  border-bottom: 4rem solid transparent;

  overflow: auto;
  overflow: overlay;

  img {
    width: 100%;
    border-radius: 2rem;
  }
  li {
    list-style-position: inside;
  }
`

export const Header = styled(DefaultHeader)`
  font-size: 2rem;
  margin-bottom: 1rem;
`

export const Paragraph = styled(DefaultParagraph)`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
`

export const List = styled(DefaultList)`
  margin-bottom: 1rem;
`

export const ListItem = styled(DefaultListItem)`
  margin-bottom: 0.5rem;
`

export const Link = styled(DefaultLink)`
  color: blue;
  text-decoration: underline;
`

export const Code = styled(DefaultCode)`
  background-color: #f4f4f4;
  color: #333;
  font-family: "Courier New", Courier, monospace;
  font-size: 0.9rem;
  border-radius: 4px;
  padding: 0.2rem 0.4rem;
`

export const Blockquote = styled(DefaultBlockquote)`
  margin: 0;
  padding: 0.5rem 1rem;
  border-left: 4px solid #007bff;
  background-color: #f8f9fa;
  color: #343a40;
  font-style: italic;
`

export const Summary = styled(DefaultSummary)`
  cursor: pointer;
  font-weight: bold;
`

export const Table = styled(DefaultTable)`
  width: 100%;
  border-collapse: collapse;
`

export const TableHeader = styled(DefaultTableHeader)`
  padding: 8px;
  border: 1px solid #ddd;
  text-align: left;
`

export const TableCell = styled(DefaultTableCell)`
  padding: 8px;
  border: 1px solid #ddd;
`
