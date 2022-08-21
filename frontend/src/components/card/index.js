import "./styles.css";
import { useEffect, useState } from "react";
import api from "../../services/api";

const Card = ({ id, description, deadline, done }) => {
  const [handleDone, setHandleDone] = useState(done);
  const [firstRender, setFirstRender] = useState(true);
  const [editing, setEditing] = useState(false);

  const [handleDesc, setHandleDesc] = useState(description);
  const [handleDeadLine, setHandleDeadline] = useState(deadline);

  useEffect(() => {
    if (firstRender) {
      setFirstRender(false);
    } else {
      const data = {
        description: description,
        deadline: deadline,
        done: handleDone,
      };
      api.put(`tarefas/${id}`, data).catch(() => {
        throw new Error("put_update_task_error");
      });
    }
  }, [handleDone]);

  const updateTask = () => {
    if (!editing) {
      setEditing(true);
    } else {
      const data = {
        description: handleDesc,
        deadline: handleDeadLine,
        done: handleDone,
      };
      api
        .put(`tarefas/${id}`, data)
        .then(() => {
          setTimeout(() => {
            window.location.reload();
          }, 200);
        })
        .catch((err) => {
          throw new Error(err);
        });
    }
  };

  const deleteTask = () => {
    api
      .delete(`tarefas/${id}`)
      .then(() => {
        setTimeout(() => {
          window.location.reload();
        }, 200);
      })
      .catch((err) => {
        throw new Error(err);
      });
  };

  return (
    <div className={"task-card container"}>
      <div className={"row title-row"}>
        <div className={"col"}>
          <div className={"title"}>Tarefa: {id}</div>
        </div>
        <div className={"col"}>
          <button onClick={deleteTask}>excluir</button>
        </div>
        <div className={"col"}>
          <button onClick={updateTask}>{editing ? "salvar" : "editar"}</button>
        </div>
      </div>
      <div className={"row description-row"}>
        <div className={"col"}>
          {editing ? (
            <textarea
              id={"description"}
              className={"input-home"}
              value={handleDesc}
              onChange={(v) => {
                setHandleDesc(v.target.value);
              }}
              placeholder={"descrição"}
            />
          ) : (
            <div className={"description"}>{description}</div>
          )}
        </div>
      </div>
      <div className={"row info-row"}>
        <div className={"col"}>
          {editing ? (
            <input
              id={"deadline"}
              className={"input-home"}
              onChange={(v) => {
                setHandleDeadline(v.target.value);
              }}
              type={"date"}
              placeholder={"descrição"}
            />
          ) : (
            <div>{deadline || "Sem data limite"}</div>
          )}
        </div>
        <div className={"col"}>
          <input
            id={"done"}
            checked={handleDone}
            onChange={() => {
              setHandleDone(!handleDone);
            }}
            type={"checkbox"}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
