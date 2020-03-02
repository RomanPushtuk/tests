export function myAssign(obj, ...objects) {
    return objects.reduce((accum, value) => {
        return {...accum, ...value};
    }, {
        ...obj
    })
}