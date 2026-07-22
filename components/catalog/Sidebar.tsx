const collections = [
  "All Dresses",
  "Echoes of Her",
  "Illuminare",
  "Radiance of Love",
  "Spring Flower",
];

export default function Sidebar() {
  return (
    <aside className="w-64 pr-10">
<h2 className="mb-8 border-b pb-4 text-xl font-medium">        Collections
      </h2>

      <ul className="space-y-4">
        {collections.map((collection) => (
          <li
            key={collection}
            className="cursor-pointer text-stone-600 transition hover:text-black"
          >
            {collection}
          </li>
        ))}
      </ul>
    </aside>
  );
}