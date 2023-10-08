import { useContext } from "react";
import ProfileIcon from "../../assets/profileicon.png";
import PropTypes from "prop-types";
import { AuthContex } from "../../provider/AuthProvider";
const DropDown = ({ showDropDown, control }) => {
  const { logout } = useContext(AuthContex);
  const handelSignOut = () => {
    logout();
  };
  return (
    <div className="relative">
      <div
        className="flex items-center whitespace-nowrap rounded bg-primary  transition duration-150 ease-in-out cursor-pointer"
        onClick={control}
      >
        <img
          src={ProfileIcon}
          alt=""
          className="w-8 h-8 rounded-full  ring-1 ring-[#00D991]"
        />
      </div>
      <ul
        className={`absolute z-[1000] float-left m-0 min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 mt-3 ${
          showDropDown ? "block" : "hidden"
        } `}
        aria-labelledby="dropdownMenuSmallButton"
      >
        <li onClick={handelSignOut}>
          <span className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600 cursor-pointer">
            Logout
          </span>
        </li>
      </ul>
    </div>
  );
};

DropDown.propTypes = {
  showDropDown: PropTypes.bool,
  control: PropTypes.func,
};

export default DropDown;
