export const TaskRow = ({task}) => {
    return (
        <tr>
            <td>
                {task.name}
                <input type="checkbox"
                    checked={task.done}
                    onChange={() => alert('cambio valor')}
                    />
                    </td>
                    </tr>
    );
};