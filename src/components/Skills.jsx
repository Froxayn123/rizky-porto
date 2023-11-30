import Card from "./Card";

const Skills = () => {
  return (
    <div className="ms-12 mt-12 flex justify-start items-start">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-center text-6xl font-frs underline underline-offset-8">Skills:</h1>
        <div className="text-center">
          <div className="flex">
            <Card title="HTML, CSS & JavaScript" sizeSkillDot="p-5" widthSkillDot="w-2" color="bg-green-300" desc="Level: Skillful" size="w-72" items={3} />
            <Card title="ReactJS" sizeSkillDot="p-5" widthSkillDot="w-2" color="bg-green-300" desc="Level: Skillful" size="w-72" items={3} />
          </div>
          <div className="flex">
            <Card title="TailwindCSS & Bootstrap" sizeSkillDot="p-5" widthSkillDot="w-2" color="bg-green-300" desc="Level: Skillful" size="w-72" items={3} />
            <Card title="GIT & GitHub" sizeSkillDot="p-5" widthSkillDot="w-2" color="bg-green-300" desc="Level: Skillful" size="w-72" items={3} />
          </div>
          <div className="flex">
            <Card title="NodeJS & NPM" sizeSkillDot="p-5" widthSkillDot="w-2" color="bg-green-300" desc="Level: Beginner" size="w-72" items={2} />
            <Card title="ExpressJS & Hapi" sizeSkillDot="p-5" widthSkillDot="w-2" color="bg-green-300" desc="Level: Beginner" size="w-72" items={2} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
