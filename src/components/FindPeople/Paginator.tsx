import s from "./FindPeople.module.css"
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";
import React, {ChangeEvent} from "react";

type PaginatorPropsType = {
    currentPage: number
    totalCount: number
    pageSize: number
    onChangePaginationHandler: (event: ChangeEvent<unknown>, page: number) => void
}

export const Paginator = (props: PaginatorPropsType) => {
    let pagesCount = Math.ceil(props.totalCount / props.pageSize);
    const paginationStyle = {
        display: 'flex',
        alignItems: 'center',
        width: '100%',

    }
   return <div className={s.pagination}>
        <Stack style={paginationStyle}>
            <Pagination count={pagesCount}
                        page={props.currentPage}
                        size={"large"}
                        onChange={props.onChangePaginationHandler}/>
        </Stack>
    </div>
}