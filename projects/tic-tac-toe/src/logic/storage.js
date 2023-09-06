export const saveToStorage = (newBoard, newTurn) => {
    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', newTurn)
}

export const resetStorage = () => {
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
}