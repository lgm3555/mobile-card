import React from "react";
import Comment from './Comment';
import './Feed.scss';

const Feed = (props) => {

    const { idValue, passValue, textValue, commentBox, commentUpdate, onInputChange, clickUpdate } = props;

    return (
        <div>
            <Comment comment={commentBox} />
            <br />
            <div className="CommentBox">
                <input
                    value={idValue}
                    type="text"
                    className="commentIdInput"
                    placeholder="이름"
                />
                <input
                    value={passValue}
                    type="text"
                    className="commentPassInput"
                    placeholder="비밀번호"
                />
                <br /><br />
                <input
                    value={textValue}
                    type="text"
                    className="commentTextInput"
                    placeholder="댓글달기..."
                    onKeyPress={commentUpdate}
                    onChange={onInputChange}
                />
                <div className={textValue ? 'onUploadButton' : 'offUploadButton'} onClick={clickUpdate}>
                    작성하기
                </div>
          </div>
        </div>
    );
}

export default Feed;