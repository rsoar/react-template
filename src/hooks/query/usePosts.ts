import { useQuery } from "react-query";
import { postService } from "../../services/PostService";

export const usePosts = () => {
  return useQuery("posts", () => postService.get(), {
    staleTime: 1000 * 60 * 5, // 5 min
    refetchInterval: 1000 * 60 * 5,
  });
};
