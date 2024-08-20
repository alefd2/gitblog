import { PostCard } from "./components/PostCard";
import { ProfileCard } from "./components/ProfileCard";
import { SearchInput } from "./components/SearchInput";
import { HomeContainer, PostCardGrid, SkeletonGrid } from "./styles";

import { api } from "../../utils/axios";
import { useCallback, useEffect, useState } from "react";
import { PostCardSkeleton } from "./components/PostCardSkeleton";
import { ProfileCardSkeleton } from "./components/ProfileCardSkeleto";

export interface PostsProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  user: any;
  length: number;
  number: number;
  title: string;
  body: string;
  created_at: string;
  html_url: string;
  comments: number;
}

interface SearchPostsProps {
  items: PostsProps[];
}

export function Home() {
  const [posts, setPosts] = useState<PostsProps[]>([]);

  const postsLength = posts.length;

  const fetchPosts = useCallback(async (query?: string) => {
    const response = await api.get<SearchPostsProps>(
      `search/issues?q=${query ? query + "%20" : ""}repo:alefd2/gitblog
      `
    );

    setPosts(response.data.items);
  }, []);

  let numberOfPostsText: string;
  if (postsLength > 1) {
    numberOfPostsText = "publicações";
  } else {
    numberOfPostsText = "publicação";
  }

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <HomeContainer>
      {posts.length > 0 ? <ProfileCard /> : <ProfileCardSkeleton />}
      <SearchInput
        postsLength={postsLength}
        fetchPosts={fetchPosts}
        numberOfPostsText={numberOfPostsText}
      />
      <PostCardGrid>
        {posts.length > 0 ? (
          posts.map((post) => {
            return <PostCard key={post.number} data={post} />;
          })
        ) : (
          <SkeletonGrid>
            <PostCardSkeleton />
            <PostCardSkeleton />
          </SkeletonGrid>
        )}
      </PostCardGrid>
    </HomeContainer>
  );
}
