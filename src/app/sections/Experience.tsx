import ExperienceCard from "../components/ExperienceCard";
const Experience = () => {
  return (
    <section className="sm:px-16 xl:px-48 py-20">
      <h1 className="mb-8 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Experience
      </h1>
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        <ExperienceCard
          time="September 2023 - Present"
          title="Graduate Software Developer"
          company="JD Power"
          bulletPointList={[
            "Build new interactive dashboards and visualisations to illustrate comparative quality analyses that supports J.D Power's benchmarking survey data",
            "Re-design and improve bespoke customer interfaces to meet their specific needs.",
            "Design, develop and maintain data sources relating to automotive quality and benchmarking analysis.",
            "Engage with designers and customers throughout the design, development and support phases."
          ]}
        />
        <ExperienceCard
          time="September 2021 - June 2023"
          title="Teaching Assistant"
          company="Swansea University"
          bulletPointList={[
            "Assessing, assisting, and guiding undergraduate and postgraduate computer science students with their laboratory exercises.",
            "Explaining difficult concepts about concurrency, functional and logic programming, and web application development to students with different levels of technical abilities.",
            "Working alongside experienced lecturers and students.",
            "Gaining technical and communication skills."
          ]}
        />
        <ExperienceCard
          time="June 2021 - July 2021"
          title="Web Developer Intern"
          company="Swansea University"
          bulletPointList={[
            "Maintained the Careers website of Swansea University, using different technologies such as Nuxt.js, Vue.js, MySQL, HTML and CSS.",
            "Used version control to collaborate with team members and track changes to the code.",
            "Ensured all milestones and deadlines were met in time.",
            "Collaborated with many people, internal and external to the university, to contribute to the success of the university.",
            "Worked on a meaningful project that aligns with the employability team’s strategy."
          ]}
        />
      </ol>
    </section>
  );
};

export default Experience;
