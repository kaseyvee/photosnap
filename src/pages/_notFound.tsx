import TitleCard from "../components/TitleCard";

function NotFound() {

  const data = {
    title: "UH OH! WE COULDN'T FIND THAT. :(",
    description: "Nothing to see here. Sorry!",
    cardColour: "black",
    buttonText: "GO TO HOME",
    link: "/"
  }

  return (
    <main className="not-found page">
      <TitleCard
        page="not found"
        imagePosition="right"
        hero={true}
        data={data}
      />
    </main>
  );
}

export default NotFound;