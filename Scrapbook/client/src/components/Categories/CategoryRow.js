import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";

export const CategoryRow = ({ category, post }) => {
	const navigate = useNavigate();
	const handleNavigate = (e) => {
		e.preventDefault();
		const [, categoryId] = e.target.id.split("--");
		if (e.target.id.startsWith("delete-category")) {
			navigate(`/Categories/Delete/${categoryId}`);
		}
		if (e.target.id.startsWith("edit-category")) {
			navigate(`/Categories/Edit/${categoryId}`);
		}
	};

	return (
		<tr>
			<th scope='row'>{category.id}</th>
			<td>{category.name}</td>
			<td>
				<Button
					id={`delete-category--${category.id}`}
					color='danger'
					onClick={(e) => handleNavigate(e)}
				>
					Delete
				</Button>
				<Button id={`edit-category--${category.id}`} onClick={(e) => handleNavigate(e)}>
					Edit
				</Button>
			</td>
		</tr>
	);
};