import React from "react";

interface ExperienceCardProps {
  time: string;
  title: string;
  company: string;
  bulletPointList: string[];
}
const ExperienceCard: React.FC<ExperienceCardProps> = ({
  time,
  title,
  company,
  bulletPointList,
}) => {
  return (
    <li className="mb-10 ms-4">
      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
      <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
        {time}
      </time>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        {title}
      </h3>
      <h3 className="mb-1 text-sm text-gray-900 dark:text-white">{company}</h3>
      <ul className="list-disc list-inside text-gray-500 dark:text-gray-400">
        {bulletPointList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </li>
  );
};

export default ExperienceCard;
