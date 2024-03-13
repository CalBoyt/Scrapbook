import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Table } from "reactstrap";
import { getAllCategories } from "../../Managers/CategoryManager";
import { CategoryRow } from "./CategoryRow";

export const CategoryList = () => {
    const [categories, setCategories] = useState([]);
	const navigate = useNavigate();
	const getCategories = () => {
		return getAllCategories().then((categories) => setCategories(categories));
	};
	useEffect(() => {
		getCategories();
	}, []);

    return (
        <Container>
            <h2>Categories</h2>
			<Table striped>
				<thead>
					<tr>
						<th>#</th>
						<th>Name</th>
					</tr>
				</thead>
        <tbody>
		{categories.map((category) => (
						<CategoryRow key={category.id} category={category} />
					))}
        </tbody>
			</Table>
        </Container>
    )

}