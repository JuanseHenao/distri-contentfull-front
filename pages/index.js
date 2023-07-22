import Navbar from "@/components/navbar";
import client from "../contentful";
import "tailwindcss/tailwind.css";
import RichText from "@/components/RichText";

export async function getStaticProps() {
  const entries = await client.getEntries({
    content_type: "article", // Reemplaza 'blogPost' con el nombre de tu modelo de contenido
  });

  console.log();

  return {
    props: {
      entries: entries.items,
    },
  };
}

function BlogPage({ entries }) {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center">
        {entries.map((entry) => (
          <div
            className="max-w-lg p-5 mx-auto my-10 bg-white rounded-lg shadow-md"
            key={entry.sys.id}
          >
            <h2 className="mt-3 text-2xl font-semibold text-center">
              {entry.fields.title}
            </h2>
            <p className="mt-1 text-center text-gray-600">
              {entry.fields.autor}
            </p>
            <div className="mt-5">
              <RichText content={entry.fields.body} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogPage;
