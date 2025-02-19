import styles from './styles.module.css'

export const Pagination = ({totalPages, currentPage, handleNextPage, handlePreviousPage, handlePageClick}) => {
    return (
        <div className={styles.pagination}>
            <button onClick={handlePreviousPage} disabled={currentPage <= 1} className={styles.arrow}>{'<'}</button>
            <div className={styles.list}>
                {[...Array(totalPages)].map((_, index) => (
                        <button onClick={() => handlePageClick(index + 1)}
                                className={styles.pageNumber}
                                disabled={index + 1 === currentPage}
                                key={index}>{index + 1}</button>
                    )
                )}
            </div>
            <button onClick={handleNextPage} disabled={currentPage >= 10} className={styles.arrow}>{'>'}</button>
        </div>
    )
}
