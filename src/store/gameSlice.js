import { createSlice } from '@reduxjs/toolkit'

// Initial state for the game
const initialState = {
  gameStatus: 'inactive',
  gameCategory: null,
  gameId: null,
  questions: [],
  votesInProgress: true,
  isCurrentGameCompleted: false,
  updatedUsersScores: [],
  time: 10,
  timerOn: false,
}

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setGameStatus: (state, action) => {
      state.gameStatus = action.payload
    },
    setGameCategory: (state, action) => {
      state.gameCategory = action.payload
    },
    setGameId: (state, action) => {
      state.gameId = action.payload
    },
    setQuestions: (state, action) => {
      state.questions = action.payload
    },
    setVotesInProgress: (state, action) => {
      state.votesInProgress = action.payload
    },
    setIsCurrentGameCompleted: (state, action) => {
      state.isCurrentGameCompleted = action.payload
    },
    updateUsersScores: (state, action) => {
      state.updatedUsersScores.push(action.payload)
    },
    resetGame: () => initialState,
    decrementTime: state => {
      if (state.time > 0) {
        state.time -= 1
      } else {
        state.timerOn = false
      }
    },
    setTimerOn: (state, action) => {
      state.timerOn = action.payload
    },
  },
})

// Actions generated from the slice
export const {
  setGameStatus,
  setGameCategory,
  setGameId,
  setQuestions,
  setVotesInProgress,
  setIsCurrentGameCompleted,
  updateUsersScores,
  resetGame,
  decrementTime,
  setTimerOn,
} = gameSlice.actions

// The reducer
export default gameSlice.reducer
