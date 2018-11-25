import * as cardService from '../services/cards'

export default {
    namespace: 'cards',
    state: {
        data: [
            {
                id: 1,
                setup: 'Did you hear about the two silk worms in a race?',
                punchline: 'It ended in a tie',
            },
            {
                id: 2,
                setup: 'What happens to a frog\'s car when it breaks down?',
                punchline: 'It gets toad away',
            },
        ],
        counter: 100,
    },
    effects: {
        *addNewCard(payload, { call, put }) {
            const data = yield call(cardService.queryCards,payload);
            yield put({ type: 'addNewCard', payload: data });
        }
    },
    reducers: {
        addNewCard(state, { payload: newCard }) {
            const nextCounter = state.counter + 1;
            const newCardWithId = { ...newCard, id: nextCounter };
            const nextData = state.data.concat(newCardWithId);
            return {
                data: nextData,
                counter: nextCounter,
            };
        }
    },
};