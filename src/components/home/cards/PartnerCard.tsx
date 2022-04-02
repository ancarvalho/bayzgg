import Link from "next/link";
import { PartnerModel } from "../../../models/PartnerModel";

type PartnerCardProps = {
  partners: PartnerModel
}



export function PartnerCard({ partners }: PartnerCardProps) {
  return (

    <>
      <div className="w-full h-[210px] duration-300 ease-in-out transition-transform transform hover:-translate-y-2">
        <a
          className="block w-full h-full bg-grey-dark bg-no-repeat bg-center bg-cover rounded-md"
          href={`${partners.href}`}
          target="_blank"
          style={{ backgroundImage: `url(${partners.image_url})` }}>
        </a>
      </div>
    </>

  );
}