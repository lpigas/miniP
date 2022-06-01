import React from "react";
import "./Home.css";
import Layout from "../../components/layouts/Layout/Layout";
import Clock from "./Components/Clock/Clock";

export default function Home() {
  return (
    <Layout>
      <div className="home">
        <div>
          Website home page A home page is generally the primary web page which
          a visitor navigating to a website from a search engine will see, and
          it may also serve as a landing page to attract visitors.[1][2] Thus
          good home page design is usually a high priority for a website.[3] For
          example, a news website may present headlines and first paragraphs of
          top stories, with links to full articles.[4] Usually, the home page is
          located at the root of the website's domain or subdomain. For example,
          if the domain is example.com, the home page is likely located at
          www.example.com/. In some cases, the home page is a site directory,
          particularly when a website has multiple home pages. Wikipedia, for
          example, has a site directory at wikipedia.org that links to every
          language-specific home page, including en.wikipedia.org. Structure A
          homepage is oftentimes designed to catch attention, and as such,
          important elements are positioned at the top in a strict hierarchy of
          importance.[5] Hero image One of the commonly found aspects of a
          homepage is a hero image, a large eye-catching banner image often
          containing a photograph or drawing depicting the webpage owner's
          values, services, etc. as a message.[6][7] Hero images are immediately
          visible above the fold, without scrolling the page down.[8] A hero
          image may have several complementary elements as an overlay, such as
          the website's logo, a call to action, and a brief description.
        </div>
        {/* <Clock /> */}
      </div>
    </Layout>
  );
}
