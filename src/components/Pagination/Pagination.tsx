import React from 'react'
import ReactPaginate, { ReactPaginateProps } from 'react-paginate'

import IconChevronLeft from '@components/Icon/IconChevronLeft'
import IconChevronRight from '@components/Icon/IconChevronRight'

export type PaginationProps = {
  pageCount: number
} & ReactPaginateProps

function Pagination({ pageCount = 10, ...restProps }: PaginationProps) {
  return (
    <>
      <ReactPaginate
        {...restProps}
        pageCount={pageCount}
        containerClassName="flex gap-2 items-center w-full justify-end"
        pageLinkClassName="hover:bg-slate-300 px-2 py-1 rounded"
        activeLinkClassName="bg-slate-300"
        pageRangeDisplayed={3}
        previousLinkClassName="flex items-center"
        nextLinkClassName="flex items-center"
        previousLabel={
          <IconChevronLeft className="w-5 h-5 rounded hover:bg-slate-300" />
        }
        nextLabel={
          <IconChevronRight className="w-5 h-5 rounded hover:bg-slate-300" />
        }
      />
    </>
  )
}

export default Pagination
