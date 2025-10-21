interface SkillBadgeProps {
  skill: string;
}

export default function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <span className="inline-block px-3 py-1 bg-orange-100 text-orange-800 text-sm font-medium rounded-full hover:bg-orange-200 transition-colors">
      {skill}
    </span>
  );
}