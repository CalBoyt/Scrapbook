const baseUrl = "/api/userprofile";

export const login = (userObject) => {
	return fetch(`${baseUrl}/getbyemail?email=${userObject.email}`)
		.then((r) => r.json())
		.then((userProfile) => {
			if (userProfile.id && userProfile.userStatusId !== 2) {
				localStorage.setItem("userProfile", JSON.stringify(userProfile));
				return userProfile;
			} else {
				return undefined;
			}
		});
};

export const logout = () => {
	localStorage.clear();
};

export const register = (userObject, password) => {
	return fetch(baseUrl, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(userObject),
	})
		.then((response) => response.json())
		.then((savedUserProfile) => {
			localStorage.setItem("userProfile", JSON.stringify(savedUserProfile));
		});
};

export const AddUser = (userObject) => {
	return fetch(baseUrl, {
		method: "POST",
		headers: {			
			"Content-Type": "application/json",
		},
		body: JSON.stringify(userObject),
	});
};


export const getAllUserProfiles = () => {
	return fetch(baseUrl).then((res) => res.json());
};

export const getUserProfileById = (id) => {
	return fetch(`/api/userprofile/GetById/${id}`).then((res) =>
		res.json());
};

export const updateUserStatus = (user) => {
	return fetch(`${baseUrl}/UpdateUserStatus/${user.id}`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(user),
	});
};

