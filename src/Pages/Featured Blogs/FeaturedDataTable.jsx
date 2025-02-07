import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';

const columns = [
    { name: "blog_url", selector: (row) => row.blog_url, sortable: true },
    { name: "title", selector: (row) => row.title, sortable: true },
    { name: "category", selector: (row) => row.category },
    { name: "blogDeadline", selector: (row) => row.blogDeadline, sortable: true },
  ];

  const customStyles = {
    headCells: {
      style: {
        backgroundColor: "#0077b6", // Green Header
        color: "white",
        fontSize: "16px",
        fontWeight: "bold",
        padding: "12px",
      },
    },
    rows: {
      style: {
        fontSize: "14px",
        fontWeight:"medium",
        "&:hover": {
          backgroundColor: "#00b4d8", // Hover effect
        },
      },
    },
   
  };
const FeaturedDataTable = () => {
      const [data,setData] = useState([]);
      const [loading,setLoading] = useState(true);

      useEffect(() => {
        axios.get(`https://master-dental-server-side.vercel.app/top_post`)
        .then(res => {
            setData(res.data)
            setLoading(false)
        })
      },[])
      if(loading) {
        return(
          <div className='min-h-screen flex justify-center items-center'>
            <span className="loading loading-ring loading-lg "></span>
          </div>
        )
      }
    return (
        <div className='w-[98%] md:w-[90%] mx-auto'>
            <DataTable
        title="Top Post"
        columns={columns}
        data={data}
        highlightOnHover
        striped
        progressPending={loading}
        customStyles={customStyles}
      />
        </div>
    );
};

export default FeaturedDataTable;