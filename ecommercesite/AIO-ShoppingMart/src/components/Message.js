import React from 'react';

function Message({ variant, children }) {
    let cname = variant
    console.log(cname)
    if (cname === 'info'){
        cname = "blue";
        console.log(cname)
    }
    else if(cname === 'danger'){
        cname = "red";
        console.log(cname)
    }
    else if(cname === 'success'){
        cname = "green";
        console.log(cname)
    }
    else{
        cname = "black";
        console.log(cname)
    }

    return (
        <div class="card" style={{ marginBottom: "10px" }}>
            <br></br>
            <h4 style={{ color: cname, textAlign: 'center' }}>
                {children}
            </h4>
            <br></br>
        </div>
    )
}

export default Message;
