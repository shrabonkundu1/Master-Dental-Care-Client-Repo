import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CommentsPage = () => {

    const [comments,setComments] = useState([]);
    console.log(comments)
    const [loading,setLoading] = useState(false)
    const {id} = useParams();

    useEffect(() => {
        setLoading(true)
        axios.get(`https://master-dental-server-side.vercel.app/comments/${id}`)
        .then(res => {
            setComments(res.data);
            setLoading(false)
        })
    },[]);

    if(loading) {
        return(
          <div className='min-h-screen flex justify-center items-center'>
            <span className="loading loading-ring loading-lg "></span>
          </div>
        )
      }
    return (
        <div>
            
        </div>
    );
};

export default CommentsPage;