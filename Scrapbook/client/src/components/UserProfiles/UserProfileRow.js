import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";

export const UserProfileRow = ({ user }) => {
    const navigate = useNavigate();

    const handleNavigate = (e) => {
		e.preventDefault();
		const [, userId] = e.target.id.split("--");
		if (e.target.id.startsWith("details")) {
			navigate(`/userprofiles/${userId}`);
        }
    };
    

    return (
        <tr>
            <h2>Test</h2>
            <td>{user.name}</td>
            <td>
                <Button
					color='primary'
					id={`details--${user.id}`}
					className='me-2'
					onClick={(e) => handleNavigate(e)}
				>
					View Details
				</Button>

            </td>

        </tr>

    );
};
