import Card from "./Card";

const Skills = () => {
  return (
    <div className="md:ms-12 md:mt-12 flex justify-start items-start max-md:justify-center max-md:items-center">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-center text-6xl font-frs underline underline-offset-8">Skills:</h1>
        <div className="text-center max-md:mt-12">
          <div className="flex max-md:flex-col">
            <Card title="HTML, CSS & JavaScript" sizeSkillDot="p-5" widthSkillDot="w-2" color="bg-green-300" desc="Level: Skillful" size="w-72" items={3} link="" />
            <Card title="ReactJS" sizeSkillDot="p-5" widthSkillDot="w-2" color="bg-green-300" desc="Level: Skillful" size="w-72" items={3} link="" />
          </div>
          <div className="flex max-md:flex-col">
            <Card title="TailwindCSS & Bootstrap" sizeSkillDot="p-5" widthSkillDot="w-2" color="bg-green-300" desc="Level: Skillful" size="w-72" items={3} link="" />
            <Card title="GIT & GitHub" sizeSkillDot="p-5" widthSkillDot="w-2" color="bg-green-300" desc="Level: Skillful" size="w-72" items={3} link="" />
          </div>
          <div className="flex max-md:flex-col">
            <Card title="NodeJS & NPM" sizeSkillDot="p-5" widthSkillDot="w-2" color="bg-green-300" desc="Level: Beginner" size="w-72" items={2} link="" />
            <Card title="ExpressJS & Hapi" sizeSkillDot="p-5" widthSkillDot="w-2" color="bg-green-300" desc="Level: Beginner" size="w-72" items={2} link="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
