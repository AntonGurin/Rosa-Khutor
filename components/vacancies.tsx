import { title } from 'process';
import {useQuery} from 'react-query';

interface vacanciesValues{
    Тут лучше удалить интерфейс и сделать тип в файле тайпс
    vacancy: [];
}


const API_URL ="https://api.hh.ru/vacancies"

const Vacancies:React.FC<{vacancies: string}> = ({vacancies}) => {
    return (
 <p> Можно сделать тип  VacanciesProps и тогда удалить (:React.FC<{vacancies: string}>) {vacancies} </p>
)};


export default Vacancies;