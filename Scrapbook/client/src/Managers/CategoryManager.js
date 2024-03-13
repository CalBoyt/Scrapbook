const categoryApiUrl = "https://localhost:5001/api/Category";

export const getAllCategories = () => {
	return fetch(categoryApiUrl).then((res) => {
		return res.json();
	  });
};
