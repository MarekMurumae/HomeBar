import { AddIcon } from "../../icons/AddIcon";

interface ComponentProps {
  title?: string;
  body?: string;
  handleClick: () => void;
}

export const EmptyCard = ({ title, body, handleClick }: ComponentProps) => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col rounded-lg bg-white shadow-lg dark:bg-neutral-700 md:max-w-xl md:flex-row">
        <div className="flex flex-col justify-start p-6">
          <h5 className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
            {title}
          </h5>
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            {body}
          </p>
          <button onClick={handleClick} className="self-center">
            <span>
              <AddIcon />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
