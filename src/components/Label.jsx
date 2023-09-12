import { Link as Anchor } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import user_actions from "../store/actions/users";
import Swal from "sweetalert2";
const { logout } = user_actions;

export default function Label({ option, showMenu, setShowMenu }) {
    const dispatch = useDispatch();
    const user = useSelector((store) => store.users.user);

    const handleSignOut = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Leave it!'
        }).then((result) => {
            if (result.isConfirmed)
                dispatch(logout());
        });
    };

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div className="md:flex md:items-center md:gap-4 lg:gap-8">
            {option.map((each) => (
                <Anchor
                    key={each.to}
                    to={each.to}
                    className="block font-bold text-center text-[14px]
                    md:text-[20px]
                    lg:text-[24px]
                    min-[2000px]:text-[28px]
                    min-[2500px]:text-[32px] mb-2"
                    onClick={toggleMenu}
                >
                    {each.title}
                </Anchor>
            ))}
            {user.mail ? (
                <Anchor
                    to="/auth/signin"
                    onClick={handleSignOut}
                    className="block bg-[#4F46E5] hover:bg-indigo-700 text-white px-4 py-2 rounded-xl font-bold text-center text-[14px]
                        md:text-[20px]
                        lg:text-[24px] lg:px-6 lg:py-3
                        min-[2000px]:text-[28px]
                        min-[2500px]:text-[32px] mb-2"
                >
                    Sign Out
                </Anchor>
            ) : (
                <Anchor
                    to="/auth/signin"
                    className="block text-lg font-semibold text-white bg-[#4f46e5] py-2 px-6 rounded-md hover:bg-[#3d388d] mb-2"
                    onClick={toggleMenu}
                >
                    🙍‍♂️Login
                </Anchor>
            )}
        </div>
    );
}
