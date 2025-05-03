import React, { useEffect } from 'react';

const Publications: React.FC = () => {
  useEffect(() => {
    // Dynamically add Substack feed script to the page
    const script1 = document.createElement('script');
    script1.innerHTML = `
      window.SubstackFeedWidget = {
        substackUrl: "miguelbustamante.substack.com",
        posts: 3
      };
    `;
    document.body.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = "https://substackapi.com/embeds/feed.js";
    script2.async = true;
    document.body.appendChild(script2);

    return () => {
      // Clean up the scripts when the component is unmounted
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  return (
    <section id="publications" className="max-w-5xl mx-auto px-4 my-10">
      <h2 className="text-3xl font-bold mb-6">Publications</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div id="substack-feed-embed"></div>
        </div>
        <div>
          <div className="mb-6">
            <iframe
              src="https://oncodingnuances.substack.com/embed"
              title="On Coding Nuances Newsletter"
              width="100%"
              height="320"
              className="border border-gray-200 bg-white"
              frameBorder="0"
              scrolling="no"
            ></iframe>
          </div>
          <div className="mb-6">
            <iframe
              src="https://theaishift.substack.com/embed"
              title="The AI Shift Newsletter"
              width="100%"
              height="320"
              className="border border-gray-200 bg-white"
              frameBorder="0"
              scrolling="no"
            ></iframe>
          </div>
        </div>

        <div className="mb-6">
          {/* Border wrapper */}
          <div className="border-2 border-gray-300 p-6 rounded-lg">
            {/* Title for Data Through Time */}
            <h3 className="text-2xl font-semibold mb-2">Data Through Time</h3>
            {/* Subtitle */}
            <p className="text-lg text-gray-600 mb-4">LinkedIn Newsletter</p>
            <div className="flex items-center gap-6">
              {/* Image */}
              <img
                src="/dtt.png" // Assuming image is in the public folder
                alt="Data Through Time"
                className="w-32 h-32 object-cover"
              />

              {/* Description and Button */}
              <div>
                <p className="text-lg mb-4">
                  Unravel the hidden threads of data and systems that have shaped our world, from ancient civilizations to the digital age.
                </p>
                <a
                  href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7314473640782123009"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg text-lg hover:bg-blue-700 transition-colors"
                >
                  Subscribe
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Publications;
