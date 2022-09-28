const showFormattedDate = (date, region) => {
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    return new Date(date).toLocaleDateString(region, options);
};

export { showFormattedDate };
