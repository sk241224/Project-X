import React from "react";
import { Helmet } from "react-helmet";

function SEOHelmet() {
  return (
    <Helmet>
      <meta charSet="UTF-8" />
      <title>Home | College Pravesh</title>
      <meta
        name="description"
        content="College Pravesh helps you during the overall engineering process i.e. It's with you before, after & during engineering."
      />
      <link rel="canonical" href="https://www.collegepravesh.com/" />
      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Home | College Pravesh" />
      <meta
        property="og:description"
        content="College Pravesh helps you during the overall engineering process i.e. It's with you before, after & during engineering."
      />
      <meta property="og:url" content="https://www.collegepravesh.com/" />
      <meta property="og:site_name" content="College Pravesh" />
      <meta
        property="article:publisher"
        content="https://www.facebook.com/CollegePravesh/"
      />
      <meta
        property="article:modified_time"
        content="2021-07-24T20:41:05+00:00"
      />
      <meta
        property="og:image"
        content="https://img.collegepravesh.com/2017/01/College-Pravesh-Featured.png"
      />
      <meta property="og:image:width" content="660" />
      <meta property="og:image:height" content="331" />
      <meta property="og:image:type" content="image/png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@CollegePravesh" />
      <meta name="msvalidate.01" content="9A5F2782193B52D15650B5040E0D3429" />
      <meta
        name="google-site-verification"
        content="L4Qn8MQCXQ0si7SOqOpHr_G_Yr0b6JDV3DnMkMDCGp0"
      />

      {/* Optional inline CSS for image sizing */}
      <style>
        {`img:is([sizes="auto" i], [sizes^="auto," i]) {
            contain-intrinsic-size: 3000px 1500px;
        }`}
      </style>

      {/* Optional script tags (e.g., Google Analytics placeholder) */}
      <script
        async
        src="//www.googletagmanager.com/gtag/js?id=G-KJTXT9X0VP"
        data-cfasync="false"
      ></script>

      {/* Stylesheets */}
      <link
        rel="stylesheet"
        href="https://www.collegepravesh.com/cpdata/themes/sahifa/tie-style.min.css"
      />
      <link
        rel="stylesheet"
        href="https://www.collegepravesh.com/cpdata/themes/sahifa/css/cpf_homepage.min.css"
      />
      <link
        rel="stylesheet"
        href="https://www.collegepravesh.com/cpdata/themes/sahifa/css/cpf_newall.min.css"
      />
      <link
        rel="stylesheet"
        href="https://www.collegepravesh.com/cpdata/plugins/searchwp-live-ajax-search/assets/styles/style.css"
      />
      <link
        rel="shortcut icon"
        href="https://www.collegepravesh.com/cpdata/themes/sahifa/images/logo_sizes/Logo_Small_Dark_Transparent_48x48.png"
        title="Favicon"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Structured data (JSON-LD schema) */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.collegepravesh.com/",
              url: "https://www.collegepravesh.com/",
              name: "Home | College Pravesh",
              isPartOf: { "@id": "https://www.collegepravesh.com/#website" },
              about: { "@id": "https://www.collegepravesh.com/#organization" },
              primaryImageOfPage: {
                "@id": "https://www.collegepravesh.com/#primaryimage",
              },
              image: { "@id": "https://www.collegepravesh.com/#primaryimage" },
              thumbnailUrl:
                "https://img.collegepravesh.com/2017/01/College-Pravesh-Featured.png",
              datePublished: "2015-02-16T18:24:49+00:00",
              dateModified: "2021-07-24T20:41:05+00:00",
              description:
                "College Pravesh helps you during the overall engineering process i.e. It's with you before, after & during engineering.",
              breadcrumb: {
                "@id": "https://www.collegepravesh.com/#breadcrumb",
              },
              inLanguage: "en-US",
              potentialAction: [
                {
                  "@type": "ReadAction",
                  target: ["https://www.collegepravesh.com/"],
                },
              ],
            },
            {
              "@type": "ImageObject",
              inLanguage: "en-US",
              "@id": "https://www.collegepravesh.com/#primaryimage",
              url: "https://img.collegepravesh.com/2017/01/College-Pravesh-Featured.png",
              contentUrl:
                "https://img.collegepravesh.com/2017/01/College-Pravesh-Featured.png",
              width: 660,
              height: 331,
              caption: "College Pravesh Featured",
            },
            {
              "@type": "BreadcrumbList",
              "@id": "https://www.collegepravesh.com/#breadcrumb",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home" },
              ],
            },
            {
              "@type": "WebSite",
              "@id": "https://www.collegepravesh.com/#website",
              url: "https://www.collegepravesh.com/",
              name: "College Pravesh",
              description: "Your personal guide in the World of Engineering",
              publisher: {
                "@id": "https://www.collegepravesh.com/#organization",
              },
              potentialAction: [
                {
                  "@type": "SearchAction",
                  target: {
                    "@type": "EntryPoint",
                    urlTemplate:
                      "https://www.collegepravesh.com/?s={search_term_string}",
                  },
                  "query-input": {
                    "@type": "PropertyValueSpecification",
                    valueRequired: true,
                    valueName: "search_term_string",
                  },
                },
              ],
              inLanguage: "en-US",
            },
            {
              "@type": "Organization",
              "@id": "https://www.collegepravesh.com/#organization",
              name: "College Pravesh",
              url: "https://www.collegepravesh.com/",
              logo: {
                "@type": "ImageObject",
                inLanguage: "en-US",
                "@id": "https://www.collegepravesh.com/#/schema/logo/image/",
                url: "https://img.collegepravesh.com/2019/10/CP_Logo_Dark_500x81.png",
                contentUrl:
                  "https://img.collegepravesh.com/2019/10/CP_Logo_Dark_500x81.png",
                width: 500,
                height: 81,
                caption: "College Pravesh",
              },
              image: {
                "@id": "https://www.collegepravesh.com/#/schema/logo/image/",
              },
              sameAs: [
                "https://www.facebook.com/CollegePravesh/",
                "https://twitter.com/CollegePravesh",
                "https://www.instagram.com/college.pravesh/",
                "https://www.linkedin.com/company/college-pravesh",
              ],
            },
          ],
        })}
      </script>
    </Helmet>
  );
}

export default SEOHelmet;
