import Link from "next/link";

type HighlightCardProps = {
  card: {
    title: string;
    href: string;
  }
}


export function HighlightCard({ card }: HighlightCardProps) {


  return (
    <Link
      href={card.href}
      passHref
    >
      <div
        className="text-lg font-semibold border-b-[1px] border-gray-300 pb-2 hover:underline">
        {card.title}
      </div>
    </Link>

  )
}