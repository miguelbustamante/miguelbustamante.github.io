function Publications() {
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
      </div>
    </section>
  );
}

export default Publications;