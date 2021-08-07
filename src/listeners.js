import { getScores, addScore } from './api';

export const refreshBtnListener = async (e) => {
    const { result } =  await getScores();
    displayList(result)
}

