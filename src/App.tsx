import React from "react";
import { AppStateView } from "./common/components/AppStateView";
import { usePosts } from "./hooks/query/usePosts";

export const App = () => {
  const { data, status } = usePosts();
  const allPosts = data ?? [];

  return (
    <div>
      <AppStateView status={status}>
        {allPosts.map((p) => (
          <h1 key={p.id}>{p.title}</h1>
        ))}
      </AppStateView>
    </div>
  );
};
