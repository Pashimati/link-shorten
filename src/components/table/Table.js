import {useEffect, useState} from "react";
import './Table.scss'
import axios from "axios";
import _ from "lodash"


const pageSize = 10;
const Table = () => {
    const [links, setLinks] = useState();
    const [paginatedLink, setPaginatedLink] = useState();
    const [currentPage, setCurrentPage] = useState();

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(res => {
                console.log(res.data)
                setLinks(res.data)
                setPaginatedLink(_(res.data).slice(0).take(pageSize).value())
            })
    }, [])

    const pageCount = links ? Math.ceil(links.length/pageSize) : 0
    if (pageCount === 1) return null;
    const pages = _.range(1, pageCount + 1)

    const pagination = (pageNo) => {
        setCurrentPage(pageNo)
        const startIndex = (pageNo - 1) * pageSize;
        const paginatedLink = _(links).slice(startIndex).take(pageSize).value();
        setPaginatedLink(paginatedLink)
    }

    return (
        <div className="table-container">
            <h1 className="table-title">Список ссылок</h1>
            {!paginatedLink ? ("No data found"): (
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
                            paginatedLink.map((link, index) => (
                                <tr key={index}>
                                    <td>{link.id}</td>
                                    <td>{link.userId}</td>
                                    <td>{link.title}</td>
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