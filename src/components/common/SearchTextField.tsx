import { SearchIcon } from "../../icons/SearchIcon";

interface ComponentProps {
  placeholder: string;
}

export const SearchTextField = ({
  placeholder: defaultLabel,
}: ComponentProps) => {
  return (
    <>
      <div className="relative mb-6">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <SearchIcon />
        </div>
        <input
          type="text"
          id="input-group-1"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder={defaultLabel}
        />
      </div>
    </>
  );
};
