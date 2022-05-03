import React from "react";
import './Comment.scss';

const Comment = (props) => {
    const {comment} = props;
    const box = comment.map(comment => {
        return (
            <div className="Cards">
                    <h4>{comment.id}</h4>
                    <span>{comment.date}</span>
                <div className="Card">
                    {comment.content}
                </div>
            </div>
        );
    });

    return (
        <div className="Comment">
            {box}
        </div>
    );
}

export default Comment;