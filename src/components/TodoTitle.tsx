// TodoTitleコンポーネント
import React, { memo } from "react"


type Props = {
    title: string
    as: string
} 

export const TodoTitle: React.FunctionComponent<Props> = ({title, as}) => {
    if (as === "h1") {
        return <h1>{title}</h1>
    } else if (as === "h2") {
        return <h2>{title}</h2>
    }
    else {
        return <p>{title}</p>
    }
}