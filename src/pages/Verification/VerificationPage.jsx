import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../../common/Spinner/Spinner';
import VerifyFail from './verify-fail/Verify-fail';
import Verify from './verify-success/Verify';
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
				loading && <LoadingSpinner/>

			}
			{
				!loading && !failed && <Verify/>
			}
			{
				!loading && failed && <VerifyFail/>
			}
		</div>
	);
}

export default VerificationPage;
