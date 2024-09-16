import { Title, Meta, Link } from "react-head";

function Head() {
  return (
    <>
      <Title>Password Playground</Title>
      <Meta charSet="UTF-8" />
      <Meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Open Graph Meta Tags for Social Media */}
      <Meta property="og:title" content="Password Playground" />
      <Meta
        property="og:description"
        content="Generate secure passwords easily with our free tool."
      />
      <Meta
        property="og:image"
        content="https://passwordplayground.com/images/og-image.jpg"
      />
      <Meta property="og:url" content="https://passwordplayground.com" />
      <Meta property="og:type" content="website" />

      {/* Twitter Card Meta Tags */}
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta
        name="twitter:title"
        content="Password Playground: Secure, Random Password Generator & Validator"
      />
      <Meta
        name="twitter:description"
        content="Generate secure passwords easily with our free tool."
      />
      <Meta
        name="twitter:image"
        content="https://passwordplayground.com/images/twitter-card.jpg"
      />
      <Meta
        name="description"
        content="Password Playground is a platform that helps manage and store your passwords securely. Keep your data safe with our easy-to-use interface and robust security features."
      />

      {/* Structured Data for SEO */}
      <script type="application/ld+json">
        {`
        {
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Password Playground",
          "url": "https://passwordplayground.com",
          "description": "Password Playground offers a free, secure tool to generate and validate strong passwords.",
          "applicationCategory": "Utilities",
          "operatingSystem": "All"
        }
        `}
      </script>

      {/* Google Fonts */}
      <Link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
      />
      <Link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inria+Serif:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap"
      />

      {/* Favicon */}
      <Link
        rel="apple-touch-icon"
        sizes="180x180"
        href="./apple-touch-icon.png"
      />
      <Link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="./img/favicon/favicon-32x32.png"
      />
      <Link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="./img/favicon/favicon-16x16.png"
      />
    </>
  );
}

export default Head;
