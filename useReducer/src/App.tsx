import { useReducer } from "react";

interface InitilStateType {
    name: string;
    age: number;
}

const initilState: InitilStateType = {
    name: "",
    age: 0,
};

const reducer = (state: InitilStateType, action: any) => {
    switch (action.type) {
        case "changed_age": {
            return {
                ...state,
                age: state.age + 1,
            };
        }
        case "changed_name": {
            return {
                ...state,
                name: action.nextName,
            };
        }
    }
    throw Error("Unknown action. ");
};

function App() {
    const [state, dispatch] = useReducer(reducer, initilState);
    return (
        <div>
            <input
                type="text"
                onChange={(e) => {
                    dispatch({
                        type: "changed_name",
                        nextName: e.target.value,
                    });
                }}
            />
            <button
                onClick={() => {
                    dispatch({ type: "changed_age" });
                }}
            >
                increate
            </button>
            <p>
                Hello! {state.name} You are {state.age}
            </p>
        </div>
    );
}

export default App;
