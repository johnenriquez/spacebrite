export const fetchSpaceports = () => (
    $.ajax({
        type: 'GET',
        url: '/api/spaceports',
    })
);