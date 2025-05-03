import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="max-w-5xl mx-auto px-4 my-10">
      <h2 className="text-3xl font-bold mb-6">About Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <p className="text-gray-700">
            I am a Systems Engineer with over 
            15 years of experience in building scalable backend systems, 
            full-stack applications, and robust data pipelines. My expertise spans a wide range of technologies, 
            including React, .NET Core, 
            SQL, and Azure, with a deep 
            focus on delivering high-performance applications. I specialize in developing 
            Progressive Web Applications (PWAs) that are reliable, offline-first, 
            and dynamic, with experience deploying solutions in Azure and 
            AWS environments.
          </p>
        </div>
        <div>
          <h5 className="text-xl font-semibold mb-2">Selected Projects</h5>
          <ul className="list-disc pl-5 text-gray-700">
            <li><strong>NHora:</strong> A time tracking and payroll management system built to streamline payroll operations across various industries.</li>
            <li><a href='https://production.dzapxxp9q500g.amplifyapp.com/login'><strong>MofTracker:</strong></a> A full-stack Progressive Web Application (PWA) built with React, Vite, and .NET Core, deployed on AWS for 
              scalable, reliable project management.</li>
            <li><strong>TimeSheet:</strong> An offline-first time-tracking platform, designed specifically for 
              environments with low connectivity, built with React and TypeScript.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
