import React from "react";
import { Sub } from "../interfaces/types";
import style from "./List.module.css";

interface Props {
  subs: Array<Sub>;
}

const List = ({ subs }: Props) => {
  return (
    <div className={style.body}>
      <ul>
        {subs.map((sub) => {
          return (
            <li key={sub.nick}>
              <h4>
                {sub.nick}(<small>{sub.subMonths}</small>)
              </h4>
              <p>{sub.description?.substring(0, 100)}</p>
              <img src={sub.avatar} alt="avatar" />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default List;
