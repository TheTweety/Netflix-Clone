export const createASubmission = submission => {
    return $.ajax({
        url: "/api/submission",
        method: "POST",
        data: { submission }
    })
}