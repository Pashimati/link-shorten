import {useEffect, useState} from "react";
import './Table.scss'
import axios from "axios";
import _ from "lodash"


const pageSize = 10;
const Table = () => {
    const [posts, setPosts] = useState();
    const [paginatedPost, setPaginatedPost] = useState();
    const [currentPage, setCurrentPage] = useState();

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(res => {
                console.log(res.data)
                setPosts(res.data)
                setPaginatedPost(_(res.data).slice(0).take(pageSize).value())
            })
    }, [])

    const pageCount = posts ? Math.ceil(posts.length/pageSize) : 0
    if (pageCount === 1) return null;
    const pages = _.range(1, pageCount + 1)

    const pagination = (pageNo) => {
        setCurrentPage(pageNo)
        const startIndex = (pageNo - 1) * pageSize;
        const paginatedPost = _(posts).slice(startIndex).take(pageSize).value();
        setPaginatedPost(paginatedPost)
    }

    return (
        <div className="table-container">
            {!paginatedPost ? ("No data found"): (
                <table className="table">
                    <thead>
                        <tr>
                           <th>Id</th>
                           <th>USER Id</th>
                           <th>Title</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            paginatedPost.map((post, index) => (
                                <tr key={index}>
                                    <td>{post.id}</td>
                                    <td>{post.userId}</td>
                                    <td>{post.title}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            )}
            <nav className="nav">
                <ul className="pagination">
                    {
                        pages.map((page) => (
                            <li
                                className={page === currentPage ? "page-item active" : "page-item"}
                            >
                                <p
                                    className="page-link"
                                    onClick={() => pagination(page)}
                                >
                                    {page}
                                </p>

                            </li>
                        ))
                    }
                </ul>
            </nav>
        </div>
    );
};

export default Table;