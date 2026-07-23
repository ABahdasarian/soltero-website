type Props = {
  params: {
    slug: string;
  };
};

export default function DressPage({ params }: Props) {
  return (
    <main className="max-w-6xl mx-auto py-20 px-6">
      <h1 className="text-5xl font-light">
        {params.slug}
      </h1>
    </main>
  );
}