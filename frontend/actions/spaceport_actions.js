import * as SpaceportApiUtil from '../util/spaceport_api_util';

export const RECEIVE_SPACEPORTS = "RECEIVE_SPACEPORTS";
export const RECEIVE_SPACEPORT = "RECEIVE_SPACEPORT";
export const RECEIVE_SPACEPORT_ERRORS = "RECEIVE_SPACEPORT_ERRORS";
export const CLEAR_SPACEPORT_ERRORS = "CLEAR_SPACEPORT_ERRORS";

export const fetchSpaceports = () => dispatch => (
    SpaceportApiUtil.fetchSpaceports()
        .then(
            spaceports => dispatch(receiveSpaceports(spaceports)),
            errors => dispatch(receiveSpaceportErrors(errors.responseJSON))
        )
);

export const fetchSpaceport = spaceportId => dispatch => (
    SpaceportApiUtil.fetchSpaceport(spaceportId)
        .then(
            spaceport => dispatch(receiveSpaceport(spaceport)),
            errors => dispatch(receiveSpaceportErrors(errors.responseJSON))
        )
);

export const receiveSpaceports = spaceports => ({
    type: RECEIVE_SPACEPORTS,
    spaceports,
});

export const receiveSpaceport = spaceport => ({
    type: RECEIVE_SPACEPORT,
    spaceport,
});

export const receiveSpaceportErrors = errors => ({
    type: RECEIVE_SPACEPORT_ERRORS,
    errors,
});

export const clearSpaceportErrors = () => ({
    type: CLEAR_SPACEPORT_ERRORS,
});