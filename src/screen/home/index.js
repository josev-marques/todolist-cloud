import './styles.css';
import {useEffect, useState} from "react";
import api from "../../services/api";
import Card from "../../components/card";

const Home = () => {
    const [description, setDescription] = useState('');
    const [deadline, setDeadline] = useState(null);
    const [done, setDone] = useState(false);
    const [tasks, setTasks] = useState([]);

    useEffect( () => {
        api.get('tarefas').then((res) => {
            setTasks(res.data);
        }).catch((err) => {
            return err;
        });
    }, [])

    const submit = (event) => {
        event.preventDefault();
        setDone(false);
        const data = {
            description: description,
            deadline: deadline,
            done: done
        };
        api.post('tarefas', data)
            .then(() => {
                setTimeout(() => {
                    window.location.reload();
                }, 200)
            })
            .catch((err) => {
            throw new Error(err);
        })
    }
    return (
        <div className="home">
            <header className="home-header">
                <form onSubmit={submit}>
                    <textarea id={'description'} className={'input-home'}
                           onChange={(v) => {setDescription(v.target.value)}}
                           placeholder={'descrição'}/>

                    <input id={'deadline'} className={'input-home'}
                           onChange={(v) => {setDeadline(v.target.value)}}
                           type={"date"}/>

                    <input id={'submit'} className={'btn-home'}
                           type={"submit"}
                           value={'Nova tarefa'}/>
                </form>
            </header>
            <article className={'canvas'}>
                {
                    tasks.map((item, index) => (
                        <Card description={item.description} deadline={item.deadline} done={item.done} id={item._id} key={index}/>
                    ))
                }
            </article>
        </div>
    );
}

export default Home;
