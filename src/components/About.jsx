function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-4 my-10">
      <h2 className="text-3xl font-bold mb-6">About Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="no-border">
          <p className="text-gray-700">
            Systems Engineer and Data Specialist with a strong track record of designing scalable data solutions and resilient automations. Skilled in building robust APIs that bridge legacy and modern systems, along with control applications that ensure reliable data transfer across platforms. Experienced in developing time-tracking platforms tailored for offline and low-connectivity environments in construction and NGO contexts. Beyond engineering, I regularly explore the cultural and historical layers of technology in publications like The AI Shift, Data Through Time, and The Nonsense in My Mind, blending technical depth with narrative clarity. Passionate about systems that work — and stories that explain why they matter.
          </p>
        </div>
        <div className="no-border">
          <h5 className="text-xl font-semibold mb-2">Projects</h5>
          <ul className="list-disc pl-5 text-gray-700">
            <li><strong>NHora:</strong> A time tracking and payroll management system.</li>
            <li><strong>mViaticos:</strong> A travel expense tracking system with invoice validation.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;