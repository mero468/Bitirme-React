import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
function VerificationPage() {
	const [loading, setLoading] = useState(true);
	const [failed, setFailed] = useState(false);
	const { token } = useParams();
	const verifyURL = 'https://bitirmetezi-374506.oa.r.appspot.com/api/users/verify/';
	useEffect(() => {
		const requestOptions = {
			method: 'POST',
			redirect: 'follow',
		};
		fetch(verifyURL.concat(token), requestOptions)
			.then((response) => {
				/*
				Response status is 200 for successfull verification
				400 for bad token (Invalid token, invalid signature etc.)
				401 for expired token(Token expires after 24 Hours)
				*/
				if (response.status === 200) {
					setFailed(false);
				} else {
					setFailed(true);
					console.log(response.body);
				}
			})
			.catch(() => {
				setFailed(true);
			})
			.finally(() => {
				setLoading(false);
			});
	}, [token]);
	return (
		<div>
			{
				loading && <h1>Loading...</h1>
				/*Return loading screen here like with a spinner and a text that says verifying your email...*/
			}
			{
				!loading && !failed && <h1>Success</h1>
				/*Return success page here*/
			}
			{
				!loading && failed && <h1>Failed</h1>
				/*Return failed page here*/
			}
		</div>
	);
}

export default VerificationPage;
