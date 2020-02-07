

const PING = "PING";

const initialState = {
    ping:"ping"
};

export const ping = (state = initialState, action) => {
    switch(action.type) {
        case PING:
            return(
                ping:"Pong"
            )
        default:
            return state;
    }
};