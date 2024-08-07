//github link: https://github.com/Cranberry-Sauce/thesauce/blob/dev/client/components/useSortableData.jsx

import { useState, useMemo } from "react"

export default function useSortableData(items, config = null) {
    const [sortConfig, setSortConfig] = useState(config);

    const sortedItems = useMemo(() => {
        let sortableItems = [...items];
        if (sortConfig !== null) {
            sortableItems.sort((a, b) => {
                //check if the sortConfig is a string. If it is, then we are able to call toLowerCase() on it before sorting
                if (typeof a[sortConfig.key] === 'string') {
                    if (a[sortConfig.key].toLowerCase() < b[sortConfig.key].toLowerCase()) {
                        return sortConfig.direction === 'ascending' ? -1 : 1;
                    }
                    if (a[sortConfig.key].toLowerCase() > b[sortConfig.key].toLowerCase()) {
                        return sortConfig.direction === 'ascending' ? 1 : -1;
                    }
                    //if the sortConfig is not a string, then we can't call toLowerCase() on it. So we just sort it as is
                } else {
                    if (a[sortConfig.key] < b[sortConfig.key]) {
                        return sortConfig.direction === 'ascending' ? -1 : 1;
                    }
                    if (a[sortConfig.key] > b[sortConfig.key]) {
                        return sortConfig.direction === 'ascending' ? 1 : -1;
                    }
                }
                return 0;
            });
            //if they entered a search param, we filter the list of users to only show the users that match the search param
            if (sortConfig.params) {
                sortableItems = sortableItems.filter((item) => typeof item[sortConfig.searchKey] === 'string' ?
                    //if the sortConfig is a string, then we can call toLowerCase() on it before filtering
                    item[sortConfig.searchKey]?.toLowerCase().includes(sortConfig.params.toLowerCase()) :
                    //if the sortConfig is not a string, then we can't call toLowerCase() on it. So we just filter it as is
                    item[sortConfig.searchKey].toString()?.includes(sortConfig.params.toString())
                )
            }
        }
        return sortableItems;
    }, [items, sortConfig]);

    const requestSort = (key, searchKey, params = "") => {
        let direction = 'ascending';
        if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }

        setSortConfig({ key, direction, searchKey, params });
    }
    return { sortedUsers: sortedItems, requestSort, sortConfig };
}

// parent table component

const { sortedUsers, requestSort, sortConfig } = useSortableData(users)
const [searchParam, setSearchParam] = useState("")
const [searchKey, setSearchKey] = useState("first_name")

//carrot icon that shows up next to the column that is currently being sorted

onClick={() => handleSearch('city')}