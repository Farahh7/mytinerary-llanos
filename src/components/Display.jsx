import { Link as Anchor } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import user_actions from "../store/actions/users";
import Swal from "sweetalert2";
const { logout } = user_actions;
export default function Display({ option, showMenu, setShowMenu }) {
    const dispatch = useDispatch();
    const user = useSelector((store) => store.users.user);

    console.log(user);


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
            if (result.isConfirmed) {
                dispatch(logout());

                setShowMenu(false);

            }
        });
    };

    const closeMenu = () => {
        setShowMenu(false);
    };

    return (
        <div className={`md:hidden ${showMenu ? 'block' : 'hidden'}`}>
            <div className="fixed inset-x-0 top-0 bg-white w-64 p-4 transform transition-transform ease-in-out duration-300">
                {option.map((each) => (
                    <Anchor
                        key={each.to}
                        to={each.to}
                        className="block font-bold text-[20px] text-start mb-2"
                        onClick={closeMenu}
                    >
                        {each.title}
                    </Anchor>
                ))}
                {user.mail ? (
                    <Anchor
                        to=""
                        onClick={handleSignOut}
                        className="block bg-[#4F46E5] hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-bold text-[20px] text-start mb-2"
                    >
                        Sign Out
                    </Anchor>
                ) : (
                    <Anchor
                        to="/auth/signin"
                        className="block text-lg font-semibold text-white bg-[#4f46e5] py-2 px-6 rounded-md hover:bg-[#3d388d] mb-2"
                    >
                        🙍‍♂️Login
                    </Anchor>
                )}
            </div>
        </div>
    );
}