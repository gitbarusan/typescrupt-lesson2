import { VFC } from "react";
import { TodoType } from "./types/todo";

/**
 * type TodoType = {
  userId: number;
  title: string;
  // ?をつけるとundefindを許容する
  completed?: boolean;
};
 */
//Pick<型名,"プロパティ名">型名の"プロパティ名"だけを抜き出して使う
//Omit<型名,"プロパティ名">型名の"プロパティ名"以外を抜き出して使う
//export const Todo = (props: TodoType) => {
export const Todo: VFC<Omit<TodoType, "id">> = (
  //props: Pick<TodoType, "userId" | "title" | "completed">
  props
) => {
  const { title, userId, completed = false } = props;
  const completeMark = completed ? "[完]" : "[未]";
  return <p>{`${completeMark} ${title}(ユーザー:${userId})`}</p>;
};
