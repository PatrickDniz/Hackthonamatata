import getNews from "@/api/getNews";
import ListNews from "@/components/ListNews";
import Title from "@/components/Title";

export default async function Noticias() {
  const news = await getNews();
  const title = { title: "Notícias", subTitle: "Confira os ultimos acontecimentos" };
  return (
    <main>
      <Title data={title} />
      <ListNews data={news} />
    </main>
  );
}
