import Link from "next/link";

interface Props {
  label: string;
  href: string;
  icon?: React.ReactNode;
}

export const LinkItem: React.FC<Props> = ({ label, href, icon }: Props) => {
  return (
    <Link href={href} className="flex items-center gap-2">
      {icon && <span className="icon">{icon}</span>}
      <span>{label}</span>
    </Link>
  );
};
