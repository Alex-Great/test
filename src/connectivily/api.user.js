import axios from 'axios';

export async function signup(userdata) {
	const baseUrl = "http://localhost:4000/user/signup/";
	return axios.request({
		method: 'post',
		url: baseUrl,
		data: userdata
	});
}

