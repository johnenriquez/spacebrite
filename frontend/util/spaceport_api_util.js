export const fetchSpaceports = () => (
    $.ajax({
        type: 'GET',
        url: '/api/spaceports',
    })
);

export const fetchSpaceport = spaceportId => (
    $.ajax({
        type: 'GET',
        url: `/api/spaceports/${spaceportId}`,
    })
);