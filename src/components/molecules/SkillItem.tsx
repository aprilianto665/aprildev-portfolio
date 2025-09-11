interface SkillItemProps {
  skill: string;
}

export default function SkillItem({ skill }: SkillItemProps) {
  return (
    <div className="flex items-center space-x-3">
      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
      <span className="text-gray-700">{skill}</span>
    </div>
  );
}