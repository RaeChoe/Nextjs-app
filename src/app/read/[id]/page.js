export default async function Read(props) {
  const { id } = await props.params;
  console.log("Read Page 작동");
  const response = await fetch(`http://localhost:9999/topics/${id}`);
  const topics = await response.json();

  return (
    <>
      <h2>{topics.title}</h2>
      <p>{topics.message}</p>
    </>
  );
}
