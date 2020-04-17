import * as SpaceportApiUtil from '../util/spaceport_api_util';

export const RECEIVE_FLIGHT = "RECEIVE_FLIGHT";
export const RECEIVE_FLIGHT_ERRORS = "RECEIVE_FLIGHT_ERRORS";


export const fetchFlight = flightId => dispatch => (
    SpaceportApiUtil.fetchFlight(flightId)
        .then(
            payload => dispatch(receiveFlight(payload)),
            errors => dispatch(receiveFlightErrors(errors.responseJSON))
        )
);

export const receiveFlight = payload => ({
    type: RECEIVE_FLIGHT,
    flight: payload.flight,
});

export const receiveFlightErrors = errors => ({
    type: RECEIVE_FLIGHT_ERRORS,
    errors,
});