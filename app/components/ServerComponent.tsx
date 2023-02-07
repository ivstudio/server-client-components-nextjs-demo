interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const getData = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts/");
  return data.json();
};

// @ts-expect-error
export default async function ServerComponent(): any {
  const data: IPost[] = await getData();

  return (
    <section style={{ background: "#e1f1e1" }}>
      <h3>Server Component</h3>
      <ul>
        {data?.map((item) => {
          return <li key={item.id}>{item.title}</li>;
        })}
      </ul>
    </section>
  );
}

/*
  Note:
  JSX.ElementType for valid JSX element types
  https://github.com/microsoft/TypeScript/pull/51328
*/
