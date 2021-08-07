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


export const sumbitFormListener = async (e) => {
    e.preventDefault();
    e.stopPropagation()
    const name = document.querySelector('#name-input');
    const score = document.querySelector('#score-input');
    const res = await addScore({ "user": name.value, "score": score.value});
    name.value = '';
    score.value = '';
}
