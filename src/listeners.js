import { getScores, addScore } from './api';

export const displayList = (result) => {
  const ul = document.querySelector('#score');
  ul.classList.remove('border', 'border-primary');
  ul.innerHTML = '';
  result.forEach(({ user, score }) => {
    const li = document.createElement('li');
    li.textContent = `${user}: ${score}`;
    ul.appendChild(li);
  });
  ul.classList.add('border', 'border-primary');
};

export const refreshBtnListener = async () => {
  const { result } = await getScores();
  displayList(result);
};

export const sumbitFormListener = async (e) => {
  e.preventDefault();
  e.stopPropagation();
  const name = document.querySelector('#name-input');
  const score = document.querySelector('#score-input');
  await addScore({ user: name.value, score: score.value });
  name.value = '';
  score.value = '';
};
