import { AddIcon } from "../../icons/AddIcon";

interface ComponentProps {
  title?: string;
  body?: string;
  handleClick: () => void;
}

export const EmptyCard = ({ title, body, handleClick }: ComponentProps) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4 grid content-center">
      <a
        onClick={handleClick}
        className="justify-self-center c-card rounded-lg overflow-hidden hover:cursor-pointer"
      >
        <span>
          <AddIcon />
        </span>
      </a>
    </div>
  );
};
