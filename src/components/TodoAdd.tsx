
type Props = {
    buttonText: string,
    inputEl: any,
    handleAddTodoListItem: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const TodoAdd: React.FunctionComponent<Props> = ({ buttonText, inputEl, handleAddTodoListItem }) => {
    return (
        <>
            <textarea ref={inputEl} />
            <button onClick={handleAddTodoListItem}>{buttonText}</button>
        </>
    )
}