export const dateOnCard = (isoDate) => {
    const date = new Date(isoDate);
    const formattedDate = date.toLocaleDateString('en-GB');

    const parts = formattedDate.split('/');
    const formattedParts = [parts[1], parts[0], parts[2]].join('-');

    return formattedParts
    // Output: "11-04-2023"
}

export const dateOnDesc = (isoDate) => {
    const date = new Date(isoDate);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);

    console.log(formattedDate);
    // Output: "April 11, 2023"
}

