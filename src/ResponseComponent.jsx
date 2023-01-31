import React from "react";

function ResponseComponent(props){
    const responseListItems = props.messages.map((r, index) => {
        return (
            <p key={index}>
                Réponse {index} : { r }
            </p>
        );
    });
    return(
        <div>
            {responseListItems}
        </div>
    )
}
export default ResponseComponent;