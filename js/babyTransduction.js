function transduce(map, filter, reduce, array, initialValue) {
    const newArray = []
    let reducedValue = initialValue

    for (const [index, item] of Object.entries(array)) {
        const modifiedItem = map(item, index, array)

        if (filter(modifiedItem)) {
            newArray.push(modifiedItem)

            reducedValue = reduce(reducedValue, modifiedItem)
        }

    } 

    return reducedValue
}

/*
transduce(
    x => x + 1,
    x => x % 2,
    (x, y) => x + y,
    [1, 3, 4, 5, 6],
    0
) // 12
*/
