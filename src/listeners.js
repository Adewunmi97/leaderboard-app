import { getScores, addScore } from './api';

export const refreshBtnListener = async (e) => {
    const { result } =  await getScores();
    displayList(result)
}

export const displayList = (result) => {
    const ul = document.querySelector('#score');
    ul.innerHTML = '';
    result.forEach(({user, score}) => {
        const li = document.createElement('li');
        li.textContent = `${user}: ${score}`;
        ul.appendChild(li);
    } )
}



