import ViewPostButton from "../components/ViewPostButton";
import CardList from "../components/Post/CardList";

const base_url = "https://jsonplaceholder.typicode.com/posts";

interface PostInterface {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Post = async () => {
  const response = await fetch(base_url);
  const posts: PostInterface[] = await response.json();
  return (
    <>
      <h5>Post Page</h5>
      <br />
      {posts.map((post) => {
        return (

          <CardList key={post.id}>
            <h5>{post.id}</h5>
            <p>{post.title}</p>
            <h1>{post.body}</h1>
            <br />
            <ViewPostButton UserId={post.userId}/>
          </CardList>
        );
      })}
    </>
  );
};

export default Post;
