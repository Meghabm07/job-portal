const findTotalPages = (totalList, rowCount) => {

    var totalPage = 0;

    totalPage = totalList / rowCount

    // Check number is float
    if (Number(totalPage) === totalPage && totalPage % 1 !== 0) {
        totalPage = parseInt(totalPage);
        totalPage++;
    }

    return totalPage;

}
export default findTotalPages;