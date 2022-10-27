import React from "react";

interface Props {
  subs: Array<{
    nick: string;
    avatar: string;
    subMonths: number;
    description?: string;
  }>;
}

const List = ({ subs }: Props) => {
  return (
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
  );
};

export default List;
