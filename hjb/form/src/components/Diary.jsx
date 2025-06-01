import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";

export default function Diary(){
    const [diary, setDiary] = useLocalStorage("diary", [])
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();

    const handleAdd = () => {
        if(title.trim() === "" || content.trim() === ""){
            return;
        }

        const newDiary = {
            id: Date.now(),
            title: title,
            content: content,
        };

        setDiary([...diary, newDiary]);
        setTitle("");
        setContent("");
        alert("성공적으로 저장했습니다!");
    };

    return(
        <div>
            <h1>일기장</h1>
            <div>
                <div>
                <input 
                type="text"
                placeholder="제목을 써주세요"
                value={title}
                onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div>
                <textarea placeholder="내용을 써주세요"
                value={content}
                onChange={(e) => setContent(e.target.value)}/>
                </div>
                <button onClick={handleAdd}>추가</button>
            </div>

            <button onClick={() => navigate(-1)}>목록으로 돌아가기</button>

            <ul>
                {diary.map((d) => (
                    <li key={d.id}>
                        <h3>{d.title}</h3>
                        <p>{d.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}