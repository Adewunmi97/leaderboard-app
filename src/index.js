import 'bootstrap';
import './app.scss';
import { refreshBtnListener, sumbitFormListener, displayList } from './listeners';
import { getScores } from './api';


(async() => {
    const {result} = await getScores();
    displayList(result);
})();

document.querySelector('#refresh-btn').addEventListener('click', refreshBtnListener);
document.querySelector('#add-a-score').addEventListener('submit', sumbitFormListener);