import {useEffect, useState} from "react";
import './Table.scss'
import useLinkShortenService from "../../services/Link-shortenService";
import MySelect from "../select/My-select";


const Table = () => {
    const [links, setLinks] = useState([]);
    const [selectedSort, setSelectedSort] = useState('');
    const [offset, setOffset] = useState(0);

    const { getStatistics } = useLinkShortenService();

    useEffect(() => {
       onRequest();
    }, [])


    const sortLinks = (sort) => {
        setSelectedSort(sort)
        if(sort === 'id' || sort === 'counter'){
            return  setLinks([...links].sort((a, b) => a[sort] - b[sort]));
        }
        else{
            return  setLinks([...links].sort((a, b) =>  a[sort].localeCompare(b[sort])))
        }
    }

    const onRequest = (offset) => {
        getStatistics(offset)
            .then((res) => {
                onLinkListLoaded(res.data)
        })
    }

    const onLinkListLoaded = (newLinkList) => {

        setLinks(links => [...links, ...newLinkList]);
        setOffset(offset => offset + 10);
    }

    return (
        <div className="table-container">
            <h1 className="table-title">Список ссылок</h1>

            <MySelect
                value={selectedSort}
                onChange={sortLinks}
                defaultValue="Сортировка"
                options={[
                    {value: 'target', name: 'По названию'},
                    {value: 'counter', name: 'По количеству кликов'},
                    {value: 'id', name: 'По уникальному индификатору'},
                ]}
            />

            {!links
                ? <h3 className='table-notfound'>Список пуст</h3>
                : (
                <table className="table">
                    <thead>
                        <tr>
                           <th>Позиция</th>
                           <th>Уникальный идентификатор</th>
                           <th>Стандартная ссылка</th>
                           <th>Короткая ссылка</th>
                           <th>Количество переходов</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            links.map((link, index) => (
                                <tr key={index + 1}>
                                    <td>{index + 1}</td>
                                    <td>{link.id}</td>
                                    <td>{link.target.substring(0,28)}...</td>
                                    <td>{link.short}</td>
                                    <td>{link.counter}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            )}
            <button
                className='table__button'
                onClick={() => onRequest(offset)}
            >
                Ещё...
            </button>
        </div>

    );
};

export default Table;

// <nav className="nav">
//     <ul className="pagination">
//         {
//             pages.map((page) => (
//                 <li
//                     className={page === currentPage ? "page-item active" : "page-item"}
//                 >
//                     <p
//                         className="page-link"
//                         onClick={() => pagination(page)}
//                     >
//                         {page}
//                     </p>
//
//                 </li>
//             ))
//         }
//     </ul>
// </nav>