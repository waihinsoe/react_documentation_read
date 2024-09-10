import { useCallback } from "react";
import { TodoItem } from "./TodoItem";

interface TodoProps {
  name: string;
  age: number;
  count: number;
}

export const Todo = ({ name, age, count }: TodoProps) => {
  const testFun = useCallback(() => {
    console.log(name, age, count);
  }, [count]);

  return <TodoItem testFun={testFun} />;
};
