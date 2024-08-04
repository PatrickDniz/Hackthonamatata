import getNewsItem from "@/api/getNewsItem";
import NewsPage from "@/components/NewsPage";

export default async function Noticia(context) {
  const { params } = context;
  const news = await getNewsItem(params.id);

  return <NewsPage data={news} />;
}
