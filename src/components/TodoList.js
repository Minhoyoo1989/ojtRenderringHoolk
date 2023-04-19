import React, { useCallback } from 'react';
import { List } from 'react-virtualized';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList = ({ todos, onRemove, onToggle }) => {
  const rowRenderer = useCallback(
    ({ index, key, style }) => {
      const todo = todos[index];

      return (
        <TodoListItem
          className="TodoList"
          todo={todo}
          key={key}
          onRemove={onRemove}
          onToggle={onToggle}
          style={style}
        >
          {/* {todos.map((todo) => (
            <TodoListItem
              todo={todo}
              key={key}
              onRemove={onRemove}
              onToggle={onToggle}
              style={style}
            />
          ))} */}
          {/* <TodoListItem />
        <TodoListItem />
        <TodoListItem /> */}
        </TodoListItem>
      );
    },
    [onRemove, onToggle, todos],
  );

  return (
    <List
      className="TodoList"
      width={512} // 전체크기
      height={513} //전체높이
      rowCount={todos.length} //항목 갯수
      rowHeight={57} // 항목 높이
      rowRenderer={rowRenderer} //항목을 렌더링 할 때 쓰는 함수
      List={todos} // 배열
      style={{ outline: 'none' }} // List에 기본 적용 되는 outline 스타일 제거
    />
  );
};

export default React.memo(TodoList);
