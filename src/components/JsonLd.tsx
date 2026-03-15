/**
 * Renders one or more JSON-LD schema blocks as <script> tags.
 * Accepts a single object or an array — each item becomes its own script.
 */
export function JsonLd({ data }: { data: unknown }) {
  const items = Array.isArray(data) ? data : [data];
  return (
    <>
      {items.map((item, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  );
}
