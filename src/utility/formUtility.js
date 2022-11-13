
export const generateId = (forms) => {
    let newId;
    do {
        newId = forms.length + 1;
    }
    while(checkId(newId, forms));

    return newId;
};
    const checkId = (id, forms) => {
        return forms.filter((f) => f.id === id).length !== 0;
    };
