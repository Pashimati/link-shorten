import {useEffect, useState} from "react";
import './Table.scss'
import axios from "axios";

const Table = () => {
    const [posts, setPosts] = useState();

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(res => {
                setPosts(res.data)
            })
    }, [])

    return (
        <div className="table-container">
            {!posts ? ("No data found"): (
                <table className="table">
                    <thead>
                        <tr>
                           <th>Id</th>
                           <th>USER Id</th>
                           <th>Title</th>
                           <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            posts.map((post, index) => (
                                <tr key={index}>
                                    <td>{post.id}</td>
                                    <td>{post.userId}</td>
                                    <td>{post.title}</td>
                                    <td>{post.status}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default Table;