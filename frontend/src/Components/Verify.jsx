import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';

function Verify() {
    const [tokenStatus, setTokenStatus] = useState(false)
    const [showMSg,setShowMsg] = useState('')
    const [searchParams, setSearchParams] = useSearchParams()
    const id = searchParams.get('id')
    const url = `http://localhost:8000/api/v1/auth/verify?id=${id}`


    const PostData = async () => {
        try {
            const response = await axios.post(url)
                .then(function (response) {
                    console.log(response.data.status);
                    setTokenStatus(response.data.status)
                    setShowMsg(response.data.message)
                })
                .catch(function (error) {
                    setTokenStatus(false)
                    setShowMsg(error.response.data.message)
                    console.error(error.response.data.message,'promise catch error');

                });
        } catch (error) {
            console.log(error,'catch error')
            setTokenStatus(false)
            setShowMsg(error.message)
        }
    };
    useEffect(() => {
        PostData()
    }, []);
    console.log(tokenStatus, 'token status')
    return (
        <>
            {tokenStatus ?
                <div className='alert alert-success'>{showMSg}</div> :
                <div className='alert alert-danger'>{showMSg}</div>}
            <div className='d-flex justify-content-center'>

                <button className='btn btn-danger'>Go to Home</button>
            </div>
        </>
    )
}

export default Verify