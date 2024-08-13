import linklist from "./LinkList";

const { default: Link } = require("next/link");

const Links = () => {
  return linklist.map((item) => {
    return (
      <Link
        style={{ color: "black", backgroundColor: "red" }}
        href={item.path}
        key={item.title}
      >
        {item.title}
      </Link>
    );
  });
};

export default Links;
