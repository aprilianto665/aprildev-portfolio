export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Muhammad Aprilianto",
    "jobTitle": "Software Engineer",
    "url": "https://aprildev-portfolio.vercel.app",
    "sameAs": [
      "https://github.com/your-github",
      "https://linkedin.com/in/your-linkedin"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}