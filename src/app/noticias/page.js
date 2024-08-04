import getNews from "@/api/getNews";
import ListNews from "@/components/ListNews";
import Title from "@/components/Title";

export default async function Noticias() {
    const news = await getNews();
   
    return ( 
        <main>
            <Title data={"Notícias"} />
            <ListNews data={news} />
        </main>
    );
}
  