import { FaBeer } from "react-icons/fa";
import { TbTrademark } from "react-icons/tb";

export default function IconsPage() {
  return (
    <div>
      <p className="flex">
        <span className="mr-2">Text</span>
        <FaBeer />
        Text
      </p>
      <FaBeer />
      <TbTrademark />
    </div>
  );
}
