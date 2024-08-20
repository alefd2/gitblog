import { Description, PostCardContainer, Title } from "./styles";
import { PostsProps } from "../..";

import { formatDistanceDate } from "../../../../utils/formater";
import { useNavigate } from "react-router-dom";

interface PostCardProps {
  data: PostsProps;
}

export function PostCard({ data }: PostCardProps) {
  const navigate = useNavigate();

  function handleCompletePost() {
    navigate(`/post/${data.number}`);
  }

  return (
    <PostCardContainer onClick={handleCompletePost}>
      <Title>
        <h3>{data.title}</h3>
        <span>{data.created_at && formatDistanceDate(data.created_at)}</span>
      </Title>

      <Description>
        <p>{data.body}</p>
      </Description>
    </PostCardContainer>
  );
}
