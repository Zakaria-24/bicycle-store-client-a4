import { Link } from "react-router-dom";

const FooterLink = ({ fTitle, fLink }: { fTitle: string; fLink: string }) => {
  return (
    <li>
      <Link to={fLink} className="text-white transition hover:text-[#E63946]">
        {fTitle}
      </Link>
    </li>
  );
};

export default FooterLink;
